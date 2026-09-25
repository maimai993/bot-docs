#!/usr/bin/env node
'use strict';
/**
 * 检查文档里哪些代码块会被挂上「试运行」按钮。
 * 直接读构建产物（dist）里的真实 DOM，和沙盒服务返回的真实指令表比对，
 * 两者都对得上，页面上才会出现按钮。
 *
 *   node check-docs.cjs [--dist D:/bot-docs/src/.vuepress/dist] [--api http://127.0.0.1:3100]
 */
const fs = require('node:fs');
const path = require('node:path');

function arg(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d; }
const DIST = arg('dist', 'D:/bot-docs/src/.vuepress/dist');
const API = arg('api', 'http://127.0.0.1:3100');

let JSDOM;
try { ({ JSDOM } = require('jsdom')); }
catch (e) {
  try { ({ JSDOM } = require('D:/devkoishi/_sandbox-test/node_modules/jsdom')); }
  catch (e2) { console.error('需要 jsdom：npm i jsdom'); process.exit(1); }
}

// 与 src/.vuepress/client/sandbox.ts 保持一致
function firstCommandLine(text) {
  const line = text.split('\n').map((l) => l.trim()).find((l) => l && !l.startsWith('#') && !l.startsWith('//'));
  return line || '';
}

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

(async () => {
  const r = await fetch(API + '/api/commands');
  const { commands } = await r.json();
  const set = new Set(commands);
  console.log('沙盒可用指令: ' + set.size + ' 条');

  const pages = walk(DIST, []);
  let pagesWithButtons = 0, totalBlocks = 0, runnable = 0;
  const detail = [];

  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const { document } = new JSDOM(html).window;
    const blocks = [...document.querySelectorAll('div[class*="language-"]')];
    if (!blocks.length) continue;
    const runs = [];
    for (const b of blocks) {
      totalBlocks++;
      const code = b.querySelector('pre code');
      if (!code) continue;
      const text = (code.textContent || '').replace(/\u200b/g, '').trim();
      const first = firstCommandLine(text);
      if (!first) continue;
      const root = first.split(/\s/)[0];
      if (!set.has(root)) continue;
      runnable++;
      const lines = text.split('\n').filter((l) => l.trim());
      runs.push({ root, first, multi: lines.length > 1 || /[<\[\]>]/.test(text) });
    }
    if (runs.length) {
      pagesWithButtons++;
      detail.push({ page: path.relative(DIST, file).replace(/\\/g, '/'), runs });
    }
  }

  console.log('扫描页面: ' + pages.length + '，含代码块: ' + totalBlocks + '，将获得按钮: ' + runnable + '，覆盖页面: ' + pagesWithButtons);
  console.log('');
  for (const d of detail.sort((a, b) => b.runs.length - a.runs.length).slice(0, 30)) {
    console.log(d.page + '  (' + d.runs.length + ')');
    for (const rr of d.runs.slice(0, 5)) console.log('    ' + (rr.multi ? '在沙盒打开' : '试运行') + '  <- ' + rr.first);
  }
})();
