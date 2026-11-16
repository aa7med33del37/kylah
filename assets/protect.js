/* =====================================================================
   كيلة | content deterrents
   Works on the Vercel preview (already linked) and in Salla:
   Store design > Custom JS. Stops casual copying only: right-click,
   dragging or long-pressing images, selecting and copying text,
   Ctrl/Cmd + S, U, P, C, A, and printing. Search and other fields
   keep working normally.
   ===================================================================== */
(function () {
  var inField = function (e) {
    return e.target && e.target.closest && e.target.closest("input, textarea, select, [contenteditable]");
  };
  ["contextmenu", "dragstart", "selectstart", "copy", "cut"].forEach(function (type) {
    document.addEventListener(type, function (e) { if (!inField(e)) e.preventDefault(); }, true);
  });
  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ["s", "u", "p", "c", "a"].indexOf(k) > -1 && !inField(e)) e.preventDefault();
  }, true);
  var css = document.createElement("style");
  css.textContent =
    "body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}" +
    "input,textarea,select,[contenteditable]{-webkit-user-select:text;user-select:text}" +
    "img{-webkit-user-drag:none;pointer-events:none}" +
    "@media print{body{display:none !important}}";
  (document.head || document.documentElement).appendChild(css);
})();
