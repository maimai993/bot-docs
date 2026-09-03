<template><div><h1 id="抽象话转换" tabindex="-1"><a class="header-anchor" href="#抽象话转换"><span>抽象话转换</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将中文转换为emoji抽象话，或将抽象话还原为拼音</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>抽象话 &#x3C;text></span></span>
<span class="line"><span>还原抽象话 &#x3C;text></span></span></code></pre>
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
<td>text</td>
<td>文本</td>
<td>是</td>
<td>要转换或还原的内容</td>
<td>需要被抽象的话语</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="转换为抽象话" tabindex="-1"><a class="header-anchor" href="#转换为抽象话"><span>转换为抽象话</span></a></h3>
<h4 id="将普通文本转换为抽象话" tabindex="-1"><a class="header-anchor" href="#将普通文本转换为抽象话"><span>将普通文本转换为抽象话</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">抽象话 需要被抽象的话语</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
‍⏭💊被🤡🐘💦🌸语
</chat-message>
</chat-panel>
<h4 id="将中文句子转换为抽象话" tabindex="-1"><a class="header-anchor" href="#将中文句子转换为抽象话"><span>将中文句子转换为抽象话</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">抽象话 真的太抽象啦</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
💉💦太🤡🐘🌶！
</chat-message>
</chat-panel>
<h3 id="还原抽象话" tabindex="-1"><a class="header-anchor" href="#还原抽象话"><span>还原抽象话</span></a></h3>
<h4 id="将抽象话还原为拼音" tabindex="-1"><a class="header-anchor" href="#将抽象话还原为拼音"><span>将抽象话还原为拼音</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">还原抽象话 ‍⏭💊被🤡🐘💦🌸语</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
‍-⏭-yao-被-chou-xiang-di/shui-hua-语
</chat-message>
</chat-panel>
<h4 id="将复杂抽象话还原为拼音" tabindex="-1"><a class="header-anchor" href="#将复杂抽象话还原为拼音"><span>将复杂抽象话还原为拼音</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">还原抽象话 💉💦太🤡🐘🌶！</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
zhen-di/shui-太-chou-xiang-na/la-！
</chat-message>
</chat-panel>
</div></template>


