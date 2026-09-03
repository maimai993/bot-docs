<template><div><h1 id="光棱坦克" tabindex="-1"><a class="header-anchor" href="#光棱坦克"><span>光棱坦克</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>制作光棱坦克图片（高级图片隐写技术）和从光棱坦克图片中取出隐藏的里图</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<h4 id="制作光棱坦克" tabindex="-1"><a class="header-anchor" href="#制作光棱坦克"><span>制作光棱坦克</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>光棱  [选项]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="从光棱坦克取图" tabindex="-1"><a class="header-anchor" href="#从光棱坦克取图"><span>从光棱坦克取图</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>光棱取图 [选项]</span></span></code></pre>
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
<td>里图</td>
<td>图片/QQ号/@用户</td>
<td>是</td>
<td>要隐藏的图片（光棱制作）</td>
<td>[图片]</td>
</tr>
<tr>
<td>表图</td>
<td>图片/QQ号/@用户</td>
<td>是</td>
<td>表面显示的图片（光棱制作）</td>
<td>[图片]</td>
</tr>
<tr>
<td>光棱坦克图片</td>
<td>图片/QQ号/@用户</td>
<td>是</td>
<td>光棱坦克图片（光棱取图）</td>
<td>[图片]</td>
</tr>
</tbody>
</table>
<h3 id="选项说明" tabindex="-1"><a class="header-anchor" href="#选项说明"><span>选项说明</span></a></h3>
<h4 id="光棱制作选项" tabindex="-1"><a class="header-anchor" href="#光棱制作选项"><span>光棱制作选项</span></a></h4>
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
<td>grayscale</td>
<td>-g</td>
<td>无</td>
<td>黑白输出</td>
<td>false</td>
</tr>
<tr>
<td>innerThreshold</td>
<td>-it</td>
<td>number</td>
<td>里图色阶端点（越小隐写效果越好）</td>
<td>32</td>
</tr>
<tr>
<td>coverThreshold</td>
<td>-ct</td>
<td>number</td>
<td>表图色阶端点（越大显形效果越好）</td>
<td>96</td>
</tr>
<tr>
<td>innerContrast</td>
<td>-ic</td>
<td>number</td>
<td>里图对比度（降低可提高隐写效果）</td>
<td>50</td>
</tr>
<tr>
<td>coverContrast</td>
<td>-cc</td>
<td>number</td>
<td>表图对比度</td>
<td>50</td>
</tr>
<tr>
<td>size</td>
<td>-s</td>
<td>number</td>
<td>输出尺寸（长和宽中的较大值）</td>
<td>1200</td>
</tr>
<tr>
<td>reverse</td>
<td>-r</td>
<td>无</td>
<td>反向隐写</td>
<td>false</td>
</tr>
<tr>
<td>method</td>
<td>-m</td>
<td>string</td>
<td>像素混合方式：chess/gap_2/gap_3/gap_5/col_1/row_1</td>
<td>chess</td>
</tr>
</tbody>
</table>
<h4 id="光棱取图选项" tabindex="-1"><a class="header-anchor" href="#光棱取图选项"><span>光棱取图选项</span></a></h4>
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
<td>threshold</td>
<td>-t</td>
<td>number</td>
<td>取图阈值</td>
<td>128</td>
</tr>
<tr>
<td>option</td>
<td>-o</td>
<td>string</td>
<td>像素处理方式：black/white/trans/lcopy/ucopy/luavg</td>
<td>white</td>
</tr>
<tr>
<td>reverse</td>
<td>-r</td>
<td>无</td>
<td>反向隐写</td>
<td>false</td>
</tr>
<tr>
<td>contrast</td>
<td>--contrast</td>
<td>number</td>
<td>对比度调整</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="制作光棱坦克-1" tabindex="-1"><a class="header-anchor" href="#制作光棱坦克-1"><span>制作光棱坦克</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
光棱
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/光棱3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用自定义参数制作光棱坦克" tabindex="-1"><a class="header-anchor" href="#使用自定义参数制作光棱坦克"><span>使用自定义参数制作光棱坦克</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
光棱 -it 20 -ct 100 -s 800
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/光棱4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="从光棱坦克取图-1" tabindex="-1"><a class="header-anchor" href="#从光棱坦克取图-1"><span>从光棱坦克取图</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
光棱取图
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张光棱坦克图片：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/光棱5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用qq头像制作光棱坦克" tabindex="-1"><a class="header-anchor" href="#使用qq头像制作光棱坦克"><span>使用QQ头像制作光棱坦克</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">光棱 2237886846 1660394708</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/光棱6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


