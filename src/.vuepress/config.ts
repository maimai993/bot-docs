import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "麦芽糖",
  description: "麦芽糖bot文档",

  theme,

  // 关掉「预取所有页面的 chunk」。
  // 默认行为会在每个页面的 head 里塞一条 rel="prefetch"（本站在首页就是 136 条），
  // 浏览器一进站就并发抓一百多个 js，CDN/源站扛不住突发会成片返回 503。
  // 代价只是首次跳转某页时多一次请求，换来的是不再整片 503。
  shouldPrefetch: false,
});
