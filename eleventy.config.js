/**
 * ============================================================================
 * CONFIGURACIÓN DE ELEVENTY
 * ----------------------------------------------------------------------------
 * - Código fuente en /src, sitio generado en /_site.
 * - Las páginas institucionales se generan desde UNA sola plantilla
 *   (src/pages.njk) a partir de los datos de src/_data/pages/*.js.
 * - Acá se registran los filtros que usan las plantillas (links, fechas, etc.).
 * ============================================================================
 */
const routes = require('./src/_data/routes.js');
const site = require('./src/_data/site.js');

/* ---------------------------------------------------------------------------
 * Resolución de links
 * Permite escribir en los datos  link: 'bombeo-solar'  en vez de una URL fija.
 * Formatos aceptados:
 *   'bombeo-solar'                   → /ingenieria-solar/bombeo-solar/
 *   'energia-circular#proceso'       → /energia-circular/#proceso
 *   'contacto?unidad=heliara-one'    → /contacto/?unidad=heliara-one
 *   '/ruta', 'https://…', 'mailto:…', 'tel:…', '#ancla'  → se devuelven tal cual
 * ------------------------------------------------------------------------- */
const EXTERNAL_LINK = /^(\/|#|https?:|mailto:|tel:)/;
const ROUTE_LINK = /^([\w-]+)([?#].*)?$/;

function resolveLink(link, locale = site.defaultLocale) {
  if (!link) return '';
  if (EXTERNAL_LINK.test(link)) return link;

  const match = link.match(ROUTE_LINK);
  const route = match && routes[match[1]];
  if (!route) throw new Error(`[link] Ruta desconocida: "${link}". Agregala en src/_data/routes.js`);

  return (route[locale] || route[site.defaultLocale]) + (match[2] || '');
}

module.exports = function (eleventyConfig) {
  /* --- Archivos estáticos (se copian sin procesar) --- */
  eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'assets/js' });
  eleventyConfig.addPassthroughCopy({ 'src/img': 'img' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/favicon.svg': 'favicon.svg' });

  /* El CSS se une en un solo archivo (ver src/assets/css/bundle.11ty.js) */
  eleventyConfig.addWatchTarget('src/assets/css/');

  /* --- Filtros --- */
  eleventyConfig.addFilter('link', resolveLink);

  eleventyConfig.addFilter('absoluteUrl', (path) => new URL(path, site.url).href);

  eleventyConfig.addFilter('dateLocal', (date, locale = site.defaultLocale) =>
    new Date(date).toLocaleDateString(locale === 'es' ? 'es-AR' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    }));

  eleventyConfig.addFilter('dateISO', (date) => new Date(date).toISOString().split('T')[0]);

  /* Número con 2 dígitos: 1 → "01" (pasos numerados) */
  eleventyConfig.addFilter('pad2', (n) => String(n).padStart(2, '0'));

  /* --- Colecciones --- */
  eleventyConfig.addCollection('posts', (api) =>
    api.getFilteredByGlob('src/blog/posts/*.md').sort((a, b) => b.date - a.date));

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
