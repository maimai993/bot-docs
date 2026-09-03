<template><div><h1 id="_1a2b" tabindex="-1"><a class="header-anchor" href="#_1a2b"><span>1a2b</span></a></h1>
<h2 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述"><span>功能描述</span></a></h2>
<p>1A2B猜数字小游戏</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="指令名称" tabindex="-1"><a class="header-anchor" href="#指令名称"><span>指令名称</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>猜数字</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<chat-panel>
    <chat-message nickname="麦麦" type="user">0123</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 0123 的匹配结果为：0A0B。</chat-message>
    <chat-message nickname="麦麦" type="user">4567</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 4567 的匹配结果为：1A1B。</chat-message>
    <chat-message nickname="麦麦" type="user">4568</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 4568 的匹配结果为：0A2B。</chat-message>
    <chat-message nickname="麦麦" type="user">4678</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 4678 的匹配结果为：0A3B。</chat-message>
    <chat-message nickname="麦麦" type="user">4786</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 4786 的匹配结果为：0A3B。</chat-message>
    <chat-message nickname="麦麦" type="user">6748</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 6748 的匹配结果为：1A2B。</chat-message>
    <chat-message nickname="麦麦" type="user">6749</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 6749 的匹配结果为：1A2B。</chat-message>
    <chat-message nickname="麦麦" type="user">7684</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 7684 的匹配结果为：0A3B。</chat-message>
    <chat-message nickname="麦麦" type="user">6478</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 6478 的匹配结果为：1A2B。</chat-message>
    <chat-message nickname="麦麦" type="user">6847</chat-message>
    <chat-message nickname="麦芽糖bot" type="bot">数字 6847 的匹配结果为：3A0B。游戏失败！正确答案为：6897。</chat-message>
</chat-panel>
</div></template>


