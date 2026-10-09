/* Atlas game engine v4: XP, levels, streaks, achievements */
const Game = (() => {
  const LS = "atlas.game.v1";
  const ACH = [
    { id:"first",    icon:"\u{1F463}", t:"First Step",  d:"Complete your first node" },
    { id:"ten",      icon:"\u{1F522}", t:"Warming Up",  d:"Complete 10 nodes" },
    { id:"fifty",    icon:"\u{1F4AA}", t:"Unstoppable", d:"Complete 50 nodes" },
    { id:"finisher", icon:"\u{1F3C1}", t:"Pathfinder",  d:"Finish an entire roadmap" },
    { id:"explorer", icon:"\u{1F9ED}", t:"Explorer",    d:"Visit 3 different roadmaps" },
    { id:"scholar",  icon:"\u{1F4DA}", t:"Deep Dive",   d:"Earn 50 XP in a single day" },
    { id:"streak3",  icon:"\u{1F525}", t:"On Fire",     d:"Learn 3 days in a row" },
    { id:"streak7",  icon:"\u2604\uFE0F", t:"Inferno",   d:"Learn 7 days in a row" },
  ];
  const TITLES = ["Novice","Explorer","Builder","Hacker","Hunter","Architect","Master","Elite","Legend","Mythic"];
  const blank = () => ({ xp:0, lastDay:"", streak:0, ach:[], days:{}, visited:[] });

  function load() {
    try { return Object.assign(blank(), JSON.parse(localStorage.getItem(LS)) || {}); }
    catch (e) { return blank(); }
  }
  function save(g) { try { localStorage.setItem(LS, JSON.stringify(g)); } catch (e) {} }
  const today = () => new Date().toISOString().slice(0,10);
  const xpForLevel = n => 50 * n * (n - 1);
  function levelFor(xp) { let n = 1; while (xpForLevel(n + 1) <= xp) n++; return n; }
  function titleFor(n) { return TITLES[Math.min(n - 1, TITLES.length - 1)]; }

  function unlock(g, id) {
    if (g.ach.includes(id)) return null;
    g.ach.push(id);
    return ACH.find(a => a.id === id) || null;
  }

  // award XP for completing a node; totalDone = global completed node count
  function award(n, totalDone) {
    const g = load();
    const before = levelFor(g.xp);
    const t = today();
    if (g.lastDay !== t) {
      const y = new Date(Date.now() - 864e5).toISOString().slice(0,10);
      g.streak = (g.lastDay === y) ? g.streak + 1 : 1;
      g.lastDay = t;
    }
    g.xp += n;
    g.days[t] = (g.days[t] || 0) + n;
    const after = levelFor(g.xp);
    const unlocked = [];
    const maybe = id => { const a = unlock(g, id); if (a) unlocked.push(a); };
    if (totalDone >= 1) maybe("first");
    if (totalDone >= 10) maybe("ten");
    if (totalDone >= 50) maybe("fifty");
    if (g.days[t] >= 50) maybe("scholar");
    if (g.streak >= 3) maybe("streak3");
    if (g.streak >= 7) maybe("streak7");
    save(g);
    return { g, leveled: after > before, level: after, unlocked };
  }

  function visit(rmId) {
    const g = load();
    let changed = false;
    if (!g.visited.includes(rmId)) { g.visited.push(rmId); changed = true; }
    const unlocked = [];
    if (g.visited.length >= 3) { const a = unlock(g, "explorer"); if (a) unlocked.push(a); }
    if (changed || unlocked.length) save(g);
    return unlocked;
  }

  function levelInfo() {
    const g = load();
    const lvl = levelFor(g.xp);
    const cur = xpForLevel(lvl), next = xpForLevel(lvl + 1);
    return { g, lvl, title: titleFor(lvl), xp: g.xp, cur, next,
             pct: next > cur ? Math.round((g.xp - cur) / (next - cur) * 100) : 100 };
  }

  function week() {
    const g = load(), out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 864e5);
      const k = d.toISOString().slice(0,10);
      out.push({ label: "SMTWTFS"[d.getDay()], xp: g.days[k] || 0, today: i === 0 });
    }
    return out;
  }

  function grant(id) {
    const g = load();
    const a = unlock(g, id);
    if (a) save(g);
    return a;
  }

  return { ACH, load, award, visit, unlock, grant, levelInfo, week, xpForLevel };
})();
