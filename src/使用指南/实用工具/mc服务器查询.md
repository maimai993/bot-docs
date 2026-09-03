---
title: MC服务器查询
icon: 
order: 2
---

# MC服务器查询

## 概述
[![](https://img.shields.io/badge/框架-koishi-5445a2?style=flat)](https://koishi.chat) [![](https://img.shields.io/npm/v/koishi-plugin-mcmotd-customserver-canvas)](https://www.npmjs.com/package/koishi-plugin-mcmotd-customserver-canvas)

**指令名称**: MBS/MJS

**功能描述**: 查询Minecraft Java版和基岩版服务器信息

## 架构图

```mermaid
flowchart LR
    U[用户]
    
    subgraph Linux
        subgraph A [QQ客户端]
            QQ[QQ]
        end

        subgraph Nodejs [Node.js Runtime]
            subgraph B [Napcat服务]
                N[Napcat]
            end

            subgraph C [Koishi框架]
                K[Koishi]
                AO[adapter-onebot]
                MM[mcmotd-customserver-canvas]
            end
        end
    end

    U --> QQ
    QQ -- "① 消息/事件" --> N
    N -- "② OneBot v11协议" --> K
    
    K -- "③ 协议解析" --> AO
    AO -- "④ 事件传递" --> K
    K -- "⑤ 调用插件" --> MM
    MM -- "⑥ 查询服务器" --> MM
    MM -- "⑦ 生成图片" --> MM
    MM -- "⑧ 返回结果" --> K
    K -- "⑨ 业务处理" --> AO
    AO -- "⑩ 响应封装" --> K
    K -- "⑪ OneBot v11协议" --> N
    
    N -- "⑫ 响应消息" --> QQ
    QQ -- "⑬ 显示结果" --> U
```

## 使用方法

### 指令名称

```
MBS <地址(可带端口)> [端口(选填)]
MJS <地址(可带端口)> [端口(选填)]
motdbe <地址(可带端口)> [端口(选填)]
motdje <地址(可带端口)> [端口(选填)]
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 地址 | 文本 | 是 | 要查询的服务器地址 | localhost |
| 端口 | 数字 | 否 | 服务器端口号 | 25565 |

## 使用示例

### 查询 `基岩版` 服务器

<chat-panel>
<chat-message nickname="麦麦" type="user">MBS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./mc服务器查询2.png)
</chat-message>
</chat-panel>

#### 查询 `指定端口` 的 `基岩版` 服务器
<chat-panel>
<chat-message nickname="麦麦" type="user">MBS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./mc服务器查询2.png)
</chat-message>
</chat-panel>

### 查询 `Java版` 服务器

#### 查询 `Java版` 服务器
<chat-panel>
<chat-message nickname="麦麦" type="user">MJS mc233.cn</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./mc服务器查询3.png)
</chat-message>
</chat-panel>

#### 查询 `指定端口` 的 `Java` 版服务器
<chat-panel>
<chat-message nickname="麦麦" type="user">MJS play.simpfun.cn 36877</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./mc服务器查询4.png)
</chat-message>
</chat-panel>
