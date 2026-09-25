import { reactive } from 'vue'

export interface SandboxOutput {
  type: 'text' | 'image' | 'audio' | 'video' | 'file' | 'markdown'
  text?: string
  url?: string
  name?: string
  size?: number
  note?: string
}
export interface SandboxMessage {
  role: 'user' | 'bot'
  text?: string
  url?: string
  system?: boolean
  media?: 'audio' | 'video' | 'file'
  name?: string
  size?: number
  note?: string
}

// 线上：由 koishi-plugin-kkk-sandbox 提供（挂在 /sandbox）
// 本地开发：scripts/sandbox/server.cjs 提供（端口 3100）
const DEFAULT_API = 'https://koi.tangbot.xyz/sandbox'

export const sandbox = reactive({
  open: false,
  apiBase: DEFAULT_API,
  available: [] as string[],
  reachable: false,
  command: '',
  running: false,
  error: '',
  history: [] as SandboxMessage[],
  images: [] as string[],
  sessionId: '',
  seeded: false,
})

// ------------------------------------------------------------------ 会话与图片
const SESSION_KEY = 'kkk-sandbox-session'

function newSessionId(): string {
  return 'sbx' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

/**
 * 同一个 sessionId 视为同一段对话 —— 插件按频道保存的多轮状态
 * （比如「拼图」先收图、再发"完成"才合成）才能延续。存在 localStorage 里。
 */
export function ensureSession(): string {
  if (typeof window === 'undefined') return ''
  if (sandbox.sessionId) return sandbox.sessionId
  let id = ''
  try { id = localStorage.getItem(SESSION_KEY) || '' } catch { /* ignore */ }
  if (!id) {
    id = newSessionId()
    try { localStorage.setItem(SESSION_KEY, id) } catch { /* ignore */ }
  }
  sandbox.sessionId = id
  return id
}

export function newSession(): string {
  const id = newSessionId()
  sandbox.sessionId = id
  sandbox.images = []
  sandbox.history = []
  try { localStorage.setItem(SESSION_KEY, id) } catch { /* ignore */ }
  return id
}

function readAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('读取失败'))
    reader.readAsDataURL(file)
  })
}

/** 大图先缩到长边 1600；小图原样保留，避免透明通道被 JPEG 压成黑底 */
function downscale(file: File, maxSide: number, quality: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      try {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.max(1, Math.round(img.width * scale))
        canvas.height = Math.max(1, Math.round(img.height * scale))
        canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height)
        URL.revokeObjectURL(url)
        resolve(canvas.toDataURL('image/jpeg', quality))
      } catch (error) {
        URL.revokeObjectURL(url)
        reject(error as Error)
      }
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('不是有效图片')) }
    img.src = url
  })
}

/** 单张图的目标体积：3 张加起来要能塞进后端的 4MB（base64 会膨胀约 1/3） */
const TARGET_IMAGE_BYTES = 800 * 1024

/** data URL 里实际二进制的字节数 */
function dataUrlBytes(url: string): number {
  const comma = url.indexOf(',')
  if (comma < 0) return 0
  return Math.floor((url.length - comma - 1) * 3 / 4)
}

/**
 * 反复压到目标体积以内。
 * 只压一次是不够的：1600px @0.9 的截图照样能到两三 MB，
 * 三张叠起来就超过后端上限，用户只会看到一句失败。
 */
async function compressToTarget(file: File, targetBytes: number): Promise<string> {
  // 小图原样保留，避免透明通道被 JPEG 压成黑底
  if (file.size <= 300 * 1024) return readAsDataURL(file)

  let side = 1600
  let quality = 0.9
  let out = await downscale(file, side, quality)
  for (let i = 0; i < 8 && dataUrlBytes(out) > targetBytes; i++) {
    quality = Math.max(0.5, Math.round((quality - 0.1) * 100) / 100)
    side = Math.max(640, Math.round(side * 0.85))
    out = await downscale(file, side, quality)
  }
  return out
}

