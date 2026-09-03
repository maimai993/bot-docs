---
title: GIF图片处理
icon: 
order: 1
---

# GIF图片处理

## 功能描述
提供多种GIF图片处理功能，包括倒放、回弹、滑动、旋转、转向等效果

## 使用方法

### 指令名称

```
gif [选项] [图片]
```

### 选项说明

| 选项 | 简写 | 参数 | 说明 |
|------|------|------|------|
| `--rebound` | `-b` | 无 | 回弹效果（正放+倒放） |
| `--reverse` | `-r` | 无 | 倒放 GIF |
| `--frame` | `-f` | number | 指定处理gif的帧间隔 |
| `--slide` | `-l` | string | 滑动方向 (上/下/左/右) |
| `--rotate` | `-o` | string | 旋转方向 (顺/逆) |
| `--turn` | `-t` | string | 转向角度 (上/下/左/右/左上/左下/右上/右下/0-360) |
| `--shake` | `-s` | 无 | 上下震动效果 |
| `--information` | `-i` | 无 | 显示 GIF 信息 |

## 使用示例

### 回弹效果
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -b</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif2.gif)
图片信息：
文件大小：4636.02 KB
图片尺寸：400x679
帧数：58
帧间隔：66.72 毫秒
帧率：14.99 FPS
总时长：3.87 秒
</chat-message>
</chat-panel>

### 倒放GIF
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -r</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif3.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif4.gif)
图片信息：
文件大小：1892.95 KB
图片尺寸：240x240
帧数：200
帧间隔：30.00 毫秒
帧率：33.33 FPS
总时长：6.00 秒
</chat-message>
</chat-panel>

### 右滑效果
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -l 右</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif5.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif6.gif)
图片信息：
文件大小：1732.19 KB
图片尺寸：400x400
帧数：17
帧间隔：50.00 毫秒
帧率：20.00 FPS
总时长：0.85 秒
</chat-message>
</chat-panel>

### 顺时针旋转
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -o 顺</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif5.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif7.gif)
图片信息：
文件大小：1667.81 KB
图片尺寸：400x400
帧数：17
帧间隔：50.00 毫秒
帧率：20.00 FPS
总时长：0.85 秒
</chat-message>
</chat-panel>

### 转向30度
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -t 30</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif5.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif8.gif)
</chat-message>
</chat-panel>

### 加速gif
<chat-panel>
<chat-message nickname="麦麦" type="user">gif -f 20</chat-message>
<recall-message nickname="麦芽糖bot" type="bot">在 50 秒内发送想要处理的图片</recall-message>
<chat-message nickname="麦麦" type="user">

![](./gif5.gif)
</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

![](./gif9.gif)
</chat-message>
</chat-panel>
