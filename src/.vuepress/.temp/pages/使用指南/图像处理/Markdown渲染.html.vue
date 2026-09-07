<template><div><h1 id="markdown渲染" tabindex="-1"><a class="header-anchor" href="#markdown渲染"><span>Markdown渲染</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>将Markdown文本渲染为图片并发送</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>md &#x3C;markdown文本></span></span></code></pre>
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
<td>markdown文本</td>
<td>文本</td>
<td>是</td>
<td>要渲染的Markdown内容</td>
<td><code v-pre># 标题\n这是一段**粗体**文字</code></td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本渲染" tabindex="-1"><a class="header-anchor" href="#基本渲染"><span>基本渲染</span></a></h3>
<h4 id="渲染简单markdown文本" tabindex="-1"><a class="header-anchor" href="#渲染简单markdown文本"><span>渲染简单Markdown文本</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>md # 标题</span></span>
<span class="line"><span>这是一段粗体文字，这是斜体文字。</span></span>
<span class="line"><span>列表项1</span></span>
<span class="line"><span>列表项2</span></span>
<span class="line"><span>这是一段引用</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">
<p>md # 标题<br>
这是一段<strong>粗体</strong>文字，这是<em>斜体</em>文字。</p>
<ul>
<li>列表项1</li>
<li>列表项2</li>
</ul>
<blockquote>
这是一段引用
</blockquote>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/Markdown渲染/1.jpg" />
</chat-message>
</chat-panel>
<h3 id="数学公式渲染" tabindex="-1"><a class="header-anchor" href="#数学公式渲染"><span>数学公式渲染</span></a></h3>
<h4 id="渲染katex数学公式" tabindex="-1"><a class="header-anchor" href="#渲染katex数学公式"><span>渲染KaTeX数学公式</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>md # 数学公式示例</span></span>
<span class="line"><span>行内公式：</span></span>
<span class="line"><span>$E = mc^2$</span></span>
<span class="line"><span>块级公式：</span></span>
<span class="line"><span>$$</span></span>
<span class="line"><span>\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}</span></span>
<span class="line"><span>$$</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">
<p>md # 数学公式示例</p>
<p>行内公式：</p>
<p>$E = mc^2$</p>
<p>块级公式：</p>
<p>$$<br>
\int_{-\infty}^{\infty} e<sup>{-x</sup>2} dx = \sqrt{\pi}<br>
$$</p>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/Markdown渲染/2.jpg" />
</chat-message>
</chat-panel>
</div></template>


