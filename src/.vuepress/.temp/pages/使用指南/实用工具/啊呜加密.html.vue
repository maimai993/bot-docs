<template><div><h1 id="啊呜加密" tabindex="-1"><a class="header-anchor" href="#啊呜加密"><span>啊呜加密</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>兽音加密/解密文本</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>兽语加密 &#x3C;text></span></span>
<span class="line"><span>兽语解密 &#x3C;text></span></span></code></pre>
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
<td>要加密或解密的文本内容</td>
<td>你好世界</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="文本加密" tabindex="-1"><a class="header-anchor" href="#文本加密"><span>文本加密</span></a></h3>
<h4 id="加密普通文本" tabindex="-1"><a class="header-anchor" href="#加密普通文本"><span>加密普通文本</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">兽语加密 你好世界</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">加密成功！
<p>呜嗷呜嗷嗷嗷啊嗷嗷~啊呜~啊~呜呜嗷~嗷呜~啊~嗷呜嗷~嗷啊嗷啊啊~啊</p>
</chat-message>
</chat-panel>
<h3 id="文本解密" tabindex="-1"><a class="header-anchor" href="#文本解密"><span>文本解密</span></a></h3>
<h4 id="解密兽音文本" tabindex="-1"><a class="header-anchor" href="#解密兽音文本"><span>解密兽音文本</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">兽语解密 呜嗷呜嗷嗷嗷啊嗷嗷~啊呜~啊~呜呜嗷~嗷呜~啊~嗷呜嗷~嗷啊嗷啊啊~啊</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
解密成功！
<p>你好世界</p>
</chat-message>
</chat-panel>
</div></template>


