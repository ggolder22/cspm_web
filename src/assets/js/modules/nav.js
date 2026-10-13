/**
 * NAVEGACIÓN
 * - Sombra en el header al hacer scroll.
 * - Menú mobile: abre/cierra el panel, se cierra con Escape o al elegir un link.
 */
export function initNav() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!header || !toggle || !nav) return;

  /* Sombra al hacer scroll */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menú mobile */
  const icon = toggle.querySelector('use');
  const label = toggle.querySelector('.sr-only');

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    icon?.setAttribute('href', open ? '#i-close' : '#i-menu');
    if (label) label.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}
