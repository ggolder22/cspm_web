/**
 * ============================================================================
 * PÁGINA: INGENIERÍA SOLAR  →  /ingenieria-solar/  ·  /en/solar-engineering/
 * ----------------------------------------------------------------------------
 * Hub de la unidad. Deriva a: bombeo-solar, mantenimiento, sistemas-solares.
 * BORRADOR: textos provisorios a validar por CSPM.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Ingeniería Solar — Bombeo, instalación, mantenimiento y sistemas solares',
      description: 'Diseño, instalación y mantenimiento de sistemas solares: bombeo de agua, sistemas on-grid, off-grid e híbridos para agro, industria y minería.',
    },
    hero: {
      badge: 'Unidad · Ingeniería Solar',
      title: 'Proyectos solares <em>dimensionados</em> con datos reales',
      text: 'Relevamos, diseñamos, instalamos y mantenemos sistemas solares para que funcionen como fueron proyectados: desde un bombeo rural hasta una planta conectada a red.',
      actions: [
        { label: 'Consultar un proyecto', link: 'contacto?unidad=sistemas-solares', icon: 'arrow-right' },
        { label: 'Ver servicios', link: '#servicios', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        id: 'servicios',
        theme: 'sand',
        tag: 'Servicios',
        title: 'Tres servicios, <em>una sola</em> ingeniería',
        variant: 'product',
        items: [
          {
            icon: '💧', badge: 'Agua',
            title: 'Bombeo solar',
            text: 'Sistemas de bombeo alimentados por energía solar para riego, ganadería y consumo, sin red eléctrica ni combustible.',
            link: 'bombeo-solar', linkLabel: 'Ver bombeo solar',
          },
          {
            icon: '🛠️', badge: 'Servicio',
            title: 'Instalación y mantenimiento',
            text: 'Montaje, puesta en marcha, mantenimiento preventivo y diagnóstico de instalaciones existentes con instrumental calibrado.',
            link: 'mantenimiento', linkLabel: 'Ver mantenimiento',
          },
          {
            icon: '☀️', badge: 'Energía',
            title: 'Sistemas solares',
            text: 'Sistemas conectados a red, aislados e híbridos con baterías, diseñados según el consumo y el recurso solar del sitio.',
            link: 'sistemas-solares', linkLabel: 'Ver sistemas solares',
          },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Metodología',
        title: 'De la consulta a la <em>puesta en marcha</em>',
        items: [
          { icon: '📍', title: 'Relevamiento', text: 'Visita técnica o análisis remoto: consumo, recurso solar, sombras, estructura y condiciones del sitio.' },
          { icon: '📐', title: 'Ingeniería', text: 'Dimensionamiento, selección de equipos y memoria técnica con generación esperada.' },
          { icon: '📄', title: 'Propuesta', text: 'Presupuesto detallado, plazos y alternativas (incluyendo equipos recuperados certificados cuando conviene).' },
          { icon: '🔧', title: 'Instalación', text: 'Montaje por personal propio, siguiendo normativa eléctrica vigente y buenas prácticas de seguridad.' },
          { icon: '✅', title: 'Puesta en marcha', text: 'Mediciones de verificación, entrega de documentación y capacitación de uso.' },
          { icon: '📈', title: 'Seguimiento', text: 'Plan de mantenimiento y soporte técnico para sostener el rendimiento en el tiempo.' },
        ],
      },
      {
        type: 'faq',
        theme: 'light',
        align: 'center',
        tag: 'Preguntas frecuentes',
        title: 'Lo que más nos <em>consultan</em>',
        items: [
          { q: '¿En qué zonas trabajan?', a: '[A completar por CSPM: zonas de cobertura y condiciones para proyectos en otras provincias.]' },
          { q: '¿Pueden usar paneles recuperados en mi proyecto?', a: 'Sí. Cuando el proyecto lo permite, ofrecemos como alternativa paneles certificados por nuestra unidad de Energía Circular, con ficha técnica de rendimiento real.' },
          { q: '¿Necesito una visita técnica para recibir un presupuesto?', a: 'Para proyectos chicos podemos cotizar con fotos y datos de consumo. Para proyectos medianos y grandes recomendamos un relevamiento en sitio.' },
        ],
      },
    ],
    cta: { title: 'Contanos tu <em>proyecto</em> solar', primary: 'Consultar un proyecto', unit: 'sistemas-solares' },
  },

  en: {
    draft: true,
    meta: {
      title: 'Solar Engineering — Pumping, installation, maintenance and solar systems',
      description: 'Design, installation and maintenance of solar systems: water pumping, on-grid, off-grid and hybrid systems for agriculture, industry and mining.',
    },
    hero: {
      badge: 'Unit · Solar Engineering',
      title: 'Solar projects <em>sized</em> with real data',
      text: 'We survey, design, install and maintain solar systems so they perform as designed: from a rural pump to a grid-tied plant.',
      actions: [
        { label: 'Discuss a project', link: 'contacto?unidad=sistemas-solares', icon: 'arrow-right' },
        { label: 'See services', link: '#servicios', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        id: 'servicios',
        theme: 'sand',
        tag: 'Services',
        title: 'Three services, <em>one</em> engineering team',
        variant: 'product',
        items: [
          {
            icon: '💧', badge: 'Water',
            title: 'Solar pumping',
            text: 'Solar-powered pumping systems for irrigation, livestock and drinking water, with no grid connection or fuel.',
            link: 'bombeo-solar', linkLabel: 'Explore solar pumping',
          },
          {
            icon: '🛠️', badge: 'Service',
            title: 'Installation & maintenance',
            text: 'Assembly, commissioning, preventive maintenance and diagnosis of existing installations with calibrated instruments.',
            link: 'mantenimiento', linkLabel: 'Explore maintenance',
          },
          {
            icon: '☀️', badge: 'Energy',
            title: 'Solar systems',
            text: 'Grid-tied, off-grid and hybrid battery systems, designed around consumption and the site’s solar resource.',
            link: 'sistemas-solares', linkLabel: 'Explore solar systems',
          },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Methodology',
        title: 'From enquiry to <em>commissioning</em>',
        items: [
          { icon: '📍', title: 'Survey', text: 'Site visit or remote analysis: consumption, solar resource, shading, structure and site conditions.' },
          { icon: '📐', title: 'Engineering', text: 'Sizing, equipment selection and technical report with expected generation.' },
          { icon: '📄', title: 'Proposal', text: 'Detailed quote, timeline and alternatives (including certified recovered equipment when it makes sense).' },
          { icon: '🔧', title: 'Installation', text: 'Assembly by our own staff, following current electrical regulations and safety best practices.' },
          { icon: '✅', title: 'Commissioning', text: 'Verification measurements, documentation handover and user training.' },
          { icon: '📈', title: 'Follow-up', text: 'Maintenance plan and technical support to sustain performance over time.' },
        ],
      },
      {
        type: 'faq',
        theme: 'light',
        align: 'center',
        tag: 'FAQ',
        title: 'What people <em>ask us</em> most',
        items: [
          { q: 'Which areas do you cover?', a: '[To be completed by CSPM: coverage areas and conditions for projects in other provinces.]' },
          { q: 'Can you use recovered panels in my project?', a: 'Yes. When the project allows it, we offer panels certified by our Circular Energy unit as an alternative, with a data sheet of real measured performance.' },
          { q: 'Do I need a site visit to get a quote?', a: 'For small projects we can quote from photos and consumption data. For medium and large projects we recommend an on-site survey.' },
        ],
      },
    ],
    cta: { title: 'Tell us about your solar <em>project</em>', primary: 'Discuss a project', unit: 'sistemas-solares' },
  },
};
