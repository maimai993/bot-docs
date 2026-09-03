<template><div><h1 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助"><span>获取帮助</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>部分指令不会出现在该列表中，具体参考<a href="/features">功能列表</a>为准</p>
</div>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>以图片形式展示帮助信息</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>帮助 [指令]</span></span></code></pre>
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
<td>指令</td>
<td>文本</td>
<td>否</td>
<td>获取指令的具体用法</td>
<td>帮助</td>
</tr>
</tbody>
</table>
<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3>
<h4 id="获取指令列表" tabindex="-1"><a class="header-anchor" href="#获取指令列表"><span>获取指令列表</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">帮助</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<span style="color: #575c63ff;">图片过长已隐藏</span>
</chat-message>
</chat-panel>
<h4 id="获取指定指令-帮助-信息" tabindex="-1"><a class="header-anchor" href="#获取指定指令-帮助-信息"><span>获取指定指令 <code v-pre>帮助</code> 信息</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>部分指令不支持获取帮助，具体的使用方法请查看文档</p>
</div>
<chat-panel>
<chat-message nickname="麦麦" type="user">帮助 帮助</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/获取帮助_帮助的帮助图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>您还可以使用 -h 参数获取该指令的帮助</p>
</div>
<h4 id="使用参数-h-获取指定指令-帮助-信息" tabindex="-1"><a class="header-anchor" href="#使用参数-h-获取指定指令-帮助-信息"><span>使用参数 <code v-pre>-h</code> 获取指定指令 <code v-pre>帮助</code> 信息</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">帮助 -h</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/获取帮助_帮助的帮助图.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


