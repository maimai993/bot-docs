<template><div><h1 id="股票" tabindex="-1"><a class="header-anchor" href="#股票"><span>股票</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>本功能仅供学习和研究使用，不构成任何投资建议。股市有风险，投资需谨慎。</p>
</div>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>全功能股票/A股机器人插件，支持大盘云图、个股查询、自选管理、新闻订阅等功能</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>大盘概览</span></span>
<span class="line"><span>大盘云图 [类型]</span></span>
<span class="line"><span>行业云图 [行业名称]</span></span>
<span class="line"><span>概念云图 [概念名称]</span></span>
<span class="line"><span>个股 &#x3C;股票代码/名称> [K线类型]</span></span>
<span class="line"><span>我的个股</span></span>
<span class="line"><span>我的自选</span></span>
<span class="line"><span>全天候</span></span>
<span class="line"><span>对比个股 &#x3C;股票代码1> &#x3C;股票代码2> ...</span></span>
<span class="line"><span>添加自选 &#x3C;股票代码/名称></span></span>
<span class="line"><span>删除自选 &#x3C;股票代码/名称></span></span>
<span class="line"><span>基金持仓 &#x3C;基金代码></span></span>
<span class="line"><span>市盈率对比 &#x3C;股票代码></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主要指令说明" tabindex="-1"><a class="header-anchor" href="#主要指令说明"><span>主要指令说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>参数</th>
<th>必填</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>大盘概览</td>
<td>无</td>
<td>是</td>
<td>显示大盘概览信息</td>
<td>大盘概览</td>
</tr>
<tr>
<td>大盘云图</td>
<td>类型</td>
<td>否</td>
<td>显示大盘云图，可选：港股、美股</td>
<td>大盘云图 港股</td>
</tr>
<tr>
<td>行业云图</td>
<td>行业名称</td>
<td>是</td>
<td>显示指定行业的云图</td>
<td>行业云图 半导体</td>
</tr>
<tr>
<td>概念云图</td>
<td>概念名称</td>
<td>是</td>
<td>显示指定概念的云图</td>
<td>概念云图 白酒</td>
</tr>
<tr>
<td>个股</td>
<td>股票代码</td>
<td>是</td>
<td>查询个股信息</td>
<td>个股 沪深300</td>
</tr>
<tr>
<td>我的个股</td>
<td>无</td>
<td>是</td>
<td>显示用户自选的个股信息</td>
<td>我的个股</td>
</tr>
<tr>
<td>我的自选</td>
<td>无</td>
<td>是</td>
<td>显示用户的自选列表</td>
<td>我的自选</td>
</tr>
<tr>
<td>全天候</td>
<td>无</td>
<td>是</td>
<td>显示全天候板块信息</td>
<td>全天候</td>
</tr>
<tr>
<td>对比个股</td>
<td>股票代码列表</td>
<td>是</td>
<td>对比多个股票走势</td>
<td>对比个股 A500 沪深300</td>
</tr>
<tr>
<td>添加自选</td>
<td>股票代码</td>
<td>是</td>
<td>添加股票到自选</td>
<td>添加自选 中证白酒</td>
</tr>
<tr>
<td>删除自选</td>
<td>股票代码</td>
<td>是</td>
<td>从自选删除股票</td>
<td>删除自选 中证白酒</td>
</tr>
<tr>
<td>基金持仓</td>
<td>基金代码</td>
<td>是</td>
<td>显示基金持仓分布</td>
<td>基金持仓 510300</td>
</tr>
<tr>
<td>市盈率对比</td>
<td>股票代码</td>
<td>是</td>
<td>显示市盈率对比图</td>
<td>市盈率对比 贵州茅台</td>
</tr>
</tbody>
</table>
<h3 id="k线类型选项" tabindex="-1"><a class="header-anchor" href="#k线类型选项"><span>K线类型选项</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>5k</td>
<td>5分钟K线</td>
<td>个股 沪深300 5k</td>
</tr>
<tr>
<td>15k</td>
<td>15分钟K线</td>
<td>个股 沪深300 15k</td>
</tr>
<tr>
<td>30k</td>
<td>30分钟K线</td>
<td>个股 沪深300 30k</td>
</tr>
<tr>
<td>60k</td>
<td>60分钟K线</td>
<td>个股 沪深300 60k</td>
</tr>
<tr>
<td>日k</td>
<td>日K线</td>
<td>个股 沪深300 日k</td>
</tr>
<tr>
<td>周k</td>
<td>周K线</td>
<td>个股 沪深300 周k</td>
</tr>
<tr>
<td>月k</td>
<td>月K线</td>
<td>个股 沪深300 月k</td>
</tr>
<tr>
<td>年k</td>
<td>年K线</td>
<td>个股 沪深300 年k</td>
</tr>
</tbody>
</table>
<h3 id="时间范围选项-对比个股" tabindex="-1"><a class="header-anchor" href="#时间范围选项-对比个股"><span>时间范围选项（对比个股）</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>年初至今</td>
<td>从今年年初开始对比</td>
<td>对比个股 年初至今 中证白酒 中证2000</td>
</tr>
<tr>
<td>最近一年</td>
<td>最近一年数据对比</td>
<td>对比个股 最近一年 中证白酒 中证2000</td>
</tr>
<tr>
<td>最近一月</td>
<td>最近一月数据对比</td>
<td>对比个股 最近一月 中证白酒 中证2000</td>
</tr>
<tr>
<td>自定义日期</td>
<td>指定日期范围</td>
<td>对比个股 2024.01.01-2024.12.31 中证白酒</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h3>
<h4 id="查询大盘概览" tabindex="-1"><a class="header-anchor" href="#查询大盘概览"><span>查询大盘概览</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">大盘概览</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/01/22/GCip3KMlLjASnsV.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查询个股信息" tabindex="-1"><a class="header-anchor" href="#查询个股信息"><span>查询个股信息</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">个股 沪深300</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/08/04/AQPOKB9T2WwU5sf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="云图功能" tabindex="-1"><a class="header-anchor" href="#云图功能"><span>云图功能</span></a></h3>
<h4 id="查看大盘云图" tabindex="-1"><a class="header-anchor" href="#查看大盘云图"><span>查看大盘云图</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">大盘云图</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2024/11/26/qvMG1ers7pITSUZ.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查看行业云图" tabindex="-1"><a class="header-anchor" href="#查看行业云图"><span>查看行业云图</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">行业云图 半导体</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/01/22/vsUthKeZk3TEfxR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="自选管理" tabindex="-1"><a class="header-anchor" href="#自选管理"><span>自选管理</span></a></h3>
<h4 id="添加自选" tabindex="-1"><a class="header-anchor" href="#添加自选"><span>添加自选</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">添加自选 中证白酒</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
是否确认将下列股票添加自选?
中证白酒(512690)
请输入是或否。
</chat-message>
<chat-message nickname="麦麦" type="user">是</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
✅[SayuStock] 添加自选成功!
可发送[我的自选]查看或发送[删除自选]清除！
</chat-message>
</chat-panel>
<h4 id="查看我的自选" tabindex="-1"><a class="header-anchor" href="#查看我的自选"><span>查看我的自选</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">我的自选</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/02/23/k1AOeTfxtPZHluo.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能"><span>高级功能</span></a></h3>
<h4 id="对比个股" tabindex="-1"><a class="header-anchor" href="#对比个股"><span>对比个股</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">对比个股 A500 沪深300 上证指数 中证白酒</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/06/02/a41cqb2rGzTvSWy.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查看k线图" tabindex="-1"><a class="header-anchor" href="#查看k线图"><span>查看K线图</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">个股 东方财富 日k</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="https://s2.loli.net/2025/05/16/Mlz5qEyKBe16SdR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型"><span>支持的数据类型</span></a></h3>
<ul>
<li><strong>A股</strong>: 沪深主板、创业板、科创板</li>
<li><strong>指数</strong>: 上证指数、深证成指、创业板指等</li>
<li><strong>ETF</strong>: 各类交易型开放式指数基金</li>
<li><strong>基金</strong>: 公募基金持仓信息</li>
<li><strong>港股</strong>: 香港交易所股票</li>
<li><strong>美股</strong>: 美国交易所股票（通过VIX）</li>
</ul>
</div></template>


