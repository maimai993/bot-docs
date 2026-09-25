<template>
  <Teleport v-if="mounted" to="body">
    <div v-if="search.open" class="kkk-search" @mousedown.self="closeSearch()">
      <div class="kkk-search-panel" role="dialog" aria-modal="true" aria-label="搜索文档">
        <div class="kkk-search-head">
          <span class="kkk-search-icon">🔍</span>
          <input
            ref="inputEl"
            :value="search.query"
            class="kkk-search-input"
            type="text"
            placeholder="搜索文档…"
            autocomplete="off"
            spellcheck="false"
            @input="onInput"
            @keydown="onKey"
          />
          <span v-if="search.loading" class="kkk-search-loading">搜索中…</span>
          <button v-else-if="search.query" type="button" class="kkk-search-clear" @click="clear">✕</button>
        </div>

        <div class="kkk-search-body">
          <p v-if="search.error" class="kkk-search-note">{{ search.error }}</p>
          <p v-else-if="!search.query.trim()" class="kkk-search-note">输入关键词，回车打开第一条结果</p>
          <p v-else-if="!search.loading && !search.hits.length" class="kkk-search-note">没有找到「{{ search.query }}」</p>

          <ul v-else class="kkk-search-list">
            <li
              v-for="(hit, i) in search.hits"
              :key="hit.key"
              class="kkk-search-hit"
              :class="{ active: i === search.active }"
              @mouseenter="search.active = i"
            >
              <a :href="hit.path" @click.prevent="goHit(i)">
                <span class="kkk-search-title" v-html="highlight(hit.title)" />
                <span v-if="hit.snippet" class="kkk-search-snippet" v-html="highlight(hit.snippet)" />
                <span v-if="hit.breadcrumb" class="kkk-search-crumb">{{ hit.breadcrumb }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="kkk-search-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> 选择</span>
          <span><kbd>↵</kbd> 打开</span>
          <span><kbd>esc</kbd> 关闭</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { closeSearch, goHit, moveActive, onQueryInput, openSearch, search } from '../client/search'

const inputEl = ref<HTMLInputElement | null>(null)

/**
 * 只在客户端挂 Teleport。
 *
 * SSR 阶段即使什么都不渲染，服务端还是会吐出 teleport 的起止锚点，
 * 而客户端要把内容搬去 body —— 锚点对不齐就是
 * 「Hydration completed but contains mismatches」的经典来源。
 * 用 mounted 卡一道：服务端完全不输出 Teleport，客户端挂载后再渲染，两边一致。
 */
const mounted = ref(false)

function onInput(event: Event) {
  onQueryInput((event.target as HTMLInputElement).value)
}

function clear() {
  onQueryInput('')
  inputEl.value?.focus()
}

/** 只给命中的词加粗，其余一律转义，避免把索引里的内容当 HTML 执行 */
function highlight(text: string): string {
  const safe = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const words = search.query.trim().split(/\s+/).filter((w) => w.length > 0)
  if (!words.length) return safe
  const pattern = words
    .map((w) => w.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&'))
    .join('|')
  try {
    return safe.replace(new RegExp('(' + pattern + ')', 'gi'), '<mark>$1</mark>')
  } catch {
    return safe
  }
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') { event.preventDefault(); closeSearch(); return }
  if (event.key === 'ArrowDown') { event.preventDefault(); moveActive(1); return }
  if (event.key === 'ArrowUp') { event.preventDefault(); moveActive(-1); return }
  if (event.key === 'Enter') { event.preventDefault(); goHit() }
}

watch(() => search.open, async (open) => {
  if (!open) return
  await nextTick()
  inputEl.value?.focus()
})

// 打开时锁住页面滚动
watch(() => search.open, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  mounted.value = true
  // 兼容初始化时就已经打开的情况
  if (search.open) inputEl.value?.focus()
})

onUnmounted(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.kkk-search {
  position: fixed; inset: 0; z-index: 2000;
  display: flex; justify-content: center; align-items: flex-start;
  padding: 10vh 16px 16px;
  background: rgba(0, 0, 0, .45);
  backdrop-filter: blur(2px);
}
.kkk-search-panel {
  width: 100%; max-width: 620px; max-height: 70vh;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 12px; border: 1px solid var(--vp-c-border, #e2e2e3);
  background: var(--vp-c-bg, #fff); color: var(--vp-c-text, #213547);
  box-shadow: 0 16px 48px rgba(0, 0, 0, .3);
}
.kkk-search-head {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 14px; border-bottom: 1px solid var(--vp-c-border, #e2e2e3);
}
.kkk-search-icon { font-size: 15px; opacity: .7; }
.kkk-search-input {
  flex: 1; min-width: 0; border: none; outline: none; background: transparent;
  color: inherit; font-size: 16px; line-height: 1.5;
}
.kkk-search-loading { font-size: 12px; color: var(--vp-c-text-mute, #888); }
.kkk-search-clear {
  border: none; background: transparent; cursor: pointer; font-size: 14px;
  color: var(--vp-c-text-mute, #888); padding: 2px 6px; border-radius: 6px;
}
.kkk-search-clear:hover { background: var(--vp-c-bg-soft, #ececec); }

.kkk-search-body { overflow-y: auto; padding: 6px; }
.kkk-search-note { margin: 0; padding: 18px 12px; color: var(--vp-c-text-mute, #888); font-size: 13px; text-align: center; }
.kkk-search-list { list-style: none; margin: 0; padding: 0; }
.kkk-search-hit a {
  display: block; padding: 9px 11px; border-radius: 8px;
  text-decoration: none; color: inherit;
}
.kkk-search-hit.active a { background: var(--vp-c-accent-soft, #e8f6ef); }
.kkk-search-title { display: block; font-size: 14px; font-weight: 600; }
.kkk-search-snippet {
  display: block; margin-top: 3px; font-size: 12.5px; line-height: 1.5;
  color: var(--vp-c-text-mute, #6b7280);
  overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
.kkk-search-crumb { display: block; margin-top: 3px; font-size: 11.5px; color: var(--vp-c-text-mute, #9aa0a6); }
.kkk-search-hit :deep(mark) { background: transparent; color: var(--vp-c-accent, #3eaf7c); font-weight: 700; }

.kkk-search-foot {
  display: flex; gap: 16px; padding: 8px 14px;
  border-top: 1px solid var(--vp-c-border, #e2e2e3);
  background: var(--vp-c-bg-alt, #f6f6f7);
  font-size: 11.5px; color: var(--vp-c-text-mute, #888);
}
.kkk-search-foot kbd {
  display: inline-block; min-width: 16px; margin-right: 2px; padding: 1px 5px;
  border: 1px solid var(--vp-c-border, #ddd); border-radius: 4px;
  background: var(--vp-c-bg, #fff); font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 10.5px; text-align: center;
}
@media (max-width: 600px) {
  .kkk-search { padding: 4vh 8px 8px; }
  .kkk-search-panel { max-height: 88vh; }
}
</style>
