/* quiz.js: placeholder page until the quiz is built. */
(function () {
  var p = document.getElementById("pQuiz");
  if (!p || window.BLOCKED || !window.GFA) return;
  p.innerHTML = '<div class="qs"><svg class="ic xl"><use href="#i-quiz"/></svg><h2 data-i="navQuiz"></h2><p data-i="soon"></p></div>';
  GFA.render();
})();
