<template><div><h1 id="漂流瓶" tabindex="-1"><a class="header-anchor" href="#漂流瓶"><span>漂流瓶</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>跨群扔漂流瓶，你的漂流瓶会被谁看到呢？还可以评论漂流瓶</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>漂流瓶</span></span>
<span class="line"><span>漂流瓶.扔漂流瓶 &#x3C;内容></span></span>
<span class="line"><span>漂流瓶.捞漂流瓶</span></span>
<span class="line"><span>漂流瓶.评论瓶子 &#x3C;瓶子ID> &#x3C;评论></span></span>
<span class="line"><span>漂流瓶.查看我的瓶子</span></span>
<span class="line"><span>漂流瓶.瓶子黄页</span></span>
<span class="line"><span>漂流瓶.精选瓶子</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>漂流瓶</td>
<td>查看漂流瓶帮助</td>
</tr>
<tr>
<td>漂流瓶.扔漂流瓶 <code v-pre>&lt;内容&gt;</code></td>
<td>扔出一个漂流瓶</td>
</tr>
<tr>
<td>漂流瓶.捞漂流瓶</td>
<td>捞起一个漂流瓶</td>
</tr>
<tr>
<td>漂流瓶.评论瓶子 <code v-pre>&lt;瓶子ID&gt;</code> <code v-pre>&lt;评论&gt;</code></td>
<td>评论漂流瓶</td>
</tr>
<tr>
<td>漂流瓶.查看我的瓶子</td>
<td>查看自己扔的瓶子</td>
</tr>
<tr>
<td>漂流瓶.瓶子黄页</td>
<td>查看瓶子黄页</td>
</tr>
<tr>
<td>漂流瓶.精选瓶子</td>
<td>查看精选瓶子</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">@麦芽糖bot /漂流瓶.扔漂流瓶 测试</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你的1号漂流瓶扔出去了！<br>发送“漂流瓶.命名瓶子 编号 名字”可以命名瓶子！（可以重名哦）<br>命名后可以发送“漂流瓶.捞漂流瓶 名字”来捞漂流瓶，只要名字包含就能被捞到！<br><br>漂流瓶预览：<br>测试</chat-message>
<chat-message nickname="麦麦" type="user">@麦芽糖bot /漂流瓶.捞漂流瓶</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你捞到了1号漂流瓶，来自“麦麦”！<br>标题：<br>日期：2026年9月4日<br>发送“捞漂流瓶 1 [分页]”可以查看评论区的其他分页<br>发送“评论瓶子 1 &lt;内容&gt;”或引用瓶子消息就可以在下面评论这只瓶子<br>发送“评论瓶子 [-r &lt;评论编号&gt;] 1 &lt;内容&gt;”可以回复评论区的评论</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">测试</chat-message>
</chat-panel>
</div></template>


