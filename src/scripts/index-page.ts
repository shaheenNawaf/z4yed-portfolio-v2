/*
 * Coordinates home page interactions including structural reveal
 * animations, stats counter ticking, active panels, and native scroll peeking.
 */

// Employs an IntersectionObserver to show page sections smoothly as they scroll in
const initReveal = () => {
  const sections = document.querySelectorAll(".reveal-section");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
  );
  sections.forEach((el) => io.observe(el));
};

// Triggers count-up animations for raw static values when they cross into view
const initCountUp = () => {
  const els = document.querySelectorAll<HTMLElement>(".stat-number");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const raw = el.dataset.value ?? "";
        const match = raw.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
        if (!match) return;
        const [, prefix, numStr, suffix] = match;
        const target = parseFloat(numStr);
        const start = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${prefix}${Math.round(eased * target).toLocaleString()}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
    { threshold: 0.5 },
  );
  els.forEach((el) => io.observe(el));
};

// Standardizes tab shifting behavior between Software and Marketing lists
const initTabs = () => {
  const tabs = document.querySelectorAll<HTMLButtonElement>(".project-tab");
  const panelMarketing = document.getElementById("panel-marketing");
  const panelSoftware = document.getElementById("panel-software");

  if (!panelMarketing || !panelSoftware) return;

  const setTab = (active: "marketing" | "software") => {
    tabs.forEach((t) => {
      if (t.dataset.tab === active) {
        t.dataset.active = "true";
      } else {
        delete t.dataset.active;
      }
    });
    panelMarketing.classList.toggle("hidden", active !== "marketing");
    panelSoftware.classList.toggle("hidden", active !== "software");
  };

  tabs.forEach((t) =>
    t.addEventListener("click", () =>
      setTab(t.dataset.tab as "marketing" | "software"),
    ),
  );
};

// Performs a gentle, native scroll down and up on page load to reveal the career section
const initScrollPeek = () => {
  // Guard rail: If the recruiter manually scrolls immediately, cancel the automatic peek
  if (window.scrollY > 10) return;

  setTimeout(() => {
    // Double check guard rail before starting scroll down
    if (window.scrollY > 10) return;

    // Smoothly scroll down by 400px to fully expose the timeline
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });

    // Wait for scroll down to settle, then smoothly scroll back to top
    setTimeout(() => {
      // Guard rail: If the user took over and scrolled further, do not pull them back up
      if (window.scrollY > 500 || window.scrollY < 200) return;

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1200); // Duration to hold view of the career section
  }, 500); // Brief initial load delay
};

// Unique index initialization entry point
const initIndex = () => {
  initReveal();
  initCountUp();
  initTabs();
  initScrollPeek(); // Invokes the native scroll peek on load
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIndex);
} else {
  initIndex();
}
document.addEventListener("astro:after-swap", initIndex);

export {};