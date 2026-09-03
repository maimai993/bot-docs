---
title: VV表情包搜索
icon: 
order: 1
---

# VV表情包搜索

## 功能描述
搜索并返回VV表情包图片

## 使用方法

### 指令名称

```
vv <搜索关键词> [数量]
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 搜索关键词 | 文本 | 是 | 要搜索的表情包关键词 | 开心 |
| 数量 | 数字 | 否 | 返回的表情包数量，默认1，最大5 | 3 |

## 使用示例

### 搜索单个表情包

#### 搜索"开心"表情包
<chat-panel>
<chat-message nickname="麦麦" type="user">vv 开心</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./vvkx.webp)
</chat-message>
</chat-panel>

### 搜索多个表情包

#### 搜索3个"惊讶"表情包
<chat-panel>
<chat-message nickname="麦麦" type="user">vv 惊讶 3</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./vvjy1.webp)
![](./vvjy2.webp)
![](./vvjy3.webp)
</chat-message>
</chat-panel>

#### 搜索5个"生气"表情包
<chat-panel>
<chat-message nickname="麦麦" type="user">vv 生气 5</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./vvsq1.webp)
![](./vvsq2.webp)
![](./vvsq3.webp)
![](./vvsq4.webp)
![](./vvsq5.webp)
</chat-message>
</chat-panel>
