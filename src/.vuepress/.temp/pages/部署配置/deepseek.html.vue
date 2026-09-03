<template><div><h1 id="deepseek部署配置" tabindex="-1"><a class="header-anchor" href="#deepseek部署配置"><span>deepseek部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/AI%E5%8A%9F%E8%83%BD/deepseek.html">deepseek</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-chatluna-deepseek-adapter</li>
<li><strong>依赖框架</strong>: koishi</li>
<li><strong>依赖插件</strong>: chatluna（聊天机器人框架）</li>
<li><strong>服务</strong>: DeepSeek API</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<ol>
<li>安装 chatluna 框架：<code v-pre>npm i koishi-plugin-chatluna</code></li>
<li>安装 DeepSeek 适配器：<code v-pre>npm i koishi-plugin-chatluna-deepseek-adapter</code></li>
</ol>
<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
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
<td>DeepSeek API 密钥（必填）</td>
</tr>
<tr>
<td>model</td>
<td>string</td>
<td>使用的模型（如 deepseek-chat）</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>需要前往 DeepSeek 开放平台注册并获取 API 密钥。</p>
</div>
</div></template>


