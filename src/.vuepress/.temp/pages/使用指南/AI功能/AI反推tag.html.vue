<template><div><h1 id="ai-反推tag" tabindex="-1"><a class="header-anchor" href="#ai-反推tag"><span>AI 反推tag</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>图片反推 AI 生成标签，角色识别，NSFW 程度判断</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>tagger.rec [图片]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tagger.rec [图片]</td>
<td>反推标签、角色识别与 NSFW 判断</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">tagger.rec <img src="/logod.png" /></chat-message>
<chat-message nickname="麦芽糖bot" type="bot">正在识别，请稍等...</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">标签：<br>blue eyes, no humans, simple background, solo, white background, smile, paw print, closed mouth, :3, looking at viewer, tears, animal ears, virtual youtuber<br><br>角色：未知<br><br>安全程度：general<br>general (97%)<br>sensitive (2%)<br>questionable (0%)<br>explicit (0%)</chat-message>
</chat-panel>
</div></template>


