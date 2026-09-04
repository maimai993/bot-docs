<template><div><h1 id="扫雷" tabindex="-1"><a class="header-anchor" href="#扫雷"><span>扫雷</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>扫雷残局游戏，无猜模式</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ed [行] [列] [雷]</span></span>
<span class="line"><span>ed.s &#x3C;格子编号></span></span>
<span class="line"><span>ed.f &#x3C;格子编号></span></span>
<span class="line"><span>ed.l</span></span>
<span class="line"><span>ed.n</span></span>
<span class="line"><span>ed.end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ed [行] [列] [雷]</td>
<td>开启残局，默认 4x4x6</td>
</tr>
<tr>
<td>ed.s <code v-pre>&lt;编号&gt;</code></td>
<td>打开格子</td>
</tr>
<tr>
<td>ed.f <code v-pre>&lt;编号&gt;</code></td>
<td>标记地雷</td>
</tr>
<tr>
<td>ed.l</td>
<td>获取扫雷所有的答案</td>
</tr>
<tr>
<td>ed.n</td>
<td>刷新残局</td>
</tr>
<tr>
<td>ed.end</td>
<td>结束当前游戏</td>
</tr>
<tr>
<td>ed.生涯 [@用户]</td>
<td>查看玩家生涯</td>
</tr>
<tr>
<td>ed.r</td>
<td>查看最强扫雷榜单</td>
</tr>
<tr>
<td>ed.fight</td>
<td>开启扫雷挑战模式</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">ed</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
✨<br>雷数：6<br>剩余BV：5
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/559df39675b1cb2821d615d132c3a7b5.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">ed.l</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
✨<br>雷数：6<br>剩余BV：5
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/a0232dd001ff1b28fe3a0df3a34fdd2f.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">ed.fight</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">今天已经挑战过了，门票将收取 10 积分</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">请准备！3s 后开始挑战，输入取消可以放弃挑战</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
✨<br>雷数：20<br>剩余BV：44
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/1b765626cd75d258b223be6614c65b2a.png" />
</chat-message>
</chat-panel></div></template>


