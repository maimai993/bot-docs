<template><div><h1 id="大学查询" tabindex="-1"><a class="header-anchor" href="#大学查询"><span>大学查询</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>查询大学基本信息，包括成立时间、占地面积、学校地址和简介</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>学校查询 &#x3C;query></span></span></code></pre>
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
<td>query</td>
<td>文本</td>
<td>是</td>
<td>要查询的大学名称</td>
<td>清华大学</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h3>
<h4 id="查询-清华大学-信息" tabindex="-1"><a class="header-anchor" href="#查询-清华大学-信息"><span>查询 <code v-pre>清华大学</code> 信息</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">学校查询 清华大学</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>找到如下学校信息：<br>
【清华大学】<br>
[成立时间] 1911年<br>
[占地面积] 6632亩<br>
[学校地址] 北京市海淀区清华园1号<br>
[学校信息] 清华大学建校时间为1911年，占地面积6632亩，隶属于教育部，地址为北京市海淀区清华园1号，学校有44个国家重点学科，13个重点实验室，60个博士学科，65个硕士专业学科，属于985,211,双一流,强基计划学校。</p>
</chat-message>
</chat-panel>
<h4 id="查询-北京大学-信息" tabindex="-1"><a class="header-anchor" href="#查询-北京大学-信息"><span>查询 <code v-pre>北京大学</code> 信息</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">学校查询 北京大学</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>找到如下学校信息：<br>
【北京大学】<br>
[成立时间] 1898年<br>
[占地面积] 7000亩<br>
[学校地址] 北京市海淀区颐和园路5号<br>
[学校信息] 北京大学建校时间为1898年，占地面积7000亩，隶属于教育部，地址为北京市海淀区颐和园路5号，学校有54个国家重点学科，47个重点实验室，49个博士学科，50个硕士专业学科，属于985,211,双一流,强基计划学校。</p>
</chat-message>
</chat-panel></div></template>


