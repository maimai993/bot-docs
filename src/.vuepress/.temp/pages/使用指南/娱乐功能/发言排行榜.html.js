import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/娱乐功能/发言排行榜.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E5%8F%91%E8%A8%80%E6%8E%92%E8%A1%8C%E6%A6%9C.html\",\"title\":\"发言排行榜\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"发言排行榜\",\"icon\":\"chart-bar\",\"order\":17,\"description\":\"发言排行榜 概述 指令名称: messageCounter 功能描述: 消息数量统计，生成各种发言排行榜 使用方法 指令名称 参数说明 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.55,\"words\":164},\"filePathRelative\":\"使用指南/娱乐功能/发言排行榜.md\",\"autoDesc\":true}")
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
