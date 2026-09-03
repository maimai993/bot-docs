import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/实用工具/新闻.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/%E6%96%B0%E9%97%BB.html\",\"title\":\"新闻\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新闻\",\"icon\":null,\"order\":1,\"description\":\"新闻 功能描述 获取今天的新闻 使用方法 指令名称 使用示例 获取新闻\"},\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"使用指南/实用工具/新闻.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
