'use strict';
const fs = require('node:fs');
const { makeCtx, loadPlugin, send } = require('./harness.cjs');

function loadYaml(file) {
  try { return require('yaml').parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { return require('js-yaml').load(fs.readFileSync(file, 'utf8')); }
}

// collect plugin configs from the real bot config
function collectConfigs(node, out) {
  out = out || {};
  if (!node || typeof node !== 'object') return out;
  for (const [k, v] of Object.entries(node)) {
    const m = /^([~]?)([A-Za-z0-9@_./-]+):[0-9a-z]{6}$/.exec(k);
    if (m) {
      const name = m[2];
      const cfg = {};
      if (v && typeof v === 'object') {
        for (const [ck, cv] of Object.entries(v)) if (!ck.startsWith('$')) cfg[ck] = cv;
      }
      if (!m[1]) out[name] = cfg;   // only enabled ones
      continue;
    }
    if (v && typeof v === 'object') collectConfigs(v, out);
  }
  return out;
}

const CONFIGS = collectConfigs(loadYaml('C:/sj/koishi/koishi.yml'), {});
fs.writeFileSync('C:/sj/koishi/_docs-probe/configs.json', JSON.stringify(CONFIGS, null, 2), 'utf8');

const CASES = JSON.parse(fs.readFileSync(process.argv[2] || 'C:/sj/koishi/_docs-probe/cases.json', 'utf8'));
const results = [];

(async () => {
  for (const c of CASES) {
    const rec = { plugin: c.plugin, pkg: c.pkg || ('koishi-plugin-' + c.plugin), inputs: [], error: null };
    let ctx, bot;
    try {
      const made = await makeCtx({ db: c.plugin.replace(/[^a-z0-9]/gi, '_') });
      ctx = made.ctx; bot = made.bot;
      const cfg = Object.assign({}, CONFIGS[c.plugin] || {}, c.config || {});
      const lp = loadPlugin(ctx, rec.pkg, cfg);
      if (!lp.ok) { rec.error = 'load: ' + lp.why; results.push(rec); continue; }
      await new Promise(r => setTimeout(r, c.settle || 2500));
      const names = ctx.$commander ? [...ctx.$commander._commandList].map(x => x.name) : [];
      rec.commands = names.filter(n => n !== 'command');
      for (const input of c.inputs) {
        let out = [];
        try { out = await send(bot, input, c.opts || {}); }
        catch (e) { out = ['<THROW ' + e.message + '>']; }
        rec.inputs.push({ input, out });
      }
    } catch (e) {
      rec.error = (e && e.message) || String(e);
    }
    try { if (ctx) await ctx.stop(); } catch (e) {}
    results.push(rec);
    console.log('[' + (rec.error ? 'ERR' : 'ok ') + '] ' + rec.plugin + '  cmds=' + (rec.commands || []).length + (rec.error ? ' :: ' + rec.error : ''));
  }
  fs.writeFileSync('C:/sj/koishi/_docs-probe/results.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('DONE');
  process.exit(0);
})().catch(e => { console.error('FATAL', e.stack || e); process.exit(1); });
