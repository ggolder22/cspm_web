/**
 * ============================================================================
 * MAPA DE RUTAS  →  disponible en plantillas como `routes`
 * ----------------------------------------------------------------------------
 * Cada página tiene una clave (ej: 'fotovoltaica') y su URL por idioma.
 * En el resto del código se usa SIEMPRE la clave, nunca la URL escrita a mano:
 *     {{ 'fotovoltaica' | link(locale) }}
 *
 * - parent: página superior (para las migas de pan / breadcrumbs).
 * - Si una página no tiene versión en un idioma (ej: blog en inglés),
 *   simplemente no se define esa clave y se usa el idioma principal.
 *
 * Para agregar una página nueva:
 *   1. Sumar la ruta acá.
 *   2. Crear src/_data/pages/<clave>.js con su contenido.
 *   3. (Opcional) Sumarla al menú en src/_data/navigation.js.
 * ============================================================================
 */
module.exports = {
  'home':             { es: '/',                                en: '/en/' },

  /* Unidades de negocio */
  'fotovoltaica': { es: '/fotovoltaica/', en: '/en/photovoltaic/',  parent: 'home' },
  'termica':      { es: '/termica/',      en: '/en/solar-thermal/', parent: 'home' },

  /* Empresa */
  'nosotros':     { es: '/nosotros/',     en: '/en/about/',         parent: 'home' },
  'contacto':     { es: '/contacto/',     en: '/en/contact/',       parent: 'home' },
  'blog':         { es: '/blog/',                                    parent: 'home' },
};
