'use strict';
const fs = require('node:fs');
const { makeCtx, loadPlugin, send } = require('./harness.cjs');

const c = JSON.parse(process.argv[2]);
const outFile = 'C:/sj/koishi/_docs-probe/out/' + c.plugin.replace(/[^a-z0-9_-]/gi, '_') + '.json';

(async () => {
  const rec = { plugin: c.plugin, inputs: [], error: null };
  let ctx, bot;
  try {
    const made = await makeCtx({ db: 'r_' + c.plugin.replace(/[^a-z0-9]/gi, '_') });
    ctx = made.ctx; bot = made.bot;
    const cfg = Object.assign({}, require('./configs.json')[c.plugin] || {}, c.config || {});
    const lp = loadPlugin(ctx, c.plugin, cfg);
    if (!lp.ok) { rec.error = 'load: ' + lp.why; }
    else {
      await new Promise(r => setTimeout(r, c.settle || 2500));
      rec.commands = ctx.$commander ? [...ctx.$commander._commandList].map(x => x.name).filter(n => n !== 'command') : [];
      rec.inject = lp.inject || null;
      for (const input of c.inputs || []) {
        let out = [];
        try { out = await send(bot, input, c.opts || {}); }
        catch (e) { out = ['<THROW ' + e.message + '>']; }
        rec.inputs.push({ input, out });
      }
    }
  } catch (e) { rec.error = (e && e.message) || String(e); }
  try { if (ctx) await ctx.stop(); } catch (e) {}
  fs.writeFileSync(outFile, JSON.stringify(rec, null, 2), 'utf8');
  console.log('WROTE ' + outFile);
  process.exit(0);
})().catch(e => {
  const rec = { plugin: c.plugin, inputs: [], error: 'HARNESS: ' + ((e && e.message) || String(e)) };
  try { fs.writeFileSync(outFile, JSON.stringify(rec, null, 2), 'utf8'); } catch (x) {}
  process.exit(0);
});
