const fs = require('node:fs');
function loadYaml(f) { try { return require('yaml').parse(fs.readFileSync(f, 'utf8')); } catch (e) { return require('js-yaml').load(fs.readFileSync(f, 'utf8')); } }
function collectConfigs(node, out) {
  out = out || {};
  if (!node || typeof node !== 'object') return out;
  for (const [k, v] of Object.entries(node)) {
    const m = /^([~]?)([A-Za-z0-9@_./-]+):[0-9a-z]{6}$/.exec(k);
    if (m) {
      const cfg = {};
      if (v && typeof v === 'object') for (const [ck, cv] of Object.entries(v)) if (!ck.startsWith('$')) cfg[ck] = cv;
      if (!m[1]) out[m[2]] = cfg;
      continue;
    }
    if (v && typeof v === 'object') collectConfigs(v, out);
  }
  return out;
}
const cfg = collectConfigs(loadYaml('C:/sj/koishi/koishi.yml'), {});
fs.writeFileSync('C:/sj/koishi/_docs-probe/configs.json', JSON.stringify(cfg, null, 2), 'utf8');
console.log('enabled plugins with config:', Object.keys(cfg).length);
