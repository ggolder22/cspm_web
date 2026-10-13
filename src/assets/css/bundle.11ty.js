/**
 * ============================================================================
 * BUNDLE DE CSS  →  /assets/css/main.css
 * ----------------------------------------------------------------------------
 * Une todos los .css de estas carpetas en UN solo archivo (una sola petición
 * HTTP). El orden de las carpetas importa (de lo general a lo particular):
 *
 *   settings/    variables de diseño (colores, tipografías, espaciados)
 *   base/        reset, tipografía, layout y temas de color
 *   components/  piezas reutilizables (botón, tarjeta, header…)
 *   sections/    estilos propios de cada tipo de sección
 *
 * Dentro de cada carpeta se incluyen en orden alfabético.
 * Para sumar estilos: crear el .css en la carpeta que corresponda. Nada más.
 * ============================================================================
 */
const fs = require('node:fs');
const path = require('node:path');

const LAYERS = ['settings', 'base', 'components', 'sections'];

module.exports = class CssBundle {
  data() {
    return {
      permalink: '/assets/css/main.css',
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    return LAYERS.flatMap((layer) => {
      const dir = path.join(__dirname, layer);
      return fs.readdirSync(dir)
        .filter((file) => file.endsWith('.css'))
        .sort()
        .map((file) => `/* ==== ${layer}/${file} ==== */\n${fs.readFileSync(path.join(dir, file), 'utf8')}`);
    }).join('\n');
  }
};
