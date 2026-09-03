<template><div><h1 id="mc服务器查询部署配置" tabindex="-1"><a class="header-anchor" href="#mc服务器查询部署配置"><span>MC服务器查询部署配置</span></a></h1>
<blockquote>
<p>功能使用说明请查看 <RouteLink to="/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/mc%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%9F%A5%E8%AF%A2.html">MC服务器查询</RouteLink></p>
</blockquote>
<h2 id="插件信息" tabindex="-1"><a class="header-anchor" href="#插件信息"><span>插件信息</span></a></h2>
<ul>
<li><strong>插件名称</strong>: koishi-plugin-mcmotd-customserver-canvas</li>
<li><strong>依赖框架</strong>: koishi</li>
<li><strong>插件依赖</strong>: canvas、database</li>
</ul>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2>
<p>在 koishi 插件市场搜索 <code v-pre>koishi-plugin-mcmotd-customserver-canvas</code> 并安装，或使用命令行：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>npm i koishi-plugin-mcmotd-customserver-canvas</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
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
<td>defaultFont</td>
<td>string</td>
<td>-</td>
<td>默认字体</td>
</tr>
<tr>
<td>enableWhiteList</td>
<td>boolean</td>
<td>false</td>
<td>是否启用白名单功能</td>
</tr>
</tbody>
</table>
<h3 id="java版查询配置" tabindex="-1"><a class="header-anchor" href="#java版查询配置"><span>Java版查询配置</span></a></h3>
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
<td>enabledMotdJe</td>
<td>boolean</td>
<td>false</td>
<td>是否启用MJS指令</td>
</tr>
<tr>
<td>initJeDomainOrIp</td>
<td>string</td>
<td>-</td>
<td>Java版初始地址</td>
</tr>
<tr>
<td>initJePort</td>
<td>number</td>
<td>25565</td>
<td>Java版初始端口</td>
</tr>
<tr>
<td>initJeTimeOut</td>
<td>number</td>
<td>750</td>
<td>Java版查询超时时间(ms)</td>
</tr>
<tr>
<td>isShowPlayerList</td>
<td>boolean</td>
<td>false</td>
<td>是否显示玩家列表</td>
</tr>
</tbody>
</table>
<h3 id="基岩版查询配置" tabindex="-1"><a class="header-anchor" href="#基岩版查询配置"><span>基岩版查询配置</span></a></h3>
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
<td>enabledMotdBe</td>
<td>boolean</td>
<td>false</td>
<td>是否启用MBS指令</td>
</tr>
<tr>
<td>initBeDomainOrIp</td>
<td>string</td>
<td>-</td>
<td>基岩版初始地址</td>
</tr>
<tr>
<td>initBePort</td>
<td>number</td>
<td>19132</td>
<td>基岩版初始端口</td>
</tr>
<tr>
<td>initBeTimeOut</td>
<td>number</td>
<td>750</td>
<td>基岩版查询超时时间(ms)</td>
</tr>
</tbody>
</table>
<h2 id="技术特性" tabindex="-1"><a class="header-anchor" href="#技术特性"><span>技术特性</span></a></h2>
<ul>
<li><strong>支持的版本</strong>: Java版（MJS）与基岩版（MBS）</li>
<li><strong>自动处理</strong>: 自动解析带端口地址，Java版默认端口25565、基岩版默认端口19132</li>
<li><strong>图片生成</strong>: 自动生成美观的服务器信息图片</li>
<li><strong>展示信息</strong>: 服务器favicon、版本、在线人数、描述、延迟、玩家列表</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li><strong>权限要求</strong>: 需要权限等级1以上才能使用查询命令</li>
<li><strong>插件依赖</strong>: 需要canvas和database插件支持</li>
<li><strong>字体设置</strong>: 首次使用需配置默认字体</li>
</ol>
</div></template>


