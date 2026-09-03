import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/娱乐功能/今天吃什么.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E4%BB%8A%E5%A4%A9%E5%90%83%E4%BB%80%E4%B9%88.html\",\"title\":\"今天吃什么\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"今天吃什么\",\"icon\":\"utensils\",\"order\":8,\"description\":\"今天吃什么 概述 指令名称: eat / drink 功能描述: 随机推荐今天吃什么、喝什么 使用方法 指令名称 参数说明 本指令无需任何参数，输入后随机推荐一种食物或饮品。 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"使用指南/娱乐功能/今天吃什么.md\",\"autoDesc\":true}")
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
