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

  // tidy tree layout: leaves get slots, parents center over children
  function layout(roots) {
    let slot = 0;
    function walk(n, depth) {
      n._depth = depth;
      const kids = n.children || [];
      if (!kids.length) { n._slot = slot++; }
      else {
        kids.forEach(k => walk(k, depth + 1));
        n._slot = (kids[0]._slot + kids[kids.length - 1]._slot) / 2;
      }
    }
    roots.forEach(r => walk(r, 0));
    return roots;
  }

  function render(svg, roadmap, progress, onNode, tagFor) {
    const NS = "http://www.w3.org/2000/svg";
    const XNS = "http://www.w3.org/1999/xhtml";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const nodes = flatten(roadmap.root);
    layout([roadmap.root]);

    let maxSlot = 0, maxDepth = 0;
    nodes.forEach(n => {
      n._w = n._depth === 0 ? 320 : NW;
      n._x = n._slot * (NW + HGAP) + (NW - n._w) / 2;
      n._y = n._depth * (NH + VGAP);
      maxSlot = Math.max(maxSlot, n._slot);
      maxDepth = Math.max(maxDepth, n._depth);
    });
    const W = (maxSlot + 1) * (NW + HGAP) + 80;
    const H = (maxDepth + 1) * (NH + VGAP) + 120;

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
    const apply = () => {
      vp.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
      if (onChange) onChange({ scale, tx, ty });
    };
    let hx = W / 2, hy = 60;
    function fit() {
      const r = svg.getBoundingClientRect();
      const fs = Math.min(r.width / W, r.height / H);
      scale = Math.min(1, Math.max(fs, 0.7));
      tx = r.width / 2 - hx * scale;
      ty = Math.max(20, r.height * 0.14 - hy * scale);
      apply();
    }
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
      fit,
      home(cx, cy) { hx = cx; hy = cy; },
      zoomIn: () => { const r = svg.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, 1.25, true); },
      zoomOut: () => { const r = svg.getBoundingClientRect(); zoomAt(r.width / 2, r.height / 2, 1 / 1.25, true); },
      centerOn: (cx, cy) => {
        const r = svg.getBoundingClientRect();
        tx = r.width / 2 - cx * scale;
        ty = r.height / 2 - cy * scale;
        apply();
      },
      setScale: (ns, animate) => {
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
