<template><div><h1 id="扫雷部署配置" tabindex="-1"><a class="header-anchor" href="#扫雷部署配置"><span>扫雷部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E6%89%AB%E9%9B%B7.html">扫雷</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-minesweeper-ending</li>
<li><strong>版本</strong>: 1.7.3</li>
<li><strong>依赖框架</strong>: koishi</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-minesweeper-ending</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-minesweeper-ending</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<table>
<thead>
<tr>
<th>配置项</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>recall</td>
<td>boolean</td>
<td>是否撤回消息</td>
</tr>
<tr>
<td>MinHintTime</td>
<td>number</td>
<td>最小提示时间</td>
</tr>
<tr>
<td>wrongSleep</td>
<td>number</td>
<td>错误操作冷却</td>
</tr>
<tr>
<td>DifficultyLevel</td>
<td>number</td>
<td>难度等级</td>
</tr>
<tr>
<td>InitFlag / InitOpen</td>
<td>boolean</td>
<td>初始标记/翻开</td>
</tr>
<tr>
<td>Guess</td>
<td>boolean</td>
<td>是否允许猜测</td>
</tr>
<tr>
<td>theme</td>
<td>string</td>
<td>主题</td>
</tr>
<tr>
<td>width / height / mines</td>
<td>number</td>
<td>默认棋盘宽高与雷数</td>
</tr>
</tbody>
</table>
</div></template>


