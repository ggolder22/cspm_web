/**
 * ============================================================================
 * LISTA DE PÁGINAS A GENERAR  →  `pageList` (la usa src/pages.njk)
 * ----------------------------------------------------------------------------
 * Recorre src/_data/pages/*.js y crea una entrada por cada idioma definido:
 *     { key: 'bombeo-solar', locale: 'en', url: '/en/solar-engineering/solar-pumping/' }
 *
 * No hace falta editar este archivo: alcanza con crear el archivo de contenido
 * y su ruta en routes.js. Si falta la ruta, el build falla con un mensaje claro.
 * ============================================================================
 */
const fs = require('node:fs');
const path = require('node:path');
const routes = require('./routes.js');

const PAGES_DIR = path.join(__dirname, 'pages');

module.exports = fs
  .readdirSync(PAGES_DIR)
  .filter((file) => file.endsWith('.js'))
  .flatMap((file) => {
    const key = path.basename(file, '.js');
    const content = require(path.join(PAGES_DIR, file));
    const route = routes[key];

    if (!route) throw new Error(`[pageList] Falta la ruta "${key}" en src/_data/routes.js`);

    return Object.keys(content).map((locale) => {
      if (!route[locale]) throw new Error(`[pageList] La ruta "${key}" no tiene URL para "${locale}"`);
      return { key, locale, url: route[locale] };
    });
  });
