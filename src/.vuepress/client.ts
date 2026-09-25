import { defineClientConfig } from 'vuepress/client'
import ChatMessage from './components/ChatMessage.vue'
import ChatPanel from './components/ChatPanel.vue'
import MergeForward from './components/MergeForward.vue'
import RecallMessage from './components/RecallMessage.vue'
import SimpleImageMessage from './components/SimpleImageMessage.vue'
import FileMessage from './components/FileMessage.vue'
import VoiceMessage from './components/VoiceMessage.vue'
import SandboxPanel from './components/SandboxPanel.vue'
import SearchModal from './components/SearchModal.vue'
import { enhanceCodeBlocks, loadCommands, startObserving } from './client/sandbox'
import { installSearchTriggers } from './client/search'

export default defineClientConfig({
  enhance({ app, router }) {
    // 全局注册自定义组件
    app.component('ChatMessage', ChatMessage)
    app.component('ChatPanel', ChatPanel)
    app.component('MergeForward', MergeForward)
    app.component('RecallMessage', RecallMessage)
    app.component('SimpleImageMessage', SimpleImageMessage)
    app.component('FileMessage', FileMessage)
    app.component('VoiceMessage', VoiceMessage)
    app.component('SandboxPanel', SandboxPanel)
    app.component('SearchModal', SearchModal)

    // 客户端路由切换后重新给代码块挂「试运行」按钮
    if (typeof window !== 'undefined') {
      router.afterEach(() => {
        window.setTimeout(() => {
          loadCommands().then(() => enhanceCodeBlocks())
        }, 200)
      })
    }
  },

  setup() {
    if (typeof window === 'undefined') return
    // 接管搜索入口：DocSearch 自带界面的懒初始化会 60Hz 抢焦点，见 client/search.ts
    installSearchTriggers()
    const decorate = () => {
      loadCommands().then(() => {
        enhanceCodeBlocks()
        startObserving()
      })
    }
    if (document.readyState === 'complete') window.setTimeout(decorate, 300)
    else window.addEventListener('load', () => window.setTimeout(decorate, 300))
  },

  // 悬浮窗和搜索框都挂在根上，任何页面都能用
  rootComponents: [SandboxPanel, SearchModal],
})
