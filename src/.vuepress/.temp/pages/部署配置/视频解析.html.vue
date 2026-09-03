<template><div><h1 id="视频解析部署配置" tabindex="-1"><a class="header-anchor" href="#视频解析部署配置"><span>视频解析部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.html">视频解析</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: karin-plugin-kkk</li>
<li><strong>版本</strong>: 2.42.2</li>
<li><strong>框架</strong>: Karin（&gt;= 1.14.0）</li>
<li><strong>环境要求</strong>: Node.js &gt;= 18、FFmpeg（或 karin-plugin-ffmpeg）</li>
<li><strong>支持平台</strong>: 抖音、B站、快手、小红书</li>
<li><strong>许可证</strong>: GPL-3.0</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>推荐在 Karin WebUI 插件市场搜索 <code v-pre>karin-plugin-kkk</code> 直接安装。手动管理依赖时：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pnpm add karin-plugin-kkk@latest -w</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h2>
<p>打开 Karin WebUI → 插件配置 → <code v-pre>karin-plugin-kkk</code>，优先配置<strong>抖音与 B站 Cookie</strong>。</p>
<p>Cookie 主要影响高画质、扫码登录、动态推送与接口稳定性；其他配置都有默认值兜底，基础解析可以先直接试跑。</p>
<h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>多平台自动解析</strong>: 自动识别抖音、B站、快手、小红书分享内容，无需手动复制资源地址</li>
<li><strong>视频与图文处理</strong>: 提取视频、图集、作者与互动数据，根据场景发送媒体或渲染卡片</li>
<li><strong>评论区渲染</strong>: 展示热评、楼中楼、图片评论和评论二维码</li>
<li><strong>动态订阅推送</strong>: 为抖音和B站提供订阅、筛选、强制推送与统计能力</li>
<li><strong>增强媒体能力</strong>: 支持弹幕烧录、Live Photo 兼容导出、视频压缩和临时预览</li>
<li><strong>30+ 卡片组件</strong>: 覆盖视频详情、动态、评论、帮助、登录、统计与错误诊断，适配深浅主题</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>Cookie 配置</strong>: 优先配置抖音与 B站 Cookie，保证高画质与接口稳定性</li>
<li><strong>环境依赖</strong>: 需要 FFmpeg 或安装 karin-plugin-ffmpeg</li>
<li><strong>许可证</strong>: GPL-3.0 开源，禁止商用，二次分发请注明出处，使用风险自担</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>详细文档见 <a href="https://kkk.karinjs.com" target="_blank" rel="noopener noreferrer">karin-plugin-kkk 使用文档</a>。</p>
</div>
</div></template>


