---
title: Emoji合成
icon: 
order: 1
---

# Emoji合成

## 功能描述
混合两个emoji表情，生成合成图片

## 使用方法

### 指令名称

```
emix <emoji1><emoji2>
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| emoji1 | emoji | 是 | 第一个emoji表情 | 😊 |
| emoji2 | emoji | 是 | 第二个emoji表情 | 😢 |


## 使用示例

### 基本合成

#### 合成笑脸和哭脸
<chat-panel>
<chat-message nickname="麦麦" type="user">emix 😊😢</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./emoji合成.png)
</chat-message>
</chat-panel>

