/* Android-phone-only guard. Blocks desktops, laptops, iPhones, iPads and Android desktop-mode. */
(function () {
  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var isMobileUA = /Mobile/i.test(ua);
  var hasTouch = (navigator.maxTouchPoints || 0) > 0;
  var smallScreen = Math.min(screen.width, screen.height) <= 900;
  if (isAndroid && isMobileUA && hasTouch && smallScreen) { window.BLOCKED = false; return; }

  window.BLOCKED = true;
  var s = "width:100dvw;height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:24px;text-align:center;background:#FFF8F4;color:#201A16;font-family:Roboto,sans-serif;";
  document.body.style.cssText = "margin:0;overflow:hidden;background:#FFF8F4";
  document.body.innerHTML =
    '<div style="' + s + '">' +
    '<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="#8B5000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>' +
    '<div style="font-size:28px;font-weight:700">Android Phones Only</div>' +
    '<div style="font-size:20px;color:#51443A">Gospel For All is built for Android phones. Open this link on your Android phone using Chrome or other browsers</div>' +
    '</div>';
})();
