import { reactive } from 'vue'

/**
 * 自己实现的搜索。
 *
 * 为什么不用 @vuepress/plugin-docsearch 自带的界面：
 * 它的懒初始化会「每 16ms 派发一次合成 Ctrl+K 直到 DOM 里出现模态框」，
 * 而 DocSearch 把 Ctrl+K 当开关用、且不检查焦点是否在输入框 ——
 * 结果模态框 60Hz 反复开合，点进输入框瞬间就被关掉，根本没法打字
 * （实测 3 秒内派发了 1372 次合成事件）。
 *
 * 这里只借用 DocSearch 的**按钮外观**，点击/热键全部拦下来，换成我们自己的模态框。
 * 搜索本身仍然走同一个 Algolia 索引，结果和以前一致。
 */

const APP_ID = 'MB68YKH672'
const API_KEY = '537217be184770ff5361d70703723246'
const INDEX = '搜索'

export interface SearchHit {
  key: string
  path: string
  title: string
  breadcrumb: string
  snippet: string
}

export const search = reactive({
  open: false,
  query: '',
  loading: false,
  hits: [] as SearchHit[],
  active: 0,
  error: '',
})

// ---------------------------------------------------------------- 数据
function stripHtml(html: string): string {
  return String(html || '').replace(/<[^>]*>/g, '')
}

function toPath(url: string): string {
  try {
    const u = new URL(url)
    return u.pathname + u.search + u.hash
  } catch {
    return url
  }
}

/** 把一条 Algolia 记录转成列表项：标题取最深的层级，面包屑取上层 */
function toHit(hit: any): SearchHit | null {
  const hierarchy: Record<string, string | null> = hit.hierarchy || {}
  const levels = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6']
    .map((k) => ({ k, v: hierarchy[k] }))
    .filter((x) => x.v)
  if (!levels.length && !hit.content) return null

  const deepest = levels[levels.length - 1]
  const upper = levels.slice(0, -1).map((x) => x.v as string)
  // lvl0 是 docset 名（Documentation），当面包屑没意义
  const trail = upper.filter((x) => x && x !== 'Documentation')

  // 标题里的站点后缀去掉，太长
  const title = stripHtml(deepest ? (deepest.v as string) : String(hit.content || '')).split(' | ')[0]
  const raw = String(hit.content || '').trim()

  return {
    key: String(hit.objectID || hit.url),
    path: toPath(hit.url_without_anchor || hit.url),
    title: title || String(hit.content || '').slice(0, 40),
    breadcrumb: trail.join(' › '),
    snippet: stripHtml(raw).replace(/\s+/g, ' ').slice(0, 160),
  }
}

let seq = 0

export async function runSearch(query: string) {
  const q = query.trim()
  if (!q) {
    search.hits = []
    search.loading = false
    search.error = ''
    return
  }
  const mine = ++seq
  search.loading = true
  search.error = ''
  try {
    const r = await fetch('https://' + APP_ID + '-dsn.algolia.net/1/indexes/' + encodeURIComponent(INDEX) + '/query', {
      method: 'POST',
      headers: {
        'X-Algolia-Application-Id': APP_ID,
        'X-Algolia-API-Key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query: q, hitsPerPage: 12, attributesToRetrieve: ['url', 'url_without_anchor', 'anchor', 'hierarchy', 'content', 'type', 'objectID'] }),
    })
    if (mine !== seq) return                      // 已经有更新的请求了
    if (!r.ok) throw new Error('HTTP ' + r.status)
    const data = await r.json()
    if (mine !== seq) return
    const seen = new Set<string>()
    search.hits = (data.hits || [])
      .map(toHit)
      .filter((h: SearchHit | null): h is SearchHit => !!h)
      .filter((h: SearchHit) => {                   // 同一个标题只留一条
        const k = h.title + '|' + h.path
        if (seen.has(k)) return false
        seen.add(k)
        return true
      })
    search.active = 0
  } catch (e: any) {
    if (mine !== seq) return
    search.hits = []
    search.error = '搜索失败：' + (e?.message || e)
  } finally {
    if (mine === seq) search.loading = false
  }
}

let timer: ReturnType<typeof setTimeout> | null = null

export function onQueryInput(value: string) {
  search.query = value
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => { void runSearch(search.query) }, 250)
}

// ---------------------------------------------------------------- 开关
export function openSearch(initial = '') {
  search.open = true
  if (initial) {
    search.query = initial
    void runSearch(initial)
  }
}

export function closeSearch() {
  search.open = false
  search.hits = []
  search.active = 0
  search.error = ''
}

export function toggleSearch() {
  if (search.open) closeSearch()
  else openSearch()
}

export function moveActive(delta: number) {
  if (!search.hits.length) return
  const n = search.hits.length
  search.active = (search.active + delta + n) % n
}

export function goHit(index = search.active) {
  const hit = search.hits[index]
  if (!hit) return
  window.location.assign(hit.path)
  closeSearch()
}

// ---------------------------------------------------------------- 接管触发器
export const TRIGGER_SELECTOR = '.docsearch-placeholder, #docsearch-container, .DocSearch-Button'

function isTyping(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null
  if (!el || !el.tagName) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable === true
}

export function installSearchTriggers() {
  if (typeof window === 'undefined') return

  // 1) 点搜索按钮 -> 开我们自己的框，顺手掐掉 DocSearch 的初始化
  document.addEventListener(
    'click',
    (event: MouseEvent) => {
      const target = event.target as Element | null
      if (!target || typeof target.closest !== 'function') return
      if (!target.closest(TRIGGER_SELECTOR)) return
      event.preventDefault()
      event.stopImmediatePropagation()
      openSearch()
    },
    true,
  )

  // 2) Ctrl/Cmd+K 与 "/" 也换成我们的框
  window.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      const isCtrlK = event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)
      const isSlash = event.key === '/' && !isTyping(event.target)

      // DocSearch 的合成事件一律拦掉，绝不让它去开合那个模态框
      if (!event.isTrusted) {
        if (isCtrlK) event.stopImmediatePropagation()
        return
      }

      if (isCtrlK) {
        event.preventDefault()
        event.stopImmediatePropagation()
        toggleSearch()
        return
      }
      if (isSlash) {
        event.preventDefault()
        event.stopImmediatePropagation()
        openSearch()
      }
    },
    true,
  )
}
