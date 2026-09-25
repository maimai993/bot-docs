<template>
  <div class="kkk-sandbox">
    <!-- 悬浮球 -->
    <button v-if="!sandbox.open" class="kkk-fab" type="button" title="打开在线沙盒" @click="open()">
      <span class="kkk-fab-icon">🕹️</span>
      <span class="kkk-fab-text">在线沙盒</span>
    </button>

    <!-- 悬浮窗 -->
    <div v-else class="kkk-panel" :style="panelStyle">
      <header class="kkk-head" @mousedown="startDrag" @dblclick="toggleFullscreen">
        <div class="kkk-title">
          <span class="kkk-dot" :class="sandbox.reachable ? 'on' : 'off'"></span>
          在线沙盒
        </div>
        <div class="kkk-head-btns">
          <button type="button" title="新会话（重置多轮状态）" @click="onNewSession">🆕</button>
          <button type="button" title="清空" @click="clearHistory">🧹</button>
          <button
            type="button"
            :title="fullscreen ? '退出全屏（双击标题栏也可以）' : '全屏（双击标题栏也可以）'"
            @click="toggleFullscreen"
          >{{ fullscreen ? '⤡' : '⛶' }}</button>
          <button type="button" title="最小化" @click="sandbox.open = false">—</button>
        </div>
      </header>

      <div class="kkk-body" ref="bodyEl">
        <div v-if="!sandbox.history.length" class="kkk-hint">
          <p v-if="sandbox.reachable">
            这里可以<strong>真机试跑</strong>麦芽糖bot 的指令。<br />
            浏览器里输入指令，机器人会把真实回复返回给你。
          </p>
          <p v-else>
            ⚠️ 连不上沙盒服务（{{ sandbox.apiBase }}）。<br />
            请先在本机启动 <code>scripts/sandbox/server.cjs</code>。
          </p>
          <div v-if="sandbox.available.length" class="kkk-chips">
            <button
              v-for="c in quickPicks"
              :key="c"
              type="button"
              class="kkk-chip"
              @click="runCommand(c)"
            >{{ c }}</button>
          </div>
        </div>

        <div
          v-for="(m, i) in sandbox.history"
          :key="i"
          class="kkk-msg"
          :class="m.role"
        >
          <div class="kkk-bubble" :class="{ system: m.system }">
            <img
              v-if="m.url && !m.media"
              :src="m.url"
              class="kkk-img"
              alt="回复图片"
              title="点击查看大图"
              @click="preview = m.url"
            />
            <template v-if="m.media === 'audio' || m.media === 'video'">
              <component
                :is="m.media"
                :src="m.url"
                class="kkk-media"
                controls
                preload="metadata"
                :playsinline="m.media === 'video' ? true : undefined"
              />
              <span v-if="m.name || m.note" class="kkk-media-meta">
                {{ [m.name, m.note].filter(Boolean).join(' · ') }}
              </span>
            </template>
            <a
              v-else-if="m.media === 'file'"
              class="kkk-file"
              :href="m.url"
              target="_blank"
              rel="noopener noreferrer"
              :download="m.name || ''"
            >📎 {{ m.name || '文件' }}{{ m.size ? '（' + formatSize(m.size) + '）' : '' }}</a>
            <!-- 机器人的回复常带 markdown（标题 / 列表 / 加粗），渲染出来；用户输入和提示保持纯文本 -->
            <div
              v-if="m.text && m.role === 'bot' && !m.system"
              class="kkk-md"
              v-html="bodyHtml(m.text)"
            />
            <template v-else-if="m.text">{{ m.text }}</template>
            <span v-if="!m.text && !m.url" class="kkk-empty">（空）</span>
          </div>
        </div>

        <div v-if="sandbox.running" class="kkk-msg bot">
          <div class="kkk-bubble kkk-typing">
            <i></i><i></i><i></i>
            <span v-if="elapsed >= 3" class="kkk-secs">{{ elapsed }}s</span>
          </div>
        </div>
      </div>

      <footer class="kkk-foot">
        <div v-if="sandbox.images.length" class="kkk-atts">
          <div v-for="(img, i) in sandbox.images" :key="i" class="kkk-att">
            <img :src="img" alt="待发送图片" />
            <button type="button" title="移除" @click="removeImage(i)">×</button>
          </div>
        </div>
        <div class="kkk-input-row">
          <button type="button" class="kkk-attach" title="发送图片（也可粘贴 / 拖入）" @click="pickFile">🖼️</button>
          <input ref="fileEl" type="file" accept="image/*" multiple hidden @change="onFiles" />
          <input
            v-model="sandbox.command"
            class="kkk-input"
            type="text"
            placeholder="输入指令，或直接发一张图片"
            @keydown.enter="runCommand()"
            @paste="onPaste"
          />
          <button
            type="button"
            class="kkk-run"
            :disabled="sandbox.running || (!sandbox.command.trim() && !sandbox.images.length)"
            @click="runCommand()"
          >{{ sandbox.running ? '…' : '运行' }}</button>
        </div>
        <div v-if="notice" class="kkk-notice">{{ notice }}</div>
      </footer>

      <!-- 点开看大图；放在面板内，全屏时也能盖住 -->
      <div v-if="preview" class="kkk-lightbox" @click="preview = ''">
        <img :src="preview" alt="查看大图" />
      </div>

      <!-- 右下角拖动改大小 -->
      <div
        v-if="!fullscreen"
        class="kkk-resize"
        title="拖动调整大小"
        @mousedown.stop.prevent="startResize"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import {
  addImageFiles, clearHistory, ensureMarked, ensureSession, loadCommands,
  newSession, removeImage, renderMarkdown, runCommand, sandbox,
} from '../client/sandbox'

