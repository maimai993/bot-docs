<template><div><h1 id="网页截图" tabindex="-1"><a class="header-anchor" href="#网页截图"><span>网页截图</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>截取网页内容并返回图片</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>shot &#x3C;url> [selector]</span></span>
<span class="line"><span>screenshot &#x3C;url> [selector]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
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
<td>url</td>
<td>文本</td>
<td>是</td>
<td>要截图的网页地址</td>
<td><a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">https://www.baidu.com</a></td>
</tr>
<tr>
<td>selector</td>
<td>文本</td>
<td>否</td>
<td>CSS选择器，指定要截图的特定元素</td>
<td>.main-content</td>
</tr>
</tbody>
</table>
<h3 id="选项说明" tabindex="-1"><a class="header-anchor" href="#选项说明"><span>选项说明</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>简写</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>full</td>
<td>-f</td>
<td>无</td>
<td>对整个可滚动区域截图</td>
</tr>
<tr>
<td>viewport</td>
<td>-v</td>
<td>string</td>
<td>指定视口大小，格式：宽度x高度</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本截图" tabindex="-1"><a class="header-anchor" href="#基本截图"><span>基本截图</span></a></h3>
<h4 id="截图-百度-首页" tabindex="-1"><a class="header-anchor" href="#截图-百度-首页"><span>截图 <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer"><code v-pre>百度</code></a> 首页</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">shot https://www.baidu.com</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/网页截图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用选项" tabindex="-1"><a class="header-anchor" href="#使用选项"><span>使用选项</span></a></h3>
<h4 id="全页面截图" tabindex="-1"><a class="header-anchor" href="#全页面截图"><span>全页面截图</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">shot https://www.bilibili.com -f</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/网页截图3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="指定视口大小" tabindex="-1"><a class="header-anchor" href="#指定视口大小"><span>指定视口大小</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">shot https://www.taobao.com -v 1280x720</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/网页截图4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


