$(document).ready(function () {
  function updateSliderIndex() {
    var $activeDot = $(".w-slider-dot.w-active");
    var activeIndex = $(".w-slider-dot").index($activeDot) + 1;
    var total = $(".w-slider-dot").length;
    $("#slider-index").text(activeIndex + "/" + total);
  }
  var target = document.querySelector(".w-slider-nav");
  if (target) {
    var observer = new MutationObserver(function (mutations) {
      updateSliderIndex();
    });
    observer.observe(target, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });
  }
  $(".slider-button, .w-slider-dot").on("click", function () {
    updateSliderIndex();
  });
  $("#slide-next").on("click", function (e) {
    e.preventDefault();
    $("#slide-next-proxy").click();
  });
  $("#slide-prev").on("click", function (e) {
    e.preventDefault();
    $("#slide-prev-proxy").click();
  });
  updateSliderIndex();
});
