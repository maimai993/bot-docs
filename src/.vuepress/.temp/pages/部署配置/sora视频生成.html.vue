<template><div><h1 id="sora视频生成部署配置" tabindex="-1"><a class="header-anchor" href="#sora视频生成部署配置"><span>sora视频生成部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/AI%E5%8A%9F%E8%83%BD/sora%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.html">sora视频生成</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: astrbot_plugin_video_sora2</li>
<li><strong>框架</strong>: AstrBot</li>
<li><strong>语言/环境</strong>: Python 3.10+</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 AstrBot 插件市场安装 <code v-pre>astrbot_plugin_video_sora2</code>，或从 <a href="https://github.com/maimai993/astrbot_plugin_video_sora2" target="_blank" rel="noopener noreferrer">GitHub</a> 获取。</p>
<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
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
<td>token_source</td>
<td>string</td>
<td>手动填写</td>
<td>Token获取方式：手动填写或自动获取</td>
</tr>
<tr>
<td>authorization_list</td>
<td>list</td>
<td>[]</td>
<td>手动填写的authorization列表</td>
</tr>
<tr>
<td>websocket_enabled</td>
<td>bool</td>
<td>false</td>
<td>是否启用HTTP服务器接收自动上报的Token</td>
</tr>
<tr>
<td>websocket_port</td>
<td>int</td>
<td>5103</td>
<td>HTTP服务器监听的端口号</td>
</tr>
<tr>
<td>task_limit</td>
<td>int</td>
<td>3</td>
<td>每个账号的并发限制</td>
</tr>
<tr>
<td>model_config.model</td>
<td>string</td>
<td>sy_8</td>
<td>模型代码</td>
</tr>
<tr>
<td>model_config.n_frames</td>
<td>int</td>
<td>450</td>
<td>视频的总帧数</td>
</tr>
<tr>
<td>watermark_enabled</td>
<td>bool</td>
<td>false</td>
<td>是否添加Sora2水印</td>
</tr>
<tr>
<td>screen_mode</td>
<td>string</td>
<td>自动</td>
<td>默认视频方向：自动、竖屏、横屏</td>
</tr>
<tr>
<td>sora_base_url</td>
<td>string</td>
<td><a href="https://sora.chatgpt.com" target="_blank" rel="noopener noreferrer">https://sora.chatgpt.com</a></td>
<td>Sora API地址</td>
</tr>
<tr>
<td>proxy</td>
<td>string</td>
<td>&quot;&quot;</td>
<td>HTTP正向代理地址</td>
</tr>
</tbody>
</table>
<h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>Token轮询</strong>: 支持多个Token轮询使用，避免单个Token并发限制</li>
<li><strong>任务状态跟踪</strong>: 所有任务状态同步更新到Sqlite3数据库</li>
<li><strong>自动获取Token</strong>: 通过Tampermonkey脚本自动获取并上报Token到本地HTTP服务器</li>
<li><strong>水印控制</strong>: 可选择是否在生成的视频中添加Sora2水印</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>账号权限</strong>: 需要有效的ChatGPT账号且有Sora模型的使用权限</li>
<li><strong>Token安全</strong>: Token存在封号风险，请谨慎使用</li>
<li><strong>并发限制</strong>: 每个账号有并发任务限制</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>本插件基于逆向工程技术调用官方接口，存在封号风险，请谨慎使用。如果使用反向代理，请确保反向代理的来源可信。</p>
</div>
</div></template>


