import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/娱乐功能/赞我.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E8%B5%9E%E6%88%91.html\",\"title\":\"赞我\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"赞我\",\"icon\":\"thumbs-up\",\"order\":18,\"description\":\"赞我 概述 指令名称: 赞我 功能描述: 点赞互动功能，让机器人给你点赞 使用方法 指令名称 参数说明 本指令无需任何参数，输入后机器人会为你点赞。 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.3,\"words\":89},\"filePathRelative\":\"使用指南/娱乐功能/赞我.md\",\"autoDesc\":true}")
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
