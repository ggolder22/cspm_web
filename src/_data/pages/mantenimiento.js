/**
 * ============================================================================
 * PÁGINA: INSTALACIÓN Y MANTENIMIENTO  →  /ingenieria-solar/mantenimiento/
 * ----------------------------------------------------------------------------
 * Acción principal: Consultar diagnóstico.
 * BORRADOR: textos provisorios a validar por CSPM.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Instalación y mantenimiento de sistemas solares — Diagnóstico técnico',
      description: 'Instalación, mantenimiento preventivo y correctivo y diagnóstico eléctrico de sistemas fotovoltaicos con instrumental calibrado e informe técnico.',
    },
    hero: {
      badge: 'Ingeniería Solar · Servicio técnico',
      title: 'Tu sistema solar, <em>rindiendo</em> como el primer día',
      text: 'Instalamos, mantenemos y diagnosticamos sistemas fotovoltaicos con la misma metodología de medición que usamos para certificar equipos: datos objetivos, no estimaciones.',
      actions: [
        { label: 'Consultar diagnóstico', link: 'contacto?unidad=mantenimiento', icon: 'arrow-right' },
        { label: 'Ver servicios', link: '#servicios', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        id: 'servicios',
        theme: 'sand',
        tag: 'Servicios',
        title: 'Cuidamos el sistema en <em>todo su ciclo</em>',
        columns: 2,
        items: [
          { icon: '🔧', title: 'Instalación y puesta en marcha', text: 'Montaje de estructura, paneles, inversores y protecciones; mediciones de verificación y entrega documentada.' },
          { icon: '🗓️', title: 'Mantenimiento preventivo', text: 'Inspección visual, limpieza, ajuste de conexiones y control de protecciones con frecuencia planificada.' },
          { icon: '⚡', title: 'Diagnóstico eléctrico', text: 'Medición de Voc, Isc y aislamiento por string; detección de módulos degradados, hot spots y fallas de conexión.' },
          { icon: '🩺', title: 'Mantenimiento correctivo', text: 'Reemplazo de componentes, reparación de módulos y, si hace falta, reposición con paneles recuperados certificados.' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Diagnóstico',
        title: 'Qué incluye un <em>diagnóstico</em> CSPM',
        items: [
          { icon: '👁️', title: 'Inspección', text: 'Estado físico de módulos, estructura, cableado y tableros.' },
          { icon: '📊', title: 'Mediciones', text: 'Parámetros eléctricos por string con instrumental calibrado.' },
          { icon: '📉', title: 'Análisis', text: 'Comparación contra valores nominales y generación esperada.' },
          { icon: '📄', title: 'Informe', text: 'Hallazgos priorizados, recomendaciones y presupuesto de acciones.' },
        ],
      },
      {
        type: 'faq',
        theme: 'light',
        align: 'center',
        tag: 'Preguntas frecuentes',
        title: 'Dudas <em>comunes</em>',
        items: [
          { q: '¿Cada cuánto conviene hacer mantenimiento?', a: 'Como referencia, una revisión preventiva anual y limpiezas según el entorno (polvo, salinidad, aves). Lo ajustamos a cada instalación.' },
          { q: '¿Atienden instalaciones que no hicieron ustedes?', a: 'Sí. El diagnóstico es independiente de quién haya hecho la instalación.' },
          { q: '¿Qué pasa con los paneles que retiramos?', a: 'Los derivamos a nuestra unidad de Energía Circular para diagnóstico y, si corresponde, certificación para una segunda vida.' },
        ],
      },
    ],
    cta: {
      title: '¿Tu sistema <em>genera menos</em> de lo esperado?',
      text: 'Coordinemos un diagnóstico y te entregamos un informe con datos medidos.',
      primary: 'Consultar diagnóstico',
      unit: 'mantenimiento',
      whatsappMessage: 'Hola CSPM, quiero consultar por un diagnóstico de mi instalación solar.',
    },
  },

  en: {
    draft: true,
    meta: {
      title: 'Solar installation and maintenance — Technical diagnosis',
      description: 'Installation, preventive and corrective maintenance and electrical diagnosis of PV systems with calibrated instruments and a technical report.',
    },
    hero: {
      badge: 'Solar Engineering · Technical service',
      title: 'Your solar system, <em>performing</em> like day one',
      text: 'We install, maintain and diagnose PV systems with the same measurement methodology we use to certify equipment: objective data, not estimates.',
      actions: [
        { label: 'Request a diagnosis', link: 'contacto?unidad=mantenimiento', icon: 'arrow-right' },
        { label: 'See services', link: '#servicios', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        id: 'servicios',
        theme: 'sand',
        tag: 'Services',
        title: 'We look after the system <em>across its life</em>',
        columns: 2,
        items: [
          { icon: '🔧', title: 'Installation & commissioning', text: 'Mounting of structure, panels, inverters and protections; verification measurements and documented handover.' },
          { icon: '🗓️', title: 'Preventive maintenance', text: 'Visual inspection, cleaning, connection tightening and protection checks on a planned schedule.' },
          { icon: '⚡', title: 'Electrical diagnosis', text: 'Voc, Isc and insulation measurement per string; detection of degraded modules, hot spots and connection faults.' },
          { icon: '🩺', title: 'Corrective maintenance', text: 'Component replacement, module repair and, if needed, replacement with certified recovered panels.' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Diagnosis',
        title: 'What a CSPM <em>diagnosis</em> includes',
        items: [
          { icon: '👁️', title: 'Inspection', text: 'Physical condition of modules, structure, wiring and switchboards.' },
          { icon: '📊', title: 'Measurements', text: 'Electrical parameters per string with calibrated instruments.' },
          { icon: '📉', title: 'Analysis', text: 'Comparison against nominal values and expected generation.' },
          { icon: '📄', title: 'Report', text: 'Prioritised findings, recommendations and a quote for actions.' },
        ],
      },
      {
        type: 'faq',
        theme: 'light',
        align: 'center',
        tag: 'FAQ',
        title: 'Common <em>questions</em>',
        items: [
          { q: 'How often should maintenance be done?', a: 'As a guideline, one preventive inspection per year plus cleaning depending on the environment (dust, salinity, birds). We tailor it to each installation.' },
          { q: 'Do you service installations you did not build?', a: 'Yes. The diagnosis is independent of who carried out the installation.' },
          { q: 'What happens to the panels you remove?', a: 'They go to our Circular Energy unit for diagnosis and, where appropriate, certification for a second life.' },
        ],
      },
    ],
    cta: {
      title: 'Is your system <em>producing less</em> than expected?',
      text: 'Let’s schedule a diagnosis and we will hand you a report with measured data.',
      primary: 'Request a diagnosis',
      unit: 'mantenimiento',
      whatsappMessage: 'Hello CSPM, I would like to ask about a diagnosis of my solar installation.',
    },
  },
};
