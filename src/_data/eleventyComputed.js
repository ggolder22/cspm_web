/**
 * ============================================================================
 * DATOS CALCULADOS PARA TODAS LAS PLANTILLAS
 * ----------------------------------------------------------------------------
 * Eleventy ejecuta estas funciones en cada página y deja el resultado
 * disponible en las plantillas. Así ningún layout repite esta lógica.
 *
 *   locale       idioma de la página ('es' | 'en')
 *   pageKey      clave de ruta de la página (ver routes.js)
 *   t            textos de interfaz del idioma actual (ver i18n.js)
 *   pageContent  contenido de la página (ver pages/*.js) o undefined
 *   alternates     versiones de la página en otros idiomas (hreflang)
 *   languageLinks  botones del selector de idioma
 *   breadcrumbs    claves desde 'home' hasta la página actual
 *   seo            título, descripción e imagen para <head>
 *
 * Las funciones son defensivas porque también se ejecutan en archivos que
 * no son páginas (ej: el bundle de CSS).
 * ============================================================================
 */

/* `entry` es el alias de paginación de src/pages.njk */
const getLocale = (data) => data.entry?.locale || data.locale || data.site.defaultLocale;
const getKey = (data) => data.entry?.key || data.pageKey;
const getContent = (data) => data.pages?.[getKey(data)]?.[getLocale(data)];

/* URL de la página en cada idioma disponible: { es: '/…', en: '/…' }.
   El idioma actual usa siempre la URL real (importante en artículos del
   blog, que comparten la clave 'blog' pero tienen URL propia). */
function localizedUrls(data) {
  const key = getKey(data);
  const route = data.routes?.[key];
  if (!route) return {};

  const content = data.pages?.[key];
  const urls = {};
  data.site.locales.forEach((locale) => {
    if (route[locale] && (!content || content[locale])) urls[locale] = route[locale];
  });
  urls[getLocale(data)] = data.page.url;
  return urls;
}

module.exports = {
  locale: getLocale,
  pageKey: getKey,
  pageContent: getContent,

  t: (data) => data.i18n?.[getLocale(data)],

  /* Versiones existentes de la página (para <link hreflang>) */
  alternates: (data) => Object.entries(localizedUrls(data)).map(([locale, url]) => ({ locale, url })),

  /* Selector de idioma: si la página no existe en otro idioma,
     el botón lleva al inicio de ese idioma. */
  languageLinks: (data) => {
    const urls = localizedUrls(data);
    return data.site.locales.map((locale) => ({
      locale,
      url: urls[locale] || data.routes?.home?.[locale],
      current: locale === getLocale(data),
    }));
  },

  /* Cadena de claves desde 'home' hasta la página actual (usa `parent`) */
  breadcrumbs: (data) => {
    const trail = [];
    let key = getKey(data);
    while (key && data.routes?.[key]) {
      trail.unshift(key);
      key = data.routes[key].parent;
    }
    return trail;
  },

  seo: (data) => {
    const meta = getContent(data)?.meta || {};
    return {
      title: meta.title || data.title || data.site.name,
      description: meta.description || data.excerpt || data.description || '',
      image: meta.image || data.image || null,
    };
  },
};
