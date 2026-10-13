/**
 * ============================================================================
 * PÁGINA: INICIO  →  /  ·  /en/
 * ----------------------------------------------------------------------------
 * Hub de la empresa: presenta las tres unidades de negocio y deriva a cada una.
 *
 * Estructura de un archivo de página (igual en todas):
 *   meta      { title, description }         SEO
 *   draft     true → muestra aviso "Borrador"
 *   hero      ver _includes/partials/hero.njk
 *   sections  lista de secciones; `type` = archivo en _includes/sections/
 *   cta       textos de la banda final (o false para ocultarla)
 * ============================================================================
 */
module.exports = {
  es: {
    meta: {
      title: 'CSPM — Ingeniería solar, energía circular e innovación',
      description: 'CSPM diseña, instala y mantiene sistemas solares, recupera y certifica equipos fotovoltaicos usados y desarrolla Heliara One.',
    },
    hero: {
      size: 'full',
      badge: 'Ingeniería · Economía circular · Innovación',
      title: 'Energía solar que <em>funciona</em>, hoy y en su segunda vida',
      text: 'Somos un equipo de ingeniería que diseña, instala y mantiene sistemas solares, recupera y certifica equipos fotovoltaicos usados y desarrolla tecnología propia.',
      actions: [
        { label: 'Conocer las unidades', link: '#unidades', icon: 'arrow-right' },
        { label: 'Contactar', link: 'contacto', variant: 'secondary' },
      ],
      stats: [
        { value: '3', label: 'Unidades de negocio' },
        { value: '94%', label: 'Recuperación de activos' },
        { value: 'DNDA', label: 'Metodología registrada' },
      ],
      visual: {
        nodes: [
          { icon: '☀️', label: 'Ingeniería' },
          { icon: '💧', label: 'Bombeo' },
          { icon: '♻️', label: 'Circular' },
          { icon: '⚡', label: 'Heliara' },
        ],
      },
    },
    sections: [
      {
        type: 'cards',
        id: 'unidades',
        theme: 'sand',
        tag: 'Qué hacemos',
        title: 'Tres unidades, <em>un mismo estándar</em> técnico',
        intro: 'Cada unidad resuelve una necesidad distinta, pero todas comparten la misma forma de trabajar: medir, documentar y garantizar resultados.',
        variant: 'product',
        items: [
          {
            icon: '☀️', badge: 'Proyectos',
            title: 'Ingeniería Solar',
            text: 'Diseño, instalación y mantenimiento de sistemas solares: bombeo de agua, sistemas on-grid, off-grid e híbridos.',
            list: ['Bombeo solar', 'Instalación y mantenimiento', 'Sistemas solares'],
            link: 'ingenieria-solar', linkLabel: 'Ver Ingeniería Solar',
          },
          {
            icon: '♻️', badge: 'Segunda vida',
            title: 'Energía Circular',
            text: 'Diagnóstico, clasificación y certificación de paneles, baterías y luminarias usadas para darles una segunda vida con trazabilidad completa.',
            list: ['Paneles recuperados', 'Iluminación', 'Baterías'],
            link: 'energia-circular', linkLabel: 'Ver Energía Circular',
          },
          {
            icon: '⚡', badge: 'Producto',
            title: 'Heliara One',
            text: 'Nuestro desarrollo propio de energía solar. Conocé el producto, su funcionamiento y el estado actual del proyecto.',
            list: ['Producto y funcionamiento', 'Estado de desarrollo', 'Consultas'],
            link: 'heliara-one', linkLabel: 'Ver Heliara One',
          },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Por qué CSPM',
        title: 'Ingeniería con <em>evidencia</em>, no con promesas',
        paragraphs: [
          'Venimos del trabajo de campo. Antes de proponer una solución medimos: radiación, consumo, caudal, estado eléctrico de cada equipo. Así cada proyecto se dimensiona con datos reales.',
          'Esa misma rigurosidad dio origen a la metodología CSPM de recuperación de activos solares, registrada ante la DNDA, y hoy se aplica a todos nuestros servicios.',
        ],
        link: { label: 'Conocé al equipo y nuestra historia', link: 'nosotros' },
        items: [
          { icon: '📐', title: 'Diseño a medida', text: 'Dimensionamos cada sistema según el uso real y el recurso solar del sitio.' },
          { icon: '🔍', title: 'Diagnóstico medido', text: 'Instrumentos calibrados y protocolos propios para evaluar cada equipo.' },
          { icon: '📄', title: 'Documentación completa', text: 'Fichas técnicas, informes y trazabilidad para auditorías y reportes ESG.' },
        ],
      },
      {
        type: 'cards',
        theme: 'forest',
        align: 'center',
        tag: 'Sectores',
        title: 'Soluciones para cada <em>tipo de cliente</em>',
        columns: 4,
        items: [
          { icon: '🌾', title: 'Agro y ganadería', text: 'Bombeo solar para riego y bebederos, energía para establecimientos rurales.' },
          { icon: '⛏️', title: 'Minería', text: 'Energía solar certificada en sitios remotos y reducción documentada de Scope 2.' },
          { icon: '🏭', title: 'Industria y empresas', text: 'Sistemas conectados a red, mantenimiento y gestión responsable de RAEE.' },
          { icon: '🏛️', title: 'Municipios', text: 'Alumbrado solar autónomo y proyectos de economía circular con impacto social.' },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'CSPM — Solar engineering, circular energy and innovation',
      description: 'CSPM designs, installs and maintains solar systems, recovers and certifies used photovoltaic equipment, and develops Heliara One.',
    },
    hero: {
      size: 'full',
      badge: 'Engineering · Circular economy · Innovation',
      title: 'Solar energy that <em>works</em>, today and in its second life',
      text: 'We are an engineering team that designs, installs and maintains solar systems, recovers and certifies used photovoltaic equipment, and develops its own technology.',
      actions: [
        { label: 'Explore our units', link: '#unidades', icon: 'arrow-right' },
        { label: 'Contact us', link: 'contacto', variant: 'secondary' },
      ],
      stats: [
        { value: '3', label: 'Business units' },
        { value: '94%', label: 'Asset recovery rate' },
        { value: 'DNDA', label: 'Registered methodology' },
      ],
      visual: {
        nodes: [
          { icon: '☀️', label: 'Engineering' },
          { icon: '💧', label: 'Pumping' },
          { icon: '♻️', label: 'Circular' },
          { icon: '⚡', label: 'Heliara' },
        ],
      },
    },
    sections: [
      {
        type: 'cards',
        id: 'unidades',
        theme: 'sand',
        tag: 'What we do',
        title: 'Three units, <em>one technical</em> standard',
        intro: 'Each unit solves a different need, but all share the same way of working: measure, document and guarantee results.',
        variant: 'product',
        items: [
          {
            icon: '☀️', badge: 'Projects',
            title: 'Solar Engineering',
            text: 'Design, installation and maintenance of solar systems: water pumping, on-grid, off-grid and hybrid systems.',
            list: ['Solar pumping', 'Installation & maintenance', 'Solar systems'],
            link: 'ingenieria-solar', linkLabel: 'Explore Solar Engineering',
          },
          {
            icon: '♻️', badge: 'Second life',
            title: 'Circular Energy',
            text: 'Diagnosis, classification and certification of used panels, batteries and lighting to give them a second life with full traceability.',
            list: ['Recovered panels', 'Lighting', 'Batteries'],
            link: 'energia-circular', linkLabel: 'Explore Circular Energy',
          },
          {
            icon: '⚡', badge: 'Product',
            title: 'Heliara One',
            text: 'Our in-house solar energy product. Learn about the product, how it works and the current status of the project.',
            list: ['Product & operation', 'Development status', 'Enquiries'],
            link: 'heliara-one', linkLabel: 'Explore Heliara One',
          },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Why CSPM',
        title: 'Engineering based on <em>evidence</em>, not promises',
        paragraphs: [
          'We come from field work. Before proposing a solution we measure: irradiance, consumption, flow rate and the electrical condition of every device. That way every project is sized with real data.',
          'That same rigour gave rise to the CSPM solar asset recovery methodology, registered with DNDA, which we now apply to all our services.',
        ],
        link: { label: 'Meet the team and our story', link: 'nosotros' },
        items: [
          { icon: '📐', title: 'Tailored design', text: 'Every system is sized for its real use and the site’s solar resource.' },
          { icon: '🔍', title: 'Measured diagnosis', text: 'Calibrated instruments and in-house protocols to assess every device.' },
          { icon: '📄', title: 'Complete documentation', text: 'Data sheets, reports and traceability for audits and ESG reporting.' },
        ],
      },
      {
        type: 'cards',
        theme: 'forest',
        align: 'center',
        tag: 'Industries',
        title: 'Solutions for every <em>type of client</em>',
        columns: 4,
        items: [
          { icon: '🌾', title: 'Agriculture & livestock', text: 'Solar pumping for irrigation and livestock watering, power for rural sites.' },
          { icon: '⛏️', title: 'Mining', text: 'Certified solar energy for remote sites and documented Scope 2 reduction.' },
          { icon: '🏭', title: 'Industry & business', text: 'Grid-tied systems, maintenance and responsible e-waste management.' },
          { icon: '🏛️', title: 'Municipalities', text: 'Autonomous solar lighting and circular economy projects with social impact.' },
        ],
      },
    ],
  },
};
