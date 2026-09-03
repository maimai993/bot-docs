<template><div><h1 id="邦多利猜猜歌" tabindex="-1"><a class="header-anchor" href="#邦多利猜猜歌"><span>邦多利猜猜歌</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>邦多利（BanG Dream!）猜猜歌小游戏，支持缓存和别名机制</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ccg</span></span>
<span class="line"><span>ccg.answer</span></span>
<span class="line"><span>ccg.stop</span></span>
<span class="line"><span>ccg.tips</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ccg</td>
<td>开始猜歌</td>
</tr>
<tr>
<td>ccg.answer</td>
<td>作答</td>
</tr>
<tr>
<td>ccg.stop</td>
<td>停止游戏</td>
</tr>
<tr>
<td>ccg.tips</td>
<td>查看提示</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">ccg</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">语音发送中...</chat-message>
<chat-message nickname="麦麦" type="user">ccg.answer 我不知道</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">那么答案是：</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/08f99c16de6123a367a7553750f0baaa.png" />
歌曲id：767
乐队：Afterglow
歌曲名：Choco Typhooooon!!
关键词：Choco Typhooooon!!，767
截取时间点：43s
</chat-message>
<chat-message nickname="麦麦" type="user">ccg</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">语音发送中...</chat-message>
<chat-message nickname="麦麦" type="user">ccg.tips</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">提示：乐队：Poppin'Party×友希那</chat-message>
<chat-message nickname="麦麦" type="user">ccg.stop</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">游戏已停止</chat-message>
</chat-panel>
</div></template>


