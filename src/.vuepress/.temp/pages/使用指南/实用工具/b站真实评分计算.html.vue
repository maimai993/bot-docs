<template><div><h1 id="b站真实评分计算" tabindex="-1"><a class="header-anchor" href="#b站真实评分计算"><span>B站真实评分计算</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>获取B站番剧评论并计算真实评分</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>b站评分 &#x3C;name></span></span></code></pre>
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
<td>name</td>
<td>文本</td>
<td>是</td>
<td>要查询的B站番剧名称或ID</td>
<td>有兽焉</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h3>
<h4 id="查询-有兽焉-评分" tabindex="-1"><a class="header-anchor" href="#查询-有兽焉-评分"><span>查询 <code v-pre>有兽焉</code> 评分</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">b站评分 有兽焉</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
正在搜索番剧信息，本次最大时间限制为 240 秒
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>‬======= 详细统计结果 =======<br>
当前时间：2026/9/1 18:37:14<br>
番剧名称：有兽焉<br>
‬----------------------------<br>
短评统计：<br>
• 平均分：10.0<br>
• 已收集样本：780 条<br>
• 官方标称总数：2902 条<br>
‬----------------------------<br>
长评统计：<br>
• 平均分：9.4<br>
• 已收集样本：40 条<br>
• 官方标称总数：40 条<br>
‬----------------------------<br>
综合统计：<br>
• 总平均分：9.9<br>
• 总已收集样本：820 条<br>
‬----------------------------<br>
官方数据：<br>
• 官方评分：9.8<br>
• 官方样本：10870 条<br>
‬==============================</p>
</chat-message>
</chat-panel>
</div></template>


