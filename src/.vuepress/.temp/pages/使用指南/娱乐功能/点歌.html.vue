<template><div><h1 id="点歌" tabindex="-1"><a class="header-anchor" href="#点歌"><span>点歌</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>搜索网易云音乐的歌曲，交互后发送语音消息</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>music &#x3C;关键词></span></span></code></pre>
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
<td>关键词</td>
<td>文本</td>
<td>是</td>
<td>要搜索的歌曲名</td>
<td>晴天</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
<chat-message nickname="麦麦" type="user">@麦芽糖bot 点歌 晴天</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">歌单
<table>
<thead>
<tr>
<th style="text-align:center">操作</th>
<th style="text-align:left">歌曲名称</th>
<th style="text-align:left">歌手</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天(深情版)</td>
<td style="text-align:left">Lucky小爱</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (原唱 周杰伦)</td>
<td style="text-align:left">RyaVocal</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (女声版)</td>
<td style="text-align:left">GYBeat</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天</td>
<td style="text-align:left">梦里啥都有</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天(DJ版)</td>
<td style="text-align:left">DJ阿罗</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天</td>
<td style="text-align:left">空匪</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (钢琴版)</td>
<td style="text-align:left">CIP Music</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (钢琴版) [原唱: 周杰伦]</td>
<td style="text-align:left">纪钧瀚 (Bryan Chi)</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (R&amp;B版)</td>
<td style="text-align:left">屿间凉音</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (女生版)</td>
<td style="text-align:left">余不不</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">情人 (Cover 蔡徐坤)</td>
<td style="text-align:left">晴天</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天(钢琴曲)(原唱：周杰伦)</td>
<td style="text-align:left">酷客音乐</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天（尤克里里指弹）</td>
<td style="text-align:left">葵葵</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天（梦田LiveHouse）</td>
<td style="text-align:left">Nefert</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天</td>
<td style="text-align:left">海岸的风诉说哭泣</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天 (吉他版) (原唱：周杰伦)</td>
<td style="text-align:left">郭衡 (Guo Heng)</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天</td>
<td style="text-align:left">Asasblue</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天（周同学）</td>
<td style="text-align:left">宁锐</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">世界上另一个我 (Cover 阿肆 &amp; 郭采洁)</td>
<td style="text-align:left">晴天</td>
</tr>
<tr>
<td style="text-align:center"><font color="#6c80f1">播放</font></td>
<td style="text-align:left">晴天(女版)</td>
<td style="text-align:left">叮当喵喵</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center"><font color="#6c80f1">上一页</font></th>
<th style="text-align:center"><font color="#6c80f1">下一页</font></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><font color="#6c80f1">再次点歌</font></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
</chat-message>
<chat-message nickname="麦麦" type="user">@麦芽糖bot music -n 2 -k 5pm05aSp</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">生成语音中...</recall-message><chat-message nickname="麦芽糖bot" type="bot">
<VoiceMessage 
      :duration="60" 
      audio-url="./f6a9e43337333e1f.mp3"
    />
</chat-message>
</chat-panel>
</div></template>