const bodyEl = ref<HTMLElement | null>(null)
const mdTick = ref(0)
const elapsed = ref(0)
const pos = reactive({ x: 0, y: 0, dx: 0, dy: 0, moved: false, dragging: false })

// ---- 尺寸 / 全屏 ----
const SIZE_KEY = 'kkk-sandbox-size'
const MIN_W = 300
const MIN_H = 320

const fullscreen = ref(false)

function clampSize(w: number, h: number) {
  const maxW = Math.max(MIN_W, window.innerWidth - 16)
  const maxH = Math.max(MIN_H, window.innerHeight - 16)
  return { w: Math.min(Math.max(w, MIN_W), maxW), h: Math.min(Math.max(h, MIN_H), maxH) }
}

function loadSize(): { w: number; h: number } {
  if (typeof window === 'undefined') return { w: 380, h: 540 }
  try {
    const raw = localStorage.getItem(SIZE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed && typeof parsed.w === 'number' && typeof parsed.h === 'number') {
        return clampSize(parsed.w, parsed.h)
      }
    }
  } catch { /* ignore */ }
  return { w: 380, h: 540 }
}

const size = reactive(loadSize())

const panelStyle = computed(() => {
  if (fullscreen.value) {
    return {
      left: '0px', top: '0px', right: 'auto', bottom: 'auto',
      width: '100vw', height: '100vh',
      maxWidth: '100vw', maxHeight: '100vh',
      borderRadius: '0',
    }
  }
  const style: Record<string, string> = {
    width: size.w + 'px',
    height: size.h + 'px',
    maxWidth: 'calc(100vw - 16px)',
    maxHeight: 'calc(100vh - 16px)',
  }
  if (pos.moved) {
    style.right = 'auto'
    style.bottom = 'auto'
    style.left = pos.x + 'px'
    style.top = pos.y + 'px'
  }
  return style
})

function toggleFullscreen() {
  fullscreen.value = !fullscreen.value
}

function startResize(e: MouseEvent) {
  if (fullscreen.value) return
  const startX = e.clientX
  const startY = e.clientY
  const startW = size.w
  const startH = size.h
  document.body.style.userSelect = 'none'

  const move = (ev: MouseEvent) => {
    const next = clampSize(startW + (ev.clientX - startX), startH + (ev.clientY - startY))
    size.w = next.w
    size.h = next.h
    // 如果面板是靠右下角锚定的，变宽会往左长；靠左上角锚定时则往右长，都符合直觉
  }
  const up = () => {
    document.body.style.userSelect = ''
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', up)
    try { localStorage.setItem(SIZE_KEY, JSON.stringify({ w: size.w, h: size.h })) } catch { /* ignore */ }
  }
  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', up)
}

const quickPicks = computed(() => {
  const prefer = ['abbr yyds', 'thursday', '来个绕口令', 'roll 1d20', '抽象话 你好', 'mc.ver']
  const hit = prefer.filter((c) => sandbox.available.includes(c.split(/\s/)[0]))
  if (hit.length) return hit.slice(0, 6)
  return sandbox.available.slice(0, 6)
})

function open() {
  sandbox.open = true
  if (!sandbox.reachable) loadCommands()
}

