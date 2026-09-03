<template><div><h1 id="ai画图部署配置" tabindex="-1"><a class="header-anchor" href="#ai画图部署配置"><span>AI画图部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/AI%E5%8A%9F%E8%83%BD/AI%E7%94%BB%E5%9B%BE.html">AI画图</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-gouqi-siliconflow-image</li>
<li><strong>版本</strong>: 0.0.7</li>
<li><strong>依赖框架</strong>: koishi</li>
<li><strong>服务</strong>: 硅基流动（SiliconFlow）图像生成 API</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-gouqi-siliconflow-image</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-gouqi-siliconflow-image</span></span></code></pre>
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
<td>apiKey</td>
<td>string</td>
<td>SiliconFlow API 密钥（必填）</td>
</tr>
<tr>
<td>模型</td>
<td>string</td>
<td>使用的图像生成模型</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>需要注册硅基流动平台账号并获取 API 密钥。</p>
</div>
</div></template>


