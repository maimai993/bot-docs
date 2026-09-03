<template><div><h1 id="扮演游戏掷骰工具" tabindex="-1"><a class="header-anchor" href="#扮演游戏掷骰工具"><span>扮演游戏掷骰工具</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p><a href="https://koishi.chat" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/框架-koishi-5445a2?style=flat" alt="" loading="lazy"></a> <a href="https://www.npmjs.com/package/koishi-plugin-trpgdice" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/koishi-plugin-trpgdice" alt="" loading="lazy"></a></p>
<p><strong>指令名称</strong>: roll</p>
<p><strong>功能描述</strong>: TRPG 跑团掷骰工具，支持多种骰子表达式与属性检定</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>roll &#x3C;骰子表达式> [理由]</span></span>
<span class="line"><span>rcheck &#x3C;属性值> [理由]</span></span>
<span class="line"><span>rhide &#x3C;表达式></span></span>
<span class="line"><span>dnd [数量]</span></span>
<span class="line"><span>rcoin</span></span></code></pre>
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
<td>roll <code v-pre>&lt;表达式&gt;</code></td>
<td>投掷骰子，如 roll 2d6+3</td>
</tr>
<tr>
<td>rcheck <code v-pre>&lt;属性值&gt;</code></td>
<td>属性检定</td>
</tr>
<tr>
<td>rhide <code v-pre>&lt;表达式&gt;</code></td>
<td>暗骰（隐藏结果）</td>
</tr>
<tr>
<td>dnd [数量]</td>
<td>DND 骰子</td>
</tr>
<tr>
<td>rcoin</td>
<td>掷硬币</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<p>（示例待补充）</p>
</div></template>


