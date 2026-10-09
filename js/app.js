/* Atlas by The PenTrix — app v1 */
(() => {
  const LS = "atlas.progress.v1";
  const esc = Engine.escapeHtml;
  const $ = id => document.getElementById(id);

  const state = { roadmap: null, rendered: null, pz: null };

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(LS, JSON.stringify(p)); } catch (e) {}
  }
  function isDone(rmId, nid) { return !!getProgress()[rmId + ":" + nid]; }
  function toggleDone(rmId, nid) {
    const p = getProgress(), k = rmId + ":" + nid;
    if (p[k]) delete p[k]; else p[k] = 1;
    saveProgress(p);
    return !!p[k];
  }
  function roadmapProgress(rm) {
    const p = getProgress();
    const nodes = [];
    (function walk(n) { nodes.push(n); (n.children || []).forEach(walk); })(rm.root);
    const done = nodes.filter(n => p[rm.id + ":" + n._id]).length;
    return { done, total: nodes.length, pct: nodes.length ? Math.round(done / nodes.length * 100) : 0 };
  }

  // ---------- toast ----------
  function toast(html, ms) {
    let box = document.getElementById("toasts");
    if (!box) {
      box = document.createElement("div");
      box.id = "toasts";
      document.body.appendChild(box);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = html;
    box.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, ms || 2600);
  }

  function totalDone() {
    const p = getProgress();
    let c = 0;
    ROADMAPS.forEach(rm => {
      (function walk(n) { if (p[rm.id + ":" + n._id]) c++; (n.children || []).forEach(walk); })(rm.root);
    });
    return c;
  }

  function updateLvlChip() {
    const chip = document.getElementById("lvlChip");
    if (!chip || typeof Game === "undefined") return;
    const li = Game.levelInfo();
    chip.textContent = "Lv " + li.lvl + " " + li.title;
    chip.title = li.xp + " XP";
  }

  // ---------- router ----------
  function route() {
    updateLvlChip();
    const h = location.hash || "#/";
    const m = h.match(/^#\/r\/([\w-]+)/);
    closeDrawer();
    if (m) {
      const rm = ROADMAPS.find(r => r.id === m[1]);
      if (rm) return viewRoadmap(rm);
    }
    if (h === "#/dashboard") return viewDashboard();
    viewHome();
  }

  // ---------- home ----------
  function viewHome() {
    state.roadmap = null;
    const cards = ROADMAPS.map(rm => {
      const pr = roadmapProgress(rm);
      return `
      <a class="rm-card" href="#/r/${rm.id}" style="--rc:${rm.color}">
        <span class="rm-icon">${rm.icon}</span>
        <h3>${esc(rm.title)}</h3>
        <p>${esc(rm.tagline)}</p>
        <span class="rm-foot">
          <span class="rm-bar"><i style="width:${pr.pct}%"></i></span>
          <span class="rm-pct">${pr.pct}%</span>
        </span>
      </a>`;
    }).join("");
    const totalNodes = ROADMAPS.reduce((a, rm) => {
      let c = 0;
      (function walk(n) { c++; (n.children || []).forEach(walk); })(rm.root);
      return a + c;
    }, 0);
    $("app").innerHTML = `
    <section class="hero">
      <div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div>
      <div class="hero-in">
        <span class="eyebrow">\u25C8 by The PenTrix</span>
        <h1>Every skill has a path.<br><span class="grad">Atlas draws it.</span></h1>
        <p class="lede">Interactive visual roadmaps for developers, hackers and the endlessly curious. Click any node, learn it, mark it done.</p>
        <div class="searchbar"><input id="q" type="search" placeholder="Search roadmaps..." autocomplete="off"></div>
        <div class="hstats">
          <div><b>${ROADMAPS.length}</b><span>roadmaps</span></div>
          <div><b>${totalNodes}</b><span>skills</span></div>
          <div><b>100%</b><span>free</span></div>
        </div>
      </div>
    </section>
    <main class="wrap">
      <div class="sec-head"><h2>Choose your path</h2></div>
      <div class="rm-grid" id="rmGrid">${cards}</div>
      <section class="why">
        <div class="why-card"><span>\u{1F5FA}\uFE0F</span><h3>Visual learning</h3><p>See the whole journey as a map, not a wall of text. Zoom, pan, explore.</p></div>
        <div class="why-card"><span>\u{1F3AF}</span><h3>Click to learn</h3><p>Every node opens a detail panel with exactly what to learn and free resources.</p></div>
        <div class="why-card"><span>\u{1F4C8}</span><h3>Track progress</h3><p>Mark nodes done. Watch your map light up as you conquer it.</p></div>
      </section>
    </main>`;
    const q = $("q");
    q.addEventListener("input", () => {
      const v = q.value.trim().toLowerCase();
      document.querySelectorAll(".rm-card").forEach(c => {
        c.style.display = c.textContent.toLowerCase().includes(v) ? "" : "none";
      });
    });
  }

  // ---------- roadmap view ----------
  function paintProgress(rm) {
    const p = getProgress();
    state.rendered.nodes.forEach(n => {
      if (p[rm.id + ":" + n._id]) {
        if (n._el) n._el.classList.add("done");
        const e = state.rendered.edges.find(e => e.child === n._id);
        if (e) e.el.classList.add("done");
      }
    });
  }

  function markNext(rm) {
    const p = getProgress();
    const nxt = state.rendered.nodes.find(n => !p[rm.id + ":" + n._id]);
    if (nxt && nxt._el) {
      nxt._el.classList.add("next");
      const tag = document.createElement("span");
      tag.className = "next-tag";
      tag.textContent = "next";
      nxt._el.appendChild(tag);
    }
  }

  function viewRoadmap(rm) {
    state.roadmap = rm;
    if (typeof Game !== "undefined") {
      Game.visit(rm.id).forEach(a => toast(a.icon + " <b>" + esc(a.t) + "</b><span>Achievement unlocked</span>"));
    }
    $("app").innerHTML = `
    <div class="rm-top wrap">
      <nav class="crumb"><a href="#/">Atlas</a><span>/</span><span>${esc(rm.title)}</span></nav>
      <div class="rm-head">
        <div>
          <h2><span class="rm-icon sm">${rm.icon}</span> ${esc(rm.title)}</h2>
          <p>${esc(rm.desc)}</p>
        </div>
        <div class="rm-prog">
          <div class="ring"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" class="rt"/><circle id="ringFg" cx="22" cy="22" r="19" class="rf" style="--rc:${rm.color}"/></svg><b id="ringPct">0%</b></div>
          <div class="rm-prog-t"><b id="progDone">0</b> of <b id="progTotal">0</b> done</div>
        </div>
      </div>
      <div class="map-ctrl">
        <button id="zin" title="Zoom in">+</button>
        <button id="zout" title="Zoom out">\u2212</button>
        <button id="zfit" title="Fit to screen">\u29C9</button>
        <span class="map-hint">Drag to pan \u00B7 Scroll to zoom \u00B7 Click a node</span>
      </div>
    </div>
    <div class="map-wrap"><svg id="map" style="--rc:${rm.color}"></svg>
      <div class="minimap" id="minimapBox" title="Minimap: click to jump"><svg id="minimap"></svg></div>
    </div>
    <div class="drawer" id="drawer" hidden>
      <div class="dr-in" id="drIn"></div>
    </div>`;
    const svg = $("map");
    state.rendered = Engine.render(svg, rm, {}, nid => openDrawer(rm, nid));
    paintProgress(rm);
    markNext(rm);
    const mm = Engine.minimap($("minimap"), state.rendered, rm.color);
    state.mm = mm;
    const updMm = t => {
      const r = svg.getBoundingClientRect();
      mm.update(t, r.width, r.height);
    };
    $("minimapBox").addEventListener("click", e => {
      const r = $("minimap").getBoundingClientRect();
      const cx = (e.clientX - r.left) / mm.s, cy = (e.clientY - r.top) / mm.s;
      state.pz.centerOn(cx, cy);
    });
    const pr = roadmapProgress(rm);
    $("ringPct").textContent = pr.pct + "%";
    $("progDone").textContent = pr.done;
    $("progTotal").textContent = pr.total;
    $("ringFg").style.strokeDashoffset = 119.4 * (1 - pr.pct / 100);
    state.pz = Engine.panZoom(svg, state.rendered.vp, state.rendered.W, state.rendered.H, updMm);
    requestAnimationFrame(() => state.pz.fit());
    $("zin").addEventListener("click", () => state.pz.zoomIn());
    $("zout").addEventListener("click", () => state.pz.zoomOut());
    $("zfit").addEventListener("click", () => state.pz.fit());
    window.addEventListener("resize", () => state.pz && state.pz.fit());
  }

  function openDrawer(rm, nid) {
    const n = state.rendered.byId[nid];
    if (!n) return;
    const done = isDone(rm.id, nid);
    const dep = (typeof DEPTH !== "undefined" ? DEPTH[rm.id + "::" + n.t] : null) || {};
    const kids = (n.children || []).map(c =>
      `<button class="kid" data-nid="${c._id}">${esc(c.t)}</button>`).join("");
    const res = (n.res || []).map(r =>
      `<a class="res" href="${esc(r[1])}" target="_blank" rel="noopener">\u{1F517} ${esc(r[0])}</a>`).join("");
    const learn = (dep.l || []).map(x => `<li><span>${esc(x)}</span></li>`).join("");
    const todo = (dep.d || []).map(x => `<li><span>${esc(x)}</span></li>`).join("");
    $("drIn").innerHTML = `
      <button class="dr-x" id="drX">\u2715</button>
      <div class="dr-band" style="--rc:${rm.color}"></div>
      <span class="eyebrow sm" style="--rc:${rm.color}">${esc(rm.title)}</span>
      <h3>${esc(n.t)}</h3>
      ${dep.t ? `<span class="time-badge">\u23F1 ${esc(dep.t)}</span>` : ""}
      <p class="dr-d">${esc(n.d || "")}</p>
      <button class="btn-done${done ? " on" : ""}" id="drDone">${done ? "\u2713 Completed" : "\u2713 Mark complete"}</button>
      <div class="dr-tabs">
        <button class="dr-tab on" data-tab="learn">Learn</button>
        <button class="dr-tab" data-tab="do">Practice</button>
        <button class="dr-tab" data-tab="res">Resources</button>
      </div>
      <div class="dr-pane" id="paneLearn">
        ${learn ? `<ul class="dl-learn">${learn}</ul>` : `<p class="muted">Core concepts coming with the description above.</p>`}
        ${kids ? `<div class="kids-h">Continue to</div><div class="kids">${kids}</div>` : ""}
      </div>
      <div class="dr-pane" id="paneDo" hidden>
        ${todo ? `<ol class="dl-do">${todo}</ol>` : '<p class="muted">Hands-on steps coming soon.</p>'}
      </div>
      <div class="dr-pane" id="paneRes" hidden>${res || '<p class="muted">No links yet.</p>'}</div>`;
    $("drawer").hidden = false;
    requestAnimationFrame(() => $("drawer").classList.add("open"));
    $("drX").addEventListener("click", closeDrawer);
    $("drDone").addEventListener("click", () => {
      const now = toggleDone(rm.id, nid);
      if (now && typeof Game !== "undefined") {
        const r = Game.award(10, totalDone());
        toast("<b>+10 XP</b>");
        if (r.leveled) {
          const li = Game.levelInfo();
          toast("\u{1F31F} <b>Level " + r.level + ": " + esc(li.title) + "</b><span>Keep climbing</span>", 3400);
        }
        r.unlocked.forEach(a => toast(a.icon + " <b>" + esc(a.t) + "</b><span>Achievement unlocked</span>", 3400));
        const pr2 = roadmapProgress(rm);
        if (pr2.pct === 100) {
          const fa = Game.grant("finisher");
          if (fa) toast(fa.icon + " <b>" + esc(fa.t) + "</b><span>You finished " + esc(rm.title) + "</span>", 3800);
        }
        updateLvlChip();
      }
      const elN = state.rendered.byId[nid];
      if (elN && elN._el) elN._el.classList.toggle("done", now);
      const eg = state.rendered.edges.find(e => e.child === nid);
      if (eg) eg.el.classList.toggle("done", now);
      if (state.mm) state.mm.refreshDone();
      $("drDone").textContent = now ? "\u2713 Completed" : "\u2713 Mark complete";
      $("drDone").classList.toggle("on", now);
      refreshRoadmapProgress(rm);
    });
    document.querySelectorAll(".dr-tab").forEach(b => b.addEventListener("click", () => {
      document.querySelectorAll(".dr-tab").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      ["learn", "do", "res"].forEach(t => {
        const p = $("pane" + t[0].toUpperCase() + t.slice(1));
        if (p) p.hidden = b.dataset.tab !== t;
      });
    }));
    document.querySelectorAll(".kid").forEach(b => b.addEventListener("click", () => openDrawer(rm, b.dataset.nid)));
  }

  function refreshRoadmapProgress(rm) {
    const pr = roadmapProgress(rm);
    const rp = $("ringPct"), fg = $("ringFg"), pd = $("progDone"), pt = $("progTotal");
    if (rp) rp.textContent = pr.pct + "%";
    if (pd) pd.textContent = pr.done;
    if (pt) pt.textContent = pr.total;
    if (fg) fg.style.strokeDashoffset = 119.4 * (1 - pr.pct / 100);
  }

  function closeDrawer() {
    const d = $("drawer");
    if (!d || d.hidden) return;
    d.classList.remove("open");
    setTimeout(() => { d.hidden = true; }, 280);
  }

  // ================= VIEW: DASHBOARD =================
  function viewDashboard() {
    state.roadmap = null;
    const li = Game.levelInfo();
    const wk = Game.week();
    const maxXp = Math.max(10, ...wk.map(d => d.xp));
    const achHtml = Game.ACH.map(a => {
      const has = li.g.ach.includes(a.id);
      return `<div class="ach${has ? " got" : ""}"><span class="ach-i">${a.icon}</span>
        <b>${esc(a.t)}</b><span>${esc(a.d)}</span></div>`;
    }).join("");
    const rmHtml = ROADMAPS.map(rm => {
      const pr = roadmapProgress(rm);
      return `<a class="dash-rm" href="#/r/${rm.id}" style="--rc:${rm.color}">
        <span class="rm-icon sm">${rm.icon}</span>
        <span class="dash-rm-t">${esc(rm.title)}</span>
        <span class="rm-bar"><i style="width:${pr.pct}%"></i></span>
        <b>${pr.pct}%</b></a>`;
    }).join("");
    const weekHtml = wk.map(d => `
      <div class="wk-d${d.today ? " today" : ""}">
        <div class="wk-bar"><i style="height:${Math.round(d.xp / maxXp * 100)}%"></i></div>
        <span>${d.label}</span><b>${d.xp}</b>
      </div>`).join("");
    $("app").innerHTML = `
    <main class="wrap dash">
      <nav class="crumb"><a href="#/">Atlas</a><span>/</span><span>Dashboard</span></nav>
      <header class="dash-hero">
        <div class="lvl-badge"><b>${li.lvl}</b><span>LVL</span></div>
        <div class="dash-id">
          <span class="eyebrow sm">${esc(li.title)}</span>
          <h2>Your journey</h2>
          <div class="xp-bar"><i style="width:${li.pct}%"></i></div>
          <div class="xp-t">${li.xp} XP <span>· ${li.next - li.xp} to level ${li.lvl + 1}</span></div>
        </div>
        <div class="dash-streak"><span>\u{1F525}</span><b>${li.g.streak}</b><span>day streak</span></div>
      </header>
      <div class="dash-stats">
        <div class="dstat"><b>${totalDone()}</b><span>nodes done</span></div>
        <div class="dstat"><b>${li.g.xp}</b><span>total XP</span></div>
        <div class="dstat"><b>${li.g.ach.length}/${Game.ACH.length}</b><span>achievements</span></div>
        <div class="dstat"><b>${li.g.visited.length}</b><span>maps explored</span></div>
      </div>
      <h3 class="sec-h">\u{1F3C6} Achievements</h3>
      <div class="ach-grid">${achHtml}</div>
      <h3 class="sec-h">\u{1F5FA}\uFE0F Your maps</h3>
      <div class="dash-rms">${rmHtml}</div>
      <h3 class="sec-h">\u{1F4CA} This week</h3>
      <div class="week">${weekHtml}</div>
    </main>`;
  }

  // ---------- boot ----------
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDrawer();
  });
  window.addEventListener("hashchange", route);
  route();
})();
