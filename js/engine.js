/* Atlas engine: tidy tree layout + SVG renderer + pan/zoom */
const Engine = (() => {
  const NW = 232, NH = 88, HGAP = 46, VGAP = 96;

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

  function render(svg, roadmap, progress, onNode) {
    const NS = "http://www.w3.org/2000/svg";
    const XNS = "http://www.w3.org/1999/xhtml";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const nodes = flatten(roadmap.root);
    layout([roadmap.root]);

    let maxSlot = 0, maxDepth = 0;
    nodes.forEach(n => {
      n._x = n._slot * (NW + HGAP);
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
        const x1 = n._x + NW / 2 + 40, y1 = n._y + NH + 40;
        const x2 = c._x + NW / 2 + 40, y2 = c._y + 40;
        const my = (y1 + y2) / 2;
        const p = document.createElementNS(NS, "path");
        p.setAttribute("d", `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`);
        p.setAttribute("class", "edge");
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
      fo.setAttribute("width", NW);
      fo.setAttribute("height", NH);
      const div = document.createElementNS(XNS, "div");
      div.setAttribute("class", "anode" + (done ? " done" : ""));
      div.setAttribute("data-nid", n._id);
      div.style.setProperty("--rc", roadmap.color);
      const res = (n.res || []).length;
      div.innerHTML = `<span class="a-dot"></span>
        <span class="a-t">${escapeHtml(n.t)}</span>
        <span class="a-meta">${done ? "\u2713 done" : (kids ? kids + " steps" : (res ? res + " resources" : ""))}</span>`;
      div.addEventListener("click", () => onNode(n._id));
      fo.appendChild(div);
      ng.appendChild(fo);
      n._el = div;
    });
    vp.appendChild(ng);

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    return { nodes, edges, W, H, vp, byId: Object.fromEntries(nodes.map(n => [n._id, n])) };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  // pan + zoom controller
  function panZoom(svg, vp, W, H) {
    let scale = 1, tx = 0, ty = 0;
    const apply = () => vp.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
    function fit() {
      const r = svg.getBoundingClientRect();
      scale = Math.min(r.width / W, r.height / H, 1) * 0.96;
      tx = (r.width - W * scale) / 2;
      ty = 24;
      apply();
    }
    let drag = null;
    svg.addEventListener("pointerdown", e => {
      drag = { x: e.clientX, y: e.clientY, tx, ty };
      svg.setPointerCapture(e.pointerId);
      svg.classList.add("dragging");
    });
    svg.addEventListener("pointermove", e => {
      if (!drag) return;
      tx = drag.tx + (e.clientX - drag.x);
      ty = drag.ty + (e.clientY - drag.y);
      apply();
    });
    const end = () => { drag = null; svg.classList.remove("dragging"); };
    svg.addEventListener("pointerup", end);
    svg.addEventListener("pointercancel", end);
    svg.addEventListener("wheel", e => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const ns = Math.min(2.2, Math.max(0.25, scale * (e.deltaY < 0 ? 1.12 : 0.89)));
      tx = mx - (mx - tx) * (ns / scale);
      ty = my - (my - ty) * (ns / scale);
      scale = ns;
      apply();
    }, { passive: false });
    return {
      fit,
      zoomIn: () => { scale = Math.min(2.2, scale * 1.25); apply(); },
      zoomOut: () => { scale = Math.max(0.25, scale / 1.25); apply(); },
      get scale() { return scale; }
    };
  }

  return { render, panZoom, escapeHtml, NW, NH };
})();
