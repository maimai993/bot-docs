---
title: b站搜索
icon: 
order: 1
---

# b站搜索

## 功能描述
在Bilibili平台进行多类型内容搜索，支持视频、用户、专栏等多种搜索类型
## 使用方法

### 指令名称

```
b站搜索 <内容> [类型] [排序]
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 内容 | 文本 | 是 | 要搜索的关键词 | furry |
| 类型 | 文本 | 否 | 搜索内容类型，默认为综合 | 用户 |
| 排序 | 文本 | 否 | 搜索结果排序方式 | 粉丝由高到低 |

### 搜索类型说明

| 类型 | 说明 | 支持的排序选项 |
|------|------|----------------|
| **综合** | 跨类型综合搜索 | 最多播放、最多点击、最多评论、最多弹幕、最多收藏、最新发布 |
| **视频** | 搜索视频内容 | 最多播放、最新发布、最多弹幕、最多收藏 |
| **番剧** | 搜索番剧内容 | 默认排序 |
| **影视** | 搜索影视内容 | 默认排序 |
| **直播** | 搜索直播内容 | 最新开播、主播、直播间、直播间最新开播 |
| **专栏** | 搜索专栏文章 | 最新发布、最多点击、最多喜欢、最多评论 |
| **用户** | 搜索用户账号 | 粉丝由高到低、粉丝由低到高、等级由高到低、等级由低到高 |

## 使用示例

### 基本搜索

#### 搜索 `furry` 相关内容
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./b站搜索1.png)
</chat-message>
</chat-panel>

### 指定类型搜索

#### 搜索 `furry` 用户
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 用户</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./b站搜索2.png)
</chat-message>
</chat-panel>

### 指定排序方式

#### 搜索 `furry` 用户并按粉丝数排序
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 用户 粉丝由高到低</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./b站搜索3.png)
</chat-message>
</chat-panel>

#### 搜索 `furry` 视频并按播放量排序
<chat-panel>
<chat-message nickname="麦麦" type="user">b站搜索 furry 视频 最多播放</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./b站搜索4.png)
</chat-message>
</chat-panel>
