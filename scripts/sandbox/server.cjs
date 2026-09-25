#!/usr/bin/env node
'use strict';
/**
 * 麦芽糖bot 在线沙盒 —— 在文档站里试运行真实指令。
 *
 * 它把真实的 Koishi 插件加载起来（用 bot 实例的 node_modules 与 koishi.yml 配置），
 * 收到 HTTP 请求时构造一个假会话、真的执行指令，再把机器人真实的回复抓回来。
 *
 * 用法:
 *   node server.cjs --bot-root C:/sj/koishi --port 3100
 */
const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const { createRequire } = require('node:module');

// ---- args ----------------------------------------------------------------
function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const BOT_ROOT = path.resolve(arg('bot-root', 'C:/sj/koishi'));
const PORT = Number(arg('port', 3100));
const HOST = arg('host', '127.0.0.1');
const ORIGIN = arg('origin', '*');
const RATE_MAX = Number(arg('rate', 40));
const RATE_WINDOW = 60_000;

// 插件大量使用相对 cwd 的数据目录（data/xxx），必须切到 bot 根目录，
// 否则会像 jmcomic 那样在 scandir 时直接抛错。
process.chdir(BOT_ROOT);

// 沙盒必须比 bot 更耐揍：任何插件的异步异常都不该把服务带走。
process.on('unhandledRejection', (e) => {
  console.warn('[sandbox] unhandled rejection:', (e && e.message) || e);
});
process.on('uncaughtException', (e) => {
  console.warn('[sandbox] uncaught exception:', (e && e.message) || e);
});

const req = createRequire(path.join(BOT_ROOT, 'package.json'));
const { Context, Service } = req('koishi');
const { Bot } = req('@satorijs/core');

function load(pkg) {
  let m = req(pkg);
  if (m && typeof m === 'object' && typeof m.apply !== 'function' && m.default) m = m.default;
  return m;
}

// ---- 默认加载的插件（离线可用、无需登录、返回文本） ----------------------
// 故意不包含：spawn-modified / sudo / shutdown / database-operate / command-creater /
// qq-chat / screenshot / verifier —— 这些有执行 shell、改数据库或后台管理的能力，
// 不适合暴露给公网文档站。需要时用 --plugins 显式加。
const DEFAULT_PLUGINS = [
  'abbreviation',
  'chouxianghua',
  'crazy-thursday',
  'tongue-twister-picker',
  'homo',
  'trpgdice',
  'bmi-calculator',
  'guess-number',
  'furry-encode-decode',
  'martian-translator',
  'picstatus',
  'mc-tools',
  'idiom-dictionary',
  'ciyi',
  'bull-card',
  'driving-test',
  'pighub',
  'emojimixer',
  'vv-bot',
  'smmcat-daxue',
  'smmcat-saima',
  'smmcat-signin',
  'smmcat-transfermoney',
  'smmcat-faqcooking',
  'smmcat-openword',
  'smmcat-oldmaid',
  'smmcat-gensokyo',
  'smmcat-fishtime',
  'impart-pro',
  'deer-pipe',
  'wordle-game',
  're-driftbottle',
  'waifu',
  'gameinfo',
  'bilisearch',
  'bing',
  'hot-search',
  'weather-qq-rainbowsky',
  'ptcg-research',
  'divine-oracle',
  'qrcode',
  'get-qq-bot-transfer-link',
  'screenshot-console',
  'emojihub-bili',
  'hero-search',
  'baidu-image-search',
  'bilibili-real-rating',
  'markdown-to-image-service',
  'certificate-achievement',
  'pic-splice-lizard',
  'guild-recall',
  '@wahaha216/jmcomic',
];
const PLUGINS = arg('plugins', DEFAULT_PLUGINS.join(',')).split(',').map(s => s.trim()).filter(Boolean);

// ---- 假会话 --------------------------------------------------------------
const CAP = [];
class SandboxBot extends Bot {
  constructor(ctx, config) {
    super(ctx, config, 'sandbox');
    this.selfId = config.selfId || '10000';
  }
  async sendMessage(channelId, content) {
    CAP.push(content);
    return ['m' + CAP.length];
  }
  async createDirectChannel(userId) { return { id: 'private:' + userId }; }
  async getUser(id) { return { id, name: '测试用户', avatar: '' }; }
  async getGuild(id) { return { id, name: '沙盒群' }; }
  async getChannel(id) { return { id, type: 0 }; }
  async deleteMessage() {}
  async editMessage() {}
}

