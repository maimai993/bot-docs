<template><div><h1 id="mcgif" tabindex="-1"><a class="header-anchor" href="#mcgif"><span>mcGIF</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>Minecraft 皮肤生成 chibi 角色 GIF</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko &#x3C;skin> [选项]</span></span></code></pre>
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
<td>skin</td>
<td>玩家名/皮肤名</td>
<td>是</td>
<td>要生成角色的 Minecraft 玩家名，自动获取其皮肤</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="选项说明" tabindex="-1"><a class="header-anchor" href="#选项说明"><span>选项说明</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>简写</th>
<th>参数</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>background</td>
<td>-b</td>
<td>string</td>
<td>背景：<code v-pre>transparent</code>（透明）/ <code v-pre>color</code>（纯色）/ <code v-pre>RRGGBB</code>（指定颜色）</td>
<td>-</td>
</tr>
<tr>
<td>outline</td>
<td>-o</td>
<td>number</td>
<td>边框粗细：<code v-pre>0</code>（无）/ <code v-pre>1</code>（细）/ <code v-pre>2</code>（粗）</td>
<td>-</td>
</tr>
<tr>
<td>outline-color</td>
<td>-c</td>
<td>color</td>
<td>边框颜色（<code v-pre>#RRGGBB</code>）</td>
<td>-</td>
</tr>
<tr>
<td>speed</td>
<td>-s</td>
<td>number</td>
<td>GIF 速度倍率：<code v-pre>0.5</code> - <code v-pre>2.0</code></td>
<td>-</td>
</tr>
<tr>
<td>format</td>
<td>-f</td>
<td>string</td>
<td>输出格式：<code v-pre>gif</code> / <code v-pre>png</code></td>
<td>gif</td>
</tr>
<tr>
<td>scene</td>
<td>-sc</td>
<td>string</td>
<td>场景：<code v-pre>none</code>（无）/ <code v-pre>grass</code>（草地和花）/ <code v-pre>sakura</code>（樱花）/ <code v-pre>bluesky</code>（蓝天）/ <code v-pre>nightsky</code>（夜空）</td>
<td>none</td>
</tr>
<tr>
<td>mono</td>
<td>-m</td>
<td>无</td>
<td>黑白模式（开关选项）</td>
<td>false</td>
</tr>
<tr>
<td>action</td>
<td>-a</td>
<td>string</td>
<td>动画类型，详见 <code v-pre>-l, --list</code></td>
<td>滴溜转·请稍等</td>
</tr>
<tr>
<td>list</td>
<td>-l</td>
<td>无</td>
<td>列出全部可用动画类型</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="不指定动作-使用滴溜转·请稍等" tabindex="-1"><a class="header-anchor" href="#不指定动作-使用滴溜转·请稍等"><span>不指定动作（使用滴溜转·请稍等）</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">chibiko</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/mcGIF/1.gif" />
</chat-message>
</chat-panel>
<h3 id="生成待机动画" tabindex="-1"><a class="header-anchor" href="#生成待机动画"><span>生成待机动画</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko -a idle</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">chibiko -a idle</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/mcGIF/2.gif" />
</chat-message>
</chat-panel>
<h3 id="生成皮肤alex的走路动画" tabindex="-1"><a class="header-anchor" href="#生成皮肤alex的走路动画"><span>生成皮肤Alex的走路动画</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko --action walk Alex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">chibiko --action walk Alex</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<img src="@source/img/mcGIF/3.gif" />
</chat-message>
</chat-panel>
<h3 id="动态动画输出静态图" tabindex="-1"><a class="header-anchor" href="#动态动画输出静态图"><span>动态动画输出静态图</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko -a idle -f png</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查看全部可用动画类型" tabindex="-1"><a class="header-anchor" href="#查看全部可用动画类型"><span>查看全部可用动画类型</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko -l</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><chat-panel>
<chat-message nickname="麦麦" type="user">chibiko -l</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">可用的动画类型：<br><br><b>动图（GIF）：</b><br>- angry：生气<br>- balloonFloat：气球飘走<br>- chickenRide：骑鸡<br>- circle：圈号<br>- clap：拍手<br>- cross：叉号<br>- crouchDiag：斜向下蹲<br>- cry：哭泣<br>- goldenApple：金苹果<br>- happyHeart：开心<br>- headShakeNo：摇头拒绝<br>- idle：待机<br>- jump：跳跃<br>- jumpHai：举手跳跃<br>- laugh：大笑<br>- mine：挖矿<br>- ng：NG！<br>- nod：点头收到<br>- nowLoading：加载中<br>- ok：OK！<br>- pleaseWait：请稍等<br>- rainUmbrella：雨中打伞<br>- rollForward：前滚翻<br>- run：奔跑<br>- shock：震惊<br>- sing：唱歌<br>- skip：蹦跳<br>- sleep：睡觉<br>- spin：滴溜转<br>- spinNowLoading：滴溜转·加载中<br>- spinPleaseWait：滴溜转·请稍等<br>- surprised：惊讶<br>- thanks：鞠躬致谢<br>- turn：转身<br>- unknown：不明白<br>- walk：走路<br>- walkDiag：斜向走路<br>- wave：挥手<br>- weird：摇摆嗨<br><br><b>静态图（PNG）：</b><br>- angry：生气<br>- banzai：万岁欢呼<br>- clap：拍手<br>- cry：哭泣<br>- diag：斜向站立<br>- guts：加油鼓劲<br>- hai：举手应答<br>- happy：开心<br>- head：仅头部<br>- jumpHai：举手跳跃<br>- mine：挖矿<br>- nowLoading：加载中<br>- pleaseWait：请稍等<br>- sing：唱歌<br>- stand：站立<br>- thanks：鞠躬致谢<br>- umbrella：雨中打伞<br>- weird：摇摆嗨</chat-message>
</chat-panel>
<h3 id="自定义场景" tabindex="-1"><a class="header-anchor" href="#自定义场景"><span>自定义场景</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>chibiko -sc sakura</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


