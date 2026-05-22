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
    { threshold: 0.02, rootMargin: "0px 0px -48px 0px" }, // Lowered threshold to 0.02 for robust mobile compatibility
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

// Custom scroll physics rendering engine
const customScrollTo = (
  targetY: number,
  duration: number,
  easeType: "heavy" | "snap",
  callback?: () => void
) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  let activeAnimation = true;

  // Kill scroll animation if user interacts or scrolls manually
  const cancelScroll = () => {
    activeAnimation = false;
    window.removeEventListener("wheel", cancelScroll);
    window.removeEventListener("touchmove", cancelScroll);
  };

  window.addEventListener("wheel", cancelScroll, { passive: true });
  window.addEventListener("touchmove", cancelScroll, { passive: true });

  const renderScroll = (currentTime: number) => {
    if (!activeAnimation) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    let position = 0;
    if (easeType === "heavy") {
      // Standard cubic ease-out for a smooth, luxury-deceleration glide
      position = 1 - Math.pow(1 - progress, 3);
    } else {
      // Standard cubic ease-in-out for a fluid, seamless snap back
      position = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    }

    window.scrollTo(0, startY + distance * position);

    if (progress < 1) {
      requestAnimationFrame(renderScroll);
    } else {
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchmove", cancelScroll);
      if (callback) callback();
    }
  };

  requestAnimationFrame(renderScroll);
};

// Performs a synchronized scroll peek utilizing custom physics on page load
const initScrollPeek = () => {
  // Guard rail: Cancel if user already scrolled
  if (window.scrollY > 10) return;

  setTimeout(() => {
    // Double check guard rail before starting
    if (window.scrollY > 10) return;

    // Step 1: Smooth luxury glide down by 280px (reliably triggers intersection fade-in)
    customScrollTo(280, 1500, "heavy", () => {
      
      // Step 2: Hold still for 1.2 seconds to allow visual registration
      setTimeout(() => {
        // Guard rail: If user has taken over (scrolled deeper or back up), cancel return
        if (window.scrollY > 330 || window.scrollY < 180) return;

        // Step 3: Graceful, fluid return to top fold (1.2s)
        customScrollTo(0, 1200, "snap");
      }, 1200);
    });
  }, 1500); // Calibrated delay after page load completes
};

// Unique index initialization entry point
const initIndex = () => {
  initReveal();
  initCountUp();
  initTabs();
  initScrollPeek();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIndex);
} else {
  initIndex();
}
document.addEventListener("astro:after-swap", initIndex);

export {};