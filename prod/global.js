history.scrollRestoration = "manual";
$(document).ready(function () {
  $(window).scrollTop(0);
});
$(document).ready(function () {
  var target = document.querySelector(".no-touch");
  if (!target) return;
  function updateScrollLock() {
    var display = window.getComputedStyle(target).display;
    console.log("Display:", display);
    if (display === "block") {
      $("html, body").css("overflow", "hidden");
    } else {
      $("html, body").css("overflow", "");
    }
  }
  updateScrollLock();
  var observer = new MutationObserver(function () {
    updateScrollLock();
  });
  observer.observe(target, {
    attributes: true,
    attributeFilter: ["style", "class"],
  });
});
$(document).ready(function () {
  $("#nav-open").on("click", function () {
    $("html, body").css("overflow", "hidden");
  });
  $("#nav-close").on("click", function () {
    $("html, body").css("overflow", "");
  });
});
