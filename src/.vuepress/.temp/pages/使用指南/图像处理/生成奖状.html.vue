<template><div><h1 id="生成奖状" tabindex="-1"><a class="header-anchor" href="#生成奖状"><span>生成奖状</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>生成一张自定义的奖状图片，可指定获奖者、奖项名称和授权单位</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>生成奖状 &#x3C;姓名> &#x3C;奖项> [单位]</span></span></code></pre>
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
<td>姓名</td>
<td>文本</td>
<td>是</td>
<td>获奖者姓名</td>
<td>张三</td>
</tr>
<tr>
<td>奖项</td>
<td>文本</td>
<td>是</td>
<td>奖项名称</td>
<td>galgame糕手</td>
</tr>
<tr>
<td>单位</td>
<td>文本</td>
<td>否</td>
<td>授权单位，如不指定则使用默认值</td>
<td>本群授奖处</td>
</tr>
</tbody>
</table>
<h3 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h3>
<p>插件支持以下配置选项：</p>
<table>
<thead>
<tr>
<th>配置项</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>commandname</td>
<td>string</td>
<td>'生成奖状'</td>
<td>指令名称</td>
</tr>
<tr>
<td>customText</td>
<td>string</td>
<td>'在本学年第一学期中表现优秀，被本群决定评为'</td>
<td>奖状中间的自定义文字</td>
</tr>
<tr>
<td>defaultClassname</td>
<td>string</td>
<td>'本群指定授奖处'</td>
<td>默认的授奖单位</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本奖状生成" tabindex="-1"><a class="header-anchor" href="#基本奖状生成"><span>基本奖状生成</span></a></h3>
<h4 id="生成简单奖状" tabindex="-1"><a class="header-anchor" href="#生成简单奖状"><span>生成简单奖状</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">生成奖状 张三 galgame糕手</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/奖状.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="指定授奖单位" tabindex="-1"><a class="header-anchor" href="#指定授奖单位"><span>指定授奖单位</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">生成奖状 李四 游戏苦手 原神</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/奖状2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


