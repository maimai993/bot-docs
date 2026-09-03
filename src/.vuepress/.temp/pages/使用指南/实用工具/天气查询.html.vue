<template><div><h1 id="天气查询" tabindex="-1"><a class="header-anchor" href="#天气查询"><span>天气查询</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>获取今日或未来天气</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>天气 &#x3C;city></span></span>
<span class="line"><span>未来天气 &#x3C;city></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>city</td>
<td>文本</td>
<td>是</td>
<td>要查询天气的城市名称</td>
<td>北京</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询"><span>基本查询</span></a></h3>
<h4 id="查询-北京-天气-默认最近3天" tabindex="-1"><a class="header-anchor" href="#查询-北京-天气-默认最近3天"><span>查询 <code v-pre>北京</code> 天气（默认最近3天）</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">天气 北京</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>地区：北京市<br>
(更新时间：13:55)<br>
☁️==================<br>
日期：2026-09-01 (周二)<br>
天气：晴<br>
温度：20℃ - 29℃<br>
风向：东北风<br>
风力：1级<br>
☁️==================<br>
日期：2026-09-02 (周三)<br>
天气：晴<br>
温度：19℃ - 30℃<br>
风向：南风<br>
风力：1级<br>
☁️==================<br>
日期：2026-09-03 (周四)<br>
天气：晴<br>
温度：20℃ - 31℃<br>
风向：南风<br>
风力：1级</p>
</chat-message>
</chat-panel>
<h4 id="查询-北京-未来-天气" tabindex="-1"><a class="header-anchor" href="#查询-北京-未来-天气"><span>查询 <code v-pre>北京</code> <code v-pre>未来</code> 天气</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">天气 北京 5</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>地区：北京市<br>
(更新时间：13:55)<br>
☁️==================<br>
日期：2026-09-01 (周二)<br>
天气：晴<br>
温度：20℃ - 29℃<br>
风向：东北风<br>
风力：1级<br>
☁️==================<br>
日期：2026-09-02 (周三)<br>
天气：晴<br>
温度：19℃ - 30℃<br>
风向：南风<br>
风力：1级<br>
☁️==================<br>
日期：2026-09-03 (周四)<br>
天气：晴<br>
温度：20℃ - 31℃<br>
风向：南风<br>
风力：1级</p>
</chat-message>
</chat-panel>
<h3 id="查询区级天气" tabindex="-1"><a class="header-anchor" href="#查询区级天气"><span>查询区级天气</span></a></h3>
<h4 id="查询-北京-朝阳-天气" tabindex="-1"><a class="header-anchor" href="#查询-北京-朝阳-天气"><span>查询 <code v-pre>北京/朝阳</code> 天气</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">天气 湘潭</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>地区：湖南湘潭县<br>
报告时间：<br>
2026-09-01 17:34:12<br>
☁️==================<br>
天气：多云<br>
温度：23℃<br>
风向：北风<br>
风力：5级<br>
湿度：82%</p>
</chat-message>
</chat-panel>
</div></template>


