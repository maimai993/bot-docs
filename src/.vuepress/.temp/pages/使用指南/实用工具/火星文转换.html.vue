<template><div><h1 id="火星文转换" tabindex="-1"><a class="header-anchor" href="#火星文转换"><span>火星文转换</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将简体中文和火星文互相转换</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>火星文 &#x3C;文本></span></span>
<span class="line"><span>反火星文 &#x3C;文本></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
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
<td>文本</td>
<td>文本</td>
<td>是</td>
<td>要转换的文本内容</td>
<td>你好啊</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="简体中文转火星文" tabindex="-1"><a class="header-anchor" href="#简体中文转火星文"><span>简体中文转火星文</span></a></h3>
<h4 id="转换-你好啊-为火星文" tabindex="-1"><a class="header-anchor" href="#转换-你好啊-为火星文"><span>转换&quot;你好啊&quot;为火星文</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">火星文 你好啊</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
沵恏娿
</chat-message>
</chat-panel>
<h4 id="转换-今天天气不错-为火星文" tabindex="-1"><a class="header-anchor" href="#转换-今天天气不错-为火星文"><span>转换&quot;今天天气不错&quot;为火星文</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">火星文 今天天气不错</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
妗兲兲気芣諎
</chat-message>
</chat-panel>
<h3 id="火星文转简体中文" tabindex="-1"><a class="header-anchor" href="#火星文转简体中文"><span>火星文转简体中文</span></a></h3>
<h4 id="转换-沵恏娿-为简体中文" tabindex="-1"><a class="header-anchor" href="#转换-沵恏娿-为简体中文"><span>转换&quot;沵恏娿&quot;为简体中文</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">反火星文 沵恏娿</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
你好啊
</chat-message>
</chat-panel>
<h4 id="转换-妗兲兲気芣諎-为简体中文" tabindex="-1"><a class="header-anchor" href="#转换-妗兲兲気芣諎-为简体中文"><span>转换&quot;妗兲兲気芣諎&quot;为简体中文</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">反火星文 妗兲兲気芣諎</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
今天天气不错
</chat-message>
</chat-panel>
</div></template>


