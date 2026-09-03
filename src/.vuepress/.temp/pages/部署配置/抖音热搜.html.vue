<template><div><h1 id="抖音热搜部署配置" tabindex="-1"><a class="header-anchor" href="#抖音热搜部署配置"><span>抖音热搜部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/%E6%8A%96%E9%9F%B3%E7%83%AD%E6%90%9C.html">抖音热搜</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-hot-search</li>
<li><strong>依赖框架</strong>: koishi</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-hot-search</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-hot-search</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<table>
<thead>
<tr>
<th>配置项</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>command</td>
<td>string</td>
<td>热搜</td>
<td>热搜指令前缀</td>
</tr>
<tr>
<td>endpoints</td>
<td>object</td>
<td>-</td>
<td>各平台热搜API地址（bili/douyin/zhihu/weibo）</td>
</tr>
<tr>
<td>isUseImage</td>
<td>boolean</td>
<td>-</td>
<td>是否使用图片返回</td>
</tr>
</tbody>
</table>
<h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<p>同插件还提供&quot;获取热搜&quot;功能，支持哔哩哔哩、抖音、知乎、微博四平台热搜。</p>
</div></template>


