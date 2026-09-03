<template><div><h1 id="抽老婆" tabindex="-1"><a class="header-anchor" href="#抽老婆"><span>抽老婆</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>抽取今日群友老婆，支持求婚、强娶、离婚等互动</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>娶群友</span></span>
<span class="line"><span>求婚</span></span>
<span class="line"><span>离婚</span></span>
<span class="line"><span>换老婆</span></span>
<span class="line"><span>查老婆</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>娶群友</td>
<td>随机抽取今日群友老婆</td>
</tr>
<tr>
<td>求婚</td>
<td>向心仪的群友求婚</td>
</tr>
<tr>
<td>离婚</td>
<td>解除关系</td>
</tr>
<tr>
<td>换老婆</td>
<td>换一个老婆</td>
</tr>
<tr>
<td>查老婆</td>
<td>查询有没有老婆</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="娶群友" tabindex="-1"><a class="header-anchor" href="#娶群友"><span>娶群友</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">娶群友</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你今日的群友老婆是：芽 </chat-message>
<chat-message nickname="麦芽糖bot" type="bot"><img src="@source/使用指南/娱乐功能/d0c3637da602cc6a2c38ecfe00d9db31.jpg" /></chat-message>
</chat-panel>
<h3 id="求婚" tabindex="-1"><a class="header-anchor" href="#求婚"><span>求婚</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">求婚 @麦芽糖bot</chat-message>
<chat-message nickname="芽" type="bot">@麦芽糖bot 群友「麦麦」向你求婚，那么...你愿意嫁给ta吗？在90秒内发送【我愿意】或者【我拒绝】，回应对方哦！</chat-message>
<chat-message nickname="芽" type="bot"><img src="@source/使用指南/娱乐功能/50856c28824123633e0a8893b872e2c2.png" /> </chat-message>
<chat-message nickname="麦芽糖bot" type="bot">我愿意</chat-message>
<chat-message nickname="芽" type="bot">群友「麦芽糖bot」答应了你，愿意当你今日的对象！</chat-message>
</chat-panel>
<h3 id="离婚" tabindex="-1"><a class="header-anchor" href="#离婚"><span>离婚</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">离婚</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你已经离婚，江湖有缘再相见~</chat-message>
</chat-panel>
<h3 id="换老婆" tabindex="-1"><a class="header-anchor" href="#换老婆"><span>换老婆</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">@麦芽糖bot 换老婆</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">再换你就没老婆了！你今日的老婆是：小川水普罗二</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/2f9118bf2e0e8842f4bf1eee9e35abb7.jpeg" />
</chat-message>
</chat-panel>
<h3 id="查老婆" tabindex="-1"><a class="header-anchor" href="#查老婆"><span>查老婆</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">查老婆</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你今日的群友老婆是：小川水普罗二</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/使用指南/娱乐功能/2f9118bf2e0e8842f4bf1eee9e35abb7.jpeg" />
</chat-message>
</chat-panel>
<chat-panel>
<chat-message nickname="麦麦" type="user">查老婆</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">你没有老婆</chat-message>
</chat-panel></div></template>