/** 收图片：单选、多选、粘贴、拖入都走这里 */
export async function addImageFiles(
  files: FileList | File[] | null | undefined,
  maxCount = 3,
): Promise<{ added: number; skipped: number; room: number }> {
  const list = Array.from(files || []).filter((file) => /^image\//.test(file.type || ''))
  if (!list.length) return { added: 0, skipped: 0, room: maxCount - sandbox.images.length }

  const room = Math.max(0, maxCount - sandbox.images.length)
  const accepted = list.slice(0, room)
  const skippedCount = list.length - accepted.length

  let added = 0
  let skipped = skippedCount
  for (const file of accepted) {
    try {
      const url = await compressToTarget(file, TARGET_IMAGE_BYTES)
      if (dataUrlBytes(url) > TARGET_IMAGE_BYTES * 1.5) {   // 压不动了就别发
        skipped++
        continue
      }
      sandbox.images.push(url)
      added++
    } catch {
      skipped++
    }
  }
  return { added, skipped, room: Math.max(0, maxCount - sandbox.images.length) }
}

export function removeImage(index: number) {
  sandbox.images.splice(index, 1)
}

/**
 * 后端地址候选，按优先级探测，第一个能通的就用它。
 *  1. window.__SANDBOX_API__     —— 部署时可以硬编码
 *  2. localStorage               —— 本地调试临时切换
 *  3. 线上插件 koi.tangbot.xyz   —— 默认
 *  4. 本地开发用的两个后端       —— bot 没部署时也能跑起来
 */
export function candidateBases(): string[] {
  if (typeof window === 'undefined') return [DEFAULT_API]
  const list: string[] = []
  const w = window as any
  if (w.__SANDBOX_API__) list.push(String(w.__SANDBOX_API__))
  try {
    const s = localStorage.getItem('kkk-sandbox-api')
    if (s) list.push(s)
  } catch { /* ignore */ }
  list.push(DEFAULT_API)
  list.push('http://127.0.0.1:3210/sandbox')
  list.push('http://127.0.0.1:3100')
  return list.map((x) => x.replace(/\/+$/, '')).filter((x, i, arr) => x && arr.indexOf(x) === i)
}

/** 兼容旧调用 */
export function resolveApiBase(): string {
  return candidateBases()[0]
}

export function setApiBase(url: string) {
  sandbox.apiBase = url.replace(/\/+$/, '')
  try { localStorage.setItem('kkk-sandbox-api', sandbox.apiBase) } catch { /* ignore */ }
  loadCommands()
}

/** 取代码块里第一条“像指令”的行 */
export function firstCommandLine(text: string): string {
  const line = text
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('#') && !l.startsWith('//'))
  return line || ''
}

let resolvedBase = ''
let probing: Promise<string[]> | null = null

export function loadCommands(): Promise<string[]> {
  if (probing) return probing
  probing = probe().finally(() => { probing = null })
  return probing
}

async function probe(): Promise<string[]> {
  const bases = candidateBases()
  if (resolvedBase) bases.unshift(resolvedBase)

  for (const base of bases) {
    try {
      const signal = typeof AbortSignal !== 'undefined' && AbortSignal.timeout
        ? AbortSignal.timeout(3000)
        : undefined
      const r = await fetch(base + '/api/commands', { cache: 'no-store', signal })
      if (!r.ok) continue
      const j = await r.json()
      sandbox.apiBase = base
      sandbox.available = Array.isArray(j.commands) ? j.commands : []
      sandbox.reachable = true
      resolvedBase = base
      return sandbox.available
    } catch { /* 试下一个 */ }
  }

  sandbox.available = []
  sandbox.reachable = false
  return []
}

export async function runCommand(raw?: string) {
  const command = (raw !== undefined ? raw : sandbox.command).trim()
  const images = sandbox.images.slice()
  // 允许只发图片：表情包 / 图像处理这类指令本来就吃图不吃字
  if ((!command && !images.length) || sandbox.running) return
  sandbox.open = true
  sandbox.command = ''      // 清空输入框：之前这里写回 command，导致发完文字还留在框里
  sandbox.images = []
  sandbox.running = true
  sandbox.error = ''
  if (command) sandbox.history.push({ role: 'user', text: command })
  for (const url of images) sandbox.history.push({ role: 'user', url })

  let got = 0
  let meta: any = {}
  const consume = (outs: SandboxOutput[]) => {
    for (const o of outs) {
      if (o.type === 'image' && o.url) { push({ role: 'bot', url: o.url }); got++ }
      else if ((o.type === 'audio' || o.type === 'video' || o.type === 'file') && o.url) {
        push({ role: 'bot', media: o.type, url: o.url, name: o.name, size: o.size, note: o.note })
        got++
      } else if (o.text) { push({ role: 'bot', text: o.text }); got++ }
    }
    if (got) sandbox.running = false
  }

  try {
    // 流式：慢指令（AI 问答 / 截图）边跑边出，不会被等待窗口截断
    const r = await fetch(sandbox.apiBase + '/api/run?stream=1', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ command, images, sessionId: ensureSession() }),
    })
    if (!r.ok || !r.body) throw new Error('HTTP ' + r.status)

    // 不锁输入：流还在跑，但用户可以立刻发下一条。
    // 服务端看到同会话有新请求，会让上一条的「等后续」立刻收工，
    // 所以打错字之后不用干等（迟到的回复照样会冒出来）。
    sandbox.running = false

    const reader = (r.body as ReadableStream<Uint8Array>).getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      let index: number
      while ((index = buffer.indexOf('\n')) >= 0) {
        const line = buffer.slice(0, index).trim()
        buffer = buffer.slice(index + 1)
        if (!line) continue
        let ev: any
        try { ev = JSON.parse(line) } catch { continue }
        if (ev.type === 'chunk') consume(ev.outputs || [])
        else if (ev.type === 'done') meta = ev
        else if (ev.type === 'error') push({ role: 'bot', text: '⚠️ ' + ev.error, system: true })
      }
    }
    if (!got) push({ role: 'bot', text: noReplyHint(meta), system: true })
  } catch (e: any) {
    sandbox.error = '无法连接沙盒服务'
    push({ role: 'bot', text: '⚠️ 无法连接沙盒服务：' + (e?.message || e), system: true })
  } finally {
    sandbox.running = false
  }
}

