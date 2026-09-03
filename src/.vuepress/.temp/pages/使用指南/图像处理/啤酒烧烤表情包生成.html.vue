<template><div><h1 id="啤酒烧烤表情包生成" tabindex="-1"><a class="header-anchor" href="#啤酒烧烤表情包生成"><span>啤酒烧烤表情包生成</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>基于初音未来Project Sekai角色的表情包生成器，支持自定义文字和多种调整选项</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.绘制 [文本内容]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="高级选项" tabindex="-1"><a class="header-anchor" href="#高级选项"><span>高级选项</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.绘制 [文本内容] -n [表情包ID] -x [水平位置] -y [垂直位置] -r [旋转角度] -s [字体大小] -c [启用文本曲线] -l [行间距]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>简写</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>文本内容</td>
<td>-</td>
<td>文本</td>
<td>是</td>
<td>要添加到表情包中的文本，使用 / 可以换行</td>
<td>你好/世界</td>
</tr>
<tr>
<td>表情包ID</td>
<td>-n</td>
<td>数字</td>
<td>否</td>
<td>指定表情包ID，范围0-358</td>
<td>-n 6</td>
</tr>
<tr>
<td>水平位置</td>
<td>-x</td>
<td>数字</td>
<td>否</td>
<td>文本的水平位置，范围0-296</td>
<td>-x 50</td>
</tr>
<tr>
<td>垂直位置</td>
<td>-y</td>
<td>数字</td>
<td>否</td>
<td>文本的垂直位置，范围0-256</td>
<td>-y 100</td>
</tr>
<tr>
<td>旋转角度</td>
<td>-r</td>
<td>数字</td>
<td>否</td>
<td>文本的旋转角度，范围-10到10</td>
<td>-r 2</td>
</tr>
<tr>
<td>字体大小</td>
<td>-s</td>
<td>数字</td>
<td>否</td>
<td>文本字体大小，范围10-100</td>
<td>-s 30</td>
</tr>
<tr>
<td>文本曲线</td>
<td>-c</td>
<td>布尔</td>
<td>否</td>
<td>启用文本曲线效果</td>
<td>-c</td>
</tr>
<tr>
<td>行间距</td>
<td>-l</td>
<td>数字</td>
<td>否</td>
<td>文本上下行间距，范围18-100</td>
<td>-l 25</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本绘制" tabindex="-1"><a class="header-anchor" href="#基本绘制"><span>基本绘制</span></a></h3>
<h4 id="随机表情包绘制" tabindex="-1"><a class="header-anchor" href="#随机表情包绘制"><span>随机表情包绘制</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.绘制 你好世界</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
🎉 表情包绘制完成！</p>
<p>🔍 输入&quot;pjsk.调整&quot;获取调整指令<br>
或直接输入&quot;pjsk.列表.角色分类&quot;开始新的绘制</p>
<p>✨ 期待您的下一个创作！</p>
</chat-message>
</chat-panel>
<h4 id="指定表情包绘制" tabindex="-1"><a class="header-anchor" href="#指定表情包绘制"><span>指定表情包绘制</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.绘制 -n 10 今天天气真好</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
🎉 表情包绘制完成！</p>
<p>🔍 输入&quot;pjsk.调整&quot;获取调整指令<br>
或直接输入&quot;pjsk.列表.角色分类&quot;开始新的绘制</p>
<p>✨ 期待您的下一个创作！</p>
</chat-message>
</chat-panel>
<h5 id="表情包id列表" tabindex="-1"><a class="header-anchor" href="#表情包id列表"><span>表情包id列表</span></a></h5>
<figure><img src="@source/使用指南/图像处理/pjsk.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="多行文本绘制" tabindex="-1"><a class="header-anchor" href="#多行文本绘制"><span>多行文本绘制</span></a></h3>
<h4 id="使用换行符" tabindex="-1"><a class="header-anchor" href="#使用换行符"><span>使用换行符</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.绘制 第一行/第二行/第三行</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
🎉 表情包绘制完成！</p>
<p>🔍 输入&quot;pjsk.调整&quot;获取调整指令<br>
或直接输入&quot;pjsk.列表.角色分类&quot;开始新的绘制</p>
<p>✨ 期待您的下一个创作！</p>
</chat-message>
</chat-panel>
<h3 id="高级效果绘制" tabindex="-1"><a class="header-anchor" href="#高级效果绘制"><span>高级效果绘制</span></a></h3>
<h4 id="启用文本曲线" tabindex="-1"><a class="header-anchor" href="#启用文本曲线"><span>启用文本曲线</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.绘制 -c 弧形文字效果</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
🎉 表情包绘制完成！</p>
<p>🔍 输入&quot;pjsk.调整&quot;获取调整指令<br>
或直接输入&quot;pjsk.列表.角色分类&quot;开始新的绘制</p>
<p>✨ 期待您的下一个创作！</p>
</chat-message>
</chat-panel>
<h4 id="自定义位置和大小" tabindex="-1"><a class="header-anchor" href="#自定义位置和大小"><span>自定义位置和大小</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.绘制 -x 100 -y 150 -s 25 -r 1 自定义位置</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
🎉 表情包绘制完成！</p>
<p>🔍 输入&quot;pjsk.调整&quot;获取调整指令<br>
或直接输入&quot;pjsk.列表.角色分类&quot;开始新的绘制</p>
<p>✨ 期待您的下一个创作！</p>
</chat-message>
</chat-panel>
<h2 id="角色列表管理" tabindex="-1"><a class="header-anchor" href="#角色列表管理"><span>角色列表管理</span></a></h2>
<h3 id="查看全部表情包列表" tabindex="-1"><a class="header-anchor" href="#查看全部表情包列表"><span>查看全部表情包列表</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.列表.全部</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看角色分类列表" tabindex="-1"><a class="header-anchor" href="#查看角色分类列表"><span>查看角色分类列表</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.列表.角色分类</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看指定角色列表" tabindex="-1"><a class="header-anchor" href="#查看指定角色列表"><span>查看指定角色列表</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.列表.展开指定角色 [角色序号或角色名]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="角色列表示例" tabindex="-1"><a class="header-anchor" href="#角色列表示例"><span>角色列表示例</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">pjsk.列表.角色分类</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/图像处理/pjsk6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>~<br>
查看指定角色的表情，请输入：</p>
<blockquote>
<p>角色序号，例如：10<br>
角色名，例如：Emu</p>
</blockquote>
</chat-message>
</chat-panel>
<h2 id="表情包调整功能" tabindex="-1"><a class="header-anchor" href="#表情包调整功能"><span>表情包调整功能</span></a></h2>
<h3 id="文本内容调整" tabindex="-1"><a class="header-anchor" href="#文本内容调整"><span>文本内容调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.文本 [新文本内容]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="字体大小调整" tabindex="-1"><a class="header-anchor" href="#字体大小调整"><span>字体大小调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.字体.大</span></span>
<span class="line"><span>pjsk.调整.字体.小</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行间距调整" tabindex="-1"><a class="header-anchor" href="#行间距调整"><span>行间距调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.行间距.大</span></span>
<span class="line"><span>pjsk.调整.行间距.小</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本曲线调整" tabindex="-1"><a class="header-anchor" href="#文本曲线调整"><span>文本曲线调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.文本曲线.开启</span></span>
<span class="line"><span>pjsk.调整.文本曲线.关闭</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本位置调整" tabindex="-1"><a class="header-anchor" href="#文本位置调整"><span>文本位置调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.位置.上</span></span>
<span class="line"><span>pjsk.调整.位置.下</span></span>
<span class="line"><span>pjsk.调整.位置.左</span></span>
<span class="line"><span>pjsk.调整.位置.右</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="角色调整" tabindex="-1"><a class="header-anchor" href="#角色调整"><span>角色调整</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pjsk.调整.角色 [角色ID]</span></span>
<span class="line"><span>pjsk.调整.角色 -r  # 随机角色</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


