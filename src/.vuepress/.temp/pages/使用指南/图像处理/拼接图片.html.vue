<template><div><h1 id="拼接图片" tabindex="-1"><a class="header-anchor" href="#拼接图片"><span>拼接图片</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将多张图片拼接成一张长图，支持横向或纵向拼接</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>拼图 [方向]</span></span></code></pre>
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
<td>方向</td>
<td>文本</td>
<td>否</td>
<td>拼接方向：横向/纵向，默认纵向</td>
<td>横向</td>
</tr>
</tbody>
</table>
<h3 id="操作流程" tabindex="-1"><a class="header-anchor" href="#操作流程"><span>操作流程</span></a></h3>
<ol>
<li>输入 <code v-pre>拼图 [方向]</code> 开始拼接任务</li>
<li>发送多张图片（支持一次性发送多张）</li>
<li>输入 <code v-pre>完成</code> 或等待10秒自动开始拼接</li>
</ol>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="横向拼接图片" tabindex="-1"><a class="header-anchor" href="#横向拼接图片"><span>横向拼接图片</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">拼图 横向</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">请发送图片，输入 "完成" 开始拼接。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/1-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 1 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/1-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 2 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/1-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 3 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">完成</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/result1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦麦" type="user">拼图 横向</chat-message><chat-message nickname="麦芽糖bot" type="bot">请发送图片，输入 "完成" 开始拼接。</chat-message><chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/2-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 1 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/2-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 2 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/2-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 3 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">完成</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/result2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦麦" type="user">拼图 横向</chat-message><chat-message nickname="麦芽糖bot" type="bot">请发送图片，输入 "完成" 开始拼接。</chat-message><chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/3-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 1 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/3-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 2 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/3-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 3 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">完成</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/result3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="纵向拼接图片" tabindex="-1"><a class="header-anchor" href="#纵向拼接图片"><span>纵向拼接图片</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">拼图 纵向</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">请发送图片，输入 "完成" 开始拼接。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/result1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 1 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/result2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 2 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">
<figure><img src="@source/使用指南/图像处理/result3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已获取 3 张图片。</chat-message>
<chat-message nickname="麦麦" type="user">完成</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/result.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


