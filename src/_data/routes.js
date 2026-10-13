/**
 * ============================================================================
 * MAPA DE RUTAS  →  disponible en plantillas como `routes`
 * ----------------------------------------------------------------------------
 * Cada página tiene una clave (ej: 'bombeo-solar') y su URL por idioma.
 * En el resto del código se usa SIEMPRE la clave, nunca la URL escrita a mano:
 *     {{ 'bombeo-solar' | link(locale) }}
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

  /* Unidad 1 · Ingeniería Solar */
  'ingenieria-solar': { es: '/ingenieria-solar/',                en: '/en/solar-engineering/',                parent: 'home' },
  'bombeo-solar':     { es: '/ingenieria-solar/bombeo-solar/',   en: '/en/solar-engineering/solar-pumping/',  parent: 'ingenieria-solar' },
  'mantenimiento':    { es: '/ingenieria-solar/mantenimiento/',  en: '/en/solar-engineering/maintenance/',    parent: 'ingenieria-solar' },
  'sistemas-solares': { es: '/ingenieria-solar/sistemas-solares/', en: '/en/solar-engineering/solar-systems/', parent: 'ingenieria-solar' },

  /* Unidad 2 · Energía Circular */
  'energia-circular': { es: '/energia-circular/',                en: '/en/circular-energy/',                  parent: 'home' },

  /* Unidad 3 · Heliara One */
  'heliara-one':      { es: '/heliara-one/',                     en: '/en/heliara-one/',                      parent: 'home' },

  /* Empresa */
  'nosotros':         { es: '/nosotros/',                        en: '/en/about/',                            parent: 'home' },
  'contacto':         { es: '/contacto/',                        en: '/en/contact/',                          parent: 'home' },
  'blog':             { es: '/blog/',                                                                          parent: 'home' },
};
