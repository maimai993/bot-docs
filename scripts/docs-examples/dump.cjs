const fs = require('node:fs');
const dir = 'C:/sj/koishi/_docs-probe/out';
const files = fs.readdirSync(dir);
const all = {};
for (const f of files) all[f.replace('.json', '')] = JSON.parse(fs.readFileSync(dir + '/' + f, 'utf8'));
fs.writeFileSync('C:/sj/koishi/_docs-probe/all-out.json', JSON.stringify(all, null, 2), 'utf8');
for (const [k, v] of Object.entries(all)) {
  const cap = (v.inputs || []).filter(x => (x.out || []).length);
  if (!cap.length) continue;
  console.log('===== ' + v.plugin);
  for (const c of cap) {
    const t = c.out.join(' | ').replace(/\s+/g, ' ');
    console.log('  > ' + c.input);
    console.log('  < ' + t.slice(0, 300));
  }
}
