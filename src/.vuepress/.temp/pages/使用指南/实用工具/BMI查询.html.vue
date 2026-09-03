<template><div><h1 id="bmi查询" tabindex="-1"><a class="header-anchor" href="#bmi查询"><span>BMI查询</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>根据身高和体重</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>bmi-calculator &#x3C;身高> &#x3C;体重></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
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
<td>身高</td>
<td>数字</td>
<td>是</td>
<td>身高（厘米）</td>
<td>175</td>
</tr>
<tr>
<td>体重</td>
<td>数字</td>
<td>是</td>
<td>体重（斤）</td>
<td>145</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="正常体重计算" tabindex="-1"><a class="header-anchor" href="#正常体重计算"><span>正常体重计算</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 175 130</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>您的BMI指数为21.2。<br>
正常体重是身体健康的一项标志，继续保持良好的生活习惯。</p>
</chat-message>
</chat-panel>
<h3 id="超重计算" tabindex="-1"><a class="header-anchor" href="#超重计算"><span>超重计算</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 170 160</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>您的BMI指数为27.7。<br>
注意啦，您的体重是健康的，但身体已经不苗条了唔，适当锻炼很重要哦~</p>
</chat-message>
</chat-panel>
<h3 id="低体重计算" tabindex="-1"><a class="header-anchor" href="#低体重计算"><span>低体重计算</span></a></h3>
<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 180 120</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>您的BMI指数为18.5。<br>
您的体重稍轻，请适度增加营养摄入。</p>
</chat-message>
</chat-panel>
<h2 id="bmi标准范围" tabindex="-1"><a class="header-anchor" href="#bmi标准范围"><span>BMI标准范围</span></a></h2>
<table>
<thead>
<tr>
<th>BMI范围</th>
<th>分类</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt; 18.5</td>
<td>低体重</td>
<td>体重过轻，需要适当增加营养</td>
</tr>
<tr>
<td>18.5 - 24.9</td>
<td>正常体重</td>
<td>理想体重范围，继续保持</td>
</tr>
<tr>
<td>25 - 29.9</td>
<td>超重</td>
<td>体重偏重，建议适当控制</td>
</tr>
<tr>
<td>30 - 34.9</td>
<td>肥胖（一级）</td>
<td>需要调整饮食和锻炼计划</td>
</tr>
<tr>
<td>35 - 39.9</td>
<td>肥胖（二级）</td>
<td>建议咨询医生制定减重计划</td>
</tr>
<tr>
<td>≥ 40</td>
<td>肥胖（三级）</td>
<td>强烈建议寻求专业医疗帮助</td>
</tr>
</tbody>
</table>
</div></template>


