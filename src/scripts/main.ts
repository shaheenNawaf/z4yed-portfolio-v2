const setupModals = () => {
  const modalTriggers = document.querySelectorAll('[data-modal-id]');
  const dialogs = document.querySelectorAll('dialog') as NodeListOf<HTMLDialogElement>;

  const stopVideo = (modal: HTMLDialogElement) => {
    const iframe = modal.querySelector('iframe');
    if (iframe) {
      const currentSrc = iframe.src;
      iframe.src = '';
      iframe.src = currentSrc;
    }
  };

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

const setupGalleryNav = () => {
  const navButtons = document.querySelectorAll('[data-nav-to]');
  
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-nav-to');
      const currentDialog = btn.closest('dialog');
      
      if (currentDialog) {
        currentDialog.close();
      }

      const nextTrigger = document.querySelector(`[data-modal-id="${targetId}"]`) as HTMLElement;
      if (nextTrigger) {
        nextTrigger.click();
      }
    });
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    const openDialog = document.querySelector('dialog[open]');
    if (!openDialog) return;

    if (e.key === 'ArrowRight') {
      const nextBtn = openDialog.querySelector('[data-nav-dir="next"]') as HTMLElement;
      nextBtn?.click();
    } else if (e.key === 'ArrowLeft') {
      const prevBtn = openDialog.querySelector('[data-nav-dir="prev"]') as HTMLElement;
      prevBtn?.click();
    } else if (e.key === 'Escape') {
        const closeBtn = openDialog.querySelector('.close-modal') as HTMLElement;
        closeBtn?.click();
    }
  };

  window.removeEventListener('keydown', handleKeyDown);
  window.addEventListener('keydown', handleKeyDown);
};

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
    
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
  });
};

const init = () => {
  setupModals();
  setupStickyBar();
  setupGalleryNav();
  setupTheme();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

document.addEventListener('astro:after-swap', init);