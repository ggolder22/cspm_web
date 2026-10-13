/**
 * ANIMACIÓN DE APARICIÓN
 * Agrega .is-visible a los elementos .reveal cuando entran en pantalla.
 * El estilo y el escalonado están en css/base/3-layout.css.
 */
export function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  /* Navegadores sin soporte: mostrar todo directamente */
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // se anima una sola vez
    });
  }, { threshold: 0.12 });

  items.forEach((el) => observer.observe(el));
}
