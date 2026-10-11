/* Atlas by The PenTrix — app v1 */
(() => {
  const LS = "atlas.progress.v1";
  const esc = Engine.escapeHtml;
  const $ = id => document.getElementById(id);

  const state = { roadmap: null, rendered: null, pz: null };

  // v19: tri-state progress — done | learning | skipped (migrates old booleans)
  function getProgress() {
    let p = {};
    try { p = JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) {}
    let dirty = false;
    Object.keys(p).forEach(k => { if (p[k] === true || p[k] === 1) { p[k] = "done"; dirty = true; } });
    if (dirty) saveProgress(p);
    return p;
  }
  function saveProgress(p) {
    try { localStorage.setItem(LS, JSON.stringify(p)); } catch (e) {}
  }
  function nodeState(rmId, nid) { return getProgress()[rmId + ":" + nid] || null; }
  function setNodeState(rmId, nid, st) {
    const p = getProgress(), k = rmId + ":" + nid;
    const prev = p[k] || null;
    if (prev === st) delete p[k]; else if (st) p[k] = st; else delete p[k];
    saveProgress(p);
    return p[k] || null;
  }
  function roadmapProgress(rm) {
    const p = getProgress();
    const nodes = [];
    (function walk(n) { nodes.push(n); (n.children || []).forEach(walk); })(rm.root);
    const done = nodes.filter(n => p[rm.id + ":" + n._id] === "done").length;
    const learning = nodes.filter(n => p[rm.id + ":" + n._id] === "learning").length;
    return { done, learning, total: nodes.length, pct: nodes.length ? Math.round(done / nodes.length * 100) : 0 };
  }

  // ---------- confetti ----------
  function confetti() {
    const cv = document.createElement("canvas");
    cv.id = "confettiCv";
    cv.width = innerWidth; cv.height = innerHeight;
    document.body.appendChild(cv);
    const c = cv.getContext("2d");
    const colors = ["#2dd4bf", "#a78bfa", "#f472b6", "#fbbf24", "#4ade80", "#fff"];
    const ps = [];
    for (let i = 0; i < 140; i++) {
      ps.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: innerHeight * 0.35,
        vx: (Math.random() - 0.5) * 13,
        vy: Math.random() * -11 - 3,
        s: Math.random() * 8 + 4,
        r: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        col: colors[i % colors.length],
        life: 1
      });
    }
    const t0 = performance.now();
    (function tick(t) {
      const el = (t - t0) / 2600;
      c.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => {
        p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life = 1 - el;
        c.save(); c.globalAlpha = Math.max(0, p.life);
        c.translate(p.x, p.y); c.rotate(p.r);
        c.fillStyle = p.col; c.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.62);
        c.restore();
      });
      if (el < 1) requestAnimationFrame(tick);
      else cv.remove();
    })(t0);
  }

  // v20: honest resource categorization - type from URL pattern, access only where factual
  function resCat(url) {
    const u = String(url).toLowerCase();
    if (/portswigger\.net|tryhackme|hackthebox|overthewire|vulnhub|picoctf|root-me/.test(u)) return "lab";
    if (/developer\.mozilla|wiki\.archlinux|docs\.python|docs\.github|kubernetes\.io\/docs|docs\.aws|docs\.docker|nmap\.org\/book|wireshark\.org\/docs|postgresql\.org\/docs|nodejs\.org|go\.dev\/learn|typescriptlang\.org\/docs|fastapi\.tiangolo|pandas\.pydata|matplotlib\.org|prometheus\.io\/docs|developer\.hashicorp|git-scm\.com\/doc|tldp\.org|curl\.se\/docs|ssh\.com\/academy|crontab\.guru|regex101\.com|sqlbolt\.com|howdns\.works|cidr\.xyz|practicalnetworking|web\.dev\/learn|vite\.dev|vitest\.dev|requests\.readthedocs|redis\.io\/docs|owasp\.org|exploit-db\.com|osintframework|hashcat\.net\/wiki|sudo\.ws\/docs|linux-audit|virtualbox\.org|distrowatch|gnu\.org\/software|linuxjourney\.com/.test(u)) return "official";
    return "guide";
  }
  const RES_CAT_META = {
    official: { t: "Official documentation", s: "Free to read", icon: "\u2713" },
    guide: { t: "Tutorials & guides", s: "Check the provider for access", icon: "\u{1F4D6}" },
    lab: { t: "Hands-on labs", s: "Check the provider for access", icon: "\u2697" }
  };
  function resourceLibrary(res) {
    if (!res.length) return '<p class="muted">No links yet.</p>';
    const groups = { official: [], guide: [], lab: [] };
    res.forEach(r => groups[resCat(r[1])].push(r));
    return ["official", "guide", "lab"].filter(g => groups[g].length).map(g => {
      const m = RES_CAT_META[g];
      const items = groups[g].map(r =>
        `<a class="res" href="${esc(r[1])}" target="_blank" rel="noopener"><span class="res-t">\u{1F517} ${esc(r[0])}</span><span class="res-s">${m.s}</span></a>`).join("");
      return `<div class="res-group"><div class="res-gh"><span class="res-gi">${m.icon}</span><b>${m.t}</b></div>${items}</div>`;
    }).join("");
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
      (function walk(n) { if (p[rm.id + ":" + n._id] === "done") c++; (n.children || []).forEach(walk); })(rm.root);
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
  function countUp(el, to, dur) {
    dur = dur || 900;
    const t0 = performance.now();
    function f(t) {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function route() {
    updateLvlChip();
    const h = location.hash || "#/";
    const m = h.match(/^#\/r\/([\w-]+)/);
    closeDrawer();
    if (m) {
      const rm = ROADMAPS.find(r => r.id === m[1]);
      if (rm) { viewRoadmap(rm); animIn(); return; }
    }
    if (h === "#/dashboard") { viewDashboard(); animIn(); countUps(); return; }
    if (h === "#/community") { viewCommunity(); animIn(); return; }
    viewHome(); animIn();
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
    // v12: spotlight follows the mouse on cards
    document.querySelectorAll(".rm-card").forEach(c => c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    }));
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
      const st = p[rm.id + ":" + n._id] || null;
      refreshNodeVisual(rm, n, st);
    });
  }
  function refreshNodeVisual(rm, n, st) {
    if (!n._el) return;
    n._el.classList.toggle("done", st === "done");
    n._el.classList.toggle("learning", st === "learning");
    n._el.classList.toggle("skipped", st === "skipped");
    n._el.setAttribute("aria-label", n.t + (st ? ", " + st : ""));
    const e = state.rendered.edges.find(e => e.child === n._id);
    if (e) e.el.classList.toggle("done", st === "done");
    const meta = n._el.querySelector(".a-meta");
    if (meta) {
      const kids = (n.children || []).length;
      const res = (n.res || []).length;
      const ic = st === "done" ? "\\u2713" : (st === "learning" ? "\\u25D0" : (st === "skipped" ? "\\u2715" : ""));
      meta.textContent = st ? ic + " " + st : (kids ? kids + " steps" : (res ? res + " resources" : ""));
    }
  }

  function markNext(rm) {
    const p = getProgress();
    const nxt = state.rendered.nodes.find(n => p[rm.id + ":" + n._id] !== "done");
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
      <div class="view-row"><div class="level-filter" role="tablist" aria-label="Skill level">
        <button class="lf on" data-lv="0" role="tab">All</button><button class="lf" data-lv="1" role="tab">Basics</button><button class="lf" data-lv="2" role="tab">Intermediate</button><button class="lf" data-lv="3" role="tab">Advanced</button>
      </div><div class="view-toggle" role="tablist" aria-label="Roadmap view">
        <button class="vt" id="vMap" role="tab">Map</button><button class="vt" id="vJourney" role="tab">Journey</button>
      </div></div>
      <div class="map-ctrl" id="mapCtrl">
        <button id="zout" title="Zoom out">\u2212</button>
        <button id="zpct" title="Reset zoom">100%</button>
        <button id="zin" title="Zoom in">+</button>
        <input id="zsl" type="range" min="25" max="220" value="100" title="Zoom">
        <button id="zfit" title="Fit to screen">\u29C9</button>
        <span class="map-hint">Drag to pan \u00B7 Scroll to zoom \u00B7 Double-click to zoom in \u00B7 Click a node</span>
      </div>
      <div class="legend-box" id="legendBox">
        <span><i class="lg-dot" style="--c:#a78bfa"></i>Personal recommendation</span>
        <span><i class="lg-dot" style="--c:#4ade80"></i>Alternative path</span>
        <span><i class="lg-dot" style="--c:#8b93a9"></i>Optional</span>
      </div>
    </div>
    <div class="map-wrap" id="mapWrap"><svg id="map" style="--rc:${rm.color}"></svg>
      <div class="minimap" id="minimapBox" title="Minimap: click to jump"><svg id="minimap"></svg></div>
    </div>
    <div id="journeyWrap" hidden></div>
    <div class="drawer" id="drawer" hidden>
      <div class="dr-in" id="drIn"></div>
    </div>`;
    const svg = $("map");
    state.rendered = Engine.render(svg, rm, {}, nid => openDrawer(rm, nid), n => tagFor(rm, n));
    paintProgress(rm);
    markNext(rm);
    const mm = Engine.minimap($("minimap"), state.rendered, rm.color);
    state.mm = mm;
    const updMm = t => {
      const r = svg.getBoundingClientRect();
      mm.update(t, r.width, r.height);
      const zp = document.getElementById("zpct");
      if (zp) zp.textContent = Math.round(t.scale * 100) + "%";
      const zs = document.getElementById("zsl");
      if (zs && document.activeElement !== zs) {
        zs.value = Math.round(t.scale * 100);
        zs.style.setProperty("--fill", ((zs.value - 25) / 195 * 100) + "%");
      }
    };
    const mmJump = e => {
      const r = $("minimap").getBoundingClientRect();
      const cx = (e.clientX - r.left) / mm.s, cy = (e.clientY - r.top) / mm.s;
      state.pz.centerOn(cx, cy);
    };
    let mmDrag = false;
    $("minimapBox").addEventListener("pointerdown", e => {
      mmDrag = true;
      $("minimapBox").setPointerCapture(e.pointerId);
      mmJump(e);
    });
    $("minimapBox").addEventListener("pointermove", e => { if (mmDrag) mmJump(e); });
    $("minimapBox").addEventListener("pointerup", () => { mmDrag = false; });
    $("minimapBox").addEventListener("pointercancel", () => { mmDrag = false; });
    const pr = roadmapProgress(rm);
    $("ringPct").textContent = pr.pct + "%";
    $("progDone").textContent = pr.done;
    $("progTotal").textContent = pr.total;
    $("ringFg").style.strokeDashoffset = 119.4 * (1 - pr.pct / 100);
    state.pz = Engine.panZoom(svg, state.rendered.vp, state.rendered.W, state.rendered.H, updMm);
    // v21: single reliable initial fit on the real bounds; retry once if layout isn't ready
    if (!state.pz.fit()) requestAnimationFrame(() => { if (state.pz) state.pz.fit(); });
    if (state.pendingNode && state.pendingNode.rmId === rm.id) {
      const t = state.pendingNode.title;
      state.pendingNode = null;
      setTimeout(() => {
        const f = state.rendered.nodes.find(n => n.t === t);
        if (f) openDrawer(rm, f._id);
      }, 350);
    }
    // v23: Map | Journey view toggle (preference persisted per roadmap)
    state.view = null;
    try { state.view = localStorage.getItem("atlas:view:" + rm.id); } catch (_) {}
    if (state.view !== "map" && state.view !== "journey") state.view = "journey"; // v24: Journey first
    state.level = 0;
    try { state.level = +(localStorage.getItem("atlas:level:" + rm.id) || 0); } catch (_) {}
    if (![0, 1, 2, 3].includes(state.level)) state.level = 0;
    function mountJourney() {
      const w = $("journeyWrap");
      w.innerHTML = Journey.build(rm, {
        esc, nodeState, progress: roadmapProgress, level: state.level,
        depFor: t => (typeof DEPTH !== "undefined" ? DEPTH[rm.id + "::" + t] : null) || {},
        quizCount: t => ((typeof QUIZ !== "undefined" ? QUIZ[rm.id + "::" + t] : null) || []).length,
      });
      Journey.mount(w, rm, { onTopic: nid => openDrawer(rm, nid) });
    }
    state.mountJourney = mountJourney;
    function showView(v) {
      state.view = v;
      try { localStorage.setItem("atlas:view:" + rm.id, v); } catch (_) {}
      $("vMap").classList.toggle("on", v === "map");
      $("vJourney").classList.toggle("on", v === "journey");
      const isJ = v === "journey";
      $("mapWrap").hidden = isJ; $("mapCtrl").hidden = isJ; $("legendBox").hidden = isJ;
      $("journeyWrap").hidden = !isJ;
      if (isJ) mountJourney();
      else if (state.pz) state.pz.fitIfFresh();
      window.scrollTo(0, 0);
    }
    function applyLevel() {
      document.querySelectorAll(".lf").forEach(b => b.classList.toggle("on", +b.dataset.lv === state.level));
      try { localStorage.setItem("atlas:level:" + rm.id, state.level); } catch (_) {}
      if (state.view === "journey") { if (!$("journeyWrap").hidden) mountJourney(); }
      else if (state.rendered) {
        state.rendered.nodes.forEach(n => {
          if (n._el) n._el.classList.toggle("lvl-dim", !!state.level && n._depth > 0 && (n.lv || 2) !== state.level);
        });
      }
    }
    document.querySelectorAll(".lf").forEach(b => b.addEventListener("click", () => {
      state.level = +b.dataset.lv; applyLevel();
    }));
    state.applyLevel = applyLevel;
    $("vMap").addEventListener("click", () => showView("map"));
    $("vJourney").addEventListener("click", () => showView("journey"));
    showView(state.view);
    applyLevel();
    $("zin").addEventListener("click", () => state.pz.zoomIn());
    $("zout").addEventListener("click", () => state.pz.zoomOut());
    $("zfit").addEventListener("click", () => state.pz.fit());
    $("zpct").addEventListener("click", () => state.pz.setScale(1));
    $("zsl").addEventListener("input", e => state.pz.setScale(e.target.value / 100, false));
    window.onresize = () => { if (state.pz) state.pz.fitIfFresh(); };
  }

  function openDrawer(rm, nid) {
    const n = state.rendered.byId[nid];
    if (!n) return;
    const st0 = nodeState(rm.id, nid);
    const dep0 = (typeof DEPTH !== "undefined" ? DEPTH[rm.id + "::" + n.t] : null) || {};
    const dep = { t: n.time || dep0.t, l: n.learn || dep0.l || [], d: n.do || dep0.d || [] };
    const tools = n.tools || [];
    const tip = n.tip || null;
    const LVN = ["", "Basics", "Intermediate", "Advanced"];
    const preChips = (n.pre || []).map(pref => {
      let target = null;
      if (typeof pref === "string") target = state.rendered.nodes.find(x => x.t === pref);
      else if (pref && pref.t) {
        const r2 = (typeof ROADMAPS !== "undefined" ? ROADMAPS.find(r => r.id === pref.rid) : null) || rm;
        target = r2 === rm ? state.rendered.nodes.find(x => x.t === pref.t) : { _id: pref.t, _rm: r2.id };
      }
      if (!target) return "";
      const label = (target._rm && target._rm !== rm.id ? target._rm + " / " : "") + esc(typeof pref === "string" ? pref : pref.t);
      return `<button class="kid pre" data-pre="${esc(target._id)}" data-prm="${esc(target._rm || rm.id)}">${label}</button>`;
    }).join("");
    const kids = (n.children || []).map(c =>
      `<button class="kid" data-nid="${c._id}">${esc(c.t)}</button>`).join("");
    const chain = [];
    let cc = n._parent;
    while (cc) { chain.unshift(cc); cc = cc._parent; }
    const prereqs = chain.map(a => `<button class="kid" data-nid="${a._id}">${esc(a.t)}</button>`).join("");
    const sibs = n._parent ? (n._parent.children || []).filter(c => c._id !== nid).map(c =>
      `<button class="kid" data-nid="${c._id}">${esc(c.t)}</button>`).join("") : "";
    const res = (n.res || []).map(r =>
      `<a class="res" href="${esc(r[1])}" target="_blank" rel="noopener">\u{1F517} ${esc(r[0])}</a>`).join("");
    const learn = (dep.l || []).map(x => `<li><span>${esc(x)}</span></li>`).join("");
    const todo = (dep.d || []).map(x => `<li><span>${esc(x)}</span></li>`).join("");
    const resLib = resourceLibrary(n.res || []);
    const crumb = chain.map(a => `<button class="crumb" data-nid="${a._id}">${esc(a.t)}</button>`).join('<span class="crumb-sep">›</span>');
    const level = n._depth === 0 ? "Overview" : (LVN[n.lv] || (n._depth === 1 ? "Beginner" : (n._depth === 2 ? "Intermediate" : "Advanced")));
    const quiz = (typeof QUIZ !== "undefined" ? QUIZ[rm.id + "::" + n.t] : null) || [];
    const quizHtml = quiz.length ? quiz.map((qq, qi) =>
      `<div class="q" data-qi="${qi}">
        <p class="q-t"><b>Q${qi + 1}.</b> ${esc(qq.q)}</p>
        <div class="q-opts">${qq.o.map((op, oi) => `<button class="q-opt" data-oi="${oi}">${esc(op)}</button>`).join("")}</div>
        <p class="q-exp" hidden></p>
      </div>`).join("") + `<div class="q-score" hidden></div><button class="q-retry" hidden>Retake quiz</button>`
      : `<p class="muted">Knowledge checks for this topic are being written. The Practice tab has hands-on steps meanwhile.</p>`;
    $("drIn").innerHTML = `
      <button class="dr-x" id="drX">\u2715</button>
      <div class="dr-band" style="--rc:${rm.color}"></div>
      ${crumb ? `<nav class="crumbs" aria-label="Breadcrumb">${crumb}</nav>` : ""}
      <span class="eyebrow sm" style="--rc:${rm.color}">${esc(rm.title)}</span>
      <h3>${esc(n.t)}</h3>
      <div class="dr-meta">
        <span class="lvl-pill">${level}</span>
        ${dep.t ? `<span class="time-badge">\u23F1 ${esc(dep.t)}</span>` : ""}
        ${st0 ? `<span class="st-pill st-${st0}">${st0 === "done" ? "\u2713" : (st0 === "learning" ? "\u25D0" : "\u2715")} ${st0}</span>` : ""}
      </div>
      ${n._tag && TAG_META[n._tag] ? `<div class="tag-banner tag-${n._tag}">${TAG_META[n._tag].icon} <b>${TAG_META[n._tag].t}</b><span>${TAG_META[n._tag].d}</span></div>` : ""}
      ${dep.t ? `<span class="time-badge">\u23F1 ${esc(dep.t)}</span>` : ""}
      <p class="dr-d">${esc(n.d || "")}</p>
      ${tip ? `<div class="tip-box"><b>Heads up</b><span>${esc(tip)}</span></div>` : ""}
      ${tools.length ? `<div class="kids-h">Tools</div><div class="tools">${tools.map(t => `<span class="tool-chip">${esc(t)}</span>`).join("")}</div>` : ""}
      ${preChips ? `<div class="kids-h">Prerequisites</div><div class="kids prereq-kids">${preChips}</div>` : ""}
      ${prereqs ? `<div class="kids-h">Requires</div><div class="kids prereq-kids">${prereqs}</div>` : ""}
      <div class="tristate" role="group" aria-label="Mark your status">
        <button class="ts ${st0 === "learning" ? "on-learning" : ""}" data-st="learning">\u25D0 Learning</button>
        <button class="ts ${st0 === "done" ? "on-done" : ""}" data-st="done">\u2713 Done</button>
        <button class="ts ${st0 === "skipped" ? "on-skipped" : ""}" data-st="skipped">\u2715 Skip</button>
      </div>
      <div class="ws-h">Learning workspace</div>
      <div class="ws-grid">
        <button class="ws-card on" data-tab="learn"><span class="ws-i">\u{1F4D6}</span><b>Learn</b><span>Concepts, commands, mistakes</span></button>
        <button class="ws-card" data-tab="res"><span class="ws-i">\u{1F517}</span><b>Resources</b><span>Docs, guides, labs</span></button>
        <button class="ws-card" data-tab="do"><span class="ws-i">\u2697</span><b>Practice</b><span>Safe local exercises</span></button>
        <button class="ws-card" data-tab="quiz"><span class="ws-i">\u{1F3AF}</span><b>Test yourself</b><span>Quizzes with explanations</span></button>
      </div>
      <div class="dr-pane" id="paneLearn">
        ${learn ? `<div class="kids-h">Learning objectives</div><ul class="dl-learn">${learn}</ul>` : `<p class="muted">Core concepts coming with the description above.</p>`}
        ${kids ? `<div class="kids-h">Continue to</div><div class="kids">${kids}</div>` : ""}
        ${sibs ? `<div class="kids-h">Related topics</div><div class="kids">${sibs}</div>` : ""}
      </div>
      <div class="dr-pane" id="paneDo" hidden>
        ${todo ? `<div class="kids-h">Guided practice</div><ol class="dl-do">${todo}</ol>` : '<p class="muted">Hands-on steps coming soon.</p>'}
      </div>
      <div class="dr-pane" id="paneRes" hidden>
        <div class="kids-h">Resource library</div>
        ${resLib}
      </div>
      <div class="dr-pane" id="paneQuiz" hidden>
        <div class="kids-h">Knowledge check</div>
        <div id="quizBox">${quizHtml}</div>
      </div>
      ${helpfulHtml(rm.id, nid)}`;
    document.querySelectorAll(".anode.sel").forEach(x => x.classList.remove("sel"));
    if (n._el) n._el.classList.add("sel");
    $("drawer").hidden = false;
    requestAnimationFrame(() => $("drawer").classList.add("open"));
    $("drX").addEventListener("click", closeDrawer);
    document.querySelectorAll(".kid.pre").forEach(b => b.addEventListener("click", () => {
      const prm = b.dataset.prm, pid = b.dataset.pre;
      if (prm && prm !== rm.id) {
        const r2 = ROADMAPS.find(r => r.id === prm);
        const t2 = r2 && (function find(ns, t) {
          for (const x of ns) { if (x.t === t) return x; const f = x.children ? find(x.children, t) : null; if (f) return f; }
          return null;
        })([r2.root], pid);
        if (t2) { location.hash = "#/r/" + prm; state.pendingNode = { rmId: prm, title: t2.t }; }
      } else openDrawer(rm, pid);
    }));
    document.querySelectorAll(".ts").forEach(b => b.addEventListener("click", () => {
      const now = setNodeState(rm.id, nid, b.dataset.st);
      document.querySelectorAll(".ts").forEach(x => {
        x.classList.toggle("on-learning", now === "learning" && x.dataset.st === "learning");
        x.classList.toggle("on-done", now === "done" && x.dataset.st === "done");
        x.classList.toggle("on-skipped", now === "skipped" && x.dataset.st === "skipped");
      });
      if (typeof Game !== "undefined" && now) {
        const xp = now === "done" ? 10 : (now === "learning" ? 2 : 0);
        if (xp) {
          const r = Game.award(xp, totalDone());
          toast("<b>+" + xp + " XP</b>");
          if (r.leveled) {
            const li = Game.levelInfo();
            toast("\u{1F31F} <b>Level " + r.level + ": " + esc(li.title) + "</b><span>Keep climbing</span>", 3400);
          }
          r.unlocked.forEach(a => toast(a.icon + " <b>" + esc(a.t) + "</b><span>Achievement unlocked</span>", 3400));
        }
        if (now === "done") {
          const pr2 = roadmapProgress(rm);
          if (pr2.pct === 100) {
            const fa = Game.grant("finisher");
            if (fa) {
              toast(fa.icon + " <b>" + esc(fa.t) + "</b><span>You finished " + esc(rm.title) + "</span>", 3800);
              confetti();
            }
          }
        }
        updateLvlChip();
      }
      const elN = state.rendered.byId[nid];
      if (elN) refreshNodeVisual(rm, elN, now);
      if (state.mm) state.mm.refreshDone();
      refreshRoadmapProgress(rm);
    }));
    const tabIds = { learn: "paneLearn", do: "paneDo", res: "paneRes", quiz: "paneQuiz" };
    document.querySelectorAll(".ws-card").forEach(b => b.addEventListener("click", () => {
      document.querySelectorAll(".ws-card").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      Object.keys(tabIds).forEach(t => {
        const p = $(tabIds[t]);
        if (p) p.hidden = b.dataset.tab !== t;
      });
    }));
    const qbox = $("quizBox");
    if (qbox && quiz.length) {
      let score = 0, answered = 0;
      qbox.querySelectorAll(".q").forEach((qel, qi) => {
        const qq = quiz[qi];
        qel.querySelectorAll(".q-opt").forEach(btn => btn.addEventListener("click", () => {
          if (qel.dataset.done) return;
          qel.dataset.done = "1";
          answered++;
          const ok = +btn.dataset.oi === qq.a;
          if (ok) score++;
          qel.querySelectorAll(".q-opt").forEach((b2, bi) => {
            b2.classList.toggle("q-right", bi === qq.a);
            b2.classList.toggle("q-wrong", bi === +btn.dataset.oi && !ok);
            b2.disabled = true;
          });
          const exp = qel.querySelector(".q-exp");
          exp.hidden = false;
          exp.innerHTML = (ok ? "<b>Correct.</b> " : "<b>Not quite.</b> ") + esc(qq.e);
          if (answered === quiz.length) {
            const sc = qbox.querySelector(".q-score");
            sc.hidden = false;
            sc.innerHTML = "<b>" + score + "/" + quiz.length + "</b> correct" + (score === quiz.length ? " - flawless." : (score * 2 >= quiz.length ? " - solid. Review the misses." : " - revisit the Learn tab, then retry."));
            qbox.querySelector(".q-retry").hidden = false;
          }
        }));
      });
      qbox.querySelector(".q-retry").addEventListener("click", () => openDrawer(rm, nid));
    }
    document.querySelectorAll(".kid").forEach(b => b.addEventListener("click", () => openDrawer(rm, b.dataset.nid)));
    wireHelpful(rm.id, nid);
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
    document.querySelectorAll(".anode.sel").forEach(x => x.classList.remove("sel"));
    setTimeout(() => {
      d.hidden = true;
      if (state.view === "journey" && state.mountJourney && !$("journeyWrap").hidden) state.mountJourney();
    }, 280);
  }

  // ================= COMMUNITY: voting board =================
  const VLS = "atlas.votes.v1";
  const SEED_SUGGESTIONS = [
    { id:"s-ai", t:"AI & Machine Learning", d:"From Python math to neural networks and LLMs." },
    { id:"s-rust", t:"Rust Programming", d:"Memory safety without garbage collection." },
    { id:"s-mobile", t:"Mobile Development", d:"Flutter and native apps for iOS and Android." },
    { id:"s-game", t:"Game Development", d:"Godot and Unity: build playable worlds." },
    { id:"s-data", t:"Data Science", d:"Statistics, pandas, and telling stories with data." },
    { id:"s-soc", t:"SOC Analyst", d:"Blue team fundamentals: SIEM, triage, threat hunting." },
  ];
  function getVotes() {
    try {
      const v = JSON.parse(localStorage.getItem(VLS)) || {};
      if (!v.sugs) {
        v.sugs = SEED_SUGGESTIONS.map(s => ({ ...s, votes: 20 + Math.floor(Math.random() * 60), mine: false }));
        v.voted = [];
      }
      return v;
    } catch (e) { return { sugs: [], voted: [] }; }
  }
  function saveVotes(v) { try { localStorage.setItem(VLS, JSON.stringify(v)); } catch (e) {} }

  function viewCommunity() {
    state.roadmap = null;
    const v = getVotes();
    v.sugs.sort((a, b) => b.votes - a.votes);
    const rows = v.sugs.map(s => `
      <div class="sug${v.voted.includes(s.id) ? " voted" : ""}">
        <button class="vote" data-sid="${s.id}" title="Upvote">
          <span class="v-arrow">\u25B2</span><b>${s.votes}</b>
        </button>
        <div class="sug-t"><b>${esc(s.t)}</b><span>${esc(s.d)}</span></div>
        ${s.mine ? '<span class="sug-mine">yours</span>' : ""}
      </div>`).join("");
    $("app").innerHTML = `
    <main class="wrap community">
      <nav class="crumb"><a href="#/">Atlas</a><span>/</span><span>Community</span></nav>
      <header class="page-hero">
        <span class="eyebrow">\u25C8 Community</span>
        <h2>You draw the next map</h2>
        <p>Atlas is built with its learners. Suggest the roadmap you wish existed, and upvote the ones you want most. The most wanted get built first.</p>
      </header>
      <div class="sug-form">
        <input id="sugT" maxlength="60" placeholder="Roadmap title, e.g. Ethical Hacking with Go">
        <input id="sugD" maxlength="120" placeholder="One-line description">
        <button class="btn-done on" id="sugAdd" style="width:auto;margin:0;padding:0.8125rem 1.625rem">Suggest</button>
      </div>
      <div class="sug-list">${rows}</div>
      <section class="why" style="margin-top:3.5rem">
        <div class="why-card"><span>\u{1F4AC}</span><h3>Suggest</h3><p>Missing a path? Propose it. Good suggestions rise to the top.</p></div>
        <div class="why-card"><span>\u25B2</span><h3>Vote</h3><p>Upvote the roadmaps you want. One vote each, make it count.</p></div>
        <div class="why-card"><span>\u{1F6E0}\uFE0F</span><h3>We build</h3><p>The most wanted roadmaps get drawn into Atlas first.</p></div>
      </section>
    </main>`;
    document.querySelectorAll(".vote").forEach(b => b.addEventListener("click", () => {
      const vv = getVotes();
      const s = vv.sugs.find(x => x.id === b.dataset.sid);
      if (!s) return;
      if (vv.voted.includes(s.id)) {
        vv.voted = vv.voted.filter(x => x !== s.id);
        s.votes = Math.max(0, s.votes - 1);
      } else {
        vv.voted.push(s.id);
        s.votes++;
        toast("\u25B2 <b>Voted</b><span>" + esc(s.t) + "</span>");
      }
      saveVotes(vv);
      viewCommunity();
    }));
    $("sugAdd").addEventListener("click", () => {
      const t = $("sugT").value.trim(), d = $("sugD").value.trim() || "Suggested by the community.";
      if (!t) { toast("Give your roadmap a title first"); return; }
      const vv = getVotes();
      const id = "s-" + Date.now().toString(36);
      vv.sugs.push({ id, t: esc(t).slice(0, 60), d: esc(d).slice(0, 120), votes: 1, mine: true });
      vv.voted.push(id);
      saveVotes(vv);
      toast("\u{1F4AC} <b>Suggested</b><span>Thanks for drawing with us</span>");
      viewCommunity();
    });
  }

  // ================= HELPFUL VOTES =================
  const HLS = "atlas.helpful.v1";
  function getHelpful() {
    try { return JSON.parse(localStorage.getItem(HLS)) || {}; } catch (e) { return {}; }
  }
  function helpfulHtml(rmId, nid) {
    const h = getHelpful()[rmId + ":" + nid] || { up: 0, down: 0, mine: null };
    return `<div class="helpful"><span>Was this helpful?</span>
      <button class="hbtn${h.mine === "up" ? " on" : ""}" data-h="up">\u{1F44D} <b>${h.up}</b></button>
      <button class="hbtn${h.mine === "down" ? " on" : ""}" data-h="down">\u{1F44E} <b>${h.down}</b></button>
    </div>`;
  }
  function wireHelpful(rmId, nid) {
    document.querySelectorAll(".hbtn").forEach(b => b.addEventListener("click", () => {
      const all = getHelpful(), k = rmId + ":" + nid;
      const h = all[k] || { up: 0, down: 0, mine: null };
      const v = b.dataset.h;
      if (h.mine === v) { h[v]--; h.mine = null; }
      else {
        if (h.mine) h[h.mine]--;
        h[v]++; h.mine = v;
      }
      all[k] = h;
      try { localStorage.setItem(HLS, JSON.stringify(all)); } catch (e) {}
      const box = b.closest(".helpful");
      if (box) box.outerHTML = helpfulHtml(rmId, nid);
      wireHelpful(rmId, nid);
    }));
  }

  // ================= SHARE CARD =================
  function shareCard() {
    const li = Game.levelInfo();
    const cv = document.createElement("canvas");
    cv.width = 1200; cv.height = 630;
    const c = cv.getContext("2d");
    const g = c.createLinearGradient(0, 0, 1200, 630);
    g.addColorStop(0, "#0a0f1e"); g.addColorStop(1, "#131024");
    c.fillStyle = g; c.fillRect(0, 0, 1200, 630);
    // glow orbs
    const orb = (x, y, r, col) => {
      const rg = c.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, col); rg.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = rg; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill();
    };
    orb(200, 120, 320, "rgba(45,212,191,.20)");
    orb(1000, 500, 380, "rgba(167,139,250,.20)");
    orb(1050, 100, 220, "rgba(244,114,182,.14)");
    // brand
    c.fillStyle = "#2dd4bf"; c.font = "700 34px Inter, sans-serif";
    c.fillText("\u{1F9ED} ATLAS", 80, 100);
    c.fillStyle = "#8b93a9"; c.font = "600 24px Inter, sans-serif";
    c.fillText("by The PenTrix", 280, 100);
    // level
    c.fillStyle = "#ffffff"; c.font = "900 120px Inter, sans-serif";
    c.fillText("Level " + li.lvl, 80, 260);
    c.fillStyle = "#2dd4bf"; c.font = "700 44px Inter, sans-serif";
    c.fillText(li.title, 82, 320);
    // stats
    c.fillStyle = "#eef2f9"; c.font = "800 52px Inter, sans-serif";
    const stats = [[li.xp + " XP", "experience"], [li.g.streak + " day", "streak"], [totalDone() + " nodes", "completed"]];
    stats.forEach((s, i) => {
      const x = 80 + i * 340;
      c.fillStyle = "#eef2f9"; c.fillText(s[0], x, 440);
      c.fillStyle = "#8b93a9"; c.font = "600 26px Inter, sans-serif";
      c.fillText(s[1], x, 478);
      c.font = "800 52px Inter, sans-serif";
    });
    // top roadmaps
    const top = ROADMAPS.map(rm => ({ rm, pr: roadmapProgress(rm) }))
      .sort((a, b) => b.pr.pct - a.pr.pct).slice(0, 3);
    c.fillStyle = "#8b93a9"; c.font = "700 24px Inter, sans-serif";
    c.fillText("TOP MAPS", 80, 545);
    top.forEach((t, i) => {
      const x = 80 + i * 360;
      c.fillStyle = "#eef2f9"; c.font = "700 26px Inter, sans-serif";
      c.fillText(t.rm.title.slice(0, 18), x, 585);
      c.fillStyle = "rgba(255,255,255,.12)";
      c.fillRect(x, 596, 300, 8);
      c.fillStyle = t.rm.color;
      c.fillRect(x, 596, 300 * t.pr.pct / 100, 8);
    });
    // footer
    c.fillStyle = "#8b93a9"; c.font = "600 22px Inter, sans-serif";
    c.fillText("mizazhaider-ceh.github.io/pentrix-atlas", 80, 610);
    return cv;
  }

  function openShare() {
    let ov = document.getElementById("shareOv");
    if (ov) ov.remove();
    ov = document.createElement("div");
    ov.id = "shareOv";
    ov.innerHTML = `<div class="share-card">
      <button class="dr-x" id="shareX">\u2715</button>
      <h3>Share your journey</h3>
      <p class="muted">Your progress, rendered as a card.</p>
      <div class="share-prev" id="sharePrev"></div>
      <div class="share-btns">
        <button class="btn-done on" id="dlCard" style="width:auto;margin:0;padding:0.8125rem 1.625rem">\u2B07 Download PNG</button>
        <button class="btn-done" id="cpLink" style="width:auto;margin:0;padding:0.8125rem 1.625rem">\u{1F517} Copy link</button>
      </div>
    </div>`;
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add("open"));
    const cv = shareCard();
    cv.style.width = "100%"; cv.style.borderRadius = "14px";
    document.getElementById("sharePrev").appendChild(cv);
    document.getElementById("shareX").addEventListener("click", () => ov.remove());
    ov.addEventListener("click", e => { if (e.target === ov) ov.remove(); });
    document.getElementById("dlCard").addEventListener("click", () => {
      const a = document.createElement("a");
      a.download = "atlas-progress.png";
      a.href = cv.toDataURL("image/png");
      a.click();
      toast("\u2B07 <b>Downloaded</b><span>Show the world</span>");
    });
    document.getElementById("cpLink").addEventListener("click", () => {
      const url = "https://mizazhaider-ceh.github.io/pentrix-atlas/#/dashboard";
      const done = () => toast("\u{1F517} <b>Link copied</b>");
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done).catch(done); else done();
    });
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
        <button class="btn-done" id="shareBtn" style="width:auto;margin:0;padding:0.8125rem 1.625rem;flex:none">\u{1F4E4} Share</button>
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
    const sb = document.getElementById("shareBtn");
    if (sb) sb.addEventListener("click", openShare);
  }

  // ================= v6: opinion badges =================
  // rec = personal recommendation, alt = alternative path, opt = optional
  const TAGS = {
    "cyber-security::Linux Command Line":"rec", "cyber-security::Python":"rec",
    "cyber-security::Nmap Scanning":"rec", "cyber-security::Burp Suite":"rec",
    "cyber-security::Wireshark":"opt", "cyber-security::Bash Scripting":"opt",
    "cyber-security::Metasploit Framework":"alt",
    "frontend::CSS":"rec", "frontend::React":"rec", "frontend::TypeScript":"rec",
    "backend::REST APIs":"rec", "backend::SQL Databases":"rec", "backend::Docker Basics":"opt",
    "devops::CI/CD: GitHub Actions":"rec", "devops::Docker":"rec", "devops::Kubernetes":"opt",
    "python::FastAPI":"rec", "python::Automation Scripts":"rec",
    "linux::Bash Scripting":"rec", "linux::Files & Permissions":"rec",
    "bug-bounty::Recon at Scale":"rec", "bug-bounty::Report Writing":"rec",
    "bug-bounty::IDOR & Access Control":"rec",
    "networking::IP & Subnetting":"rec", "networking::Wireshark Mastery":"rec",
    "cloud::IAM Deep Dive":"rec", "cloud::Common Misconfigurations":"rec",
  };
  const TAG_META = {
    rec:{ icon:"\u2605", t:"Personal recommendation", d:"The maintainers' pick. Do this." },
    alt:{ icon:"\u25C8", t:"Alternative path", d:"Another valid way to go." },
    opt:{ icon:"\u25CB", t:"Optional", d:"Skip if you are in a hurry." },
  };
  function tagFor(rm, n) { return TAGS[rm.id + "::" + n.t] || null; }

  // ================= v6: command palette =================
  let palIndex = [];
  function buildPalIndex() {
    const items = [
      { t:"Home", sub:"Atlas", go:"#/" },
      { t:"Dashboard", sub:"Your progress", go:"#/dashboard" },
      { t:"Community", sub:"Vote on roadmaps", go:"#/community" },
    ];
    ROADMAPS.forEach(rm => {
      items.push({ t:rm.title, sub:"Roadmap", go:"#/r/" + rm.id });
      (function walk(n) {
        items.push({ t:n.t, sub:rm.title, go:"#/r/" + rm.id, node:n.t, rmId:rm.id });
        (n.children || []).forEach(walk);
      })(rm.root);
    });
    palIndex = items;
  }
  function openPalette() {
    const p = document.getElementById("palette");
    if (!p) return;
    if (!palIndex.length) buildPalIndex();
    p.hidden = false;
    requestAnimationFrame(() => p.classList.add("open"));
    const inp = document.getElementById("palInput");
    inp.value = "";
    renderPal("");
    setTimeout(() => inp.focus(), 30);
  }
  function closePalette() {
    const p = document.getElementById("palette");
    if (!p || p.hidden) return;
    p.classList.remove("open");
    setTimeout(() => { p.hidden = true; }, 200);
  }
  let palActive = 0, palShown = [];
  function renderPal(q) {
    const list = document.getElementById("palList");
    q = q.trim().toLowerCase();
    palShown = (q ? palIndex.filter(i =>
      i.t.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q)
    ) : palIndex.filter(i => !i.node)).slice(0, 14);
    palActive = 0;
    list.innerHTML = palShown.map((i, ix) => `
      <button class="pal-item${ix === 0 ? " active" : ""}" data-ix="${ix}">
        <span class="pal-t">${esc(i.t)}</span><span class="pal-s">${esc(i.sub)}</span>
        ${i.node ? '<span class="pal-k">skill</span>' : '<span class="pal-k">go</span>'}
      </button>`).join("") || '<div class="pal-empty">No matches. Try another term.</div>';
    list.querySelectorAll(".pal-item").forEach(b => b.addEventListener("click", () => palGo(+b.dataset.ix)));
  }
  function palGo(ix) {
    const i = palShown[ix];
    if (!i) return;
    closePalette();
    if (i.node) state.pendingNode = { rmId: i.rmId, title: i.node };
    location.hash = i.go;
    if (!i.node && location.hash === i.go) route();
  }
  function wirePalette() {
    const p = document.getElementById("palette");
    if (!p) return;
    const inp = document.getElementById("palInput");
    inp.addEventListener("input", () => renderPal(inp.value));
    inp.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); palActive = Math.min(palActive + 1, palShown.length - 1); paintPalActive(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); palActive = Math.max(palActive - 1, 0); paintPalActive(); }
      else if (e.key === "Enter") { palGo(palActive); }
      else if (e.key === "Escape") { closePalette(); }
    });
    p.addEventListener("click", e => { if (e.target === p) closePalette(); });
  }
  function paintPalActive() {
    document.querySelectorAll(".pal-item").forEach((b, ix) => b.classList.toggle("active", ix === palActive));
    const a = document.querySelector(".pal-item.active");
    if (a) a.scrollIntoView({ block:"nearest" });
  }

  // ================= v6: global shortcuts =================
  function wireShortcuts() {
    wirePalette();
    document.addEventListener("keydown", e => {
      const tag = (e.target.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea";
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const p = document.getElementById("palette");
        (p && !p.hidden) ? closePalette() : openPalette();
        return;
      }
      if (typing) return;
      if (e.key === "Escape") { closePalette(); closeShortcuts(); return; }
      if (e.key === "?") { openShortcuts(); return; }
      if (state.roadmap && state.pz) {
        if (e.key === "+" || e.key === "=") state.pz.zoomIn();
        else if (e.key === "-") state.pz.zoomOut();
        else if (e.key === "0" || e.key.toLowerCase() === "f") state.pz.fit();
      }
    });
    const scx = document.getElementById("scX");
    if (scx) scx.addEventListener("click", closeShortcuts);
    const sc = document.getElementById("shortcuts");
    if (sc) sc.addEventListener("click", e => { if (e.target === sc) closeShortcuts(); });
  }
  function openShortcuts() {
    const sc = document.getElementById("shortcuts");
    if (!sc) return;
    sc.hidden = false;
    requestAnimationFrame(() => sc.classList.add("open"));
  }
  function closeShortcuts() {
    const sc = document.getElementById("shortcuts");
    if (!sc || sc.hidden) return;
    sc.classList.remove("open");
    setTimeout(() => { sc.hidden = true; }, 200);
  }

  // ================= v6: PWA =================
  function initPwa() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {});
      });
    }
  }

  function animIn() {
    const a = $("app");
    if (a && a.firstElementChild) {
      a.firstElementChild.classList.remove("page-enter");
      void a.firstElementChild.offsetWidth;
      a.firstElementChild.classList.add("page-enter");
    }
  }

  function countUps() {
    document.querySelectorAll(".dstat b, .lvl-badge b, .dash-streak b").forEach(b => {
      const v = parseInt(b.textContent, 10);
      if (!isNaN(v) && String(v) === b.textContent.trim()) countUp(b, v);
    });
    const xp = document.querySelector(".xp-t");
    if (xp) {
      const m = xp.textContent.match(/^(\d+) XP/);
      if (m) {
        const to = +m[1];
        const t0 = performance.now();
        (function f(t) {
          const p = Math.min(1, (t - t0) / 900);
          xp.innerHTML = Math.round(to * (1 - Math.pow(1 - p, 3))) + " XP " + "<span>" + xp.querySelector("span").textContent + "</span>";
          if (p < 1) requestAnimationFrame(f);
        })(t0);
      }
    }
  }

  // ---------- boot ----------
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDrawer();
  });
  window.addEventListener("hashchange", route);
  wireShortcuts();
  initPwa();
  route();
})();
