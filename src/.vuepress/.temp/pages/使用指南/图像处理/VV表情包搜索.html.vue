<template><div><h1 id="vv表情包搜索" tabindex="-1"><a class="header-anchor" href="#vv表情包搜索"><span>VV表情包搜索</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>搜索并返回VV表情包图片</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>vv &#x3C;搜索关键词> [数量]</span></span></code></pre>
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
<td>搜索关键词</td>
<td>文本</td>
<td>是</td>
<td>要搜索的表情包关键词</td>
<td>开心</td>
</tr>
<tr>
<td>数量</td>
<td>数字</td>
<td>否</td>
<td>返回的表情包数量，默认1，最大5</td>
<td>3</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="搜索单个表情包" tabindex="-1"><a class="header-anchor" href="#搜索单个表情包"><span>搜索单个表情包</span></a></h3>
<h4 id="搜索-开心-表情包" tabindex="-1"><a class="header-anchor" href="#搜索-开心-表情包"><span>搜索&quot;开心&quot;表情包</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>vv 开心</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">vv 开心</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/VV表情包搜索/1.webp" />
</chat-message>
</chat-panel>
<h3 id="搜索多个表情包" tabindex="-1"><a class="header-anchor" href="#搜索多个表情包"><span>搜索多个表情包</span></a></h3>
<h4 id="搜索3个-惊讶-表情包" tabindex="-1"><a class="header-anchor" href="#搜索3个-惊讶-表情包"><span>搜索3个&quot;惊讶&quot;表情包</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>vv 惊讶 3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">vv 惊讶 3</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/VV表情包搜索/2.webp" />
<img src="@source/img/VV表情包搜索/3.webp" />
<img src="@source/img/VV表情包搜索/4.webp" />
</chat-message>
</chat-panel>
<h4 id="搜索5个-生气-表情包" tabindex="-1"><a class="header-anchor" href="#搜索5个-生气-表情包"><span>搜索5个&quot;生气&quot;表情包</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>vv 生气 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">vv 生气 5</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/VV表情包搜索/5.webp" />
<img src="@source/img/VV表情包搜索/6.webp" />
<img src="@source/img/VV表情包搜索/7.webp" />
<img src="@source/img/VV表情包搜索/8.webp" />
<img src="@source/img/VV表情包搜索/9.webp" />
</chat-message>
</chat-panel>
</div></template>


