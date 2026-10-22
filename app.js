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

    var group = "";
    for (var r = 0; r < 2; r++) {
      t.ticker.forEach(function (s) { group += "<span>" + s + "<i></i></span>"; });
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

  /* Modals with Android back-button support */
  function openM(id) {
    $(id).classList.add("open");
    history.pushState({ m: id }, "");
    if (id === "mDev" && window.devMeasure) devMeasure();
  }
  function closeAll() { document.querySelectorAll(".modal.open").forEach(function (m) { m.classList.remove("open"); }); }
  window.addEventListener("popstate", closeAll);
  document.querySelectorAll("[data-close]").forEach(function (b) {
    b.onclick = function () { if (history.state && history.state.m) history.back(); else closeAll(); };
  });
  $("btnShare").onclick = function () { openM("mShare"); };
  $("btnContact").onclick = function () { openM("mContact"); };
  $("btnDev").onclick = function () { openM("mDev"); };

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

  /* Theme: light by default, dark toggle */
  var theme = load("gfa_theme") === "dark" ? "dark" : "light";
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    $("themeMeta").setAttribute("content", theme === "dark" ? "#17120E" : "#FFF8F4");
    $("themeIcon").setAttribute("href", theme === "dark" ? "#i-sun" : "#i-moon");
  }
  $("btnTheme").onclick = function () { theme = theme === "dark" ? "light" : "dark"; save("gfa_theme", theme); applyTheme(); };
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
    close: function () { if (history.state && history.state.m) history.back(); else closeAll(); },
    render: render,
    toast: toast
  };
})();
