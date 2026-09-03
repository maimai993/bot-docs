<template><div><h1 id="二维码生成" tabindex="-1"><a class="header-anchor" href="#二维码生成"><span>二维码生成</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>生成并发送二维码图片</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>qrcode &#x3C;text></span></span></code></pre>
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
<td>text</td>
<td>文本</td>
<td>是</td>
<td>要编码为二维码的文本内容</td>
<td>Hello World</td>
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
<td>margin</td>
<td>-m</td>
<td>number</td>
<td>二维码边界尺寸</td>
<td>4</td>
</tr>
<tr>
<td>scale</td>
<td>-s</td>
<td>number</td>
<td>二维码缩放比例</td>
<td>4</td>
</tr>
<tr>
<td>width</td>
<td>-w</td>
<td>number</td>
<td>二维码图片大小</td>
<td>-</td>
</tr>
<tr>
<td>dark</td>
<td>-d</td>
<td>color</td>
<td>暗部颜色（二维码点颜色）</td>
<td>-</td>
</tr>
<tr>
<td>light</td>
<td>-l</td>
<td>color</td>
<td>亮部颜色（背景颜色）</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本二维码生成" tabindex="-1"><a class="header-anchor" href="#基本二维码生成"><span>基本二维码生成</span></a></h3>
<h4 id="生成文本二维码" tabindex="-1"><a class="header-anchor" href="#生成文本二维码"><span>生成文本二维码</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">qrcode Hello World</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/二维码生成.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用选项" tabindex="-1"><a class="header-anchor" href="#使用选项"><span>使用选项</span></a></h3>
<h4 id="自定义边界和缩放" tabindex="-1"><a class="header-anchor" href="#自定义边界和缩放"><span>自定义边界和缩放</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">qrcode -m 8 -s 6 https://tangbot.xyz</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/二维码生成2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色"><span>自定义颜色</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">qrcode -d #FF0000 -l #FFFF00 联系方式</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/二维码生成3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="指定图片大小" tabindex="-1"><a class="header-anchor" href="#指定图片大小"><span>指定图片大小</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">qrcode -w 300 重要信息</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/二维码生成4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="wifi信息" tabindex="-1"><a class="header-anchor" href="#wifi信息"><span>WiFi信息</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">qrcode WIFI:S:iQOO Neo11;T:WPA2;P:114514;H:false;;</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/二维码生成5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


