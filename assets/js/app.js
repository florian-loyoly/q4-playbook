(function () {
  "use strict";

  var C = window.PLAYBOOK_CONTENT;
  if (!C) return;

  var ICONS = [
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    '<path d="M3 11L21 3l-8 18-2-8-8-2z"/>',
    '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
    '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>',
    '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/>',
    '<path d="M4 13a8 8 0 0116 0"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/>',
    '<path d="M20 12a8 8 0 10-3 6.2"/><path d="M20 5v5h-5"/>',
    '<path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4.5c2 0 3.5 1.2 4.5 2.7 1-1.5 2.5-2.7 4.5-2.7C18 4.5 19.3 8 17.5 11.5 15 15.65 12 20 12 20z"/>',
    '<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 010 12h-2"/>'
  ];

  var LOREM = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliqua."
  ];

  var VISUAL_COUNTS = [2, 0, 1, 1];

  var journeyEl = document.getElementById("view-journey");
  var detailEl = document.getElementById("view-detail");
  var spineEl = document.getElementById("spine");
  var current = -1;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = String(s);
    return d.innerHTML;
  }

  function renderJourney() {
    if (!spineEl) return;
    var html = "";
    C.steps.forEach(function (step, i) {
      var partnerRow = step.isHouse
        ? "<span></span>"
        : '<span class="step-partner"><span class="partner-avatar">' + esc(step.partner.initial) + "</span>" + esc(step.partner.name) + "</span>";

      html +=
        '<div class="spine-row">' +
          '<div class="spine-card">' +
            '<div class="step-card" role="button" tabindex="0" aria-expanded="false" data-index="' + i + '" ' +
              'style="--step-color: var(--step-' + (i + 1) + "); animation-delay: " + i * 50 + 'ms">' +
              '<div class="step-card-top">' +
                '<span class="step-number">0' + (i + 1) + "</span>" +
                '<span class="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[i] + "</svg></span>" +
              "</div>" +
              '<h2 class="step-title">' + esc(step.title) + "</h2>" +
              '<p class="step-question">' + esc(step.question) + "</p>" +
              '<div class="step-card-bottom">' + partnerRow + '<span class="step-open-label">Open →</span></div>' +
            "</div>" +
          "</div>" +
          '<div class="spine-spacer"></div>' +
          '<span class="spine-dot" data-live="' + (i === 0 ? 1 : 0) + '"></span>' +
        "</div>";
    });
    spineEl.innerHTML = html;
  }

  function renderDetail(i) {
    var step = C.steps[i];
    var color = "var(--step-" + (i + 1) + ")";
    var tipsHtml = "";
    var tocHtml = "";

    step.tips.forEach(function (title, ti) {
      var p1 = LOREM[ti % LOREM.length];
      var p2 = LOREM[(ti + 1) % LOREM.length];
      var visualCount = VISUAL_COUNTS[ti % VISUAL_COUNTS.length];
      var visuals = "";
      for (var v = 0; v < visualCount; v++) {
        visuals += '<div class="visual-placeholder">' + esc(C.labels.visualPlaceholder) + "</div>";
      }

      tipsHtml +=
        '<div class="tip" id="tip-' + ti + '">' +
          '<div class="tip-number" style="--step-color:' + color + '">0' + (ti + 1) + "</div>" +
          '<div class="tip-body">' +
            "<h3>" + esc(title) + "</h3>" +
            "<p>" + esc(p1) + "</p>" +
            "<p>" + esc(p2) + "</p>" +
            (visualCount ? '<div class="tip-imgs">' + visuals + "</div>" : "") +
          "</div>" +
        "</div>";

      tocHtml +=
        '<a class="toc-link" href="#tip-' + ti + '" data-scroll="tip-' + ti + '">' +
          '<span class="toc-num" style="--step-color:' + color + '">0' + (ti + 1) + "</span>" +
          esc(title) +
          '<span class="toc-arrow">→</span>' +
        "</a>";
    });

    detailEl.innerHTML =
      '<div class="detail-topbar container">' +
        '<button class="back-link" data-action="back">← ' + esc(C.labels.backToJourney) + "</button>" +
      "</div>" +
      '<div class="detail-hero container">' +
        '<div class="detail-hero-grid">' +
          '<div class="detail-step-icon" style="--step-color:' + color + '"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ICONS[i] + "</svg></div>" +
          "<div>" +
            '<div class="detail-eyebrow" style="--step-color:' + color + '">' + esc(C.labels.step) + " 0" + (i + 1) + "</div>" +
            '<h2 class="detail-title">' + esc(step.title) + "</h2>" +
            '<p class="detail-byline">' + esc(C.labels.broughtToYouBy) + ' <a href="#partner" data-scroll="partner" style="--step-color:' + color + '">' + esc(step.partner.name) + "</a> ↓</p>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="container">' +
        '<div class="toc-box" style="--step-color:' + color + '">' +
          '<div class="eyebrow">' + esc(C.labels.inThisChapter) + "</div>" +
          '<p class="toc-intro">' + esc(C.tocIntro) + "</p>" +
          '<div class="toc-grid">' + tocHtml + "</div>" +
        "</div>" +
        '<div class="stat-banner" style="--step-color:' + color + '">' +
          '<div class="stat-eyebrow">' + esc(C.labels.theNumberThatMatters) + "</div>" +
          '<div class="stat-row">' +
            '<div class="stat-value">' + esc(step.stat.value) + "</div>" +
            '<div class="stat-sep"></div>' +
            "<div>" +
              '<div class="stat-label">' + esc(step.stat.label) + "</div>" +
              '<div class="stat-tag">' + esc(step.partner.name) + " · " + esc(C.labels.q4Benchmark) + "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="tips-eyebrow">' + esc(C.labels.expertTips) + "</div>" +
        tipsHtml +
        '<div class="partner-spotlight" id="partner" style="--step-color:' + color + '">' +
          '<div class="spotlight-avatar">' + esc(step.partner.initial) + "</div>" +
          '<div class="spotlight-body">' +
            '<div class="eyebrow">' + esc(C.labels.stepPartner) + "</div>" +
            '<h3 class="spotlight-name">' + esc(step.partner.name) + "</h3>" +
            '<p class="spotlight-desc">' + esc(step.partner.description) + "</p>" +
            '<a class="spotlight-cta" href="' + esc(step.partner.url) + '" target="_blank" rel="noopener">' + esc(C.labels.visit) + " " + esc(step.partner.name) + " →</a>" +
          "</div>" +
        "</div>" +
        '<div class="detail-nav">' +
          '<button class="nav-btn" data-action="back">← ' + esc(C.labels.backToJourney) + "</button>" +
          '<div style="display:flex;gap:10px;">' +
            '<button class="nav-btn" data-action="prev">← ' + esc(C.labels.previousStep) + "</button>" +
            '<button class="nav-btn" data-action="next">' + esc(C.labels.nextStep) + " →</button>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function showDetail(i) {
    current = ((i % C.steps.length) + C.steps.length) % C.steps.length;
    renderDetail(current);
    journeyEl.classList.remove("is-active");
    detailEl.classList.add("is-active");
    detailEl.style.animation = "fadeIn 350ms var(--ease) both";
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function showJourney() {
    detailEl.classList.remove("is-active");
    journeyEl.classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function setupScrollSpy() {
    var dots = document.querySelectorAll(".spine-dot");
    if (!("IntersectionObserver" in window) || !dots.length) return;
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.setAttribute("data-live", entry.isIntersecting ? "1" : "0");
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    dots.forEach(function (d) {
      obs.observe(d);
    });
  }

  function init() {
    renderJourney();
    setupScrollSpy();

    spineEl.addEventListener("click", function (e) {
      var card = e.target.closest(".step-card");
      if (card) showDetail(parseInt(card.dataset.index, 10));
    });

    spineEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        var card = e.target.closest(".step-card");
        if (card) {
          e.preventDefault();
          showDetail(parseInt(card.dataset.index, 10));
        }
      }
    });

    detailEl.addEventListener("click", function (e) {
      var back = e.target.closest('[data-action="back"]');
      var prev = e.target.closest('[data-action="prev"]');
      var next = e.target.closest('[data-action="next"]');
      var scrollLink = e.target.closest("[data-scroll]");

      if (back) {
        e.preventDefault();
        showJourney();
      } else if (prev) {
        e.preventDefault();
        showDetail(current - 1);
      } else if (next) {
        e.preventDefault();
        showDetail(current + 1);
      } else if (scrollLink) {
        e.preventDefault();
        var target = document.getElementById(scrollLink.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && detailEl.classList.contains("is-active")) showJourney();
    });

    document.querySelectorAll(".market-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var market = btn.getAttribute("data-market");
        if (market) window.location.href = "/" + market + "/";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