class PuppeteerStub extends Service {
  constructor(ctx) { super(ctx, 'puppeteer', true); this.browser = null; }
  async render() { throw new Error('在线沙盒未启用图片渲染'); }
  async page() { throw new Error('在线沙盒未启用图片渲染'); }
  async screenshot() { throw new Error('在线沙盒未启用图片渲染'); }
}

// ---- 把机器人发出去的内容转成可传输的 JSON ------------------------------
function toOutputs(content) {
  const out = [];
  const walk = (c) => {
    if (c == null) return;
    if (typeof c === 'string') { if (c) out.push({ type: 'text', text: c }); return; }
    if (Array.isArray(c)) { c.forEach(walk); return; }
    if (typeof c !== 'object') { out.push({ type: 'text', text: String(c) }); return; }
    const d = c.attrs || c.data || {};
    switch (c.type) {
      case 'text': if (d.content) out.push({ type: 'text', text: d.content }); return;
      case 'img':
      case 'image': {
        const v = d.src || d.url || d.file || '';
        if (typeof v === 'string' && v.startsWith('http')) out.push({ type: 'image', url: v });
        else if (Buffer.isBuffer(v)) out.push({ type: 'image', url: 'data:image/png;base64,' + v.toString('base64') });
        else if (typeof v === 'string' && v.startsWith('base64://')) out.push({ type: 'image', url: 'data:image/png;base64,' + v.slice(9) });
        else if (typeof v === 'string' && v) out.push({ type: 'image', url: v });
        else out.push({ type: 'text', text: '[图片]' });
        return;
      }
      case 'at': out.push({ type: 'text', text: '@' + (d.id || '') }); return;
      case 'quote': return;
      default: {
        if (typeof c.toString === 'function') {
          const s = c.toString();
          if (s && s !== '[object Object]') { out.push({ type: 'text', text: s }); return; }
        }
      }
    }
  };
  walk(content);
  return out;
}

// ---- 启动运行时 ----------------------------------------------------------
let ctx = null, bot = null;
const AVAILABLE = new Set();      // 沙盒真正能跑的指令名
const PLUGIN_OF = new Map();      // 指令 -> 插件名

async function boot() {
  ctx = new Context({ prefix: '' });
  for (const p of ['@koishijs/plugin-commands', '@koishijs/plugin-http']) {
    try { ctx.plugin(load(p)); } catch (e) { console.warn('[sandbox] service ' + p + ': ' + e.message); }
  }
  const dbDir = path.join(BOT_ROOT, 'data', 'docs-sandbox');
  fs.mkdirSync(dbDir, { recursive: true });
  try { ctx.plugin(load('@koishijs/plugin-database-sqlite'), { path: path.join(dbDir, 'sandbox.db') }); } catch (e) {}
  ctx.plugin((c) => { c.puppeteer = new PuppeteerStub(c); });
  for (const p of ['@koishijs/plugin-server', '@koishijs/plugin-notifier', '@koishijs/plugin-locales', 'koishi-plugin-monetary', 'koishi-plugin-smmcat-localstorage', 'koishi-plugin-cache-database']) {
    try { const m = load(p); if (m && (typeof m === 'function' || typeof m.apply === 'function')) ctx.plugin(m, {}); } catch (e) {}
  }
  bot = new SandboxBot(ctx, { selfId: '10000' });
  await ctx.start();

  // 读 bot 的真实配置喂给插件
  let CONFIGS = {};
  try {
    const yml = path.join(BOT_ROOT, 'koishi.yml');
    let doc;
    try { doc = req('yaml').parse(fs.readFileSync(yml, 'utf8')); }
    catch (e) { doc = req('js-yaml').load(fs.readFileSync(yml, 'utf8')); }
    (function walk(node) {
      if (!node || typeof node !== 'object') return;
      for (const [k, v] of Object.entries(node)) {
        const m = /^([~]?)([A-Za-z0-9@_./-]+):[0-9a-z]{6}$/.exec(k);
        if (m) {
          const cfg = {};
          if (v && typeof v === 'object') for (const [ck, cv] of Object.entries(v)) if (!ck.startsWith('$')) cfg[ck] = cv;
          if (!m[1]) CONFIGS[m[2]] = cfg;
          continue;
        }
        if (v && typeof v === 'object') walk(v);
      }
    })(doc);
  } catch (e) { console.warn('[sandbox] config: ' + e.message); }

  for (const name of PLUGINS) {
    let loaded = false;
    const cands = name.startsWith('@')
      ? [name.split('/')[0] + '/koishi-plugin-' + name.split('/')[1], name]
      : ['koishi-plugin-' + name, name];
    for (const c of cands) {
      let mod;
      try { mod = load(c); } catch (e) { continue; }
      if (!mod || (typeof mod !== 'function' && typeof mod.apply !== 'function')) continue;
      try {
        ctx.plugin(mod, CONFIGS[name] || {});
        console.log('[sandbox] + ' + name);
        loaded = true;
      } catch (e) { console.warn('[sandbox] ' + name + ' 加载失败: ' + e.message); }
      break;
    }
    if (!loaded) console.warn('[sandbox] - ' + name + ' 未找到');
  }
  await new Promise(r => setTimeout(r, 2500));

  if (ctx.$commander) {
    for (const cmd of ctx.$commander._commandList) {
      if (cmd.name === 'command') continue;
      AVAILABLE.add(cmd.name);
    }
  }
  console.log('[sandbox] 可用指令 ' + AVAILABLE.size + ' 条');
}

