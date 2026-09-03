<template><div><h1 id="emoji合成" tabindex="-1"><a class="header-anchor" href="#emoji合成"><span>Emoji合成</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>混合两个emoji表情，生成合成图片</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>emix &#x3C;emoji1>&#x3C;emoji2></span></span></code></pre>
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
<td>emoji1</td>
<td>emoji</td>
<td>是</td>
<td>第一个emoji表情</td>
<td>😊</td>
</tr>
<tr>
<td>emoji2</td>
<td>emoji</td>
<td>是</td>
<td>第二个emoji表情</td>
<td>😢</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本合成" tabindex="-1"><a class="header-anchor" href="#基本合成"><span>基本合成</span></a></h3>
<h4 id="合成笑脸和哭脸" tabindex="-1"><a class="header-anchor" href="#合成笑脸和哭脸"><span>合成笑脸和哭脸</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">emix 😊😢</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/emoji合成.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


