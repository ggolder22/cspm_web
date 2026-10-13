# CSPM — Sitio web v2

Sitio institucional de CSPM, organizado según la nueva estructura de la empresa:

```
Inicio
├── Ingeniería Solar ── Bombeo solar · Instalación y mantenimiento · Sistemas solares
├── Energía Circular ── Paneles recuperados · Iluminación · Baterías
├── Heliara One ─────── Producto y funcionamiento · Estado de desarrollo · Consultas
└── Nosotros · Blog · Contacto y registro comercial
```

Hecho con [Eleventy](https://www.11ty.dev/) (HTML estático) y desplegado en Vercel. Es bilingüe: español en `/` e inglés en `/en/`.

## Comandos

```bash
npm install      # una sola vez
npm run dev      # servidor local con recarga en http://localhost:8080
npm run build    # genera el sitio en /_site
```

## Arquitectura

Lo fundamental: **el contenido son datos, y las plantillas solo lo dibujan.** Ningún texto, URL ni dato de contacto se escribe dos veces.

```
src/
├── _data/                     ← TODO el contenido y la configuración
│   ├── site.js                  nombre, dominio, email, teléfono, redes
│   ├── routes.js                URL de cada página por idioma (+ jerarquía)
│   ├── navigation.js            menú y columnas del footer
│   ├── i18n.js                  textos comunes de interfaz (ES / EN)
│   ├── pages/<clave>.js         contenido de cada página (ES / EN)
│   ├── pageList.js              (automático) lista de páginas a generar
│   └── eleventyComputed.js      (automático) idioma, SEO, breadcrumbs…
│
├── _includes/
│   ├── layouts/   base.njk (esqueleto) · page.njk (páginas) · post.njk (blog)
│   ├── partials/  head, header, footer, hero, cta, logo, íconos…
│   ├── sections/  un archivo por TIPO de sección (cards, steps, split…)
│   └── components/ui.njk        macros: botón, tarjeta, ícono, cifras…
│
├── pages.njk                  genera TODAS las páginas de _data/pages/
├── blog/                      índice + artículos .md (URLs /blog/<slug>/)
├── assets/
│   ├── css/  settings/ → base/ → components/ → sections/   (se unen en main.css)
│   └── js/   main.js + modules/ (nav, reveal, contact-form)
└── img/

api/contact.js                 función de Vercel que envía el formulario por email
```

### Cómo se arma una página

`src/_data/pages/bombeo-solar.js` define `meta`, `hero`, `sections` y `cta` para cada idioma. Cada sección tiene un `type`, que es el nombre de un archivo en `_includes/sections/`:

| type       | Uso                                         |
|------------|---------------------------------------------|
| `cards`    | Grilla de tarjetas (`variant`: default · product · tier) |
| `steps`    | Proceso numerado 01, 02, 03…                |
| `split`    | Texto + tarjetas o cifras al costado        |
| `flow`     | Flujo de dos lados con bloque central       |
| `timeline` | Historia u hoja de ruta (`status`: done · current · next) |
| `faq`      | Preguntas frecuentes desplegables           |
| `contact`  | Formulario de contacto y registro comercial |

Todas las secciones aceptan `id`, `theme` (`light` · `sand` · `dark` · `forest` · `moss`), `tag`, `title`, `intro` y `align: 'center'`. El encabezado de cada archivo de sección documenta sus campos.

**Links:** en los datos se usa la *clave* de la página, no la URL: `link: 'bombeo-solar'`, `link: 'energia-circular#proceso'` o `link: 'contacto?unidad=heliara-one'`. El filtro `link` resuelve la URL según el idioma. Si la clave no existe, el build falla y lo avisa.

## Tareas frecuentes

**Agregar una página**
1. Sumar la ruta en `src/_data/routes.js`.
2. Crear `src/_data/pages/<clave>.js` (copiar uno existente como base).
3. Sumar el nombre en `i18n.js → labels` y, si va en el menú, en `navigation.js`.

**Agregar un tipo de sección:** crear `src/_includes/sections/<tipo>.njk` y `src/assets/css/sections/<tipo>.css`. No hay que tocar nada más.

**Cambiar un color o una fuente:** `src/assets/css/settings/tokens.css`.

**Cambiar email, teléfono o WhatsApp:** `src/_data/site.js`.

**Marcar una página como borrador:** `draft: true` en su archivo de datos. Muestra un aviso amarillo.

**Publicar un artículo:** crear un `.md` en `src/blog/posts/` con `title`, `date`, `excerpt`, `tags` e `image` (opcional).

## Despliegue en Vercel

Variables de entorno (Settings → Environment Variables):

| Variable         | Valor                                  | Para qué |
|------------------|----------------------------------------|----------|
| `SITE_ENV`       | `production` solo en el dominio final  | Sin esto el sitio lleva `noindex` y `robots.txt` bloquea buscadores |
| `SITE_URL`       | `https://www.cspm.com.ar`              | URLs canónicas y sitemap (opcional en pruebas) |
| `RESEND_API_KEY` | clave de [resend.com](https://resend.com) | Envío del formulario |
| `CONTACT_TO`     | `ggolder@cspm.com.ar`                  | Casilla que recibe las consultas |
| `CONTACT_FROM`   | `CSPM Web <web@cspm.com.ar>`           | Remitente (requiere verificar el dominio en Resend; mientras tanto se usa `onboarding@resend.dev`) |

## Pendientes

- [ ] Revisar los textos marcados como **Borrador**: Ingeniería Solar, Bombeo, Mantenimiento, Sistemas solares y Heliara One. Los textos entre `[corchetes]` necesitan datos reales.
- [ ] Sumar fotos reales de proyectos (`src/img/`).
- [ ] Configurar Resend y sus variables de entorno.
- [ ] Al pasar al dominio propio: configurar `SITE_ENV=production`, migrar el CMS (`/admin`) y redirigir las anclas viejas (`/#proceso` → `/energia-circular/#proceso`).
