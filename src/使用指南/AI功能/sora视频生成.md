---
title: Sora视频生成
order: 2
---

# Sora视频生成

## 概述
[![](https://img.shields.io/badge/框架-AstrBot-75B9D8?style=flat)](https://github.com/AstrBotDevs/AstrBot) [![](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org) [![](https://img.shields.io/badge/-github-202020?style=flat&logo=github)](https://github.com/maimai993/astrbot_plugin_video_sora2)
**指令名称**: sora, 生成视频, 视频生成

**功能描述**: 通过调用 OpenAI Sora 的视频生成接口，实现机器人免费生成高质量视频并在聊天平台中发送的功能

**插件名称**: astrbot_plugin_video_sora2

## 架构图

```mermaid
flowchart LR
    U[用户]
    
    subgraph Linux
        subgraph A [QQ客户端]
            QQ[QQ]
        end

        subgraph Nodejs [Python Runtime]
            subgraph B [Napcat服务]
                N[Napcat]
            end

            subgraph C [AstrBot框架]
                K[AstrBot]
                AO[adapter-onebot]
                SV[Sora视频生成插件]
                HTTP[HTTP服务器]
                DB[(Sqlite3数据库)]
            end
        end
    end

    U --> QQ
    QQ -- "① 消息/事件" --> N
    N -- "② OneBot v11协议" --> K
    
    K -- "③ 协议解析" --> AO
    AO -- "④ 事件传递" --> K
    K -- "⑤ 调用插件" --> SV
    SV -- "⑥ 获取AccessToken" --> HTTP
    HTTP -- "⑦ 接收浏览器Token上报" --> SV
    SV -- "⑧ 调用Sora API" --> K
    K -- "⑨ 业务处理" --> AO
    AO -- "⑩ 响应封装" --> K
    K -- "⑪ OneBot v11协议" --> N
    
    N -- "⑫ 响应消息" --> QQ
    QQ -- "⑬ 显示视频" --> U
    
    SV -- "⑭ 存储任务状态" --> DB
    DB -- "⑮ 查询历史记录" --> SV
```

## 使用方法

### 指令名称

```
sora [横屏|竖屏] <提示词>
生成视频 [横屏|竖屏] <提示词>
视频生成 [横屏|竖屏] <提示词>
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 横屏\|竖屏 | 文本 | 否 | 视频方向，可选"横屏"或"竖屏" | 横屏 |
| 提示词 | 文本 | 是 | 视频生成的描述文本 | 一只小猫在草地上玩耍 |

### 其他命令

| 命令 | 说明 | 示例 |
|------|------|------|
| sora查询 <task_id> | 查询视频生成状态或重放已生成的视频 | sora查询 task_123 |
| sora强制查询 <task_id> | 强制从官方接口重新查询任务状态 | sora强制查询 task_123 |
| sora鉴权检测 | 检测所有Token的有效性（仅管理员） | sora鉴权检测 |
| sora自动token状态 | 查看自动获取的Token状态 | sora自动token状态 |
| sora自动token刷新 | 手动刷新自动获取的Token列表 | sora自动token刷新 |

## 使用示例

### 基本视频生成

#### 生成竖屏视频
<chat-panel>
<chat-message nickname="麦麦" type="user">/sora 一只可爱的小猫在草地上追逐蝴蝶</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

正在生成视频，请稍候~
ID: task_abc123
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

<video src="https://cdn.tangbot.xyz/AstrBot/sora2.mp4" controls width="25%"></video>
</chat-message>
</chat-panel>

#### 生成横屏视频
<chat-panel>
<chat-message nickname="麦麦" type="user">/sora 横屏 壮丽的日落时分，金色的阳光洒在海面上，海浪轻轻拍打着沙滩</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

正在生成视频，请稍候~
ID: task_def456
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<video src="https://cdn.tangbot.xyz/AstrBot/sora.mp4" controls width="45%"></video>
</chat-message>
</chat-panel>

### 查询视频状态
<chat-panel>
<chat-message nickname="麦麦" type="user">sora查询 task_abc123</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

任务还在队列中，请稍后再看~
状态：queued 进度: 0.00%
</chat-message>
</chat-panel>


