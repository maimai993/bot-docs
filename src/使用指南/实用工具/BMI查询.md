---
title: BMI查询
icon: 
order: 1
---

# BMI查询

## 功能描述
根据身高和体重

## 使用方法

### 指令名称

```
bmi-calculator <身高> <体重>
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| 身高 | 数字 | 是 | 身高（厘米） | 175 |
| 体重 | 数字 | 是 | 体重（斤） | 145 |

## 使用示例

### 正常体重计算

<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 175 130</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

您的BMI指数为21.2。
正常体重是身体健康的一项标志，继续保持良好的生活习惯。
</chat-message>
</chat-panel>

### 超重计算

<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 170 160</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

您的BMI指数为27.7。
注意啦，您的体重是健康的，但身体已经不苗条了唔，适当锻炼很重要哦~
</chat-message>
</chat-panel>

### 低体重计算

<chat-panel>
<chat-message nickname="麦麦" type="user">bmi-calculator 180 120</chat-message>
<chat-message nickname="麦芽糖bot" type="bot">

您的BMI指数为18.5。
您的体重稍轻，请适度增加营养摄入。
</chat-message>
</chat-panel>

## BMI标准范围

| BMI范围 | 分类 | 说明 |
|---------|------|------|
| < 18.5 | 低体重 | 体重过轻，需要适当增加营养 |
| 18.5 - 24.9 | 正常体重 | 理想体重范围，继续保持 |
| 25 - 29.9 | 超重 | 体重偏重，建议适当控制 |
| 30 - 34.9 | 肥胖（一级） | 需要调整饮食和锻炼计划 |
| 35 - 39.9 | 肥胖（二级） | 建议咨询医生制定减重计划 |
| ≥ 40 | 肥胖（三级） | 强烈建议寻求专业医疗帮助 |

