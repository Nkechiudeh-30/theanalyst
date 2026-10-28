/* script.js — renders content from data.js and handles interactions.
   You normally do NOT need to edit this file. */
(function () {
  "use strict";
  var d = portfolioData;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function list(items) { return '<ul class="bullets">' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"; }

  /* ---------- Bind simple values ---------- */
  $$("[data-bind]").forEach(function (el) { var v = d[el.dataset.bind]; if (v) el.textContent = v; });
  $$("[data-bind-href]").forEach(function (el) { var v = d[el.dataset.bindHref]; if (v) el.setAttribute("href", v); });
  $$("[data-bind-mailto]").forEach(function (el) { el.href = "mailto:" + d.email; });
  $$("[data-bind-tel]").forEach(function (el) { el.href = "tel:" + d.phone.replace(/\s+/g, ""); });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Education ---------- */
  $("#education-list").innerHTML = education.map(function (e) {
    return "<li>" + esc(e.title) + "<span>" + esc(e.place) + ", " + esc(e.years) + "</span></li>";
  }).join("");

  /* ---------- Experience ---------- */
  $("#timeline").innerHTML = experience.map(function (j, i) {
    return '<li class="job reveal' + (j.end === "Present" ? " current" : "") + '">' +
      '<div class="job-head"><div><h3>' + esc(j.role) + '</h3><p class="job-org">' + esc(j.company) + " · " + esc(j.location) + "</p></div>" +
      '<p class="job-date">' + esc(j.start) + " – " + esc(j.end) + "</p></div>" +
      '<p class="job-desc">' + esc(j.description) + "</p>" +
      "<h4>Key achievements</h4>" + list(j.achievements) +
      '<div class="impact"><strong>Business impact</strong>' + esc(j.impact) + "</div>" +
      '<details class="more"><summary>Responsibilities and tools</summary>' + list(j.responsibilities) +
      '<p class="tools"><strong>Tools and methods:</strong> ' + esc(j.tools) + "</p></details></li>";
  }).join("");

  /* ---------- Skills ---------- */
  $("#skills-grid").innerHTML = skillGroups.map(function (g, i) {
    var wide = (g.list || i === 0) ? " wide" : "";
    var body = g.list
      ? '<ul class="tool-list">' + g.items.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" // trusted HTML from data.js
      : '<ul class="chips">' + g.items.map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul>";
    return '<div class="skill-group' + wide + ' reveal"><h3>' + esc(g.title) + "</h3>" + body + "</div>";
  }).join("");

  /* ---------- Project cards ---------- */
  function chips(a) { return '<ul class="chips">' + a.map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul>"; }
  $("#project-cards").innerHTML = projects.map(function (p) {
    return '<article class="card reveal">' +
      '<div class="card-img"><img src="' + esc(p.image) + '" alt="' + esc(p.alt) + '" loading="lazy" width="1200" height="700"></div>' +
      '<div class="card-body"><p class="card-cat">' + esc(p.category) + "</p><h3>" + esc(p.title) + "</h3><p>" + esc(p.short) + "</p>" +
      '<div class="card-meta"><h4>Tools</h4>' + chips(p.tools) + "</div>" +
      '<div class="card-meta"><h4>Skills demonstrated</h4>' + chips(p.skills) + "</div>" +
      '<button class="btn btn-outline" type="button" data-case="' + esc(p.id) + '">View case study</button></div></article>';
  }).join("");

  /* ---------- Case study modal ---------- */
  var modal = $("#case-modal"), body = $("#case-body"), lastBtn = null;
  function step(title, html, cls) { return '<section class="cs-step ' + (cls || "") + '"><h3>' + title + "</h3>" + html + "</section>"; }
  function openCase(id, btn) {
    var p = projects.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    lastBtn = btn;
    var links = "";
    if (p.github) links += '<a class="btn btn-outline" href="' + esc(p.github) + '" target="_blank" rel="noopener">View on GitHub</a>';
    if (p.dashboard) links += '<a class="btn btn-outline" href="' + esc(p.dashboard) + '" target="_blank" rel="noopener">Open dashboard</a>';
    body.innerHTML =
      '<p class="card-cat">' + esc(p.category) + '</p><h2 id="case-title" style="margin-bottom:.3em">' + esc(p.title) + "</h2>" +
      '<img class="cs-img" src="' + esc(p.image) + '" alt="' + esc(p.alt) + '">' +
      '<dl class="cs-meta"><div><dt>My role</dt><dd>' + esc(p.role) + "</dd></div>" +
      "<div><dt>Tools</dt><dd>" + esc(p.tools.join(", ")) + "</dd></div>" +
      "<div><dt>Data source</dt><dd>" + esc(p.dataSource) + "</dd></div></dl>" +
      step("Business problem", "<p>" + esc(p.problem) + "</p>") +
      step("Objective", "<p>" + esc(p.objective) + "</p>") +
      step("Approach", list(p.approach)) +
      step("Analysis", list(p.analysis)) +
      step("Findings", list(p.findings)) +
      step("Recommendations", list(p.recommendations)) +
      step("Outcome", "<p>" + esc(p.outcome) + "</p>") +
      step("Business impact", "<p>" + esc(p.impact) + "</p>", "impact-step") +
      (links ? '<div class="cs-links">' + links + "</div>" : "");
    modal.scrollTop = 0;
    if (modal.showModal) modal.showModal(); else modal.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function closeCase() {
    if (modal.close) modal.close(); else modal.removeAttribute("open");
  }
  modal.addEventListener("close", function () { document.body.style.overflow = ""; if (lastBtn) lastBtn.focus(); });
  $("#modal-close").addEventListener("click", closeCase);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeCase(); }); // click on backdrop
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-case]");
    if (b) openCase(b.dataset.case, b);
  });

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement, tbtn = $("#theme-toggle");
  function syncTheme() {
    var dark = root.getAttribute("data-theme") === "dark";
    tbtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  syncTheme();
  tbtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncTheme();
  });

  /* ---------- Mobile menu ---------- */
  var mbtn = $("#menu-btn"), links = $("#nav-links");
  function setMenu(open) {
    links.classList.toggle("open", open);
    mbtn.setAttribute("aria-expanded", open);
    mbtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  mbtn.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
  links.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Active nav link + reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    var navAs = $$('.nav-links a[href^="#"]');
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) navAs.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { secObs.observe(s); });

    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); revObs.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    $$(".reveal").forEach(function (el) { revObs.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Contact form (Formspree) ---------- */
  var form = $("#contact-form"), status = $("#form-status"), fbtn = $("#form-btn");
  if (d.formspreeEndpoint) form.setAttribute("action", d.formspreeEndpoint);
  var rules = {
    name: function (v) { return v.trim().length > 0; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    _subject: function (v) { return v.trim().length > 0; },
    message: function (v) { return v.trim().length > 0; }
  };
  var errIds = { name: "e-name", email: "e-email", _subject: "e-subject", message: "e-message" };
  function check(name) {
    var input = form.elements[name], ok = rules[name](input.value), err = document.getElementById(errIds[name]);
    input.closest(".field").classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", !ok);
    if (!ok) input.setAttribute("aria-describedby", errIds[name]); else input.removeAttribute("aria-describedby");
    err.hidden = ok;
    return ok;
  }
  Object.keys(rules).forEach(function (n) { form.elements[n].addEventListener("blur", function () { check(n); }); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.className = "form-status"; status.textContent = "";
    var firstBad = null;
    Object.keys(rules).forEach(function (n) { if (!check(n) && !firstBad) firstBad = form.elements[n]; });
    if (firstBad) { firstBad.focus(); return; }
    fbtn.disabled = true; fbtn.textContent = "Sending…";
    fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (r) {
        if (r.ok) {
          form.reset();
          status.className = "form-status ok";
          status.textContent = "Thank you. Your message has been sent and I'll reply as soon as I can.";
        } else { throw new Error("bad response"); }
      })
      .catch(function () {
        status.className = "form-status error";
        status.textContent = "Your message could not be sent. Check your connection and try again, or email " + d.email + " directly.";
      })
      .finally(function () { fbtn.disabled = false; fbtn.textContent = "Send message"; });
  });
})();
