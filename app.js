(function () {
  if (window.BLOCKED) return;

  /* Fill in your real contact details. Empty values show a toast instead of opening. */
  var CONTACT = {
    email: "",      // example: "you@example.com"
    phone: "",      // example: "+2348000000000"
    whatsapp: "",   // digits with country code, example: "2348000000000"
    facebook: ""    // full link, example: "https://facebook.com/yourpage"
  };

  var $ = function (id) { return document.getElementById(id); };
  var lang = "en", vi = 0, deferred = null, tt = null;

  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var saved = load("bf_lang");
  var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  lang = (saved && T[saved]) ? saved : (T[nav] ? nav : "en");

  function toast(msg) {
    var el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(tt);
    tt = setTimeout(function () { el.classList.remove("show"); }, 2400);
  }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function col(c) { return /^(#[0-9a-fA-F]{3,8}|[a-zA-Z]{3,20})$/.test(c) ? c : ""; }
  function tickItem(it) {
    var b = col(it[1]), c = col(it[2]), st = (b ? "background:" + b + ";" : "") + (c ? "color:" + c + ";" : "");
    return "<span" + (st ? ' class="tm" style="' + st + '"' : "") + ">" + esc(it[0]) + "</span><i></i>";
  }

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i]").forEach(function (e) {
      var k = e.getAttribute("data-i");
      var tv = t[k] || T.en[k];
      if (tv) e.textContent = tv;
    });
    var v = VERSES[vi];
    $("vtext").textContent = "\u201C" + v.text[lang] + "\u201D";
    $("vref").textContent = v.ref[lang];

    var items = (window.GFA_TK && GFA_TK.length) ? GFA_TK : t.ticker.map(function (m) { return [m, "", ""]; });
    var group = "";
    for (var r = 0; r < 2; r++) {
      items.forEach(function (it) { group += tickItem(it); });
    }
    $("tk").innerHTML = group + group;
    renderDev(t);
  }

  var sel = $("lang");
  Object.keys(LANGS).forEach(function (k) {
    var o = document.createElement("option");
    o.value = k; o.textContent = LANGS[k];
    sel.appendChild(o);
  });
  sel.value = lang;
  sel.onchange = function () { lang = sel.value; save("bf_lang", lang); render(); };

  $("btnNext").onclick = function () { vi = (vi + 1) % VERSES.length; render(); };

  /* Drawers, modals and Android back-button support */
  var scrim = $("scrim");
  function closeAll() {
    document.querySelectorAll(".drawer.open,.modal.open").forEach(function (m) { m.classList.remove("open"); });
    scrim.classList.remove("show");
  }
  function openM(id) {
    var rep = document.querySelector(".drawer.open,.modal.open");
    closeAll();
    $(id).classList.add("open");
    if (id.charAt(0) === "d") scrim.classList.add("show");
    history[rep ? "replaceState" : "pushState"]({ m: id }, "");
    if (id === "mDev" && window.devMeasure) devMeasure();
  }
  function closeM() { if (history.state && history.state.m) history.back(); else closeAll(); }
  window.addEventListener("popstate", closeAll);
  scrim.onclick = closeM;
  document.querySelectorAll("[data-close]").forEach(function (b) { b.onclick = closeM; });
  document.querySelectorAll("[data-go]").forEach(function (b) { b.onclick = function () { openM(b.getAttribute("data-go")); }; });
  $("btnMenuL").onclick = function () { openM("dL"); };
  $("btnMenuR").onclick = function () { openM("dR"); };
  [["btnShare", "mShare"], ["btnContact", "mContact"], ["btnDev", "mDev"], ["btnAbout", "mAbout"],
   ["btnHow", "mHow"], ["btnTerms", "mTerms"], ["btnSupport", "mSupport"]].forEach(function (p) {
    $(p[0]).onclick = function () { openM(p[1]); };
  });
  document.querySelectorAll(".drawer").forEach(function (d) {
    d.addEventListener("click", function (e) {
      var it = e.target.closest(".di");
      if (it && !it.hasAttribute("data-keep") && !document.querySelector(".modal.open")) closeM();
    });
  });

  /* Bottom navigation */
  document.querySelectorAll(".bi").forEach(function (b) {
    b.onclick = function () {
      document.querySelectorAll(".bi").forEach(function (x) { x.classList.toggle("on", x === b); });
      document.querySelectorAll(".pg").forEach(function (p) { p.classList.toggle("on", p.id === b.getAttribute("data-p")); });
    };
  });

  /* Install */
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; });
  window.addEventListener("appinstalled", function () { deferred = null; toast(T[lang].installedOk); });
  $("btnInstall").onclick = function () {
    if (window.matchMedia("(display-mode: standalone)").matches) { toast(T[lang].installed); return; }
    if (deferred) { deferred.prompt(); deferred = null; } else { toast(T[lang].noInstall); }
  };

  /* Share App: Bluetooth (Android share sheet), WhatsApp, Facebook */
  var url = location.href.split("#")[0];
  $("shBt").onclick = function () {
    if (navigator.share) {
      navigator.share({ title: "Gospel For All", text: T[lang].shareText, url: url }).catch(function () {});
    } else { toast(T[lang].shareFail); }
  };
  $("shWa").onclick = function () {
    window.open("https://wa.me/?text=" + encodeURIComponent(T[lang].shareText + " " + url), "_blank");
  };
  $("shFb").onclick = function () {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
  };

  /* Contact */
  $("cEmail").onclick = function () { CONTACT.email ? (location.href = "mailto:" + CONTACT.email) : toast(T[lang].notSet); };
  $("cFb").onclick = function () { CONTACT.facebook ? window.open(CONTACT.facebook, "_blank") : toast(T[lang].notSet); };
  $("cPhone").onclick = function () { CONTACT.phone ? (location.href = "tel:" + CONTACT.phone) : toast(T[lang].notSet); };
  $("cWa").onclick = function () { CONTACT.whatsapp ? window.open("https://wa.me/" + CONTACT.whatsapp, "_blank") : toast(T[lang].notSet); };

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  /* Themes: light (default), dark, green, blue */
  var THEMES = { light: "#FFF8F4", dark: "#17120E", green: "#F6FBF3", blue: "#F8F9FF" };
  var theme = THEMES[load("gfa_theme")] ? load("gfa_theme") : "light";
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    $("themeMeta").setAttribute("content", THEMES[theme]);
    document.querySelectorAll("[data-theme-opt]").forEach(function (b) {
      b.classList.toggle("sel", b.getAttribute("data-theme-opt") === theme);
    });
  }
  document.querySelectorAll("[data-theme-opt]").forEach(function (b) {
    b.onclick = function () { theme = b.getAttribute("data-theme-opt"); save("gfa_theme", theme); applyTheme(); };
  });
  applyTheme();

  render();

  /* Ministry stats count-up */
  document.querySelectorAll("[data-count]").forEach(function (b) {
    var end = parseInt(b.getAttribute("data-count"), 10), t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / 1800);
      b.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* Hooks for popup.js and team.js */
  window.GFA = {
    open: openM,
    close: closeM,
    t: function (k) { return (T[lang] || T.en)[k] || T.en[k]; },
    render: render,
    toast: toast
  };
})();
