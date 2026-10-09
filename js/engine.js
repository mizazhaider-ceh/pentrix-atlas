/* Atlas engine: tidy tree layout + SVG renderer + pan/zoom */
const Engine = (() => {
  const NW = 260, NH = 58, HGAP = 64, VGAP = 72;

  // flatten nested tree, assign ids
  function flatten(root) {
    const nodes = [];
    let i = 0;
    (function walk(n, parent) {
      n._id = "n" + (i++);
      n._parent = parent || null;
      nodes.push(n);
      (n.children || []).forEach(c => walk(c, n));
    })(root, null);
    return nodes;
  }

  // v21 banded hierarchical layout.
  // Root cause of the old "thin strip": the tidy tree gave every LEAF one horizontal
  // slot, so Linux became a 10772x624 strip (17:1). This layout instead stacks each
  // category's descendants vertically inside a category block, then flows the blocks
  // into rows. The categories-per-row K is chosen adaptively so the whole graph's
  // aspect ratio matches the container. Positions derive from tree structure +
  // measured constants; nothing is hardcoded per topic.
  function layout(roots, aspect) {
    const root = roots[0];
    const cats = root.children || [];
    let slot = 0;
    function depthWalk(n, d) {
      n._depth = d; n._slot = slot++;
      (n.children || []).forEach(k => depthWalk(k, d + 1));
    }
    root._depth = 0; root._slot = slot++; root._w = 320;
    cats.forEach(c => { c._w = NW; depthWalk(c, 1); });

    const ROWH = NH + VGAP;      // 168 per stacked row
    const INDENT = 28;           // grandchild indent inside a block
    const GAPX = 84, GAPY = 130;
    const PAD = 40;

    // one block per category: pre-order vertical stack of all descendants
    const blocks = cats.map(c => {
      const rows = [];
      (function walk(n, indent) {
        rows.push({ n, indent });
        (n.children || []).forEach(k => walk(k, indent + 1));
      })(c, 0);
      const w = NW + (rows.some(r => r.indent > 0) ? INDENT : 0);
      const h = rows.length * NH + (rows.length - 1) * VGAP;
      return { rows, w, h };
    });

    // adaptive K: pick categories-per-row so W/H matches the container aspect
    const n = blocks.length;
    aspect = Math.min(3, Math.max(1, aspect || 1.6));
    function dims(K) {
      const nrows = Math.ceil(n / K);
      let W = 0, H = 0;
      for (let r = 0; r < nrows; r++) {
        const slice = blocks.slice(r * K, (r + 1) * K);
        W = Math.max(W, slice.reduce((a, b) => a + b.w, 0) + GAPX * (slice.length - 1));
        H += Math.max(...slice.map(b => b.h)) + (r ? GAPY : 0);
      }
      return { W, H };
    }
    let bestK = n || 1, bestScore = 1e18;
    for (let K = 1; K <= Math.max(n, 1); K++) {
      const { W, H } = dims(K);
      const ratio = W / Math.max(H, 1);
      let score = Math.abs(ratio - aspect);
      if (ratio < 0.5) score += 2;      // penalize tall strips
      if (ratio > 4) score += 2;        // penalize wide strips
      if (score < bestScore) { bestScore = score; bestK = K; }
    }

    // place blocks row by row, rows centered
    const { W: contentW } = dims(bestK);
    let y = PAD + NH + 96;             // root node + gap
    const nrows = Math.ceil(n / bestK);
    for (let r = 0; r < nrows; r++) {
      const slice = blocks.slice(r * bestK, (r + 1) * bestK);
      const rowW = slice.reduce((a, b) => a + b.w, 0) + GAPX * (slice.length - 1);
      const rowH = Math.max(...slice.map(b => b.h));
      let x = (contentW - rowW) / 2;   // center this row
      slice.forEach(b => {
        b.rows.forEach((row, i) => {
          row.n._w = row.n._depth === 0 ? 320 : NW;
          row.n._x = x + row.indent * INDENT;
          row.n._y = y + i * ROWH;
        });
        x += b.w + GAPX;
      });
      y += rowH + GAPY;
    }
    const W = contentW + PAD * 2;
    const H = (n ? y - GAPY : PAD + NH) + PAD;
    root._x = contentW / 2 - root._w / 2;
    root._y = PAD;
    return { W, H };
  }

  function render(svg, roadmap, progress, onNode, tagFor) {
    const NS = "http://www.w3.org/2000/svg";
    const XNS = "http://www.w3.org/1999/xhtml";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const nodes = flatten(roadmap.root);
    let ar = 1.6;
    try {
      const sr = svg.getBoundingClientRect();
      if (sr.width > 50 && sr.height > 50) ar = sr.width / sr.height;
    } catch (_) {}
    const { W, H } = layout([roadmap.root], ar);

    const vp = document.createElementNS(NS, "g");
    vp.setAttribute("class", "viewport");
    svg.appendChild(vp);

    // defs: glow filter
    const defs = document.createElementNS(NS, "defs");
    defs.innerHTML = `<filter id="nglow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="10" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
    vp.appendChild(defs);

    // edges
    const eg = document.createElementNS(NS, "g");
    eg.setAttribute("class", "edges");
    const edges = [];
    nodes.forEach(n => {
      (n.children || []).forEach(c => {
        const x1 = n._x + (n._w || NW) / 2 + 40, y1 = n._y + NH + 40;
        const x2 = c._x + (c._w || NW) / 2 + 40, y2 = c._y + 40;
        const my = (y1 + y2) / 2;
        const p = document.createElementNS(NS, "path");
        p.setAttribute("d", `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`);
        const ctag = tagFor ? tagFor(c) : null;
        p.setAttribute("class", "edge" + (ctag === "opt" ? " opt" : ""));
        p.style.setProperty("--rc", roadmap.color);
        eg.appendChild(p);
        edges.push({ child: c._id, el: p });
      });
    });
    vp.appendChild(eg);

    // nodes
    const ng = document.createElementNS(NS, "g");
    ng.setAttribute("class", "nodes");
    nodes.forEach(n => {
      const done = !!progress[n._id];
      const kids = (n.children || []).length;
      const fo = document.createElementNS(NS, "foreignObject");
      fo.setAttribute("x", n._x + 40);
      fo.setAttribute("y", n._y + 40);
      fo.setAttribute("width", n._w || NW);
      fo.setAttribute("height", NH);
      const div = document.createElementNS(XNS, "div");
      const tag = tagFor ? tagFor(n) : null;
      if (tag) n._tag = tag;
      const tier = n._depth === 0 ? " root" : (n._depth === 1 ? " cat" : "");
      const st = progress[n._id];
      const stCls = st === "done" ? " done" : (st === "learning" ? " learning" : (st === "skipped" ? " skipped" : ""));
      let badge = n.badge || "";
      if (/\bctf\b/i.test(n.t)) badge = "CTF";
      else if (/lab/i.test(n.t)) badge = "LAB";
      else if (/project/i.test(n.t)) badge = "PROJECT";
      else if (/\bexam\b|cert/i.test(n.t)) badge = "CERT";
      if (badge) n._badge = badge;
      div.setAttribute("class", "anode" + tier + stCls + (tag ? " tag-" + tag : ""));
      div.setAttribute("data-nid", n._id);
      div.setAttribute("tabindex", "0");
      div.setAttribute("role", "button");
      div.setAttribute("aria-label", n.t + (st ? ", " + st : ""));
      div.style.setProperty("--rc", roadmap.color);
      const res = (n.res || []).length;
      div.style.animationDelay = Math.min(n._depth * 110 + (n._slot % 7) * 45, 900) + "ms";
      const stIcon = st === "done" ? "\u2713" : (st === "learning" ? "\u25D0" : (st === "skipped" ? "\u2715" : ""));
      const stTxt = st ? " " + st : "";
      div.innerHTML = `${badge ? `<span class="abadge">${badge}</span>` : ""}<span class="a-t">${escapeHtml(n.t)}</span>
        <span class="a-meta">${st ? stIcon + stTxt : (kids ? kids + " steps" : (res ? res + " resources" : ""))}</span>`;
      div.addEventListener("click", () => onNode(n._id));
      div.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onNode(n._id); }
      });
      fo.appendChild(div);
      ng.appendChild(fo);
      n._el = div;
    });
    vp.appendChild(ng);

    // v14: hovering a node spotlights its path back to the root
    function highlightPath(n) {
      const keep = new Set();
      let c = n;
      while (c) { keep.add(c._id); c = c._parent; }
      nodes.forEach(m => {
        if (m._el) {
          m._el.classList.toggle("dim", !keep.has(m._id));
          m._el.classList.toggle("hl", keep.has(m._id));
        }
      });
      edges.forEach(e => {
        const child = byIdSafe(e.child);
        const on = child && keep.has(e.child) && keep.has(child._parent ? child._parent._id : null);
        e.el.classList.toggle("dim", !on);
        e.el.classList.toggle("hl", !!on);
      });
    }
    function byIdSafe(id) { return nodes.find(n => n._id === id); }
    function clearHighlight() {
      nodes.forEach(m => { if (m._el) { m._el.classList.remove("dim"); m._el.classList.remove("hl"); } });
      edges.forEach(e => { e.el.classList.remove("dim"); e.el.classList.remove("hl"); });
    }
    nodes.forEach(n => {
      if (n._el) {
        n._el.addEventListener("mouseenter", () => highlightPath(n));
        n._el.addEventListener("mouseleave", clearHighlight);
      }
    });

    // v16: edges draw themselves in, staggered
    edges.forEach((e, i) => {
      if (e.el.classList.contains("opt")) return;
      try {
        const len = e.el.getTotalLength();
        e.el.style.strokeDasharray = String(len);
        e.el.style.strokeDashoffset = String(len);
        e.el.getBoundingClientRect();
        e.el.style.transition = "stroke-dashoffset .8s ease " + (0.25 + i * 0.035) + "s";
        e.el.style.strokeDashoffset = "0";
        setTimeout(() => { e.el.style.strokeDasharray = ""; e.el.style.transition = ""; }, 900 + i * 35);
      } catch (_) {}
    });

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    return { nodes, edges, W, H, vp, byId: Object.fromEntries(nodes.map(n => [n._id, n])) };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  // pan + zoom controller
  function panZoom(svg, vp, W, H, onChange) {
    let scale = 1, tx = 0, ty = 0;
    let interacted = false;   // v21: once the user pans/zooms, we never auto-refit
    const apply = () => {
      vp.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
      try { svg.classList.toggle("far", scale < 0.55); } catch (_) {}
      if (onChange) onChange({ scale, tx, ty });
    };
    // v21: fit the real graph bounds, centered, with padding. Returns false if the
    // container has no size yet (caller retries on the next frame).
    function fit() {
      const r = svg.getBoundingClientRect();
      if (!r.width || !r.height || !W || !H) return false;
      const pad = 56;
      const fs = Math.min((r.width - pad) / W, (r.height - pad) / H);
      scale = Math.min(1, Math.max(fs, 0.3));
      tx = (r.width - W * scale) / 2;
      ty = Math.max(14, (r.height - H * scale) / 2);
      apply();
      return true;
    }
    function fitIfFresh() { if (!interacted) fit(); }
    let anim = null;
    function tweenTo(ns, ntx, nty, dur) {
      if (anim) cancelAnimationFrame(anim);
      const s0 = scale, x0 = tx, y0 = ty, t0 = performance.now();
      dur = dur || 220;
      function step(t) {
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        scale = s0 + (ns - s0) * e;
        tx = x0 + (ntx - x0) * e;
        ty = y0 + (nty - y0) * e;
        apply();
        if (p < 1) anim = requestAnimationFrame(step);
        else anim = null;
      }
      anim = requestAnimationFrame(step);
    }
    function zoomAt(mx, my, factor, animate) {
      interacted = true;
      const ns = Math.min(2.2, Math.max(0.25, scale * factor));
      const ntx = mx - (mx - tx) * (ns / scale);
      const nty = my - (my - ty) * (ns / scale);
      if (animate) tweenTo(ns, ntx, nty);
      else { scale = ns; tx = ntx; ty = nty; apply(); }
    }
    const pts = new Map();
    let pinch0 = 0;
    let drag = null, moved = 0, wasDrag = false;
    svg.addEventListener("pointerdown", e => {
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) {
        const q = [...pts.values()];
        pinch0 = Math.hypot(q[0].x - q[1].x, q[0].y - q[1].y);
        drag = null;
        return;
      }
      drag = { x: e.clientX, y: e.clientY, tx, ty, pid: e.pointerId, captured: false };
      moved = 0; wasDrag = false;
      svg.classList.add("dragging");
    });
    svg.addEventListener("pointermove", e => {
      if (pts.has(e.pointerId)) pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) {
        const q = [...pts.values()];
        const d = Math.hypot(q[0].x - q[1].x, q[0].y - q[1].y);
        if (pinch0 > 0 && d > 0) {
          const r = svg.getBoundingClientRect();
          zoomAt((q[0].x + q[1].x) / 2 - r.left, (q[0].y + q[1].y) / 2 - r.top, d / pinch0, false);
        }
        pinch0 = d;
        return;
      }
      if (!drag) return;
      moved = Math.max(moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
      if (moved > 6) interacted = true;
      if (moved > 6 && !drag.captured) {
        drag.captured = true;
        try { svg.setPointerCapture(drag.pid); } catch (_) {}
      }
      tx = drag.tx + (e.clientX - drag.x);
      ty = drag.ty + (e.clientY - drag.y);
      apply();
    });
    const clearPt = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch0 = 0; };
    const end = e => { clearPt(e); wasDrag = moved > 6; drag = null; svg.classList.remove("dragging"); };
    svg.addEventListener("pointerup", end);
    svg.addEventListener("pointercancel", end);
    // a real drag must not open the node drawer on release
    svg.addEventListener("click", e => {
      if (wasDrag) { e.stopPropagation(); e.preventDefault(); wasDrag = false; }
    }, true);
    svg.addEventListener("dblclick", e => {
      if (e.target.closest && e.target.closest(".anode")) return;
      interacted = true;
      const r = svg.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      zoomAt(mx, my, 1.5, true);
    });
    svg.addEventListener("wheel", e => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      zoomAt(mx, my, e.deltaY < 0 ? 1.12 : 0.89, false);
    }, { passive: false });
    return {
      fit, fitIfFresh,
      home(cx, cy) { interacted = true; },
      zoomIn: () => { const r = svg.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, 1.25, true); },
      zoomOut: () => { const r = svg.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, 1 / 1.25, true); },
      centerOn: (cx, cy) => {
        interacted = true;
        const r = svg.getBoundingClientRect();
        tx = r.width / 2 - cx * scale;
        ty = r.height / 2 - cy * scale;
        apply();
      },
      setScale: (ns, animate) => {
        interacted = true;
        const r = svg.getBoundingClientRect();
        ns = Math.min(2.2, Math.max(0.25, ns));
        const cx = r.width / 2, cy = r.height / 2;
        const ntx = cx - (cx - tx) * (ns / scale);
        const nty = cy - (cy - ty) * (ns / scale);
        if (animate === false) { scale = ns; tx = ntx; ty = nty; apply(); }
        else tweenTo(ns, ntx, nty);
      },
      get scale() { return scale; }
    };
  }

  // minimap: tiny overview with viewport indicator
  function minimap(svg, rendered, color) {
    const NS = "http://www.w3.org/2000/svg";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const MW = 172, s = MW / rendered.W, MH = rendered.H * s;
    svg.setAttribute("viewBox", `0 0 ${MW} ${MH}`);
    svg.style.setProperty("--rc", color);
    rendered.nodes.forEach(n => {
      const r = document.createElementNS(NS, "rect");
      r.setAttribute("x", n._x * s); r.setAttribute("y", n._y * s);
      r.setAttribute("width", Math.max((n._w || NW) * s, 2)); r.setAttribute("height", Math.max(NH * s, 2));
      r.setAttribute("rx", 2);
      r.setAttribute("class", "mm-node" + (n._el && n._el.classList.contains("done") ? " done" : ""));
      svg.appendChild(r);
    });
    const v = document.createElementNS(NS, "rect");
    v.setAttribute("class", "mm-view");
    svg.appendChild(v);
    return {
      el: v, s, W: rendered.W, H: rendered.H,
      update(t, vw, vh) {
        v.setAttribute("x", (-t.tx / t.scale) * s);
        v.setAttribute("y", (-t.ty / t.scale) * s);
        v.setAttribute("width", (vw / t.scale) * s);
        v.setAttribute("height", (vh / t.scale) * s);
      },
      refreshDone() {
        const rects = svg.querySelectorAll(".mm-node");
        rendered.nodes.forEach((n, i) => {
          if (rects[i]) rects[i].classList.toggle("done", !!(n._el && n._el.classList.contains("done")));
        });
      }
    };
  }

  return { render, panZoom, minimap, escapeHtml, NW, NH };
})();
