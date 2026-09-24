---
title: Typst渲染
order: 29
---

# Typst渲染

## 功能描述

使用 [Typst](https://typst.app/) 排版引擎把代码渲染成图片，支持标记模式、脚本模式和数学模式。

## 使用方法

### 指令名称

```
typst.markup <内容>
typst.script <内容>
typst.math <内容>
```

### 参数说明

| 指令 | 说明 | 示例 |
|------|------|------|
| `typst.markup <内容>` | 渲染 Typst 标记模式代码 | `typ #text(red)[你好]` |
| `typst.script <内容>` | 渲染 Typst 脚本模式代码 | `typc 内容` |
| `typst.math <内容>` | 渲染 Typst 数学模式代码 | `teq 内容` |

### 可选参数

| 参数 | 说明 |
|------|------|
| `-f <color>` | 设置文字颜色 |
| `-s <size>` | 设置字体大小 |
| `-w <width>` | 设置宽度（`auto` 或数字） |
| `--height <height>` | 设置高度（`auto` 或数字） |

::: tip
多行代码可以用代码块包裹后发送。
:::

## 使用示例

（示例待补充）