// ---- HTTP ----------------------------------------------------------------
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW);
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return true; }
  arr.push(now); hits.set(ip, arr);
  return false;
}

function json(res, code, body) {
  const s = JSON.stringify(body);
  res.writeHead(code, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': ORIGIN,
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'cache-control': 'no-store',
  });
  res.end(s);
}

async function runCommand(command, opts) {
  const before = CAP.length;
  const gid = (opts && opts.channelId) || '90001';
  const session = bot.session({
    type: 'message',
    channel: { id: gid, type: 0 },
    guild: { id: gid },
    user: { id: (opts && opts.userId) || '20001', name: (opts && opts.userName) || '麦麦' },
    message: { id: 'm' + Date.now() },
    timestamp: Date.now(),
  });
  session.content = command;
  bot.dispatch(session);
  await new Promise(r => setTimeout(r, 2600));
  const outputs = [];
  for (const c of CAP.slice(before)) outputs.push(...toOutputs(c));
  for (const o of outputs) {
    if (o.type === 'text') o.text = o.text.replace(/@\d{5,}/g, '@麦麦');
  }
  return outputs;
}

const server = http.createServer(async (httpReq, res) => {
  const url = new URL(httpReq.url, 'http://localhost');
  if (httpReq.method === 'OPTIONS') return json(res, 204, {});
  const ip = httpReq.socket.remoteAddress || 'x';

  if (url.pathname === '/health') return json(res, 200, { ok: true, commands: AVAILABLE.size });
  if (url.pathname === '/api/commands') return json(res, 200, { commands: [...AVAILABLE].sort() });

  if (url.pathname === '/api/run' && httpReq.method === 'POST') {
    if (rateLimited(ip)) return json(res, 429, { error: '请求过于频繁，请稍后再试' });
    let body = '';
    for await (const chunk of httpReq) {
      body += chunk;
      if (body.length > 20000) { httpReq.destroy(); return; }
    }
    let payload;
    try { payload = JSON.parse(body || '{}'); } catch (e) { return json(res, 400, { error: 'bad json' }); }
    const command = String(payload.command || '').trim().slice(0, 500);
    if (!command) return json(res, 400, { error: 'command 不能为空' });
    const root = command.split(/\s/)[0];
    if (AVAILABLE.size && !AVAILABLE.has(root)) {
      return json(res, 200, { supported: false, outputs: [], error: '沙盒未加载「' + root + '」指令' });
    }
    try {
      const outputs = await runCommand(command, payload);
      return json(res, 200, { supported: true, outputs });
    } catch (e) {
      return json(res, 200, { supported: true, outputs: [{ type: 'text', text: '执行出错：' + e.message }] });
    }
  }

  json(res, 404, { error: 'not found' });
});

boot().then(() => {
  server.listen(PORT, HOST, () => {
    console.log('[sandbox] listening on http://' + HOST + ':' + PORT);
  });
}).catch(e => { console.error('[sandbox] boot failed', e); process.exit(1); });

process.on('SIGINT', () => { server.close(); if (ctx) ctx.stop().finally(() => process.exit(0)); });
