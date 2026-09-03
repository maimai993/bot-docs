<template><div><h1 id="扫雷" tabindex="-1"><a class="header-anchor" href="#扫雷"><span>扫雷</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p><a href="https://koishi.chat" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/框架-koishi-5445a2?style=flat" alt="" loading="lazy"></a> <a href="https://www.npmjs.com/package/koishi-plugin-minesweeper-ending" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/koishi-plugin-minesweeper-ending" alt="" loading="lazy"></a></p>
<p><strong>指令名称</strong>: ed</p>
<p><strong>功能描述</strong>: 扫雷残局游戏，无猜模式</p>
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
<td>查看地雷位置</td>
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
<p>（示例待补充）</p>
</div></template>