function startDrag(e: MouseEvent) {
  const el = (e.currentTarget as HTMLElement).parentElement
  if (!el) return
  const rect = el.getBoundingClientRect()
  pos.x = rect.left; pos.y = rect.top; pos.dx = e.clientX; pos.dy = e.clientY
  pos.moved = true; pos.dragging = true
  const move = (ev: MouseEvent) => {
    if (!pos.dragging) return
    pos.x = Math.max(4, Math.min(window.innerWidth - 120, rect.left + ev.clientX - pos.dx))
    pos.y = Math.max(4, Math.min(window.innerHeight - 60, rect.top + ev.clientY - pos.dy))
  }
  const up = () => {
    pos.dragging = false
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', up)
  }
  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', up)
  e.preventDefault()
}

// 慢指令要等十几秒，给个秒数让人知道还在跑
watch(
  () => sandbox.running,
  (running) => {
    if (!running) { elapsed.value = 0; return }
    const start = Date.now()
    const timer = setInterval(() => { elapsed.value = Math.round((Date.now() - start) / 1000) }, 500)
    const stop = watch(() => sandbox.running, (now) => { if (!now) { clearInterval(timer); stop() } })
  },
)

watch(
  () => sandbox.history.length,
  async () => {
    await nextTick()
    if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight
  },
)

const fileEl = ref<HTMLInputElement | null>(null)

function pickFile() {
  fileEl.value?.click()
}

const preview = ref('')
const notice = ref('')
let noticeTimer: ReturnType<typeof setTimeout> | null = null

function flash(message: string) {
  notice.value = message
  if (noticeTimer) clearTimeout(noticeTimer)
  noticeTimer = setTimeout(() => { notice.value = '' }, 4000)
}

async function receiveFiles(files: FileList | File[] | null | undefined) {
  const result = await addImageFiles(files, 3)
  if (result.skipped) flash('已添加 ' + result.added + ' 张，' + result.skipped + ' 张被跳过（超出数量或压缩后仍过大）')
  else if (result.added) flash('已添加 ' + result.added + ' 张图片')
}

async function onFiles(ev: Event) {
  const el = ev.target as HTMLInputElement
  await receiveFiles(el.files)
  el.value = ''
}

async function onPaste(ev: ClipboardEvent) {
  const files = Array.from(ev.clipboardData?.files || [])
  if (!files.length) return
  ev.preventDefault()
  await receiveFiles(files)
}

async function onNewSession() {
  newSession()
  await loadCommands()
}

function formatSize(n?: number): string {
  if (n === undefined || n === null) return ''
  if (n < 1024) return n + ' B'
  if (n < 1048576) return (n / 1024).toFixed(1) + ' KB'
  return (n / 1048576).toFixed(1) + ' MB'
}

function bodyHtml(text: string): string {
  void mdTick.value   // 依赖它：marked 就绪后让历史消息重新渲染
  return renderMarkdown(text)
}

function onViewportChange() {
  if (fullscreen.value) return
  const next = clampSize(size.w, size.h)
  size.w = next.w
  size.h = next.h
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && fullscreen.value) fullscreen.value = false
}

onMounted(async () => {
  ensureSession()
  loadCommands()
  window.addEventListener('resize', onViewportChange)
  window.addEventListener('keydown', onEscape)
  await ensureMarked()
  mdTick.value++
})

onUnmounted(() => {
  window.removeEventListener('resize', onViewportChange)
  window.removeEventListener('keydown', onEscape)
})
</script>

