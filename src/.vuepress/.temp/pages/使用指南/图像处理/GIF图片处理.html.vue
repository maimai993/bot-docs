<template><div><h1 id="gif图片处理" tabindex="-1"><a class="header-anchor" href="#gif图片处理"><span>GIF图片处理</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>提供多种GIF图片处理功能，包括倒放、回弹、滑动、旋转、转向等效果</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif [选项] [图片]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="选项说明" tabindex="-1"><a class="header-anchor" href="#选项说明"><span>选项说明</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>简写</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--rebound</code></td>
<td><code v-pre>-b</code></td>
<td>无</td>
<td>回弹效果（正放+倒放）</td>
</tr>
<tr>
<td><code v-pre>--reverse</code></td>
<td><code v-pre>-r</code></td>
<td>无</td>
<td>倒放 GIF</td>
</tr>
<tr>
<td><code v-pre>--frame</code></td>
<td><code v-pre>-f</code></td>
<td>number</td>
<td>指定处理gif的帧间隔</td>
</tr>
<tr>
<td><code v-pre>--slide</code></td>
<td><code v-pre>-l</code></td>
<td>string</td>
<td>滑动方向 (上/下/左/右)</td>
</tr>
<tr>
<td><code v-pre>--rotate</code></td>
<td><code v-pre>-o</code></td>
<td>string</td>
<td>旋转方向 (顺/逆)</td>
</tr>
<tr>
<td><code v-pre>--turn</code></td>
<td><code v-pre>-t</code></td>
<td>string</td>
<td>转向角度 (上/下/左/右/左上/左下/右上/右下/0-360)</td>
</tr>
<tr>
<td><code v-pre>--shake</code></td>
<td><code v-pre>-s</code></td>
<td>无</td>
<td>上下震动效果</td>
</tr>
<tr>
<td><code v-pre>--information</code></td>
<td><code v-pre>-i</code></td>
<td>无</td>
<td>显示 GIF 信息</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="回弹效果" tabindex="-1"><a class="header-anchor" href="#回弹效果"><span>回弹效果</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -b</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -b</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/1.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/2.gif" />
图片信息：
文件大小：4636.02 KB
图片尺寸：400x679
帧数：58
帧间隔：66.72 毫秒
帧率：14.99 FPS
总时长：3.87 秒
</chat-message>
</chat-panel>
<h3 id="倒放gif" tabindex="-1"><a class="header-anchor" href="#倒放gif"><span>倒放GIF</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -r</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/3.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/4.gif" />
图片信息：
文件大小：1892.95 KB
图片尺寸：240x240
帧数：200
帧间隔：30.00 毫秒
帧率：33.33 FPS
总时长：6.00 秒
</chat-message>
</chat-panel>
<h3 id="右滑效果" tabindex="-1"><a class="header-anchor" href="#右滑效果"><span>右滑效果</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -l 右</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -l 右</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/5.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/6.gif" />
图片信息：
文件大小：1732.19 KB
图片尺寸：400x400
帧数：17
帧间隔：50.00 毫秒
帧率：20.00 FPS
总时长：0.85 秒
</chat-message>
</chat-panel>
<h3 id="顺时针旋转" tabindex="-1"><a class="header-anchor" href="#顺时针旋转"><span>顺时针旋转</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -o 顺</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -o 顺</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/5.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/7.gif" />
图片信息：
文件大小：1667.81 KB
图片尺寸：400x400
帧数：17
帧间隔：50.00 毫秒
帧率：20.00 FPS
总时长：0.85 秒
</chat-message>
</chat-panel>
<h3 id="转向30度" tabindex="-1"><a class="header-anchor" href="#转向30度"><span>转向30度</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -t 30</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -t 30</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/5.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/8.gif" />
</chat-message>
</chat-panel>
<h3 id="加速gif" tabindex="-1"><a class="header-anchor" href="#加速gif"><span>加速gif</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>gif -f 20</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">gif -f 20</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">
<img src="@source/img/GIF图片处理/5.gif" />
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/GIF图片处理/9.gif" />
</chat-message>
</chat-panel>
</div></template>


