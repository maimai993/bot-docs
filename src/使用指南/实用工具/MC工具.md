---
title: MC工具
order: 33
---

# MC工具

## 功能描述

我的世界（Minecraft）一站式工具：查询版本与服务状态、查询服务器信息、查询玩家皮肤/UUID、搜索 MCWiki / MCMOD 百科 / CurseForge / Modrinth 上的资源，并自动解析聊天中的 MC 相关链接。

## 使用方法

### 指令名称

```
mc
```

发送 `mc` 可以查看帮助。所有子命令都以 `mc.` 开头。

### 基础查询

| 指令 | 说明 |
|------|------|
| `mc.ver` | 查询 Minecraft 最新版本 |
| `mc.status` | 查询 Minecraft 官方服务状态 |
| `mc.info [server]` | 查询 Java 版服务器信息 |
| `mc.info.be [server]` | 查询基岩版服务器信息 |

### 玩家信息

| 指令 | 说明 |
|------|------|
| `mc.player <username>` | 查询玩家信息 |
| `mc.player.skin <username>` | 获取玩家皮肤预览 |
| `mc.player.head <username>` | 获取玩家大头娃娃 |
| `mc.player.raw <username>` | 获取玩家原始皮肤 |

- `-e, --elytra`：显示鞘翅
- `-c, --cape`：不显示披风
- `-b, --bg <color>`：设置背景颜色（HEX 格式）

### 资源搜索

| 指令 | 说明 |
|------|------|
| `mc.search <keyword>` | 聚合搜索（Modrinth / CurseForge / MCMOD / MCWiki，用 `-p` 指定平台） |
| `mc.wiki <keyword>` | 查询 MCWiki 内容 |
| `mc.mod <keyword>` | 查询 MCMOD 百科 |
| `mc.modrinth <keyword>` | 查询 Modrinth 资源 |
| `mc.help` | 查看插件自带的帮助 |

### 服务器交互

在插件配置里开启服务器连接功能后，还会注册以下指令（均支持 `-s, --server <服务器ID>` 指定服务器）：

| 指令 | 说明 |
|------|------|
| `mc.server.say <message>` | 发送聊天消息到服务器 |
| `mc.server.run <command>` | 执行服务器命令 |
| `mc.server.bind [username]` | 白名单管理（`-r` 解绑） |

## 使用示例



<chat-panel>
<chat-message nickname="麦麦" type="user">mc.ver</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">Minecraft 最新版本：
正式版: 26.3(2026/9/15)
快照版: 26.4-snapshot-1(2026/9/22)</chat-message>
</chat-panel>

::: tip
示例图片待补充。
:::
