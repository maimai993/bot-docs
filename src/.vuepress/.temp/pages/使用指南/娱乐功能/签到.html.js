import comp from "D:/bot-docs/src/.vuepress/.temp/pages/使用指南/娱乐功能/签到.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E7%AD%BE%E5%88%B0.html\",\"title\":\"签到\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"签到\",\"icon\":\"calendar-day\",\"order\":30,\"description\":\"签到 功能描述 每日签到功能 使用方法 指令名称 参数说明 使用示例\"},\"readingTime\":{\"minutes\":0.57,\"words\":170},\"filePathRelative\":\"使用指南/娱乐功能/签到.md\",\"autoDesc\":true}")
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
