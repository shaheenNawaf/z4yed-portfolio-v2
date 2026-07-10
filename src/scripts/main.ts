/*
 * Global Scripts: Manages modal dialogues, theme toggle syncing, 
 * image-security, and the floating sticky CTA banner.
 */

// Handles showing and hiding modals, as well as pausing running media on close
const setupModals = () => {
  const modalTriggers = document.querySelectorAll('[data-modal-id]');
  const dialogs = document.querySelectorAll('dialog') as NodeListOf<HTMLDialogElement>;

  // Halts video playbacks to avoid background audio when closing a modal
  const stopVideo = (modal: HTMLDialogElement) => {
    const iframe = modal.querySelector('iframe');
    if (iframe) iframe.src = '';

    const video = modal.querySelector('video');
    if (video) { video.pause(); video.currentTime = 0; }
  };

  // Registers click events to open specific dialog elements
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-id');
      if (!modalId) return;
      const dialog = document.getElementById(modalId) as HTMLDialogElement | null;
       if (dialog) {
         dialog.showModal();
         document.body.style.overflow = 'hidden';
       }
    });
  });

  // Registers handlers for closing active dialogs via close buttons
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dialog = btn.closest('dialog');
      if (dialog) {
        stopVideo(dialog);
        (dialog as HTMLDialogElement).close();
      }
    });
  });

  // Closes the modal dialogue when clicking outside its bounds or pressing Escape
  dialogs.forEach(dialog => {
    dialog.addEventListener('close', () => {
      document.body.style.overflow = 'auto';
    });

    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        stopVideo(dialog);
        dialog.close();
      }
    });
  });
};

// Displays or hides the bottom floating contact CTA based on scroll position
const setupStickyBar = () => {
  const stickyBar = document.getElementById('sticky-cta');
  const heroTrigger = document.getElementById('hero-trigger');
  const siteHeader = document.getElementById('site-header');

  if (!stickyBar || !heroTrigger) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyBar.classList.remove('translate-y-40');
        stickyBar.classList.add('translate-y-0');
        siteHeader?.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
      } else {
        stickyBar.classList.add('translate-y-40');
        stickyBar.classList.remove('translate-y-0');
        siteHeader?.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      }
    });
  }, { threshold: 0 });

  observer.observe(heroTrigger);
};

// Handles clicking theme buttons and setting persistent storage changes across views
const setupTheme = () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const newToggle = toggle.cloneNode(true) as HTMLButtonElement;
  toggle.parentNode?.replaceChild(newToggle, toggle);

  newToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.classList.toggle('light');
    
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
};

// Prevents right-click context menu and drag downloads on site-wide protected image elements
const setupImageProtection = () => {
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('.protected-image')) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('.protected-image')) {
      e.preventDefault();
    }
  });
};

// Initialization runner
const initMain = () => {
  setupModals();
  setupStickyBar();
  setupTheme();
  setupImageProtection(); // Invokes global image security
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
} else {
    initMain();
}

document.addEventListener('astro:after-swap', initMain);

export {};