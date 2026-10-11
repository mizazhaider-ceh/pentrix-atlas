/* Atlas Journey view (v23): a static, editorial guided-path rendering of a roadmap.
   Same data as the interactive map, fixed template: hero -> category sections on a
   dotted spine with numbered dots, hand-styled connectors and milestone arrows.
   New topics slot in automatically; nothing is positioned by hand per node. */
const Journey = (() => {
  function badgeFor(t, b) {
    let badge = b || "";
    if (/\bctf\b/i.test(t)) badge = "CTF";
    else if (/lab/i.test(t)) badge = "LAB";
    else if (/project/i.test(t)) badge = "PROJECT";
    else if (/\bexam\b|cert/i.test(t)) badge = "CERT";
    return badge;
  }
  function levelFor(depth) {
    return depth === 0 ? "Overview" : depth === 1 ? "Beginner" : depth === 2 ? "Intermediate" : "Advanced";
  }

  function build(rm, ctx) {
    const esc = ctx.esc;
    const cats = rm.root.children || [];
    const prog = ctx.progress(rm); // {done, total, pct}
    let step = 0;
    const sections = cats.map((c, ci) => {
      const topics = c.children || [];
      const items = topics.map(t => {
        step++;
        const st = ctx.nodeState(rm.id, t._id);
        const dep = ctx.depFor(t.t) || {};
        const kids = (t.children || []).map(k =>
          `<button class="jsub" data-nid="${k._id}">${esc(k.t)}</button>`).join("");
        const dotInner = st === "done" ? "&#10003;" : st === "learning" ? "&#9680;" : st === "skipped" ? "&#10005;" : step;
        const badge = badgeFor(t.t, t.badge);
        const quizN = ctx.quizCount(t.t);
        const meta = [
          dep.t ? esc(dep.t) : null,
          levelFor(t._depth || 2),
          (t.res || []).length ? (t.res.length + " resources") : null,
          quizN ? quizN + " quiz" : null,
        ].filter(Boolean).join(" <i>·</i> ");
        return `<li class="jstep-row${st ? " st-" + st : ""}">
          <span class="jdot" aria-hidden="true"><i>${dotInner}</i></span>
          <button class="jstep-card" data-nid="${t._id}">
            <span class="jstep-title">${esc(t.t)}${badge ? ` <em class="jbadge">${badge}</em>` : ""}</span>
            ${t.d ? `<span class="jstep-desc">${esc(t.d)}</span>` : ""}
            ${kids ? `<span class="jsubs">${kids}</span>` : ""}
            <span class="jstep-meta">${meta}</span>
          </button>
        </li>`;
      }).join("");
      const doneIn = topics.filter(t => ctx.nodeState(rm.id, t._id) === "done").length;
      const next = cats[ci + 1];
      return `<section class="jsec">
        <div class="jsec-head">
          <span class="jsec-num" aria-hidden="true">${String(ci + 1).padStart(2, "0")}</span>
          <div class="jsec-info">
            <h4>${esc(c.t)}</h4>
            ${c.d ? `<p>${esc(c.d)}</p>` : ""}
            <div class="jsec-meta"><span class="jbar"><i style="width:${topics.length ? Math.round(doneIn / topics.length * 100) : 0}%"></i></span><span>${doneIn}/${topics.length} done</span></div>
          </div>
        </div>
        <ol class="jsteps">${items}</ol>
        ${next ? `<div class="jmile"><span class="jarrow" aria-hidden="true">&#8595;</span><span>Next up: <b>${esc(next.t)}</b></span></div>` : ""}
      </section>`;
    }).join("");

    return `<div class="journey" style="--rc:${rm.color}">
      <div class="jhero">
        <span class="jhero-eyebrow">The guided path</span>
        <h3><span class="rm-icon sm">${rm.icon}</span> ${esc(rm.root.t)}</h3>
        <p>${esc(rm.desc || "")}</p>
        <div class="jhero-prog"><span class="jbar big"><i style="width:${prog.pct}%"></i></span><span><b>${prog.done}</b> of ${prog.total} steps · ${prog.pct}%</span></div>
        <button class="jstart" data-act="continue">Continue journey <span aria-hidden="true">&#8594;</span></button>
      </div>
      ${sections}
      <div class="jfinish"><span class="jfinish-flag" aria-hidden="true">&#127937;</span><div><b>Finish line</b><p>Complete every step above and the drawer quizzes to master ${esc(rm.title)}.</p></div></div>
    </div>`;
  }

  // wire clicks inside a mounted journey element
  function mount(el, rm, ctx) {
    el.querySelectorAll("[data-nid]").forEach(b =>
      b.addEventListener("click", e => { e.stopPropagation(); ctx.onTopic(b.dataset.nid); }));
    const cont = el.querySelector('[data-act="continue"]');
    if (cont) cont.addEventListener("click", () => {
      const first = [...el.querySelectorAll(".jstep-row")].find(r => !r.classList.contains("st-done"));
      const target = first || el.querySelector(".jfinish");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("flash");
        setTimeout(() => target.classList.remove("flash"), 1600);
      }
    });
  }

  return { build, mount };
})();
