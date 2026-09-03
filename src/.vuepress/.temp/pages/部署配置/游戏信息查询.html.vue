<template><div><h1 id="游戏信息查询部署配置" tabindex="-1"><a class="header-anchor" href="#游戏信息查询部署配置"><span>游戏信息查询部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E6%B8%B8%E6%88%8F%E7%9B%B8%E5%85%B3/">游戏相关</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-gameinfo</li>
<li><strong>版本</strong>: 1.1.1</li>
<li><strong>依赖框架</strong>: koishi</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-gameinfo</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-gameinfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<p>本插件无需配置、无需科学上网，安装启用后即可直接使用。</p>
<h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>全平台查询</strong>: 支持查询全平台游戏信息</li>
<li><strong>信息丰富</strong>: 包含折扣、简介、评分等</li>
<li><strong>方便易用</strong>: 无需配置、无需代理</li>
</ul>
<h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>查询 <code v-pre>&lt;游戏名&gt;</code></td>
<td>检索游戏名称</td>
</tr>
<tr>
<td>id <code v-pre>&lt;appid&gt;</code></td>
<td>检索游戏的 game_id</td>
</tr>
<tr>
<td>打折游戏</td>
<td>查询精选的打折作品</td>
</tr>
</tbody>
</table>
</div></template>


