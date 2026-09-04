<template><div><h1 id="连连看" tabindex="-1"><a class="header-anchor" href="#连连看"><span>连连看</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>群内连连看消除小游戏</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>连连看</span></span>
<span class="line"><span>连连看.开始</span></span>
<span class="line"><span>连连看.连 &#x3C;两个位置></span></span>
<span class="line"><span>连连看.重排</span></span>
<span class="line"><span>连连看.设置.尺寸 &#x3C;大小></span></span>
<span class="line"><span>连连看.设置.限时 &#x3C;时间></span></span>
<span class="line"><span>连连看.结束</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>连连看</td>
<td>查看游戏帮助</td>
</tr>
<tr>
<td>连连看.开始</td>
<td>开始游戏</td>
</tr>
<tr>
<td>连连看.连 <code v-pre>&lt;位置&gt;</code></td>
<td>消除两个图案</td>
</tr>
<tr>
<td>连连看.重排</td>
<td>重新排列图案</td>
</tr>
<tr>
<td>连连看.设置.尺寸 <code v-pre>&lt;大小&gt;</code></td>
<td>设置棋盘尺寸</td>
</tr>
<tr>
<td>连连看.设置.限时 <code v-pre>&lt;时间&gt;</code></td>
<td>设置限时</td>
</tr>
<tr>
<td>连连看.结束</td>
<td>结束游戏</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">连连看.开始</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">游戏开始咯~<br>大小5x6 图案数9<br>连接图案请使用<br>"连连看.连"<br>需要重排请使用<br>"连连看.重排"</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/f011b20678a951dbda0c02ec1dcfb2ac.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">连连看.连 2 4 6 7 16 22 24 27 19 20</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/793814ef5bf5ddeed666ac56f6d17019.png" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">5连击！ 得分 310</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/4f0e8439a16517f5729cf8e58a0a1b35.png" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">当前得分 310</chat-message>
<chat-message nickname="麦麦" type="user">连连看.连 10 5 1 8 13 9 12 14 18 28 25 23 21 17</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/90b24f8edacb82cc955b10c247446270.png" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">7连击！ 得分 1240</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/64de2df07200ed2e0dffa980354dd7e4.png" />
</chat-message>
<chat-message nickname="麦麦" type="user">连连看.连 26 11 0 15 3 29</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/00a716972c453277c141f67cb434c31e.png" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">3连击！ 得分 70</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/98988daa73a80e2bfc2bd84a06b8f615.png" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">所有的图案都被消除啦~</chat-message>
</chat-panel>
</div></template>


