/**
 * ============================================================================
 * MENÚ PRINCIPAL  →  disponible en plantillas como `navigation`
 * ----------------------------------------------------------------------------
 * Refleja la estructura de la empresa (Inicio → 3 unidades → Contacto).
 * El header y el footer se generan a partir de esta lista.
 *
 *   link   clave de ruta (ver routes.js); acepta #ancla
 *   label  clave del texto en i18n.js → labels. Si se omite, se usa `link`.
 *   children  submenú (desplegable en desktop, lista en mobile)
 *
 * El botón "Contacto" no va acá: se muestra siempre como CTA del header.
 * ============================================================================
 */
module.exports = {
  main: [
    {
      link: 'ingenieria-solar',
      children: [
        { link: 'bombeo-solar' },
        { link: 'mantenimiento' },
        { link: 'sistemas-solares' },
      ],
    },
    {
      link: 'energia-circular',
      children: [
        { link: 'energia-circular#paneles', label: 'paneles' },
        { link: 'energia-circular#iluminacion', label: 'iluminacion' },
        { link: 'energia-circular#baterias', label: 'baterias' },
      ],
    },
    {
      link: 'heliara-one',
      children: [
        { link: 'heliara-one#producto', label: 'heliara-producto' },
        { link: 'heliara-one#estado', label: 'heliara-estado' },
        { link: 'heliara-one#consultas', label: 'heliara-consultas' },
      ],
    },
    { link: 'nosotros' },
    { link: 'blog' },
  ],

  /* Columnas del footer */
  footer: [
    { title: 'units',   items: ['ingenieria-solar', 'energia-circular', 'heliara-one'] },
    { title: 'company', items: ['nosotros', 'blog', 'contacto'] },
  ],
};
