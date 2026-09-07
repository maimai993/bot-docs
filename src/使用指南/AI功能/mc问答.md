---
title: mc问答
icon: cube
order: 3
---

# mc问答

## 概述
[![](https://img.shields.io/badge/框架-koishi-5445a2?style=flat)](https://koishi.chat) [![](https://img.shields.io/npm/v/koishi-plugin-mcqa)](https://www.npmjs.com/package/koishi-plugin-mcqa)

**指令名称**: q

**功能描述**: 基于 Minecraft Wiki 与 DeepSeek 大模型，智能回答我的世界（Minecraft）游戏相关问题

## 使用方法

### 指令名称

```
q <问题>
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 问题 | 文本 | 是 | 想要询问的Minecraft相关问题 | 铜有什么用 |

## 使用示例
<chat-panel>
<chat-message nickname="麦麦" type="user">q 铜有什么用</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">嘿~你问铜呀！铜在Minecraft里可是个超实用的小宝贝呢！让我给你捋一捋：<br><br><b>铜锭的主要用途</b>（适用于Java版和基岩版，1.17及以上版本）：<br>1. <b>合成避雷针</b>：用3个铜锭竖着摆就能做，能引雷还能给周围生物减伤~<br>2. <b>合成望远镜</b>：1个铜锭+1个紫水晶碎片，可以放大视野看远处风景！<br>3. <b>合成铜块</b>：9个铜锭合成一个，之后还能氧化变色，从橙红变绿，很有年代感！<br><br><b>铜块的特殊玩法</b>：<br>- 可以<b>切制</b>成台阶、楼梯、砖块等装饰方块<br>- 会随着时间<b>氧化</b>，颜色从亮橙→暗橙→青绿→翠绿，但可以用蜜脾涂蜡防止氧化哦！<br><br><b>其他小用途</b>：<br>- 铜锭还能用来做<b>刷怪笼</b>的“充电”材料（在部分版本中）<br>- 在<b>考古系统</b>里，铜锄头挖沙砾能刷出陶片（1.20+版本）<br><br>对了，铜矿一般生成在Y=0到96之间，用石镐以上就能挖到啦！如果你想要更多细节，比如氧化时间或者具体合成表，随时问我呀~ 😊</chat-message>
</chat-panel>