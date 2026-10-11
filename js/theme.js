/* Atlas theme engine (v29): 8 themes, persisted, View-Transitioned. */
(function () {
  "use strict";
  var THEMES = [
    { id: "obsidian",  name: "Obsidian",  sub: "glass · lime",   sw1: "#ccff00", sw2: "#0a0a0a" },
    { id: "cyberpunk", name: "Cyberpunk", sub: "angular neon",   sw1: "#ff2ea6", sw2: "#7df9ff" },
    { id: "matrix",    name: "Matrix",    sub: "terminal",       sw1: "#00ff66", sw2: "#020a04" },
    { id: "crimson",   name: "Crimson",   sub: "serif menace",   sw1: "#ff3b4e", sw2: "#0e0507" },
    { id: "abyss",     name: "Abyss",     sub: "deep calm",      sw1: "#38bdf8", sw2: "#030a14" },
    { id: "sunset",    name: "Sunset",    sub: "golden hour",    sw1: "#fb923c", sw2: "#120a06" },
    { id: "arctic",    name: "Arctic",    sub: "swiss minimal",  sw1: "#4f46e5", sw2: "#eef1f7" },
    { id: "paper",     name: "Paper",     sub: "editorial",      sw1: "#c2410c", sw2: "#faf7f0" }
  ];
  var KEY = "atlas.theme";

  function current() {
    try { return localStorage.getItem(KEY) || "obsidian"; } catch (e) { return "obsidian"; }
  }
  function apply(id, animate) {
    var doIt = function () {
      if (id === "obsidian") document.documentElement.removeAttribute("data-theme");
      else document.documentElement.setAttribute("data-theme", id);
      try { localStorage.setItem(KEY, id); } catch (e) {}
      var t = THEMES.find(function (x) { return x.id === id; }) || THEMES[0];
      var nm = document.getElementById("themeName");
      if (nm) nm.textContent = t.name;
      document.querySelectorAll(".theme-opt").forEach(function (b) {
        b.classList.toggle("on", b.dataset.theme === id);
      });
    };
    if (animate !== false && document.startViewTransition) document.startViewTransition(doIt);
    else doIt();
  }
  function buildPop() {
    var pop = document.getElementById("themePop");
    if (!pop) return;
    pop.innerHTML = "<h4>Theme</h4>" + THEMES.map(function (t) {
      return '<button class="theme-opt" data-theme="' + t.id + '">' +
        '<span class="sw" style="--sw1:' + t.sw1 + ';--sw2:' + t.sw2 + '"></span>' +
        t.name + "<small>" + t.sub + "</small></button>";
    }).join("");
    pop.querySelectorAll(".theme-opt").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.theme); hide(); });
    });
    apply(current(), false);
  }
  function hide() { var p = document.getElementById("themePop"); if (p) p.hidden = true; }
  document.addEventListener("DOMContentLoaded", function () {
    buildPop();
    var btn = document.getElementById("themeBtn");
    if (btn) btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var p = document.getElementById("themePop");
      if (p) p.hidden = !p.hidden;
    });
    document.addEventListener("click", function (e) {
      var p = document.getElementById("themePop");
      if (p && !p.hidden && !p.contains(e.target)) hide();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
  });
  // expose for app.js navigation transitions
  window.AtlasTheme = { apply: apply, current: current, transition: function (fn) {
    if (document.startViewTransition) document.startViewTransition(fn); else fn();
  }};
})();
