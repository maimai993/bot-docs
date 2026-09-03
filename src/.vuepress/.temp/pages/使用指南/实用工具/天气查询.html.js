import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/实用工具/天气查询.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/%E5%A4%A9%E6%B0%94%E6%9F%A5%E8%AF%A2.html\",\"title\":\"天气查询\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"天气查询\",\"icon\":null,\"order\":1,\"description\":\"天气查询 功能描述 获取今日或未来天气 使用方法 指令名称 参数说明 使用示例 基本查询 查询 北京 天气（默认最近3天） 查询 北京 未来 天气 查询区级天气 查询 北京/朝阳 天气\"},\"readingTime\":{\"minutes\":1.3,\"words\":390},\"filePathRelative\":\"使用指南/实用工具/天气查询.md\",\"autoDesc\":true}")
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
