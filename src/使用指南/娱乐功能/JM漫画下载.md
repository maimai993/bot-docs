---
title: JM漫画下载
order: 49
---

# JM漫画下载

## 概述
[![](https://img.shields.io/badge/框架-koishi-5445a2?style=flat)](https://koishi.chat)

**指令名称**: jm

**功能描述**: 获取 JM 漫画，支持搜索与下载

## 使用方法

### 指令名称

```
本子 <ID>
jm.search <text>
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| ID | 数字 | 是 | JM漫画的编号 | 123456 |
| text | 文本 | 是 | 搜索关键词 | furry |

## 使用示例
<chat-panel>
<chat-message nickname="麦麦" type="user">jm.search furry</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">JMID：1468139<br>名称：[demicoeur]某日，鹿的疯狂(furry)[中文][daozun个人机翻]<br>作者：demicoeur<br>分类：同人<br>描述：null<br><br>JMID：1455718<br>名称：【cubedcoconut】灌鸟区VS大狼咬(furry)[中文][daozun个人机翻]<br>作者：cubedcoconut<br>分类：同人<br>描述：null<br><br>JMID：1436932<br>名称：[daozun个人机翻] [ヒジカサプリュイ (ラッコガワ)] 幼狐神社(furry)<br>作者：ラッコガワ<br>分类：短篇<br>描述：null<br><br>JMID：1427476<br>名称：【amayadoriya】海獭酱1(furry)[中文][daozun个人机翻]<br>作者：amayadoriya<br>分类：短篇<br>描述：null<br><br>JMID：1422192<br>名称：【yamuwamu】梦酱：真正的日常(furry)[中文][daozun个人机翻]<br>作者：夜梦ウツツ<br>分类：短篇<br>描述：null<br><br>JMID：1300823<br>名称：[四字真言] 爱弥斯 千珏[AI Generated]<br>作者：四字真言<br>分类：同人<br>描述：null<br><br>JMID：1256211<br>名称：【Alcor】衣物随缘（未完待续）(furry)[中文][daozun个人机翻]<br>作者：Alcor<br>分类：同人<br>描述：null<br><br>JMID：1254502<br>名称：[daozun个人机翻]【nnecgrau】狐在后(furry)[中文]<br>作者：nnecgrau<br>分类：短篇<br>描述：null<br><br>JMID：1238706<br>名称：[Ai翻译] [Wherewolf] Pet Furry Shorts [Chinese]<br>作者：Wherewolf<br>分类：同人<br>描述：null<br><br>JMID：1219517<br>名称：[chung0u0] Furry Big Wave<br>作者：chung0u0<br>分类：同人<br>描述：null<br><br>共 28 条，当前第 1 页，每页 10 条</chat-message>
<chat-message nickname="麦麦" type="user">本子 1455718</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">已将 1455718 添加到处理队列，即将开始处理</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">
<FileMessage
  fileName="1455718_密码0721.pdf"
  :fileSize="9248940"
  fileType="pdf"
/>
</chat-message>
</chat-panel>