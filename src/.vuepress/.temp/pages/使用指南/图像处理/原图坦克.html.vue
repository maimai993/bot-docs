<template><div><h1 id="原图坦克" tabindex="-1"><a class="header-anchor" href="#原图坦克"><span>原图坦克</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将两张图片合成为两帧GIF图片，实现查看原图图片切换效果</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>原图坦克</span></span></code></pre>
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
<td>表图</td>
<td>图片/QQ号/@用户</td>
<td>否</td>
<td>第一帧图片（表图）</td>
<td>[图片] / 123456 / @用户</td>
</tr>
<tr>
<td>里图</td>
<td>图片/QQ号/@用户</td>
<td>否</td>
<td>第二帧图片（里图）</td>
<td>[图片] / 123456 / @用户</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3>
<h4 id="交互式输入图片" tabindex="-1"><a class="header-anchor" href="#交互式输入图片"><span>交互式输入图片</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">原图坦克</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送第一张图片（表图）
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/原图坦克1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送第二张图片（里图）
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/原图坦克2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<FileMessage
  fileName="output.gif"
  :fileSize="364183"
  downloadUrl="./output.gif"
  fileType="image"
/>
</chat-message>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>手机版qq预览图片只会显示第一帧，点击查看原图图片会卡在第二帧到达原图坦克的效果</p>
</div>
</chat-panel>
<h3 id="使用qq头像" tabindex="-1"><a class="header-anchor" href="#使用qq头像"><span>使用QQ头像</span></a></h3>
<h4 id="使用qq号" tabindex="-1"><a class="header-anchor" href="#使用qq号"><span>使用QQ号</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">
原图坦克 2237886846 1660394708
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<FileMessage
  fileName="output.gif"
  :fileSize="324894"
  downloadUrl="./output2.gif"
  fileType="image"
/>
</chat-message>
</chat-panel>
<h4 id="使用-用户" tabindex="-1"><a class="header-anchor" href="#使用-用户"><span>使用@用户</span></a></h4>
<chat-panel>
<chat-message nickname="芽" type="user">
大家好，我是芽
</chat-message>
<chat-message nickname="麦麦" type="user">原图坦克 <span style="color: #3175de;">@麦麦 @芽</span></chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<FileMessage
  fileName="output.gif"
  :fileSize="324894"
  downloadUrl="./output2.gif"
  fileType="image"
/>
</chat-message>
</chat-panel>
</div></template>


