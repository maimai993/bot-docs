<template><div><h1 id="扮演游戏掷骰工具" tabindex="-1"><a class="header-anchor" href="#扮演游戏掷骰工具"><span>扮演游戏掷骰工具</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>TRPG 跑团掷骰工具，支持多种骰子表达式与属性检定</p>
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
<chat-panel>
<chat-message nickname="麦麦" type="user">roll 2d6+3 攻击伤害</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">麦麦由于攻击伤害投掷了2d6+3=(1+2)+3=6</chat-message><chat-message nickname="麦麦" type="user">rcheck 15 力量判定</chat-message><chat-message nickname="麦芽糖bot" type="bot">麦麦进行了力量判定检定1d100=98 大失败！</chat-message><chat-message nickname="麦麦" type="user">rhide 1d20 潜行</chat-message><chat-message nickname="麦芽糖bot" type="bot">麦麦进行了一次暗骰。</chat-message><chat-message nickname="麦麦" type="user">dnd 3</chat-message><chat-message nickname="麦芽糖bot" type="bot">麦麦的人物作成：<br>力量：16，敏捷：11，体质：13，<br>智力：11，魅力：13，感知：12。<br><br>力量：11，敏捷：12，体质：16，<br>智力：10，魅力：15，感知：15。<br><br>力量：9，敏捷：13，体质：11，<br>智力：16，魅力：6，感知：10。</chat-message><chat-message nickname="麦麦" type="user">rcoin 要不要冲锋</chat-message><chat-message nickname="麦芽糖bot" type="bot">麦麦投掷了命运的硬币。结果是：正面。</chat-message><chat-message nickname="麦麦" type="user">roll 3d8+5 火球术</chat-message><chat-message nickname="麦芽糖bot" type="bot">麦麦由于火球术投掷了3d8+5=(2+7+5)+5=19</chat-message></chat-panel>
</div></template>


