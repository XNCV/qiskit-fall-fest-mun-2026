/**
 * Qiskit Fall Fest @ MUN — site behaviour
 * No external dependencies. Reads content from js/config.js.
 */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  setupNav();
  setupRegisterButtons();
  setupFaq();
  setupScrollReveal();
  setupBackToTop();
  setupYear();
  drawCircuitBackground();
  setupCarousel();
});

/* ---------------------------------------------------------------- */
/* Fill text content from SITE_CONFIG                                */
/* ---------------------------------------------------------------- */
function applyConfig() {
  const c = SITE_CONFIG;

  document.title = `${c.eventName} ${c.eventYear} — ${c.orgShort}`;

  setText("[data-cfg='eventName']", c.eventName);
  setText("[data-cfg='eventYear']", c.eventYear);
  setText("[data-cfg='orgName']", c.orgName);
  setText("[data-cfg='orgShort']", c.orgShort);
  setText("[data-cfg='tagline']", c.tagline);
  setText("[data-cfg='dateText']", c.dateText);
  setText("[data-cfg='venueName']", c.venueName);
  setText("[data-cfg='venueAddress']", c.venueAddress);

  const emailLinks = document.querySelectorAll("[data-cfg='contactEmail']");
  emailLinks.forEach((el) => {
    el.textContent = c.contactEmail;
    if (el.tagName === "A") el.href = `mailto:${c.contactEmail}`;
  });

  const mapFrame = document.querySelector("[data-cfg='mapEmbedSrc']");
  if (mapFrame) mapFrame.src = c.mapEmbedSrc;

  const globalLink = document.querySelector("[data-cfg='qiskitFallFestGlobalUrl']");
  if (globalLink) globalLink.href = c.qiskitFallFestGlobalUrl;

  // Social links — hide any icon whose URL wasn't filled in
  Object.entries(c.social).forEach(([key, url]) => {
    const el = document.querySelector(`[data-social='${key}']`);
    if (!el) return;
    if (url) {
      el.href = url;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  // FAQ
  const faqList = document.querySelector("#faq-list");
  if (faqList && Array.isArray(c.faq)) {
    faqList.innerHTML = c.faq
      .map(
        (item, i) => `
      <div class="faq-item" data-reveal>
        <button class="faq-question" id="faq-q-${i}" aria-expanded="false" aria-controls="faq-a-${i}">
          <span>${escapeHtml(item.q)}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}" hidden>
          <p>${escapeHtml(item.a)}</p>
        </div>
      </div>`
      )
      .join("");
  }
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------------- */
/* Nav: mobile toggle + active link highlighting + scrolled shadow   */
/* ---------------------------------------------------------------- */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const header = document.querySelector(".site-header");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  });

  // Active section highlighting
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`
              );
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }
}

/* ---------------------------------------------------------------- */
/* Registration buttons                                              */
/* ---------------------------------------------------------------- */
function setupRegisterButtons() {
  const url = (SITE_CONFIG.registrationUrl || "").trim();
  const buttons = document.querySelectorAll("[data-register-btn]");

  buttons.forEach((btn) => {
    if (url) {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.classList.remove("is-disabled");
      btn.removeAttribute("aria-disabled");
      btn.querySelector(".btn-label").textContent = "Register Now";
    } else {
      btn.removeAttribute("href");
      btn.classList.add("is-disabled");
      btn.setAttribute("aria-disabled", "true");
      btn.querySelector(".btn-label").textContent = "Registration Opening Soon";
      btn.addEventListener("click", (e) => e.preventDefault());
    }
  });
}

/* ---------------------------------------------------------------- */
/* FAQ accordion                                                     */
/* ---------------------------------------------------------------- */
function setupFaq() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(btn.getAttribute("aria-controls"));

    // close all others (single-open accordion)
    document.querySelectorAll(".faq-question").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      const a = document.getElementById(b.getAttribute("aria-controls"));
      if (a) a.hidden = true;
      b.parentElement.classList.remove("open");
    });

    if (!expanded) {
      btn.setAttribute("aria-expanded", "true");
      if (answer) answer.hidden = false;
      btn.parentElement.classList.add("open");
    }
  });
}

/* ---------------------------------------------------------------- */
/* Scroll reveal animation                                           */
/* ---------------------------------------------------------------- */
function setupScrollReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("revealed"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------------- */
/* Back to top                                                       */
/* ---------------------------------------------------------------- */
function setupBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupYear() {
  const el = document.querySelector("[data-cfg='year']");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------- */
/* Photo carousel — autoplays every 5s, or navigate manually         */
/* ---------------------------------------------------------------- */
function setupCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dotsWrap = carousel.querySelector(".carousel-dots");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  if (!slides.length || !dotsWrap) return;

  const AUTOPLAY_MS = 5000;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = Math.max(0, slides.findIndex((s) => s.classList.contains("active")));
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => {
      goTo(i);
      restart();
    });
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
  }
  function next() {
    goTo(index + 1);
  }
  function prev() {
    goTo(index - 1);
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    stop();
    timer = setInterval(next, AUTOPLAY_MS);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restart() {
    stop();
    start();
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { next(); restart(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); restart(); });

  // Pause on hover/focus so manual browsing isn't interrupted
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);

  render();
  start();
}

/* ---------------------------------------------------------------- */
/* Decorative animated "quantum circuit" canvas background (hero)    */
/* ---------------------------------------------------------------- */
function drawCircuitBackground() {
  const canvas = document.getElementById("circuit-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width, height, nodes;
  const NODE_COUNT_DIVISOR = 14000;

  function resize() {
    width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    const count = Math.max(18, Math.floor((width * height) / NODE_COUNT_DIVISOR / (window.devicePixelRatio * window.devicePixelRatio)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.15 * window.devicePixelRatio,
      r: (Math.random() * 1.5 + 1) * window.devicePixelRatio
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    const maxDist = 150 * window.devicePixelRatio;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!prefersReducedMotion) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const o = nodes[j];
        const dx = n.x - o.x;
        const dy = n.y - o.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(105, 41, 196, ${0.18 * (1 - dist / maxDist)})`;
          ctx.lineWidth = window.devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(o.x, o.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.fillStyle = "rgba(15, 98, 254, 0.6)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReducedMotion) requestAnimationFrame(step);
  }

  resize();
  step();
  window.addEventListener("resize", resize);
}