/** 没反应时按服务端给的信息说清楚是哪种情况 */
function noReplyHint(meta: any): string {
  if (meta && meta.known === false && !meta.warm) {
    return '（这看起来不是一条指令 —— 左侧列表里挑一条，或者检查一下拼写？）'
  }
  if (meta && meta.known === false && meta.warm) {
    return '（没有回复。如果是多轮流程（拼图这类），可以直接发「完成」等下一步；否则可能是拼写问题。）'
  }
  return '（没有收到回复 —— 可能较慢、需要登录态，或依赖图片渲染）'
}

// ---------------------------------------------------------------- markdown
let markedLoading: Promise<any> | null = null

function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** 懒加载 vendored 的 marked（放在 public/ 下，不走 npm 依赖） */
export function ensureMarked(): Promise<any> {
  if (typeof window === 'undefined') return Promise.resolve(null)
  const w = window as any
  if (w.marked) return Promise.resolve(w.marked)
  if (markedLoading) return markedLoading
  markedLoading = new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = '/marked.umd.js'
    script.onload = () => {
      if (w.marked && w.marked.use) {
        // 原始 HTML 一律转义，避免机器人把用户输入原样带回来时被当成标签执行
        w.marked.use({
          renderer: {
            html: (token: any) => escapeHtml((token && (token.text || token.raw)) || ''),
          },
        })
      }
      resolve(w.marked || null)
    }
    script.onerror = () => resolve(null)
    document.head.appendChild(script)
  })
  return markedLoading
}

function sanitize(html: string): string {
  return String(html)
    .replace(/\s(href|src)\s*=\s*"(\s*(?:javascript|vbscript|data:text\/html)[^"]*)"/gi, ' data-blocked="$2"')
    .replace(/<a\s/gi, '<a target="_blank" rel="noopener noreferrer" ')
}

/** 把机器人回复渲染成 HTML；marked 还没就绪时退化成转义后的纯文本 */
export function renderMarkdown(text: string): string {
  const w = typeof window !== 'undefined' ? (window as any) : null
  if (!w || !w.marked || !w.marked.parse) return escapeHtml(text).replace(/\n/g, '<br>')
  try {
    return sanitize(w.marked.parse(String(text), { breaks: true, gfm: true }))
  } catch {
    return escapeHtml(text).replace(/\n/g, '<br>')
  }
}

function push(m: SandboxMessage) {
  sandbox.history.push(m)
}

export function clearHistory() {
  sandbox.history = []
}

// ---------------------------------------------------------------- 代码块按钮
const BTN_CLASS = 'kkk-sandbox-run'

function decorate(block: HTMLElement) {
  if (block.querySelector('.' + BTN_CLASS)) return
  const code = block.querySelector('pre code') as HTMLElement | null
  if (!code) return
  const text = (code.textContent || '').replace(/\u200b/g, '').trim()
  if (!text) return
  const first = firstCommandLine(text)
  if (!first) return
  const root = first.split(/\s/)[0]
  if (!sandbox.available.includes(root)) return

  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
  // 用法签名（qrcode <text>）或多行清单都不能直接跑，先放进沙盒让人改
  const needsEdit = lines.length > 1 || /[<\[\]>]/.test(text)

  const btn = document.createElement('button')
  btn.className = BTN_CLASS
  btn.type = 'button'
  btn.textContent = needsEdit ? '▶ 在沙盒打开' : '▶ 试运行'
  btn.title = needsEdit ? '复制到沙盒，可编辑后执行' : '在线运行：' + first
  btn.addEventListener('click', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (needsEdit) {
      sandbox.open = true
      sandbox.command = text
    } else {
      runCommand(first)
    }
  })
  if (getComputedStyle(block).position === 'static') block.style.position = 'relative'
  block.appendChild(btn)
}

export function enhanceCodeBlocks() {
  if (typeof document === 'undefined') return
  document.querySelectorAll<HTMLElement>('div[class*="language-"]').forEach(decorate)
}

let observer: MutationObserver | null = null
let debounce: ReturnType<typeof setTimeout> | null = null

export function startObserving() {
  if (typeof document === 'undefined' || observer) return
  observer = new MutationObserver(() => {
    if (debounce) clearTimeout(debounce)
    debounce = setTimeout(() => enhanceCodeBlocks(), 150)
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

export function refreshCodeBlocks() {
  loadCommands().then(() => enhanceCodeBlocks())
}