<style scoped>
.kkk-sandbox { --kkk-primary: var(--vp-c-accent, #3eaf7c); }

/* 悬浮球 */
.kkk-fab {
  position: fixed; right: 24px; bottom: 24px; z-index: 1000;
  display: flex; align-items: center; gap: 6px;
  padding: 10px 16px; border: none; border-radius: 999px;
  background: var(--vp-c-accent, #3eaf7c); color: #fff;
  font-size: 14px; font-weight: 600; cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
  transition: transform .18s ease, box-shadow .18s ease;
}
.kkk-fab:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(0, 0, 0, .3); }
.kkk-fab-icon { font-size: 16px; }

/* 悬浮窗 */
.kkk-panel {
  position: fixed; right: 24px; bottom: 24px; z-index: 1000;
  width: 380px; max-width: calc(100vw - 32px);
  height: 540px; max-height: calc(100vh - 48px);
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 12px; border: 1px solid var(--vp-c-border, #e2e2e3);
  background: var(--vp-c-bg, #fff); color: var(--vp-c-text, #213547);
  box-shadow: 0 12px 40px rgba(0, 0, 0, .22);
}
.kkk-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px; cursor: move; user-select: none;
  background: var(--vp-c-bg-alt, #f6f6f7);
  border-bottom: 1px solid var(--vp-c-border, #e2e2e3);
  font-size: 14px; font-weight: 600;
}
.kkk-title { display: flex; align-items: center; gap: 6px; }
.kkk-dot { width: 8px; height: 8px; border-radius: 50%; background: #bbb; }
.kkk-dot.on { background: #27c93f; }
.kkk-dot.off { background: #ff5f56; }
.kkk-head-btns { display: flex; gap: 4px; }
.kkk-head-btns button {
  border: none; background: transparent; cursor: pointer;
  font-size: 14px; line-height: 1; padding: 4px 6px; border-radius: 6px;
  color: var(--vp-c-text-mute, #666);
}
.kkk-head-btns button:hover { background: var(--vp-c-bg-soft, #ececec); }

/* 右下角缩放手柄 */
.kkk-resize {
  position: absolute; right: 0; bottom: 0; width: 18px; height: 18px;
  cursor: nwse-resize; z-index: 5; border-bottom-right-radius: 12px;
  background:
    linear-gradient(135deg,
      transparent 0 48%,
      var(--vp-c-border, #c9ccd0) 48% 58%,
      transparent 58% 68%,
      var(--vp-c-border, #c9ccd0) 68% 78%,
      transparent 78%);
}
.kkk-resize:hover {
  background:
    linear-gradient(135deg,
      transparent 0 48%,
      var(--vp-c-accent, #3eaf7c) 48% 58%,
      transparent 58% 68%,
      var(--vp-c-accent, #3eaf7c) 68% 78%,
      transparent 78%);
}

.kkk-body {
  flex: 1; overflow-y: auto; padding: 12px;
  background: var(--vp-c-bg, #fff);
  font-size: 13px; line-height: 1.6;
}
.kkk-hint { color: var(--vp-c-text-mute, #777); }
.kkk-hint p { margin: 0 0 10px; }
.kkk-hint code { font-size: 12px; }
.kkk-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.kkk-chip {
  border: 1px solid var(--vp-c-border, #ddd); background: var(--vp-c-bg-alt, #f6f6f7);
  border-radius: 999px; padding: 4px 10px; font-size: 12px; cursor: pointer;
  color: var(--vp-c-text, #333);
}
.kkk-chip:hover { border-color: var(--vp-c-accent, #3eaf7c); color: var(--vp-c-accent, #3eaf7c); }

.kkk-msg { display: flex; margin-bottom: 10px; }
.kkk-msg.user { justify-content: flex-end; }
.kkk-msg.bot { justify-content: flex-start; }
.kkk-bubble {
  max-width: 84%; padding: 8px 11px; border-radius: 10px;
  white-space: pre-wrap; word-break: break-word;
}
.kkk-msg.user .kkk-bubble { background: var(--vp-c-accent, #3eaf7c); color: #fff; border-bottom-right-radius: 3px; }
.kkk-msg.bot .kkk-bubble { background: var(--vp-c-bg-alt, #f2f2f2); border-bottom-left-radius: 3px; }
.kkk-bubble.system { color: var(--vp-c-text-mute, #888); font-size: 12px; }

/* v-html 注入的内容不吃 scoped 属性，必须用 :deep() */
.kkk-md :deep(p) { margin: 0 0 8px; }
.kkk-md :deep(> *:last-child) { margin-bottom: 0; }
.kkk-md :deep(h1), .kkk-md :deep(h2), .kkk-md :deep(h3), .kkk-md :deep(h4) {
  margin: 12px 0 6px; font-size: 1.05em; font-weight: 700; line-height: 1.4;
}
.kkk-md :deep(h1) { font-size: 1.15em; }
.kkk-md :deep(ul), .kkk-md :deep(ol) { margin: 6px 0; padding-left: 20px; }
.kkk-md :deep(li) { margin: 3px 0; }
.kkk-md :deep(li > p) { margin: 0; }
.kkk-md :deep(code) {
  background: var(--vp-c-bg-soft, #ececec); padding: 1.5px 5px; border-radius: 4px;
  font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12px;
}
.kkk-md :deep(pre) {
  background: var(--vp-c-bg-soft, #ececec); padding: 10px 12px; border-radius: 8px;
  overflow-x: auto; margin: 8px 0;
}
.kkk-md :deep(pre code) { background: none; padding: 0; }
.kkk-md :deep(blockquote) {
  margin: 8px 0; padding: 2px 0 2px 10px;
  border-left: 3px solid var(--vp-c-border, #ddd); color: var(--vp-c-text-mute, #888);
}
.kkk-md :deep(table) { border-collapse: collapse; margin: 8px 0; font-size: 12.5px; }
.kkk-md :deep(th), .kkk-md :deep(td) { border: 1px solid var(--vp-c-border, #ddd); padding: 3px 8px; }
.kkk-md :deep(hr) { border: none; border-top: 1px solid var(--vp-c-border, #ddd); margin: 10px 0; }
.kkk-md :deep(a) { color: var(--vp-c-accent, #3eaf7c); text-decoration: underline; word-break: break-all; }
.kkk-empty { color: #aaa; font-style: italic; }
/* 缩略图显示，点开看大图（原来 max-width:100% 会撑满气泡） */
.kkk-img {
  display: block; width: auto; height: auto;
  max-width: 200px; max-height: 200px;
  object-fit: contain; border-radius: 6px; margin-bottom: 4px;
  cursor: zoom-in; background: var(--vp-c-bg-soft, #f2f3f5);
}

/* 语音 / 视频 / 文件 */
.kkk-media { display: block; width: 100%; min-width: 200px; margin-bottom: 4px; }
.kkk-media-meta { display: block; font-size: 11px; color: var(--vp-c-text-mute, #999); }
.kkk-file {
  display: inline-block; padding: 6px 10px; border-radius: 8px;
  border: 1px solid var(--vp-c-border, #ddd); background: var(--vp-c-bg-soft, #f2f3f5);
  color: var(--vp-c-text, #333); text-decoration: none; font-size: 12.5px; word-break: break-all;
}
.kkk-file:hover { border-color: var(--vp-c-accent, #3eaf7c); color: var(--vp-c-accent, #3eaf7c); }

.kkk-typing { display: flex; gap: 4px; align-items: center; }
.kkk-typing i { width: 6px; height: 6px; border-radius: 50%; background: #bbb; display: inline-block; animation: kkk-b 1s infinite ease-in-out; }
.kkk-typing i:nth-child(2) { animation-delay: .15s; }
.kkk-typing i:nth-child(3) { animation-delay: .3s; }
.kkk-secs { margin-left: 6px; font-size: 11px; color: var(--vscode-descriptionForeground, #999); }
@keyframes kkk-b { 0%, 80%, 100% { opacity: .3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }

.kkk-foot {
  display: flex; flex-direction: column; gap: 8px; padding: 10px;
  border-top: 1px solid var(--vp-c-border, #e2e2e3);
  background: var(--vp-c-bg-alt, #f6f6f7);
}
.kkk-input-row { display: flex; gap: 8px; align-items: center; }
.kkk-notice { font-size: 11.5px; color: var(--vp-c-accent, #3eaf7c); }

.kkk-lightbox {
  position: absolute; inset: 0; z-index: 20;
  display: flex; align-items: center; justify-content: center;
  padding: 16px; background: rgba(0, 0, 0, .85); cursor: zoom-out;
  border-radius: inherit;
}
.kkk-lightbox img { max-width: 100%; max-height: 100%; border-radius: 6px; }
.kkk-attach {
  flex: none; width: 34px; height: 34px; padding: 0; font-size: 16px; cursor: pointer;
  border: 1px solid var(--vp-c-border, #ddd); border-radius: 8px;
  background: var(--vp-c-bg, #fff); color: var(--vp-c-text, #333);
}
.kkk-attach:hover { border-color: var(--vp-c-accent, #3eaf7c); }
.kkk-atts { display: flex; flex-wrap: wrap; gap: 6px; }
.kkk-att {
  position: relative; width: 46px; height: 46px; border-radius: 6px; overflow: hidden;
  border: 1px solid var(--vp-c-border, #ddd);
}
.kkk-att img { width: 100%; height: 100%; object-fit: cover; display: block; }
.kkk-att button {
  position: absolute; top: 1px; right: 1px; width: 15px; height: 15px; padding: 0;
  border: none; border-radius: 50%; background: rgba(0, 0, 0, .6); color: #fff;
  font-size: 11px; line-height: 15px; cursor: pointer;
}
.kkk-input {
  flex: 1; min-width: 0; padding: 8px 10px; border-radius: 8px;
  border: 1px solid var(--vp-c-border, #ddd);
  background: var(--vp-c-bg, #fff); color: var(--vp-c-text, #333);
  font-size: 13px; outline: none;
}
.kkk-input:focus { border-color: var(--vp-c-accent, #3eaf7c); }
.kkk-run {
  padding: 8px 16px; border: none; border-radius: 8px;
  background: var(--vp-c-accent, #3eaf7c); color: #fff;
  font-size: 13px; font-weight: 600; cursor: pointer;
}
.kkk-run:disabled { opacity: .5; cursor: not-allowed; }

@media (max-width: 600px) {
  .kkk-panel { right: 8px; bottom: 8px; width: calc(100vw - 16px); height: 70vh; }
  .kkk-fab { right: 12px; bottom: 12px; }
  .kkk-fab-text { display: none; }
}
</style>
