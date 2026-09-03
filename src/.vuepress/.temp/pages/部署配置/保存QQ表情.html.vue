<template><div><h1 id="保存qq表情部署配置" tabindex="-1"><a class="header-anchor" href="#保存qq表情部署配置"><span>保存QQ表情部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%A8%B1%E4%B9%90%E5%8A%9F%E8%83%BD/%E4%BF%9D%E5%AD%98QQ%E8%A1%A8%E6%83%85.html">保存QQ表情</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-emojihub-bili</li>
<li><strong>版本</strong>: 3.0.4</li>
<li><strong>依赖框架</strong>: koishi</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>emojihub-bili</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-emojihub-bili</span></span></code></pre>
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
<td>emojihub_bili_command</td>
<td>string</td>
<td>emojihub-bili</td>
<td>父级指令名</td>
</tr>
<tr>
<td>emojihub_onemore</td>
<td>string</td>
<td>再来一张</td>
<td>&quot;再来一张&quot;指令名</td>
</tr>
<tr>
<td>emojihub_randompic</td>
<td>string</td>
<td>随机表情包</td>
<td>&quot;随机表情包&quot;指令名</td>
</tr>
<tr>
<td>MoreEmojiHubList</td>
<td>array</td>
<td>[]</td>
<td>自定义表情包指令列表（command + source_url）</td>
</tr>
</tbody>
</table>
<h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">emojihub-bili</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  MoreEmojiHubList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2233娘小剧场表情包</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      source_url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'C:\koishi\node_modules\koishi-plugin-emojihub-bili\txts\2233娘小剧场.txt'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">随机emojihub表情包</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      source_url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'无效路径/内容会调用随机表情包'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


