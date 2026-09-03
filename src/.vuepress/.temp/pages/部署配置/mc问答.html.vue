<template><div><h1 id="mc问答部署配置" tabindex="-1"><a class="header-anchor" href="#mc问答部署配置"><span>mc问答部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/AI%E5%8A%9F%E8%83%BD/mc%E9%97%AE%E7%AD%94.html">mc问答</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-mcqa</li>
<li><strong>版本</strong>: 1.0.6</li>
<li><strong>依赖框架</strong>: koishi ^4.18.7</li>
<li><strong>依赖库</strong>: axios、jsdom</li>
<li><strong>系统要求</strong>: 需要对应平台的 fetch_wiki 二进制文件（Windows/Linux/macOS）</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-mcqa</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-mcqa</span></span></code></pre>
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
<td>apiKey</td>
<td>string</td>
<td>无</td>
<td>DeepSeek API密钥，必填项</td>
</tr>
<tr>
<td>model</td>
<td>string</td>
<td>deepseek-chat</td>
<td>使用的模型名称</td>
</tr>
<tr>
<td>temperature</td>
<td>number</td>
<td>0.7</td>
<td>生成温度（范围 0-2）</td>
</tr>
</tbody>
</table>
<h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mcqa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  apiKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'your-api-key-here'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'deepseek-chat'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  temperature</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>关键词提取</strong>: 使用 DeepSeek 大模型从问题中提取 1-4 个核心中文关键词，提取时使用低温度（0.3）保证结果稳定</li>
<li><strong>Wiki检索</strong>: 通过内置的 fetch_wiki 程序并行抓取 Minecraft Wiki 对应条目</li>
<li><strong>内容清洗</strong>: 使用 JSDOM 去除脚本、样式、导航框等干扰内容，单条内容最多保留 5000 字符</li>
<li><strong>回答规范</strong>: 涉及游戏机制注明版本和平台，合成配方列出精确材料，生物行为注明难度模式</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>API密钥</strong>: 需要配置有效的 DeepSeek API 密钥（apiKey 必填）</li>
<li><strong>网络要求</strong>: 需要稳定网络连接访问 DeepSeek API 和 Minecraft Wiki</li>
<li><strong>平台兼容</strong>: 需要对应平台的 fetch_wiki 二进制（Windows/Linux/macOS）</li>
</ol>
</div></template>


