<template><div><h1 id="宝可梦集换式卡片查询" tabindex="-1"><a class="header-anchor" href="#宝可梦集换式卡片查询"><span>宝可梦集换式卡片查询</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>查询宝可梦集换式卡片游戏(PTCG)的卡片信息，包括宝可梦卡、训练师卡和能量卡</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ptcg [-s 系列] [-l 语言] &#x3C;名称或ID></span></span></code></pre>
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
<td>名称或ID</td>
<td>文本</td>
<td>是</td>
<td>卡片名称或ID</td>
<td>大尾立 / swsh3-136</td>
</tr>
<tr>
<td>系列</td>
<td>文本</td>
<td>否</td>
<td>指定卡片系列</td>
<td>swsh3</td>
</tr>
<tr>
<td>语言</td>
<td>文本</td>
<td>否</td>
<td>查询语言</td>
<td>zh-tw / zh-cn / en / ja</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="名称查询" tabindex="-1"><a class="header-anchor" href="#名称查询"><span>名称查询</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">ptcg 大尾立</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>查询到大尾立的全部结果：</p>
<ol>
<li>大尾立 [SV9-077]</li>
<li>大尾立 [SC2b-105]</li>
<li>大尾立 [SC2D-118]<br>
第 1 页 / 共 1 页<br>
请at并发送数字选择卡片, 或at并发送&quot;跳页 页码&quot;切换页面</li>
</ol>
</chat-message>
<chat-message nickname="麦麦" type="user">1</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p><img src="@source/使用指南/实用工具/宝可梦.webp" alt="" loading="lazy"><br>
大尾立<br>
HP：120  屬性：[無]<br>
階段：Stage1<br>
•抓  [無]<br>
40<br>
•噴射頭擊  [無][無]<br>
70<br>
弱點：[鬥] ×2   撤退：1<br>
卡標: I  稀有度: Common<br>
所屬系列: 對戰搭檔 (SV9)<br>
ID: SV9-077</p>
</chat-message>
</chat-panel>
<h3 id="id精确查询" tabindex="-1"><a class="header-anchor" href="#id精确查询"><span>ID精确查询</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">ptcg SV9-077</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p><img src="@source/使用指南/实用工具/宝可梦.webp" alt="" loading="lazy"><br>
大尾立<br>
HP：120  屬性：[無]<br>
階段：Stage1<br>
•抓  [無]<br>
40<br>
•噴射頭擊  [無][無]<br>
70<br>
弱點：[鬥] ×2   撤退：1<br>
卡標: I  稀有度: Common<br>
所屬系列: 對戰搭檔 (SV9)<br>
ID: SV9-077</p>
</chat-message>
</chat-panel>
<h3 id="指定系列查询" tabindex="-1"><a class="header-anchor" href="#指定系列查询"><span>指定系列查询</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">ptcg -s SV9 大尾立</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p><img src="@source/使用指南/实用工具/宝可梦.webp" alt="" loading="lazy"><br>
大尾立<br>
HP：120  屬性：[無]<br>
階段：Stage1<br>
•抓  [無]<br>
40<br>
•噴射頭擊  [無][無]<br>
70<br>
弱點：[鬥] ×2   撤退：1<br>
卡標: I  稀有度: Common<br>
所屬系列: 對戰搭檔 (SV9)<br>
ID: SV9-077</p>
</chat-message>
</chat-panel>
<h3 id="多结果分页查询" tabindex="-1"><a class="header-anchor" href="#多结果分页查询"><span>多结果分页查询</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">ptcg 皮卡丘</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>查询到皮卡丘的全部结果：</p>
<ol>
<li>皮卡丘V [SN-001]</li>
<li>皮卡丘 [SV-P-001]</li>
<li>皮卡丘V [SDP-001]</li>
<li>皮卡丘 [S8a-001]</li>
<li>皮卡丘ex [SVC-001]</li>
<li>皮卡丘 [S10a-014]</li>
<li>皮卡丘 [SV2D-017]</li>
<li>皮卡丘V [SH-019]</li>
<li>皮卡丘V [S8a-020]</li>
<li>衝浪皮卡丘V [S8a-021]</li>
</ol>
<p>第 1 页 / 共 5 页<br>
请at并发送数字选择卡片, 或at并发送&quot;跳页 页码&quot;切换页面</p>
</chat-message>
</chat-panel>
<h2 id="卡片类型说明" tabindex="-1"><a class="header-anchor" href="#卡片类型说明"><span>卡片类型说明</span></a></h2>
<h3 id="宝可梦卡" tabindex="-1"><a class="header-anchor" href="#宝可梦卡"><span>宝可梦卡</span></a></h3>
<ul>
<li><strong>HP</strong>: 生命值</li>
<li><strong>属性</strong>: 卡片属性（无、草、水、火、斗、超、恶、钢、妖、电、龙）</li>
<li><strong>阶段</strong>: 进化阶段（基础、1、2）</li>
<li><strong>特性</strong>: 宝可梦的特殊能力</li>
<li><strong>招式</strong>: 攻击招式的名称、属性和效果</li>
<li><strong>弱点</strong>: 受到特定属性攻击时的伤害倍率</li>
<li><strong>抵抗力</strong>: 对特定属性攻击的伤害减免</li>
<li><strong>撤退</strong>: 撤退所需的能量数量</li>
</ul>
<h3 id="训练师卡" tabindex="-1"><a class="header-anchor" href="#训练师卡"><span>训练师卡</span></a></h3>
<ul>
<li><strong>类型</strong>: 训练师卡的类型（物品、支援者、竞技场等）</li>
<li><strong>效果</strong>: 卡片的效果描述</li>
</ul>
<h3 id="能量卡" tabindex="-1"><a class="header-anchor" href="#能量卡"><span>能量卡</span></a></h3>
<ul>
<li><strong>类型</strong>: 能量类型</li>
<li><strong>效果</strong>: 特殊能量卡的效果</li>
</ul>
</div></template>


