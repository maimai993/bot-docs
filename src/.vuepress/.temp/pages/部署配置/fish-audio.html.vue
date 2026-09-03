<template><div><h1 id="fish-audio部署配置" tabindex="-1"><a class="header-anchor" href="#fish-audio部署配置"><span>fish-audio部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/AI%E5%8A%9F%E8%83%BD/fish-audio.html">fish-audio</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-fish-audio</li>
<li><strong>版本</strong>: 1.1.1</li>
<li><strong>依赖框架</strong>: koishi ^4.17.9</li>
<li><strong>实现服务</strong>: vits（可被其他插件调用语音合成）</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-fish-audio</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-fish-audio</span></span></code></pre>
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
<td>api_key</td>
<td>string</td>
<td>无</td>
<td>Fish Audio API密钥，必填项</td>
</tr>
<tr>
<td>api_url</td>
<td>string</td>
<td><a href="https://api.fish.audio/v1/tts" target="_blank" rel="noopener noreferrer">https://api.fish.audio/v1/tts</a></td>
<td>Fish Audio API地址</td>
</tr>
<tr>
<td>command_name</td>
<td>string</td>
<td>空</td>
<td>指令前缀名称，如果设置则指令格式为<code v-pre>&lt;前缀&gt;.&lt;角色&gt;</code></td>
</tr>
<tr>
<td>command</td>
<td>array</td>
<td>见默认配置</td>
<td>指令列表，包含角色名称、描述和参考ID</td>
</tr>
<tr>
<td>vits_service_speaker</td>
<td>string</td>
<td>bcbb6d60721c44a489bc33dd59ce7cfc</td>
<td>用于VITS服务的默认语音角色</td>
</tr>
<tr>
<td>proxy_agent</td>
<td>string</td>
<td>无</td>
<td>用于访问API的代理设置</td>
</tr>
</tbody>
</table>
<h3 id="默认配置示例" tabindex="-1"><a class="header-anchor" href="#默认配置示例"><span>默认配置示例</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fish-audio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  api_key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'your-api-key-here'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">流萤</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">语音生成（流萤）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      reference_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bcbb6d60721c44a489bc33dd59ce7cfc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>Fish Audio API</strong>: 使用官方API进行文本转语音</li>
<li><strong>VITS服务</strong>: 支持VITS服务接口，可与其他插件集成</li>
<li><strong>文本验证</strong>: 自动检测输入是否为纯文本，拒绝包含HTML标签的内容</li>
<li><strong>音频格式</strong>: 生成WAV格式的音频文件</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>API密钥</strong>: 需要有效的Fish Audio API密钥，可从<a href="https://fish.audio/zh-CN/go-api/" target="_blank" rel="noopener noreferrer">Fish Audio官网</a>获取</li>
<li><strong>网络要求</strong>: 需要稳定的网络连接来访问Fish Audio API</li>
<li><strong>文本限制</strong>: 输入文本应为纯文本，不支持HTML或其他标记语言</li>
</ol>
</div></template>


