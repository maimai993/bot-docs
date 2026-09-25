'use strict';
const fs = require('node:fs');
const DOCROOT = 'D:/bot-docs/src/';
const MAP = JSON.parse(fs.readFileSync('C:/sj/koishi/_docs-probe/docmap.json', 'utf8'));
const OUT = JSON.parse(fs.readFileSync('C:/sj/koishi/_docs-probe/all-out.json', 'utf8'));

const BAD = /发生未知错误|PUPPETEER_STUB|<THROW|渲染失败|ENOENT|cannot resolve table|^\s*commands\.|权限不足|查询过程中发生错误|获取失败|角色名不合法/i;

function clean(s) {
  return String(s)
    .replace(/<p\/>/g, '\n')
    .replace(/<img:data:[^>]*>/g, '')
    .replace(/<img:([^>]*)>/g, (_m, u) => (u.startsWith('base64') ? '' : '[图片]'))
    .replace(/@\d{5,}/g, '@麦麦')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n+/g, '\n')
    .trim();
}

const TRANSFORM = {
  abbreviation: (s) => {
    const p = s.split(', ');
    return p.slice(0, 6).join('、') + (p.length > 6 ? ' …（共 ' + p.length + ' 条释义）' : '');
  },
  bing: (s) => s.split(/(?=\d+\.\s)/).filter(Boolean).slice(0, 4).join('\n').trim(),
  'bull-card': (s) => s.split('💰 规则')[0].trim() + '\n…',
  ciyi: (s) => s.slice(0, 260).trim() + ' …',
  'smmcat-fishtime': (s) => s.slice(0, 300).trim() + ' …',
  'driving-test': (s) => s.replace(/\s+/g, ' ').trim(),
};

let changed = 0;
const skipped = [];
for (const [plugin, rel] of Object.entries(MAP)) {
  if (!rel) continue;
  const rec = OUT[plugin.replace(/[^a-z0-9_-]/gi, '_')];
  if (!rec) { skipped.push(plugin + ' (no record)'); continue; }
  const good = (rec.inputs || []).find(x => {
    const joined = (x.out || []).join(' ');
    if (!joined || BAD.test(joined)) return false;
    return clean(joined).replace(/\[图片\]/g, '').trim().length >= 6;   // skip image-only replies
  });
  if (!good) { skipped.push(plugin + ' (no usable text output)'); continue; }
  const file = DOCROOT + rel;
  if (!fs.existsSync(file)) { skipped.push(plugin + ' (missing ' + rel + ')'); continue; }
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('（示例待补充）')) { skipped.push(plugin + ' (page already has examples)'); continue; }
  let text = clean(good.out.join('\n'));
  if (TRANSFORM[plugin]) text = TRANSFORM[plugin](text);
  if (text.length > 600) text = text.slice(0, 600).trim() + ' …';
  const block = [
    '',
    '',
    '<chat-panel>',
    '<chat-message nickname="麦麦" type="user">' + good.input + '</chat-message>',
    '<chat-message nickname="麦芽糖bot" type="bot">' + text + '</chat-message>',
    '</chat-panel>',
    '',
    '::: tip',
    '示例图片待补充。',
    ':::',
  ].join('\n');
  src = src.replace('（示例待补充）', block);
  fs.writeFileSync(file, src, 'utf8');
  changed++;
  console.log('OK   ' + plugin + ' -> ' + rel + '   << ' + good.input);
}
console.log('\nupdated ' + changed + ' pages');
console.log('--- skipped ---');
for (const s of skipped) console.log('  ' + s);
