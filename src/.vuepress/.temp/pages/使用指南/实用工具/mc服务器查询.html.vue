<template><div><h1 id="mc服务器查询" tabindex="-1"><a class="header-anchor" href="#mc服务器查询"><span>MC服务器查询</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p><a href="https://koishi.chat" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/框架-koishi-5445a2?style=flat" alt="" loading="lazy"></a> <a href="https://www.npmjs.com/package/koishi-plugin-mcmotd-customserver-canvas" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/koishi-plugin-mcmotd-customserver-canvas" alt="" loading="lazy"></a></p>
<p><strong>指令名称</strong>: MBS/MJS</p>
<p><strong>功能描述</strong>: 查询Minecraft Java版和基岩版服务器信息</p>
<h2 id="架构图" tabindex="-1"><a class="header-anchor" href="#架构图"><span>架构图</span></a></h2>
<Mermaid code="eJx1ks1OwkAQx+88xcQ7Gl/ABD1iITXh1HgopQpGWkILepSoiBoCAgcVwjeCYoATGjD4Lobd1rew7ZaPQp1DuzPz2/9MZ3p0Kp5xQTYqw/6BAzTzMUqhg1Mfh4ZnPKSY/zjKRoKwHxJi50bIEnYBQ9OoV9duKd0+uTgzmtZyixAvBBzrAh4xwJ9IwOjvTe1wEBPkUJi3Ks3pXQ1kIxwr41Ia3dWslG4eM2/NWEpbBPeAcYshKRjCtSQuD9cF3WZ+PePyMmyAjch81CkKvF9cqakbRTFhLizKAScXk2QxLPHRuIZzrBBnpfUWV8/ztn3gdO5o8zQcmtY82Ph5qAIepnCivzUd3U/Hww0D8hiMx0Rq4BX4XVGG+PY2SmfUXo9Q7sWG3SZaBwKo7QYuZwnm8hqIy2syDSClpl/V34vcstRMpQnq4FL/izK5eUsUZSAUZTItwJWW2q+THaKnjj32AkqhglNZVJwotzf2TBvU7wIqlpVxHpdLdg11YPr5rJdpXinZpP1nvQLKp9GogAYJtXFtp/L2zxzJtC0j75piZDcEW93cO+DHidIcLbftc/wBW1suag=="></Mermaid><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>MBS &#x3C;地址(可带端口)> [端口(选填)]</span></span>
<span class="line"><span>MJS &#x3C;地址(可带端口)> [端口(选填)]</span></span>
<span class="line"><span>motdbe &#x3C;地址(可带端口)> [端口(选填)]</span></span>
<span class="line"><span>motdje &#x3C;地址(可带端口)> [端口(选填)]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
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
<td>地址</td>
<td>文本</td>
<td>是</td>
<td>要查询的服务器地址</td>
<td>localhost</td>
</tr>
<tr>
<td>端口</td>
<td>数字</td>
<td>否</td>
<td>服务器端口号</td>
<td>25565</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="查询-基岩版-服务器" tabindex="-1"><a class="header-anchor" href="#查询-基岩版-服务器"><span>查询 <code v-pre>基岩版</code> 服务器</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">MBS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/mc服务器查询2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查询-指定端口-的-基岩版-服务器" tabindex="-1"><a class="header-anchor" href="#查询-指定端口-的-基岩版-服务器"><span>查询 <code v-pre>指定端口</code> 的 <code v-pre>基岩版</code> 服务器</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">MBS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/mc服务器查询2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="查询-java版-服务器" tabindex="-1"><a class="header-anchor" href="#查询-java版-服务器"><span>查询 <code v-pre>Java版</code> 服务器</span></a></h3>
<h4 id="查询-java版-服务器-1" tabindex="-1"><a class="header-anchor" href="#查询-java版-服务器-1"><span>查询 <code v-pre>Java版</code> 服务器</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">MJS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/mc服务器查询3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查询-指定端口-的-java-版服务器" tabindex="-1"><a class="header-anchor" href="#查询-指定端口-的-java-版服务器"><span>查询 <code v-pre>指定端口</code> 的 <code v-pre>Java</code> 版服务器</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">MJS play.simpfun.cn 36877</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/mc服务器查询4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


