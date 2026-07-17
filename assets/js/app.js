(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline-item");

  items.forEach(function (item) {
    var card = item.querySelector(".step-card");
    if (!card) return;

    card.addEventListener("click", function () {
      var wasOpen = item.classList.contains("is-open");

      items.forEach(function (other) {
        other.classList.remove("is-open");
        var btn = other.querySelector(".step-card");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        item.classList.add("is-open");
        card.setAttribute("aria-expanded", "true");

        window.requestAnimationFrame(function () {
          item.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    });
  });
})();
