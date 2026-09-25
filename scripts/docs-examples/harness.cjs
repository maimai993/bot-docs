'use strict';
// Generic Koishi command harness: loads REAL plugins and captures REAL replies.
const path = require('node:path');
const { Context, Service } = require('koishi');
const { Bot } = require('@satorijs/core');

// Lightweight stand-in for the real puppeteer service so plugins that
// `inject: ['puppeteer']` will still apply. Image rendering throws,
// text replies produced before/around it are still captured.
class PuppeteerStub extends Service {
  constructor(ctx) {
    super(ctx, 'puppeteer', true);
    this.browser = null;
    this.error = null;
  }
  async render() { throw new Error('PUPPETEER_STUB'); }
  async page() { throw new Error('PUPPETEER_STUB'); }
  async screenshot() { throw new Error('PUPPETEER_STUB'); }
}

const CAP = [];
global.__CAP = CAP;

class TestBot extends Bot {
  constructor(ctx, config) {
    super(ctx, config, 'test');
    this.selfId = config.selfId || '10000';
  }
  async sendMessage(channelId, content, referrer, options) {
    CAP.push({ channelId, content });
    return ['mid' + CAP.length];
  }
  async createDirectChannel(userId) { return { id: 'private:' + userId }; }
  async getMessage() { return undefined; }
  async getUser(id) { return { id, name: '麦麦', avatar: 'https://example.com/a.png' }; }
  async getGuild(id) { return { id, name: '测试群' }; }
  async getChannel(id) { return { id, type: 0 }; }
  async deleteMessage() {}
  async editMessage() {}
}

// plugin packages are ESM-interop wrapped: unwrap .default when needed
function load(pkg) {
  let m = require(pkg);
  if (m && typeof m === 'object' && typeof m.apply !== 'function' && m.default) m = m.default;
  return m;
}

function renderContent(content) {
  if (content == null) return '';
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.map(renderContent).join('');
  if (typeof content === 'object') {
    const d = content.attrs || content.data || {};
    if (content.type === 'text') return d.content || '';
    if (content.type === 'img' || content.type === 'image') return '<img:' + (d.src || d.url || d.file || '') + '>';
    if (content.type === 'at') return '@' + (d.id || '');
    if (content.type === 'quote') return '';
    if (typeof content.toString === 'function') {
      try { const s = content.toString(); if (s && s !== '[object Object]') return s; } catch (e) {}
    }
    return JSON.stringify(content).slice(0, 300);
  }
  return String(content);
}

async function makeCtx(opts) {
  opts = opts || {};
  const ctx = new Context({ prefix: opts.prefix === undefined ? '' : opts.prefix });
  const notes = [];
  for (const pkg of ['@koishijs/plugin-commands', '@koishijs/plugin-http']) {
    try { ctx.plugin(load(pkg)); } catch (e) { notes.push(pkg + ': ' + e.message); }
  }
  try {
    ctx.plugin(load('@koishijs/plugin-database-sqlite'), {
      path: path.join(opts.dbDir || 'D:/devkoishi/_botdocs-probe', (opts.db || 'probe') + '.db'),
    });
  } catch (e) { notes.push('sqlite: ' + e.message); }
  try { ctx.plugin((c) => { c.puppeteer = new PuppeteerStub(c); }); }
  catch (e) { notes.push('puppeteer stub: ' + e.message); }

  // preload real service plugins so dependants satisfy their `inject`
  if (opts.services !== false) {
    const services = [
      ['@koishijs/plugin-server', { port: 0 }],
      ['@koishijs/plugin-notifier', {}],
      ['@koishijs/plugin-locales', {}],
      ['koishi-plugin-monetary', {}],
      ['koishi-plugin-smmcat-localstorage', {}],
      ['koishi-plugin-cache-database', {}],
    ];
    for (const [pkg, cfg] of services) {
      try {
        const m = load(pkg);
        if (!m || (typeof m !== 'function' && typeof m.apply !== 'function')) { notes.push('svc ' + pkg + ': no apply'); continue; }
        ctx.plugin(m, cfg);
      } catch (e) { notes.push('svc ' + pkg + ': ' + e.message.split('\n')[0]); }
    }
  }

  const bot = new TestBot(ctx, { selfId: opts.selfId || '10000' });
  await ctx.start();
  return { ctx, bot, notes };
}

function candidates(name) {
  if (name.startsWith('@')) {
    const [scope, rest] = name.split('/');
    return [scope + '/koishi-plugin-' + rest, name, scope + '/plugin-' + rest];
  }
  return ['koishi-plugin-' + name, '@koishijs/plugin-' + name, name];
}

function loadPlugin(ctx, pkg, config) {
  let lastErr = 'not found';
  for (const cand of candidates(pkg)) {
    let p;
    try { p = load(cand); } catch (e) { lastErr = e.message.split('\n')[0]; continue; }
    if (!p || (typeof p !== 'function' && typeof p.apply !== 'function')) { lastErr = 'no apply'; continue; }
    try { ctx.plugin(p, config || {}); return { ok: true, pkg: cand, inject: p.inject }; }
    catch (e) { return { ok: false, why: e.message, pkg: cand }; }
  }
  return { ok: false, why: lastErr };
}

function mkSession(bot, content, opts) {
  opts = opts || {};
  const gid = opts.guildId || '90001';
  const session = bot.session({
    type: 'message',
    channel: { id: opts.direct ? 'private:' + (opts.userId || '20001') : gid, type: opts.direct ? 1 : 0 },
    guild: opts.direct ? undefined : { id: gid },
    user: { id: opts.userId || '20001', name: opts.userName || '麦麦' },
    message: { id: 'msg' + Date.now() },
    timestamp: Date.now(),
  });
  // satori derives content from message.elements, so go through the setter
  session.content = content;
  return session;
}

async function send(bot, content, opts) {
  const before = CAP.length;
  bot.dispatch(mkSession(bot, content, opts));
  await new Promise(r => setTimeout(r, (opts && opts.wait) || 2500));
  return CAP.slice(before).map(m => renderContent(m.content)).filter(s => s !== '');
}

module.exports = { makeCtx, loadPlugin, send, mkSession, CAP, renderContent, load, TestBot };
