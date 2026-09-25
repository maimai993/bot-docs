'use strict';
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
const cases = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
fs.mkdirSync('C:/sj/koishi/_docs-probe/out', { recursive: true });
let i = 0;
for (const c of cases) {
  i++;
  const r = spawnSync(process.execPath, ['C:/sj/koishi/_docs-probe/run-one.cjs', JSON.stringify(c)], {
    cwd: 'C:/sj/koishi', timeout: 90000, encoding: 'utf8',
  });
  const name = c.plugin.replace(/[^a-z0-9_-]/gi, '_');
  const ok = fs.existsSync('C:/sj/koishi/_docs-probe/out/' + name + '.json');
  let brief = '';
  if (ok) {
    const rec = JSON.parse(fs.readFileSync('C:/sj/koishi/_docs-probe/out/' + name + '.json', 'utf8'));
    const got = (rec.inputs || []).filter(x => (x.out || []).length).length;
    brief = 'cmds=' + ((rec.commands || []).length) + ' captured=' + got + '/' + ((rec.inputs || []).length) + (rec.error ? ' err=' + rec.error : '');
  } else {
    brief = 'CRASH status=' + r.status + ' sig=' + r.signal + ' ' + String(r.stderr || '').split('\n')[0].slice(0, 120);
  }
  console.log('[' + i + '/' + cases.length + '] ' + c.plugin + ' :: ' + brief);
}
console.log('DRIVER DONE');
