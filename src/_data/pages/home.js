/**
 * ============================================================================
 * PÁGINA: INICIO  →  /  ·  /en/
 * ----------------------------------------------------------------------------
 * Introducción de la empresa y acceso a las dos unidades de negocio:
 * Energía Solar Fotovoltaica y Energía Solar Térmica.
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
      title: 'CSPM — Energía solar fotovoltaica y térmica',
      description: 'CSPM recupera y certifica paneles solares, iluminación y baterías para darles una segunda vida, y desarrolla Heliara One, su solución de energía solar térmica.',
    },
    hero: {
      size: 'full',
      badge: 'Energía solar · Economía circular',
      title: 'Energía solar con <em>segunda vida</em> y tecnología propia',
      text: 'CSPM es un equipo de ingeniería argentino que trabaja con las dos formas de aprovechar el sol: la fotovoltaica, recuperando y certificando equipos usados, y la térmica, con el desarrollo de Heliara One.',
      actions: [
        { label: 'Conocer las unidades', link: '#unidades', icon: 'arrow-right' },
        { label: 'Contactar', link: 'contacto', variant: 'secondary' },
      ],
      stats: [
        { value: '2', label: 'Unidades de negocio' },
        { value: '94%', label: 'Recuperación de activos' },
        { value: 'DNDA', label: 'Metodología registrada' },
      ],
      visual: {
        nodes: [
          { icon: '☀️', label: 'Fotovoltaica' },
          { icon: '♻️', label: 'Segunda vida' },
          { icon: '🌡️', label: 'Térmica' },
          { icon: '🔋', label: 'Baterías' },
        ],
      },
    },
    sections: [
      {
        type: 'split',
        theme: 'sand',
        tag: 'Quiénes somos',
        title: 'Ingeniería con <em>evidencia</em>, no con promesas',
        paragraphs: [
          'CSPM nació en el trabajo de campo, al detectar que cientos de paneles solares en buen estado se descartaban sin ningún diagnóstico. Para resolverlo desarrollamos una metodología propia de medición, clasificación y trazabilidad, registrada ante la DNDA.',
          'Hoy aplicamos ese mismo rigor técnico en dos unidades de negocio: la recuperación de equipos fotovoltaicos y el desarrollo de soluciones solares térmicas.',
        ],
        link: { label: 'Conocé al equipo y nuestra historia', link: 'nosotros' },
        items: [
          { icon: '🔍', title: 'Diagnóstico medido', text: 'Instrumentos calibrados y protocolos propios para evaluar cada equipo.' },
          { icon: '📄', title: 'Documentación completa', text: 'Fichas técnicas, certificados y trazabilidad para auditorías y reportes ESG.' },
          { icon: '🌱', title: 'Economía circular', text: 'Cada equipo recuperado es energía embebida preservada y carbono evitado.' },
        ],
      },
      {
        type: 'cards',
        id: 'unidades',
        theme: 'light',
        align: 'center',
        tag: 'Unidades de negocio',
        title: 'Dos formas de aprovechar <em>el sol</em>',
        variant: 'product',
        columns: 2,
        items: [
          {
            icon: '☀️', badge: 'Fotovoltaica',
            title: 'Energía Solar Fotovoltaica',
            text: 'Diagnóstico, clasificación y certificación de paneles solares, iluminación y baterías usadas para darles una segunda vida con trazabilidad completa.',
            list: ['Paneles recuperados', 'Iluminación', 'Baterías'],
            link: 'fotovoltaica', linkLabel: 'Ver Fotovoltaica',
          },
          {
            icon: '🌡️', badge: 'Térmica',
            title: 'Energía Solar Térmica',
            text: 'Aprovechamiento del calor del sol para agua caliente, calefacción y procesos. Acá desarrollamos Heliara One, nuestro producto propio.',
            list: ['Heliara One', 'Estado de desarrollo', 'Consultas y propuestas'],
            link: 'termica', linkLabel: 'Ver Térmica',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'CSPM — Solar photovoltaic and thermal energy',
      description: 'CSPM recovers and certifies solar panels, lighting and batteries for a second life, and develops Heliara One, its solar thermal solution.',
    },
    hero: {
      size: 'full',
      badge: 'Solar energy · Circular economy',
      title: 'Solar energy with a <em>second life</em> and in-house technology',
      text: 'CSPM is an Argentine engineering team working with both ways of harnessing the sun: photovoltaic, by recovering and certifying used equipment, and thermal, through the development of Heliara One.',
      actions: [
        { label: 'Explore our units', link: '#unidades', icon: 'arrow-right' },
        { label: 'Contact us', link: 'contacto', variant: 'secondary' },
      ],
      stats: [
        { value: '2', label: 'Business units' },
        { value: '94%', label: 'Asset recovery rate' },
        { value: 'DNDA', label: 'Registered methodology' },
      ],
      visual: {
        nodes: [
          { icon: '☀️', label: 'Photovoltaic' },
          { icon: '♻️', label: 'Second life' },
          { icon: '🌡️', label: 'Thermal' },
          { icon: '🔋', label: 'Batteries' },
        ],
      },
    },
    sections: [
      {
        type: 'split',
        theme: 'sand',
        tag: 'Who we are',
        title: 'Engineering based on <em>evidence</em>, not promises',
        paragraphs: [
          'CSPM was born in the field, after noticing that hundreds of solar panels in good condition were being discarded without any diagnosis. To solve it we developed our own measurement, classification and traceability methodology, registered with DNDA.',
          'Today we apply that same technical rigour in two business units: recovery of photovoltaic equipment and development of solar thermal solutions.',
        ],
        link: { label: 'Meet the team and our story', link: 'nosotros' },
        items: [
          { icon: '🔍', title: 'Measured diagnosis', text: 'Calibrated instruments and in-house protocols to assess every device.' },
          { icon: '📄', title: 'Complete documentation', text: 'Data sheets, certificates and traceability for audits and ESG reporting.' },
          { icon: '🌱', title: 'Circular economy', text: 'Every recovered device is preserved embodied energy and avoided carbon.' },
        ],
      },
      {
        type: 'cards',
        id: 'unidades',
        theme: 'light',
        align: 'center',
        tag: 'Business units',
        title: 'Two ways to harness <em>the sun</em>',
        variant: 'product',
        columns: 2,
        items: [
          {
            icon: '☀️', badge: 'Photovoltaic',
            title: 'Solar Photovoltaic',
            text: 'Diagnosis, classification and certification of used solar panels, lighting and batteries to give them a second life with full traceability.',
            list: ['Recovered panels', 'Lighting', 'Batteries'],
            link: 'fotovoltaica', linkLabel: 'Explore Photovoltaic',
          },
          {
            icon: '🌡️', badge: 'Thermal',
            title: 'Solar Thermal',
            text: 'Using the sun’s heat for hot water, space heating and processes. This is where we develop Heliara One, our own product.',
            list: ['Heliara One', 'Development status', 'Enquiries and proposals'],
            link: 'termica', linkLabel: 'Explore Thermal',
          },
        ],
      },
    ],
  },
};
