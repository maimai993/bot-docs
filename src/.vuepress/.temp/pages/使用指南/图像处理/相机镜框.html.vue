<template><div><h1 id="相机镜框" tabindex="-1"><a class="header-anchor" href="#相机镜框"><span>相机镜框</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>为图片添加相机取景器镜框效果</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>相机镜框 [图片]</span></span></code></pre>
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
<td>要添加相机镜框的图片</td>
<td>[图片]</td>
</tr>
</tbody>
</table>
<h3 id="选项说明" tabindex="-1"><a class="header-anchor" href="#选项说明"><span>选项说明</span></a></h3>
<p>此功能目前没有可配置的指令参数，但可以通过插件配置调整图片对齐方式和压缩质量。</p>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="为图片添加相机镜框" tabindex="-1"><a class="header-anchor" href="#为图片添加相机镜框"><span>为图片添加相机镜框</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
相机镜框
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/相机1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/相机.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用qq头像添加相机镜框" tabindex="-1"><a class="header-anchor" href="#使用qq头像添加相机镜框"><span>使用QQ头像添加相机镜框</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">相机镜框 2237886846</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/相机3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用-用户头像添加相机镜框" tabindex="-1"><a class="header-anchor" href="#使用-用户头像添加相机镜框"><span>使用@用户头像添加相机镜框</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">相机镜框 <span style="color: #3175de;">@麦麦</span></chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/相机3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


