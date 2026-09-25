# 在线沙盒（docs sandbox）

在文档页面里**真机试跑**麦芽糖bot 的指令。

- 每个能跑的代码块右上角会自动出现 **▶ 试运行** 按钮（用法签名/多行清单则是 **▶ 在沙盒打开**）
- 右下角常驻一个**悬浮窗**，可以直接敲指令、看机器人真实回复

## 它是怎么工作的

```
文档页面 ──▶ client/sandbox.ts ──▶ POST /api/run ──▶ server.cjs
                                                        │
                                         加载真实 Koishi 插件 + koishi.yml 配置
                                         构造假会话 → 真的 dispatch 一条消息
                                                        │
                                           ▲──────── 抓机器人 send 出去的内容
```

不是 mock，也不是写死的输出：服务端把 bot 的插件、依赖、配置原样加载起来，
用假 Bot 接住机器人发出的消息，再把内容转成 JSON 回给页面。

## 两种后端

| 模式 | 用什么 | 适合 |
|------|--------|------|
| **线上（推荐）** | `koishi-plugin-docs-sandbox` 插件，挂在 bot 上，路径 `/sandbox` | 正式部署。用的是**正在运行的那个 koishi**，插件、数据库、配置全都是真的 |
| 本地开发 | `scripts/sandbox/server.cjs`，独立进程 | bot 没跑、或者不想动 bot 的时候 |

前端默认连 `https://koi.tangbot.xyz/sandbox`（线上插件）。两种后端接口形状一致，
所以前端不用改，只要把地址指过去。

### 线上：装插件

插件源码在 bot 仓库的 `D:\devkoishi\plugins\koishi-plugin-docs-sandbox`，
已经复制到 `C:/sj/koishi/node_modules/koishi-plugin-docs-sandbox`。

在 `koishi.yml` 里启用：

```yaml
plugins:
  docs-sandbox:
    path: /sandbox
    origins: ['*']        # 建议收窄成 https://docs.tangbot.xyz
    rateLimit: 60
```

重启 bot 后访问 `https://<你的域名>/sandbox` 就能看到界面；
控制台侧边栏也会多出「在线沙盒」入口。

### CORS 规则和「被 blocked」怎么办

浏览器报这个：

```
Access to fetch at '.../sandbox/api/commands' from origin 'http://localhost:8080'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
```

意思是**服务端没把当前页面的来源放进白名单**（请求本身是通的，返回了 200，
只是响应头里没有 `Access-Control-Allow-Origin`，浏览器就把结果丢掉了）。

`origins` 支持通配，`*` 只匹配一级子域：

```yaml
origins:
  - https://docs.tangbot.xyz
  - https://*.tangbot.xyz      # kkk.tangbot.xyz 可以，a.b.tangbot.xyz 不行
```

规则末尾有 `$` 锚定，`https://*.tangbot.xyz` 不会放行 `https://tangbot.xyz.evil.com`。

**本地调试不用配 `origins`**：`allowLocalhost`（默认开）会自动放行
`localhost` / `127.0.0.1` 的任意端口。

排查手法 —— 直接看响应头（不要看浏览器，浏览器只会给你那句笼统的报错）：

```powershell
curl.exe -s -D - -o NUL -H "Origin: http://localhost:8080" https://koi.tangbot.xyz/sandbox/api/commands
```

- 有 `access-control-allow-origin` → 前端问题
- 没有 → 来源不在白名单。同时服务端日志里会有一行
  `跨域来源被拒绝: <origin>（origins=[...]）`，照着加即可

### 本地开发

```powershell
node scripts/sandbox/server.cjs --bot-root C:/sj/koishi --port 3100
pnpm docs:dev
```

然后在浏览器控制台里把地址指到本地：

```js
localStorage.setItem('docs-sandbox-api', 'http://127.0.0.1:3100')  // 刷新生效
```

打开文档页面，能连上后端时右下角会出现「在线沙盒」悬浮球，
代码块右上角也会出现「试运行」按钮。

