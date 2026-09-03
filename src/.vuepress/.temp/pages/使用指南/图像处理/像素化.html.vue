<template><div><h1 id="像素化" tabindex="-1"><a class="header-anchor" href="#像素化"><span>像素化</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将图片转换为像素化艺术效果</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>像素化 [图片] [-p &#x3C;百分比>]</span></span></code></pre>
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
<td>图片</td>
<td>图片/QQ号/@用户</td>
<td>是</td>
<td>要像素化的图片</td>
<td>[图片]</td>
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
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>pixelate</td>
<td>-p</td>
<td>number</td>
<td>像素化百分比，值越高像素化效果越强</td>
<td>80</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本像素化" tabindex="-1"><a class="header-anchor" href="#基本像素化"><span>基本像素化</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
像素化
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/像素化1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/像素化.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="指定像素化百分比" tabindex="-1"><a class="header-anchor" href="#指定像素化百分比"><span>指定像素化百分比</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">像素化 -p 50
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/像素化1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/像素化3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用qq头像像素化" tabindex="-1"><a class="header-anchor" href="#使用qq头像像素化"><span>使用QQ头像像素化</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">像素化 2237886846</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/像素化4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用-用户头像像素化" tabindex="-1"><a class="header-anchor" href="#使用-用户头像像素化"><span>使用@用户头像像素化</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">像素化 @麦麦</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/像素化4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


