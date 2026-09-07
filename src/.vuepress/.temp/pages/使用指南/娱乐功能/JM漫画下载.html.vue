<template><div><h1 id="jm漫画下载" tabindex="-1"><a class="header-anchor" href="#jm漫画下载"><span>JM漫画下载</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>获取 JM 漫画，支持搜索与下载</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>本子 &#x3C;ID></span></span>
<span class="line"><span>jm.search &#x3C;text></span></span></code></pre>
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
<td>ID</td>
<td>数字</td>
<td>是</td>
<td>JM漫画的编号</td>
<td>123456</td>
</tr>
<tr>
<td>text</td>
<td>文本</td>
<td>是</td>
<td>搜索关键词</td>
<td>furry</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>jm.search furry</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">jm.search furry</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">JMID：1468139<br>名称：[demicoeur]某日，鹿的疯狂(furry)[中文][daozun个人机翻]<br>作者：demicoeur<br>分类：同人<br>描述：null<br><br>JMID：1455718<br>名称：【cubedcoconut】灌鸟区VS大狼咬(furry)[中文][daozun个人机翻]<br>作者：cubedcoconut<br>分类：同人<br>描述：null<br><br>JMID：1436932<br>名称：[daozun个人机翻] [ヒジカサプリュイ (ラッコガワ)] 幼狐神社(furry)<br>作者：ラッコガワ<br>分类：短篇<br>描述：null<br><br>JMID：1427476<br>名称：【amayadoriya】海獭酱1(furry)[中文][daozun个人机翻]<br>作者：amayadoriya<br>分类：短篇<br>描述：null<br><br>JMID：1422192<br>名称：【yamuwamu】梦酱：真正的日常(furry)[中文][daozun个人机翻]<br>作者：夜梦ウツツ<br>分类：短篇<br>描述：null<br><br>JMID：1300823<br>名称：[四字真言] 爱弥斯 千珏[AI Generated]<br>作者：四字真言<br>分类：同人<br>描述：null<br><br>JMID：1256211<br>名称：【Alcor】衣物随缘（未完待续）(furry)[中文][daozun个人机翻]<br>作者：Alcor<br>分类：同人<br>描述：null<br><br>JMID：1254502<br>名称：[daozun个人机翻]【nnecgrau】狐在后(furry)[中文]<br>作者：nnecgrau<br>分类：短篇<br>描述：null<br><br>JMID：1238706<br>名称：[Ai翻译] [Wherewolf] Pet Furry Shorts [Chinese]<br>作者：Wherewolf<br>分类：同人<br>描述：null<br><br>JMID：1219517<br>名称：[chung0u0] Furry Big Wave<br>作者：chung0u0<br>分类：同人<br>描述：null<br><br>共 28 条，当前第 1 页，每页 10 条</chat-message>
<chat-message nickname="麦麦" type="user">本子 1455718</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已将 1455718 添加到处理队列，即将开始处理</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<FileMessage
  fileName="1455718_密码0721.pdf"
  :fileSize="9248940"
  fileType="pdf"
/>
</chat-message>
</chat-panel>
</div></template>