### 参数

| 参数 | 默认 | 说明 |
|------|------|------|
| `--bot-root` | `C:/sj/koishi` | bot 工程目录，用于解析 koishi / 插件 / koishi.yml |
| `--port` | `3100` | 监听端口 |
| `--host` | `127.0.0.1` | 监听地址。**改成 0.0.0.0 等于把它暴露到公网，想清楚再改** |
| `--origin` | `*` | CORS 允许的来源，建议生产环境收窄成文档站域名 |
| `--rate` | `40` | 每 IP 每分钟请求上限 |
| `--plugins` | 见下 | 逗号分隔的插件名单，覆盖默认列表 |

### 前端指向别的后端

页面默认连 `http://127.0.0.1:3100`。要改：

```html
<!-- 在 app 之前执行 -->
<script>window.__SANDBOX_API__ = 'https://sandbox.example.com'</script>
```

或者在浏览器控制台里：

```js
localStorage.setItem('docs-sandbox-api', 'https://sandbox.example.com') // 刷新生效
```

## 安全检查清单

这个服务会**真的执行指令**，所以：

- 默认只监听 `127.0.0.1`
- 默认插件列表**刻意排除**了 `spawn-modified`(exec)、`sudo`、`shutdown`、
  `database-operate`、`command-creater`、`qq-chat`、`screenshot`、`verifier`
  这些能执行 shell / 改数据库 / 后台管理的插件
- 带每 IP 限流（默认 40 次/分钟）
- 单条指令长度上限 500 字符，请求体上限 20KB
- 只允许执行**已加载插件注册过的指令**，其它一律拒绝

要上公网，至少还要做：收窄 `--origin`、放到反代后面加鉴权、容器里跑并限制权限、
把 sqlite 落到临时目录。

## 默认加载的插件

```
abbreviation  chouxianghua  crazy-thursday  tongue-twister-picker  homo
trpgdice  bmi-calculator  guess-number  furry-encode-decode  martian-translator
picstatus  mc-tools  idiom-dictionary  ciyi  bull-card  driving-test  pighub
emojimixer  vv-bot  smmcat-daxue  smmcat-saima  smmcat-signin  smmcat-transfermoney
smmcat-faqcooking  smmcat-openword  smmcat-oldmaid  smmcat-gensokyo  smmcat-fishtime
impart-pro  deer-pipe  wordle-game  re-driftbottle  waifu  gameinfo  bilisearch
bing  hot-search  weather-qq-rainbowsky  ptcg-research  divine-oracle  qrcode
get-qq-bot-transfer-link  screenshot-console  emojihub-bili  hero-search
baidu-image-search  bilibili-real-rating  markdown-to-image-service
certificate-achievement  pic-splice-lizard  guild-recall  @wahaha216/jmcomic
```

约 400 条指令。要加插件就 `--plugins a,b,c`。

## 限制

- **图片渲染不可用**：服务端用一个 puppeteer 占位服务满足 `inject`，
  真去渲染时会抛错；所以「生成奖状」「今日运势」这类纯出图的指令拿不到结果。
  会返回网络图片 URL 的（如 `pig`、部分表情包）可以正常显示。
- **需要登录态的指令**（如绑定账号后的查询）在沙盒里没有绑定数据，会提示未绑定。
- 每个请求固定等待 2.6s 收集回复，慢指令可能被截断。

## 相关脚本

| 文件 | 说明 |
|------|------|
| `server.cjs` | 沙盒后端（HTTP + Koishi 运行时） |
| `check-docs.cjs` | 用 jsdom 扫构建产物，报告哪些代码块会挂上按钮，用于验证前后端“对得上”（需要 `npm i jsdom`） |

```powershell
node scripts/sandbox/check-docs.cjs
# 沙盒可用指令: 409 条
# 扫描页面: 131，含代码块: 297，将获得按钮: 96，覆盖页面: 42
```
