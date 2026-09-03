<template><div><h1 id="b站搜索" tabindex="-1"><a class="header-anchor" href="#b站搜索"><span>b站搜索</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>在Bilibili平台进行多类型内容搜索，支持视频、用户、专栏等多种搜索类型</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>b站搜索 &#x3C;内容> [类型] [排序]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容</td>
<td>文本</td>
<td>是</td>
<td>要搜索的关键词</td>
<td>furry</td>
</tr>
<tr>
<td>类型</td>
<td>文本</td>
<td>否</td>
<td>搜索内容类型，默认为综合</td>
<td>用户</td>
</tr>
<tr>
<td>排序</td>
<td>文本</td>
<td>否</td>
<td>搜索结果排序方式</td>
<td>粉丝由高到低</td>
</tr>
</tbody>
</table>
<h3 id="搜索类型说明" tabindex="-1"><a class="header-anchor" href="#搜索类型说明"><span>搜索类型说明</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>说明</th>
<th>支持的排序选项</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>综合</strong></td>
<td>跨类型综合搜索</td>
<td>最多播放、最多点击、最多评论、最多弹幕、最多收藏、最新发布</td>
</tr>
<tr>
<td><strong>视频</strong></td>
<td>搜索视频内容</td>
<td>最多播放、最新发布、最多弹幕、最多收藏</td>
</tr>
<tr>
<td><strong>番剧</strong></td>
<td>搜索番剧内容</td>
<td>默认排序</td>
</tr>
<tr>
<td><strong>影视</strong></td>
<td>搜索影视内容</td>
<td>默认排序</td>
</tr>
<tr>
<td><strong>直播</strong></td>
<td>搜索直播内容</td>
<td>最新开播、主播、直播间、直播间最新开播</td>
</tr>
<tr>
<td><strong>专栏</strong></td>
<td>搜索专栏文章</td>
<td>最新发布、最多点击、最多喜欢、最多评论</td>
</tr>
<tr>
<td><strong>用户</strong></td>
<td>搜索用户账号</td>
<td>粉丝由高到低、粉丝由低到高、等级由高到低、等级由低到高</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本搜索" tabindex="-1"><a class="header-anchor" href="#基本搜索"><span>基本搜索</span></a></h3>
<h4 id="搜索-furry-相关内容" tabindex="-1"><a class="header-anchor" href="#搜索-furry-相关内容"><span>搜索 <code v-pre>furry</code> 相关内容</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/b站搜索1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="指定类型搜索" tabindex="-1"><a class="header-anchor" href="#指定类型搜索"><span>指定类型搜索</span></a></h3>
<h4 id="搜索-furry-用户" tabindex="-1"><a class="header-anchor" href="#搜索-furry-用户"><span>搜索 <code v-pre>furry</code> 用户</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 用户</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/b站搜索2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="指定排序方式" tabindex="-1"><a class="header-anchor" href="#指定排序方式"><span>指定排序方式</span></a></h3>
<h4 id="搜索-furry-用户并按粉丝数排序" tabindex="-1"><a class="header-anchor" href="#搜索-furry-用户并按粉丝数排序"><span>搜索 <code v-pre>furry</code> 用户并按粉丝数排序</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 用户 粉丝由高到低</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/b站搜索3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="搜索-furry-视频并按播放量排序" tabindex="-1"><a class="header-anchor" href="#搜索-furry-视频并按播放量排序"><span>搜索 <code v-pre>furry</code> 视频并按播放量排序</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 视频 最多播放</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/b站搜索4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


