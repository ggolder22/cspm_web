/**
 * ============================================================================
 * DATOS GLOBALES DEL SITIO  →  disponible en plantillas como `site`
 * ----------------------------------------------------------------------------
 * Única fuente de verdad para nombre, dominio y datos de contacto.
 * Si cambia el teléfono o el email, se edita SOLO acá.
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   SITE_URL   URL pública. Si falta, se usa la URL de Vercel o el dominio final.
 *   SITE_ENV   'production' habilita la indexación en Google. Cualquier otro
 *              valor (o vacío) agrega noindex: ideal mientras es un sitio de prueba.
 * ============================================================================
 */
const vercelUrl = process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`;

module.exports = {
  name: 'CSPM',
  url: process.env.SITE_URL || vercelUrl || 'https://www.cspm.com.ar',
  isProduction: process.env.SITE_ENV === 'production',

  /* Idiomas: el primero es el principal (sin prefijo en la URL) */
  locales: ['es', 'en'],
  defaultLocale: 'es',

  founder: 'Ing. Germán Golder',
  year: new Date().getFullYear(),

  contact: {
    email: 'ggolder@cspm.com.ar',
    phone: '+54 9 11 3563-1737',
    phoneHref: '+5491135631737',
    whatsapp: '5491135631737', // formato internacional sin "+" (wa.me)
  },

  social: [
    { name: 'Instagram', icon: 'instagram', handle: '@cspm_group', url: 'https://instagram.com/cspm_group' },
  ],
};
