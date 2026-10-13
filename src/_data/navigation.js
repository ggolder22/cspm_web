/**
 * ============================================================================
 * MENÚ PRINCIPAL  →  disponible en plantillas como `navigation`
 * ----------------------------------------------------------------------------
 * Refleja la estructura de la empresa: Inicio → 2 unidades de negocio.
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
      link: 'fotovoltaica',
      children: [
        { link: 'fotovoltaica#paneles', label: 'paneles' },
        { link: 'fotovoltaica#iluminacion', label: 'iluminacion' },
        { link: 'fotovoltaica#baterias', label: 'baterias' },
      ],
    },
    {
      link: 'termica',
      children: [
        { link: 'termica#heliara-one', label: 'heliara-one' },
        { link: 'termica#estado', label: 'heliara-estado' },
      ],
    },
    { link: 'nosotros' },
    { link: 'blog' },
  ],

  /* Columnas del footer */
  footer: [
    { title: 'units',   items: ['fotovoltaica', 'termica'] },
    { title: 'company', items: ['nosotros', 'blog', 'contacto'] },
  ],
};
