# docs-examples —— 用真实插件运行结果生成文档示例

这套脚本会**真的把 bot 的插件加载起来、真的执行指令**，把机器人返回的内容抓下来，
再回填到 `src/使用指南/**` 里 `（示例待补充）` 的位置。

## 前提

脚本假设：

- bot 实例在 `C:/sj/koishi`（需要一个装好依赖的 Koishi 工程，用作模块解析根目录）
- 临时 sqlite 库写到 `D:/devkoishi/_botdocs-probe`
- 文档仓库在 `D:/bot-docs`

注意：脚本必须放在 bot 目录下运行（或保证 `require('koishi')` 解析到同一份 koishi），
否则插件与 harness 会拿到两份不同的 Koishi 实例。

## 组件

| 文件 | 作用 |
|------|------|
| `harness.cjs` | 核心测试桩：造 Context、注册假 Bot、捕获机器人发出去的消息；内置 puppeteer 占位服务与常用服务插件预加载 |
| `extract-configs.cjs` | 从 `koishi.yml` 里抽出各插件的真实配置（只取已启用的） |
| `batch.cjs` | 批量跑用例（进程内），结果写 `results.json` |
| `run-one.cjs` | 只跑一个用例，结果写 `out/<插件>.json` —— 用于隔离崩溃 |
| `driver.cjs` | 逐个子进程调 `run-one.cjs`，一个插件崩了不影响其它 |
| `dump.cjs` | 合并 `out/*.json` 成 `all-out.json` |
| `inject-examples.cjs` | 依据 `docmap.json` 把真实输出写进对应文档 |

## 流程

```powershell
# 0) 把脚本放到 bot 目录里运行
cd C:/sj/koishi/_docs-probe

# 1) 抽配置 + 生成用例清单（用例是 {plugin, inputs:[...]} 的数组）
node extract-configs.cjs
node gen-cases.cjs

# 2) 跑指令（每个插件一个子进程，较慢但稳）
node driver.cjs C:/sj/koishi/_docs-probe/cases-all.json

# 3) 合并结果
node dump.cjs

# 4) 回填文档
node inject-examples.cjs
```

## 说明与限制

- **只回填纯文本回复。** 依赖图片渲染的指令（puppeteer / canvas / typst / ffmpeg）
  在本环境里跑不出结果，这些页面会保持 `（示例待补充）`，由人工截图补充。
- `harness.cjs` 里的 puppeteer 是**占位实现**，只为让 `inject: ['puppeteer']` 的插件能加载，
  一旦真的调用渲染就会抛 `PUPPETEER_STUB`；这类输出会被 `inject-examples.cjs` 过滤掉。
- 抓到的指令名是**插件注册名**。机器人 `koishi.yml` 里的 `commands:` 配置还会重命名/限权，
  所以文档里的指令名以 `koishi.yml` 为准，脚本结果主要用于**核对**与**示例正文**。
- 部分插件需要联网（天气、必应、MC 版本等），无网络时会失败并被过滤。
