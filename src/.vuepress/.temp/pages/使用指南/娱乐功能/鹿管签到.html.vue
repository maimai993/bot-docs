<template><div><h1 id="鹿管签到" tabindex="-1"><a class="header-anchor" href="#鹿管签到"><span>鹿管签到</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>日历效果的签到插件，支持签到道具、排行榜、补签等</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>鹿管签到</span></span>
<span class="line"><span>鹿管签到/鹿 [用户]</span></span>
<span class="line"><span>鹿管签到/帮鹿 [用户]</span></span>
<span class="line"><span>鹿管签到/看鹿 [用户]</span></span>
<span class="line"><span>鹿管签到/鹿榜</span></span>
<span class="line"><span>鹿管签到/补鹿 [日期] [用户]</span></span>
<span class="line"><span>鹿管签到/戒鹿 [日期]</span></span>
<span class="line"><span>鹿管签到/鹿管购买 [道具]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>鹿管签到</td>
<td>查看帮助</td>
</tr>
<tr>
<td>鹿</td>
<td>签到</td>
</tr>
<tr>
<td>鹿 [用户]</td>
<td>帮助用户签到</td>
</tr>
<tr>
<td>鹿榜</td>
<td>查看签到排行榜</td>
</tr>
<tr>
<td>补鹿 [日期] [用户]</td>
<td>补签某日</td>
</tr>
<tr>
<td>戒鹿 [日期]</td>
<td>取消某日签到</td>
</tr>
<tr>
<td>鹿管购买 [道具]</td>
<td>购买签到道具</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">鹿</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/18cc0c4ddd065c4d8a90aa5030eda6d1.png" />
你已经签到1次啦~ 继续加油咪~<br>本次签到获得 100 点货币。还可以帮助未签到的人签到，以获取补签次数哦！<br>使用示例： 鹿  @用户
</chat-message>
<chat-message nickname="麦麦" type="user">鹿</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/583f96184c4782706384f411a44a9843.png" />
你已经签到3次啦~ 继续加油咪~<br>本次签到获得 100 点货币。还可以帮助未签到的人签到，以获取补签次数哦！<br>使用示例： 鹿  @用户
</chat-message>
<chat-message nickname="麦麦" type="user">鹿 @我是可怜卫生员</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你成功帮助 我是可怜卫生员 签到！获得 150 点货币。</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/a16ca9772f4ed3dfe05a02856866b000.png" />你已经签到1次啦~ 继续加油咪~<br>本次签到获得 100 点货币。 还可以帮助未签到的人签到，以获取补签次数哦！<br>使用示例： 鹿  @用户
</chat-message>
<chat-message nickname="麦麦" type="user">鹿管购买</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">指令：鹿管购买 [item]<br>购买签到道具<br>用法：<br>鹿管购买<br>示例：<br>鹿管购买 锁<br>鹿管购买 钥匙</chat-message>
<chat-message nickname="麦麦" type="user">戒鹿</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/56061a3f76b833af1eecdfb2a848e510.png" />
你已成功取消4号的签到。点数变化：-100
</chat-message>
</chat-panel>
</div></template>


