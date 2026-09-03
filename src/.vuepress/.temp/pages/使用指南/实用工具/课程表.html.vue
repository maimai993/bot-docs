<template><div><h1 id="课程表" tabindex="-1"><a class="header-anchor" href="#课程表"><span>课程表</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>管理群组课程表，支持手动添加课程、WakeUp课程表导入、课程表图片渲染和定时推送功能</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>群友课表.操作 [参数]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="指令说明" tabindex="-1"><a class="header-anchor" href="#指令说明"><span>指令说明</span></a></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>功能</th>
<th>语法</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>添加课程</td>
<td>手动添加课程</td>
<td><code v-pre>群友课表.添加 &lt;星期几&gt; &lt;课程名称&gt; &lt;上课时间-下课时间&gt;</code></td>
<td>星期几：支持&quot;周一&quot;、&quot;周二&quot;...&quot;周日&quot;，也支持&quot;周一周三&quot;格式<br>课程名称：课程的名称<br>上课时间-下课时间：24小时制，如&quot;8:00-9:30&quot;</td>
</tr>
<tr>
<td>WakeUp导入</td>
<td>从WakeUp课程表导入</td>
<td><code v-pre>群友课表.wakeup &lt;WakeUp分享文本&gt;</code></td>
<td>WakeUp分享文本：从WakeUp课程表应用中复制的分享文本（包含分享口令）</td>
</tr>
<tr>
<td>查看课程表</td>
<td>查看当前课程表</td>
<td><code v-pre>群友课表.看看 [日期]</code></td>
<td>日期：可选，支持数字（0=今天，1=明天，-1=昨天）或&quot;今天&quot;、&quot;明天&quot;、&quot;昨天&quot;等</td>
</tr>
<tr>
<td>移除课程</td>
<td>移除已添加课程</td>
<td><code v-pre>群友课表.移除</code></td>
<td>无参数，会列出课程供选择移除</td>
</tr>
<tr>
<td>课程去重</td>
<td>自动移除重复课程</td>
<td><code v-pre>群友课表.去重</code></td>
<td>无参数，自动检测并移除重复课程</td>
</tr>
</tbody>
</table>
<h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数"><span>可选参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>简写</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>userid</td>
<td>-i</td>
<td>指定用户ID (QQ号)</td>
<td><code v-pre>-i 114514</code></td>
</tr>
<tr>
<td>username</td>
<td>-n</td>
<td>指定用户的名称</td>
<td><code v-pre>-n 上学大人</code></td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="手动添加课程" tabindex="-1"><a class="header-anchor" href="#手动添加课程"><span>手动添加课程</span></a></h3>
<h4 id="添加单节课程" tabindex="-1"><a class="header-anchor" href="#添加单节课程"><span>添加单节课程</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.添加 周一周三 高等数学 8:00-9:30</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
已为 用户 添加课程：高等数学 周一,周三 8:00-9:30
</chat-message>
</chat-panel>
<h4 id="添加多节课程-指定用户" tabindex="-1"><a class="header-anchor" href="#添加多节课程-指定用户"><span>添加多节课程（指定用户）</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.添加 周四周五 9:55-12:15 大学英语 -i 114514 -n 上学大人</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
已为 上学大人 添加课程：大学英语 周四,周五 9:55-12:15
</chat-message>
</chat-panel>
<h3 id="wakeup课程表导入" tabindex="-1"><a class="header-anchor" href="#wakeup课程表导入"><span>WakeUp课程表导入</span></a></h3>
<h4 id="导入wakeup课程表" tabindex="-1"><a class="header-anchor" href="#导入wakeup课程表"><span>导入WakeUp课程表</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.wakeup 这是来自「WakeUp课程表」的课表分享......分享口令为「PaJ_8Kj_zeelspJs2HBL1」</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
已成功导入来自WakeUp的课程表，共导入 8 门课程：
课程名称：高等数学， 周一， 8:00-9:30
课程名称：大学英语， 周二， 10:00-11:30
...
</chat-message>
</chat-panel>
<h3 id="查看课程表" tabindex="-1"><a class="header-anchor" href="#查看课程表"><span>查看课程表</span></a></h3>
<h4 id="查看今日课程表" tabindex="-1"><a class="header-anchor" href="#查看今日课程表"><span>查看今日课程表</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.看看</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/课程表.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查看明日课程表" tabindex="-1"><a class="header-anchor" href="#查看明日课程表"><span>查看明日课程表</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.看看 1</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/课程表.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h4 id="查看昨天课程表" tabindex="-1"><a class="header-anchor" href="#查看昨天课程表"><span>查看昨天课程表</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.看看 -1</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<figure><img src="@source/使用指南/实用工具/课程表.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</chat-message>
</chat-panel>
<h3 id="课程移除" tabindex="-1"><a class="header-anchor" href="#课程移除"><span>课程移除</span></a></h3>
<h4 id="移除指定课程" tabindex="-1"><a class="header-anchor" href="#移除指定课程"><span>移除指定课程</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.移除</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<p>你目前在本群的课程有：</p>
<ol>
<li>高等数学 周一,周三 8:00-9:30<br>
请选择要移除的课程序号 (输入数字):</li>
</ol>
</chat-message>
<chat-message nickname="麦麦" type="user">1</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
已删除课程：高等数学 周一,周三 8:00-9:30
</chat-message>
</chat-panel>
<h3 id="课程去重" tabindex="-1"><a class="header-anchor" href="#课程去重"><span>课程去重</span></a></h3>
<h4 id="自动移除重复课程" tabindex="-1"><a class="header-anchor" href="#自动移除重复课程"><span>自动移除重复课程</span></a></h4>
<chat-panel>
<chat-message nickname="麦麦" type="user">群友课表.去重</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
已成功移除 2 门重复的课程。
</chat-message>
</chat-panel>
</div></template>


