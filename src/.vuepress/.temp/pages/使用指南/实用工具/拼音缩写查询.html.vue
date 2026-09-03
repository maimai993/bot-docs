<template><div><h1 id="拼音缩写查询" tabindex="-1"><a class="header-anchor" href="#拼音缩写查询"><span>拼音缩写查询</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>中文缩写词搜索</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>abbr &#x3C;text></span></span></code></pre>
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
<td>text</td>
<td>文本</td>
<td>是</td>
<td>要查询的拼音缩写</td>
<td>myt</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h3>
<h4 id="查询-myt-拼音缩写" tabindex="-1"><a class="header-anchor" href="#查询-myt-拼音缩写"><span>查询 <code v-pre>myt</code> 拼音缩写</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">abbr myt</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
myt：没有头, 麦芽糖, 米羽糖
</chat-message>
</chat-panel>
<h4 id="查询-yyds-拼音缩写" tabindex="-1"><a class="header-anchor" href="#查询-yyds-拼音缩写"><span>查询 <code v-pre>yyds</code> 拼音缩写</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">abbr yyds</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
yyds：永远滴神, 永远的神, 永远单身
</chat-message>
</chat-panel>
<h4 id="查询-xswl-拼音缩写" tabindex="-1"><a class="header-anchor" href="#查询-xswl-拼音缩写"><span>查询 <code v-pre>xswl</code> 拼音缩写</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">abbr xswl</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
xswl：笑死我了, 想死我了, 想死我了
</chat-message>
</chat-panel>
<h3 id="查询不存在的缩写" tabindex="-1"><a class="header-anchor" href="#查询不存在的缩写"><span>查询不存在的缩写</span></a></h3>
<h4 id="查询不存在的缩写-1" tabindex="-1"><a class="header-anchor" href="#查询不存在的缩写-1"><span>查询不存在的缩写</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">abbr abcdefg</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
未找到对应的缩写。
</chat-message>
</chat-panel>
</div></template>


