/**
 * Datos por defecto de cada artículo del blog.
 * - Mantiene las URLs del sitio anterior: /blog/<nombre-del-archivo>/
 * - Los artículos se cargan desde el CMS o como .md en esta carpeta.
 */
module.exports = {
  layout: 'layouts/post.njk',
  schemaType: 'Article',
  permalink: (data) => `/blog/${data.page.fileSlug}/`,
};
