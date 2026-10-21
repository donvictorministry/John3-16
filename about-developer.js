/* Developer modal data.
   To use your real photo: open index.html, find <img id="devPhoto"> and replace its src with your photo URL,
   or set DEV_PHOTO_URL below (example: "me.jpg" placed in the same folder). */
var DEV_PHOTO_URL = "";
var DEV_NAME = "Chris Johnson, PhD";

function renderDev() {
  var n = document.getElementById("devName");
  if (n) n.textContent = DEV_NAME;
  var p = document.getElementById("devPhoto");
  if (p && DEV_PHOTO_URL) p.src = DEV_PHOTO_URL;
}
