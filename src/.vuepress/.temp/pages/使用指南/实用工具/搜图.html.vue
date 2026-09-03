<template><div><h1 id="搜图" tabindex="-1"><a class="header-anchor" href="#搜图"><span>搜图</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>根据文字搜索一张图片，支持多个搜索平台</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>[平台]搜图 &#x3C;keyword></span></span></code></pre>
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
<td>keyword</td>
<td>文本</td>
<td>是</td>
<td>要搜索的关键词</td>
<td>麦芽糖</td>
</tr>
</tbody>
</table>
<h3 id="支持平台" tabindex="-1"><a class="header-anchor" href="#支持平台"><span>支持平台</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>指令名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>百度</strong></td>
<td>百度搜图</td>
<td>使用百度图片搜索</td>
</tr>
<tr>
<td><strong>搜狗</strong></td>
<td>搜狗搜图</td>
<td>使用搜狗图片搜索</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="百度搜图" tabindex="-1"><a class="header-anchor" href="#百度搜图"><span>百度搜图</span></a></h3>
<h4 id="百度搜图-麦芽糖" tabindex="-1"><a class="header-anchor" href="#百度搜图-麦芽糖"><span>百度搜图 <code v-pre>麦芽糖</code></span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">百度搜图 麦芽糖</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/搜图_百度麦芽糖.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="搜狗搜图" tabindex="-1"><a class="header-anchor" href="#搜狗搜图"><span>搜狗搜图</span></a></h3>
<h4 id="搜狗搜图-麦芽糖" tabindex="-1"><a class="header-anchor" href="#搜狗搜图-麦芽糖"><span>搜狗搜图 <code v-pre>麦芽糖</code></span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">搜狗搜图 麦芽糖</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/搜图_搜狗麦芽糖.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


