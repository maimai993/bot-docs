import comp from "D:/my-docs-main/src/.vuepress/.temp/pages/使用指南/娱乐功能/听歌识曲.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E5%90%AC%E6%AD%8C%E8%AF%86%E6%9B%B2.html\",\"title\":\"听歌识曲\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"听歌识曲\",\"icon\":\"headphones\",\"order\":24,\"description\":\"听歌识曲 概述 指令名称: 切换识别源 功能描述: 哼唱识别，通过哼唱的旋律识别歌曲 使用方法 指令名称 参数说明 发送一段哼唱或播放歌曲的语音后，机器人会识别出对应的歌曲。可通过\\\"切换识别源\\\"切换不同的识别服务。 使用示例 （示例待补充）\"},\"readingTime\":{\"minutes\":0.54,\"words\":161},\"filePathRelative\":\"使用指南/娱乐功能/听歌识曲.md\",\"autoDesc\":true}")
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
