<template><div><h1 id="二刺猿猜猜呗部署配置" tabindex="-1"><a class="header-anchor" href="#二刺猿猜猜呗部署配置"><span>二刺猿猜猜呗部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E4%BA%8C%E5%88%BA%E7%8C%BF%E7%8C%9C%E7%8C%9C%E5%91%97.html">二刺猿猜猜呗</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-anime-ccb</li>
<li><strong>版本</strong>: 1.0.9</li>
<li><strong>依赖框架</strong>: koishi</li>
<li><strong>数据来源</strong>: <a href="https://bgm.tv/" target="_blank" rel="noopener noreferrer">bgm.tv</a></li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-anime-ccb</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-anime-ccb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<table>
<thead>
<tr>
<th>配置项</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start_command</td>
<td>string</td>
<td>ccb</td>
<td>游戏开始的指令名称</td>
</tr>
<tr>
<td>accessToken</td>
<td>string</td>
<td>无</td>
<td><a href="http://bgm.tv" target="_blank" rel="noopener noreferrer">bgm.tv</a> 的 access token，开始游戏前必须配置</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>游戏开始前请务必检查 token 设置，根据插件指引生成自己的 accesstoken。</p>
</div>
</div></template>


