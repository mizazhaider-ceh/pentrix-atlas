/* Atlas roadmap validator: run per batch. Usage: node validate-roadmaps.js [dir]
   Checks every js/roadmaps/<id>.js for schema, levels, and content completeness. */
const fs = require('fs');
const dir = process.argv[2] || 'js/roadmaps';
global.ROADMAPS = [];
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
files.forEach(f => {
  try { eval(fs.readFileSync(dir + '/' + f, 'utf8')); }
  catch (e) { console.log(`PARSE FAIL ${f}: ${e.message}`); }
});
const ids = new Set();
let errors = [], warnings = [];
// legacy roadmaps predate the rich schema (deepened in later passes); learn/do not required yet
const LEGACY = new Set(['frontend','backend','devops','python','linux','bug-bounty','networking','cloud']);
const needRich = id => !LEGACY.has(id);
ROADMAPS.forEach(rm => {
  if (!rm.id || !rm.title || !rm.color || !rm.root) errors.push(`${rm.id || '?'}: missing id/title/color/root`);
  if (ids.has(rm.id)) errors.push(`${rm.id}: duplicate id`);
  ids.add(rm.id);
  if (!/^#[0-9a-fA-F]{6}$/.test(rm.color || '')) warnings.push(`${rm.id}: color not hex`);
  if (!['role','skill','practice'].includes(rm.kind)) warnings.push(`${rm.id}: kind should be role|skill|practice`);
  const cats = rm.root.children || [];
  if (cats.length < 3) warnings.push(`${rm.id}: only ${cats.length} categories`);
  if (cats.length > 12) warnings.push(`${rm.id}: ${cats.length} categories (many)`);
  const lvSeen = new Set();
  let topics = 0;
  (function w(n, d) {
    if (d === 1 && ![1,2,3].includes(n.lv)) warnings.push(`${rm.id}: category "${n.t}" missing lv`);
    if (d > 1) {
      topics++;
      if (![1,2,3].includes(n.lv)) errors.push(`${rm.id}/${n.t}: bad lv`);
      else lvSeen.add(n.lv);
      if (!n.d || n.d.length < 12) (needRich(rm.id) ? errors : warnings).push(`${rm.id}/${n.t}: description too short/missing`);
      if (!n.time) errors.push(`${rm.id}/${n.t}: missing time`);
      if (needRich(rm.id)) {
        if (!((n.learn||[]).length >= 2)) errors.push(`${rm.id}/${n.t}: learn[] needs 2+`);
        if (!((n.do||[]).length >= 2)) errors.push(`${rm.id}/${n.t}: do[] needs 2+`);
      } else {
        if (!((n.learn||[]).length >= 2)) warnings.push(`${rm.id}/${n.t}: thin (legacy)`);
      }
      if (!((n.res||[]).length >= 1)) errors.push(`${rm.id}/${n.t}: res[] needs 1+`);
      (n.res||[]).forEach(r => {
        if (!Array.isArray(r) || r.length !== 2 || !/^https?:\/\//.test(r[1])) errors.push(`${rm.id}/${n.t}: bad res pair`);
      });
      if (JSON.stringify(n).length > 6000) warnings.push(`${rm.id}/${n.t}: very large topic`);
    }
    (n.children || []).forEach(k => w(k, d + 1));
  })(rm.root, 0);
  if (topics < 20) warnings.push(`${rm.id}: only ${topics} topics`);
  if (topics > 80) warnings.push(`${rm.id}: ${topics} topics (many)`);
  if (lvSeen.size < 3) warnings.push(`${rm.id}: levels present: ${[...lvSeen].join(',')} (want 1,2,3)`);
});
console.log(`checked ${ROADMAPS.length} roadmaps in ${files.length} files`);
console.log(`ERRORS: ${errors.length}`, errors.slice(0, 20));
console.log(`WARNINGS: ${warnings.length}`, warnings.slice(0, 20));
process.exit(errors.length ? 1 : 0);
