<template><div><h1 id="表情包生成" tabindex="-1"><a class="header-anchor" href="#表情包生成"><span>表情包生成</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>提供多种模板的表情包生成功能，支持自定义文字和图片</p>
<h2 id="主要功能指令" tabindex="-1"><a class="header-anchor" href="#主要功能指令"><span>主要功能指令</span></a></h2>
<h3 id="生成表情包" tabindex="-1"><a class="header-anchor" href="#生成表情包"><span>生成表情包</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>meme generate &#x3C;表情关键词> [参数]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看表情详情" tabindex="-1"><a class="header-anchor" href="#查看表情详情"><span>查看表情详情</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>meme info &#x3C;表情关键词></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看表情列表" tabindex="-1"><a class="header-anchor" href="#查看表情列表"><span>查看表情列表</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>meme list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="随机生成表情" tabindex="-1"><a class="header-anchor" href="#随机生成表情"><span>随机生成表情</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>meme random</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="快捷使用方式" tabindex="-1"><a class="header-anchor" href="#快捷使用方式"><span>快捷使用方式</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;表情关键词> [参数]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="生成-5000兆-表情" tabindex="-1"><a class="header-anchor" href="#生成-5000兆-表情"><span>生成 <code v-pre>5000兆</code> 表情</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">5000兆 我去 洛天依</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/meme1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="生成-rua-表情" tabindex="-1"><a class="header-anchor" href="#生成-rua-表情"><span>生成 <code v-pre>rua</code> 表情</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">rua -圆 @自己</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/meme2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="生成-微信支付-表情-特定参数-自定义二维码链接" tabindex="-1"><a class="header-anchor" href="#生成-微信支付-表情-特定参数-自定义二维码链接"><span>生成 <code v-pre>微信支付</code> 表情 <a href="#%E8%A1%A8%E6%83%85%E7%89%B9%E5%AE%9A%E5%8F%82%E6%95%B0%E7%A4%BA%E4%BE%8B"><code v-pre>特定参数</code></a> <code v-pre>自定义二维码链接</code></span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">微信支付 --message https://tangbot.xyz/</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/meme3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>具体参数用法请查看<a href="#%E8%A1%A8%E6%83%85%E7%89%B9%E5%AE%9A%E5%8F%82%E6%95%B0%E7%A4%BA%E4%BE%8B">表情特定参数示例</a></p>
</div>
<h2 id="完整表情包列表" tabindex="-1"><a class="header-anchor" href="#完整表情包列表"><span>完整表情包列表</span></a></h2>
<figure><img src="@source/使用指南/图像处理/表情包生成.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>该列表仅包含部分表情，请以 <code v-pre>meme list</code> 为准确</p>
</div>
<p>其中 <img src="@source/使用指南/图像处理/表情包生成2.png" width="2.5%"> 代表可修改图片表情<br>
其中 <img src="@source/使用指南/图像处理/表情包生成3.png" width="2.5%"> 代表可修改文字表情</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>部分表情包 <code v-pre>同时</code> 支持修改图片和文字</p>
</div>
<h2 id="表情详情示例" tabindex="-1"><a class="header-anchor" href="#表情详情示例"><span>表情详情示例</span></a></h2>
<h3 id="_5000兆" tabindex="-1"><a class="header-anchor" href="#_5000兆"><span>5000兆</span></a></h3>
<p><strong>关键词</strong>: 5000兆<br>
<strong>需要图片数目</strong>: 0<br>
<strong>需要文字数目</strong>: 2<br>
<strong>默认文字</strong>: [我去, 洛天依]</p>
<h3 id="戒导" tabindex="-1"><a class="header-anchor" href="#戒导"><span>戒导</span></a></h3>
<p><strong>关键词</strong>: 戒导<br>
<strong>需要图片数目</strong>: 1<br>
<strong>需要文字数目</strong>: 0<br>
<strong>参数</strong>:</p>
<ul>
<li><code v-pre>-t/--time &lt;time: str&gt;</code> 指定时间</li>
<li><code v-pre>-n/--name &lt;name: str&gt;</code> 指定名字</li>
</ul>
<h3 id="阿尼亚喜欢" tabindex="-1"><a class="header-anchor" href="#阿尼亚喜欢"><span>阿尼亚喜欢</span></a></h3>
<p><strong>关键词</strong>: 阿尼亚喜欢<br>
<strong>标签</strong>: &quot;间谍过家家&quot;、&quot;阿尼亚·福杰&quot;<br>
<strong>需要图片数目</strong>: 1<br>
<strong>需要文字数目</strong>: 0 ~ 1<br>
<strong>默认文字</strong>: [阿尼亚喜欢这个]</p>
<h2 id="表情特定参数示例" tabindex="-1"><a class="header-anchor" href="#表情特定参数示例"><span>表情特定参数示例</span></a></h2>
<ul>
<li>戒导:<br>
<code v-pre>-t/--time &lt;time&gt;</code> 指定时间<br>
<code v-pre>-n/--name &lt;name&gt;</code> 指定名字</li>
<li>支付宝支付/微信支付:<br>
<code v-pre>-m/--message &lt;message&gt;</code> 指定二维码内容</li>
<li>原神吃:<br>
<code v-pre>-c/--character &lt;character&gt;</code> 指定角色编号</li>
<li>咖波系列:<br>
<code v-pre>-p/--position &lt;position&gt;</code> 指定位置(right/left/both)</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该参数列表仅包含部分表情<br>
您可以使用 <code v-pre>[关键词] -h</code> 查看支持的参数详情</p>
</div>
<chat-panel>
<chat-message nickname="麦麦" type="user">支付宝支付 -h</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/meme5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此帮助图里显示有可用参数 <code v-pre>--message</code> [二维码内容]</p>
</div>
<chat-message nickname="麦麦" type="user">原来这个二维码可以<span style="color: #31de8dff;">自定义内容啊</span></chat-message><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当内容是标准链接时<br>
扫描二维码会自动跳转到该链接</p>
</div>
<chat-message nickname="麦麦" type="user">支付宝支付 --message https://tangbot.xyz/</chat-message><chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/meme6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
</div></template>


