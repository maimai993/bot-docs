import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/实用工具/抖音热搜.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/%E6%8A%96%E9%9F%B3%E7%83%AD%E6%90%9C.html\",\"title\":\"抖音热搜\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"抖音热搜\",\"icon\":\"fire\",\"order\":8,\"description\":\"抖音热搜 功能描述 查看抖音平台热搜榜单 使用方法 指令名称 参数说明 本指令无需任何参数，输入后返回抖音当前的热搜榜单。 使用示例\"},\"readingTime\":{\"minutes\":0.23,\"words\":70},\"filePathRelative\":\"使用指南/实用工具/抖音热搜.md\",\"autoDesc\":true}")
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
