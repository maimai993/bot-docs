<template><div><h1 id="_2048" tabindex="-1"><a class="header-anchor" href="#_2048"><span>2048</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>群内2048数字合成小游戏</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>2048</span></span>
<span class="line"><span>2048.移动 &#x3C;操作></span></span>
<span class="line"><span>2048.结束</span></span>
<span class="line"><span>2048.排行</span></span>
<span class="line"><span>2048.记录 [@某人]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>2048</td>
<td>开始2048游戏</td>
</tr>
<tr>
<td>2048.移动 <code v-pre>&lt;操作&gt;</code></td>
<td>进行移动操作</td>
</tr>
<tr>
<td>2048.结束</td>
<td>结束游戏</td>
</tr>
<tr>
<td>2048.排行</td>
<td>查看排行榜</td>
</tr>
<tr>
<td>2048.记录 [@某人]</td>
<td>查看生涯成就</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="进行游戏" tabindex="-1"><a class="header-anchor" href="#进行游戏"><span>进行游戏</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">2048</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">🎮 2048 开始。</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/117ee9238097f9d714a172023d7a23db.png" />
    直接发送方向：上 / 下 / 左 / 右（也支持 WASD、箭头和连续输入）
</chat-message>
<chat-message nickname="麦麦" type="user">w</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/6e748599cde7c8faf56d6843aefb1399.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">a</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/59567f4cfd4d3addf4ae2758f773f892.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">wawsdasdawsd</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/4ea9ce8cf790207d9026bef24d044c28.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">上上下下左左右右</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/668bff98841f809d28eddcddb4e3c17c.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">↑↑↓↓</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/7c6cc3c425e3cb0b7342bf0a2cb08452.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">wasdwasdwasdwasdwasdwasdwasd</chat-message><chat-message nickname="麦芽糖bot" type="bot">
    <img src="@source/使用指南/娱乐功能/17040101e1c42789abbcde15d298a092.png" />
</chat-message>
</chat-panel>
<h3 id="结束游戏" tabindex="-1"><a class="header-anchor" href="#结束游戏"><span>结束游戏</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">2048.结束</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">✅ 本局已结束。发送「2048」可开始新游戏。</chat-message></chat-panel>
<h3 id="查看排行榜" tabindex="-1"><a class="header-anchor" href="#查看排行榜"><span>查看排行榜</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">2048.排行</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>🏆 2048 综合成就榜</p>
<ol>
<li>麦麦｜492 分｜最高 64｜2048 × 0</li>
<li>骤雨suddrain｜0 分｜最高 0｜2048 × 0</li>
<li>kamenrider agit｜0 分｜最高 0｜2048 × 0</li>
</ol>
</chat-message>
</chat-panel>
<h3 id="查看生涯成就" tabindex="-1"><a class="header-anchor" href="#查看生涯成就"><span>查看生涯成就</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">2048.记录</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">🏅 麦麦 的 2048 生涯<br>最高数字：64<br>最高分数：492<br>达成 2048：0 次</chat-message></chat-panel></div></template>


