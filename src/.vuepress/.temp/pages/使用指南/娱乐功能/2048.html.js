import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/娱乐功能/2048.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/2048.html\",\"title\":\"2048\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"grid-2\",\"order\":37,\"description\":\"2048 概述 指令名称: 2048Game 功能描述: 群内2048数字合成小游戏 使用方法 指令名称 参数说明 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.52,\"words\":155},\"filePathRelative\":\"使用指南/娱乐功能/2048.md\",\"autoDesc\":true}")
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
