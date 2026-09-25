const fs = require('node:fs');
const cfgs = JSON.parse(fs.readFileSync('C:/sj/koishi/_docs-probe/configs.json', 'utf8'));
const skip = new Set(['console', 'logger', 'auth', 'analytics', 'dataview-next', 'explorer', 'insight', 'notifier', 'oobe', 'sandbox', 'status', 'theme-vanilla', 'actions', 'config', 'server', 'http', 'locales', 'market', 'admin', 'bind', 'commands', 'help']);
const keys = Object.keys(cfgs).filter(k => !skip.has(k) && !k.startsWith('@koishijs/plugin-'));
const cases = keys.map(k => ({ plugin: k, inputs: [], settle: 2200 }));
fs.writeFileSync('C:/sj/koishi/_docs-probe/cases-discovery.json', JSON.stringify(cases, null, 2), 'utf8');
console.log('discovery cases:', cases.length);
