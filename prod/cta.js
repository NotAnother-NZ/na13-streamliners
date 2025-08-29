$(document).ready(function () {
  if (typeof $.easing["easeInOutQuad"] !== "function") {
    $.easing["easeInOutQuad"] = function (x, t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  }
  function animateArrow($arrow) {
    if (!$arrow.data("hovering")) return;
    $arrow.animate({ left: "300%" }, 250, "easeInOutQuad", function () {
      if (!$arrow.data("hovering")) return;
      $arrow.css({ opacity: 0, left: "-300%" });
      setTimeout(function () {
        if (!$arrow.data("hovering")) return;
        $arrow.css({ opacity: 1 });
        $arrow.animate({ left: "0%" }, 250, "easeInOutQuad", function () {
          setTimeout(function () {
            animateArrow($arrow);
          }, 750);
        });
      }, 50);
    });
  }
  $(".cta1-group").hover(
    function () {
      $(this).find(".cta1-cover").addClass("hover");
      var $arrow = $(this)
        .find('.cta1[data-cta="secondary"]')
        .find("[data-cta-arrow]");
      if ($arrow.length > 0) {
        $arrow.data("hovering", true);
        $arrow.stop(true, true).css({ left: "0%", opacity: 1 });
        animateArrow($arrow);
      }
    },
    function () {
      $(this).find(".cta1-cover").removeClass("hover");
      var $arrow = $(this)
        .find('.cta1[data-cta="secondary"]')
        .find("[data-cta-arrow]");
      if ($arrow.length > 0) {
        $arrow.data("hovering", false);
        $arrow.stop(true, true).css({ left: "0%", opacity: 1 });
      }
    }
  );
});
