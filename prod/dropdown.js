$(document).ready(function () {
  function initDropdowns() {
    var allLoaded = true;
    $(".dropdown-wrapper").each(function () {
      if ($(this).outerHeight(true) === 0) {
        allLoaded = false;
      }
    });
    if (!allLoaded) {
      setTimeout(initDropdowns, 100);
      return;
    }
    $(".dropdown-wrapper").each(function () {
      var $wrapper = $(this);
      var fullHeight = $wrapper.outerHeight(true);
      var triggerHeight = $wrapper.find(".dropdown-trigger").outerHeight(true);
      $wrapper.data("fullHeight", fullHeight);
      $wrapper.data("triggerHeight", triggerHeight);
      $wrapper.height(triggerHeight);
    });
    // Delay opening the default dropdown(s) until initialization is fully complete.
    setTimeout(function () {
      $('.dropdown-wrapper[data-dropdown="open"]')
        .find(".dropdown-trigger")
        .click();
    }, 50);
  }
  initDropdowns();
  $(".dropdown-trigger").on("click", function () {
    var $wrapper = $(this).closest(".dropdown-wrapper");
    var fullHeight = $wrapper.data("fullHeight");
    var triggerHeight = $wrapper.data("triggerHeight");
    var $icon = $(this).find(".dropdown-icon");
    $(".dropdown-wrapper")
      .not($wrapper)
      .each(function () {
        var $otherWrapper = $(this);
        var otherTriggerHeight = $otherWrapper.data("triggerHeight");
        if ($otherWrapper.height() > otherTriggerHeight) {
          $otherWrapper.animate({ height: otherTriggerHeight });
          $otherWrapper.removeClass("lilac").addClass("almond");
          $otherWrapper.find(".dropdown-icon").removeClass("open");
        }
      });
    if ($wrapper.height() <= triggerHeight) {
      $wrapper.animate({ height: fullHeight });
      $wrapper.removeClass("almond").addClass("lilac");
      $icon.addClass("open");
    } else {
      $wrapper.animate({ height: triggerHeight });
      $wrapper.removeClass("lilac").addClass("almond");
      $icon.removeClass("open");
    }
  });
});
