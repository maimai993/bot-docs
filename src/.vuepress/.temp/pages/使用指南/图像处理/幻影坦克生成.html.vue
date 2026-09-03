<template><div><h1 id="幻影坦克生成" tabindex="-1"><a class="header-anchor" href="#幻影坦克生成"><span>幻影坦克生成</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>制作幻影坦克图片，通过两张图片的混合实现在不同亮度下显示不同图片的效果</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>幻影 </span></span>
<span class="line"><span>幻影坦克</span></span></code></pre>
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
<td>表图</td>
<td>图片/QQ号/@用户</td>
<td>否</td>
<td>表图（正常显示）</td>
<td>[图片] / 123456 / @用户</td>
</tr>
<tr>
<td>里图</td>
<td>图片/QQ号/@用户</td>
<td>否</td>
<td>里图（暗处显示）</td>
<td>[图片] / 123456 / @用户</td>
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
<td>fullColor</td>
<td>-f</td>
<td>无</td>
<td>开启全彩输出，关闭则为黑白图</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>-s</td>
<td>number</td>
<td>指定输出图像尺寸（长宽中的较大值）</td>
<td>1200</td>
</tr>
<tr>
<td>weight</td>
<td>-w</td>
<td>number</td>
<td>设置里图混合权重，范围为0到1</td>
<td>0.7</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>效果在网页文档显示可能较差，请在QQ中查看效果更佳<br>
在QQ发送时请勾选原图<br>
不支持动图生成</p>
</div>
<h4 id="交互式输入图片" tabindex="-1"><a class="header-anchor" href="#交互式输入图片"><span>交互式输入图片</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">幻影</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/gif5.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/gif10.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用qq头像" tabindex="-1"><a class="header-anchor" href="#使用qq头像"><span>使用QQ头像</span></a></h3>
<h4 id="使用qq号" tabindex="-1"><a class="header-anchor" href="#使用qq号"><span>使用QQ号</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">幻影 123456 654321</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="使用-用户" tabindex="-1"><a class="header-anchor" href="#使用-用户"><span>使用@用户</span></a></h4>
<chat-panel>
<chat-message nickname="马化腾" type="user">大家好，我是马化腾</chat-message>
<chat-message nickname="腾讯视频" type="user">大家好，我是腾讯视频</chat-message>
<chat-message nickname="麦麦" type="user">幻影 <span style="color: #3175de;">@腾讯视频 @马化腾</span></chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="使用选项参数" tabindex="-1"><a class="header-anchor" href="#使用选项参数"><span>使用选项参数</span></a></h3>
<h4 id="全彩输出" tabindex="-1"><a class="header-anchor" href="#全彩输出"><span>全彩输出</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">幻影 -f
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/gif5.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/gif10.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="自定义尺寸和权重" tabindex="-1"><a class="header-anchor" href="#自定义尺寸和权重"><span>自定义尺寸和权重</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">
幻影 -s 800 -w 0.5
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="完整参数示例" tabindex="-1"><a class="header-anchor" href="#完整参数示例"><span>完整参数示例</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">幻影 -f -s 1000 -w 0.8
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【表图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
请发送一张图片作为【里图】：
</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/光棱2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/幻影坦克4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


