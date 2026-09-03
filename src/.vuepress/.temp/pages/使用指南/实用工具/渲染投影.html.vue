<template><div><h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>渲染mc投影文件</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>litematic.render &#x3C;url></span></span></code></pre>
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
<td>链接</td>
<td>是</td>
<td>要渲染的文件链接</td>
<td>你好世界</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="自动渲染投影文件" tabindex="-1"><a class="header-anchor" href="#自动渲染投影文件"><span>自动渲染投影文件</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
<FileMessage
    file-name="投影全物品.litematic"
    :file-size="131711"
    download-url=".\投影.litematic"
    file-type="unknown" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p><img src="@source/使用指南/实用工具/渲染投影.png" alt="" loading="lazy"><br>
投影名称：fe16314b-b740-410e-bc0f-eec53dc250e5<br>
保存者游戏 ID：Xiaolongjun<br>
创建时间：2025-04-28 11:47:31<br>
方块数/体积：84781/2255616<br>
尺寸：176 × 89 × 144<br>
Litematic 版本：7<br>
游戏版本：1.21（数据版本：3953）<br>
fe16314b-b740-410e-bc0f-eec53dc250e5 已渲染成功，结果如上</p>
</chat-message>
</chat-panel>
<h3 id="渲染网络投影文件" tabindex="-1"><a class="header-anchor" href="#渲染网络投影文件"><span>渲染网络投影文件</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">
<p>litematic.render <a href="https://www.mcschematic.top/api/schematicFile?uuid=3366cd90-5ba0-4d86-9a69-494a13626ee6" target="_blank" rel="noopener noreferrer">https://www.mcschematic.top/api/schematicFile?uuid=3366cd90-5ba0-4d86-9a69-494a13626ee6</a></p>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p><img src="@source/使用指南/实用工具/渲染投影2.png" alt="" loading="lazy"><br>
投影名称：schematic<br>
保存者游戏 ID：HakariYR<br>
创建时间：2026-04-01 09:23:51<br>
方块数/体积：30810/6793659<br>
尺寸：123 × 323 × 171<br>
Litematic 版本：6<br>
游戏版本：1.20.4（数据版本：3700）<br>
schematic 已渲染成功，结果如上</p>
</chat-message>
</chat-panel>
</div></template>


