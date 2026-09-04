import comp from "D:/bot-docs/src/.vuepress/.temp/pages/使用指南/娱乐功能/视频解析.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.html\",\"title\":\"视频解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"视频解析\",\"order\":52,\"description\":\"视频解析 该功能由于服务器网络波动已暂时失效 功能描述 解析抖音、B站、快手、小红书等平台的视频/图文分享链接，提取内容并渲染成图片 使用方法 指令名称 发送平台分享链接后会自动识别解析，也可以引用消息后发送： 常用指令 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.83,\"words\":249},\"filePathRelative\":\"使用指南/娱乐功能/视频解析.md\",\"autoDesc\":true}")
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
