/**
 * ============================================================================
 * PÁGINA: ENERGÍA SOLAR TÉRMICA  →  /termica/  ·  /en/solar-thermal/
 * ----------------------------------------------------------------------------
 * Unidad de negocio 2. Presenta la energía solar térmica y su producto
 * principal, Heliara One. Anclas usadas por el menú: #heliara-one · #estado
 * BORRADOR: los textos entre [corchetes] requieren datos reales del producto.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Energía Solar Térmica — Heliara One',
      description: 'Soluciones de energía solar térmica de CSPM: aprovechamiento del calor del sol para agua caliente, calefacción y procesos. Conocé Heliara One.',
    },
    hero: {
      badge: 'Energía Solar Térmica',
      title: 'El <em>calor del sol</em>, convertido en energía útil',
      text: 'La energía solar térmica capta el calor del sol para calentar agua, aire o fluidos de proceso. Es una de las formas más directas y eficientes de reemplazar gas y electricidad.',
      actions: [
        { label: 'Conocer Heliara One', link: '#heliara-one', icon: 'arrow-right' },
        { label: 'Solicitar información', link: 'contacto?unidad=termica', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'Aplicaciones',
        title: '¿Dónde se usa la <em>energía solar térmica</em>?',
        items: [
          { icon: '🚿', title: 'Agua caliente', text: 'Agua caliente sanitaria para viviendas, hoteles, clubes, escuelas y hospitales.' },
          { icon: '🏠', title: 'Calefacción', text: 'Apoyo a sistemas de calefacción por piso radiante o radiadores.' },
          { icon: '🏭', title: 'Procesos productivos', text: 'Precalentamiento de agua y fluidos en industria, agro y producción de alimentos.' },
        ],
      },
      {
        type: 'split',
        id: 'heliara-one',
        theme: 'light',
        tag: 'Producto · Heliara One',
        title: 'Heliara One: <em>desarrollo propio</em> de CSPM',
        paragraphs: [
          '[A completar por CSPM: qué es Heliara One en una o dos frases, para quién está pensado y qué problema resuelve.]',
          '[A completar: formato, capacidad, materiales y qué lo diferencia de los colectores solares convencionales.]',
        ],
        link: { label: 'Solicitar información o propuesta', link: 'contacto?unidad=termica' },
        items: [
          { icon: '☀️', title: '[Característica 1]', text: '[Descripción breve de la característica.]' },
          { icon: '🌡️', title: '[Característica 2]', text: '[Descripción breve de la característica.]' },
          { icon: '♻️', title: '[Característica 3]', text: '[Descripción breve de la característica.]' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Funcionamiento',
        title: 'Cómo funciona <em>Heliara One</em>',
        items: [
          { icon: '☀️', title: 'Captación', text: '[Cómo capta la radiación solar y la convierte en calor.]' },
          { icon: '🔁', title: 'Transferencia', text: '[Cómo el calor pasa al agua o al fluido de trabajo.]' },
          { icon: '🛢️', title: 'Acumulación', text: '[Cómo se almacena el calor para usarlo cuando se necesita.]' },
          { icon: '🚿', title: 'Uso', text: '[Qué consume el usuario final: agua caliente, calefacción, proceso.]' },
        ],
      },
      {
        type: 'timeline',
        id: 'estado',
        theme: 'dark',
        tag: 'Estado de desarrollo',
        title: 'Dónde estamos <em>hoy</em>',
        intro: 'Compartimos el avance del proyecto con transparencia. [Actualizar fechas y etapas reales.]',
        items: [
          { icon: '💡', date: '[Fecha]', title: 'Concepto', text: '[Origen de la idea y necesidad detectada.]', status: 'done' },
          { icon: '📐', date: '[Fecha]', title: 'Diseño y prototipo', text: '[Desarrollo del primer prototipo funcional.]', status: 'done' },
          { icon: '🧪', date: '[Fecha]', title: 'Validación en campo', text: '[Pruebas en condiciones reales y ajustes.]', status: 'current' },
          { icon: '🏭', date: '[Fecha]', title: 'Producción piloto', text: '[Primeras unidades para clientes piloto.]', status: 'next' },
          { icon: '🚀', date: '[Fecha]', title: 'Lanzamiento', text: '[Disponibilidad comercial.]', status: 'next' },
        ],
      },
      {
        type: 'faq',
        theme: 'sand',
        align: 'center',
        tag: 'Consultas',
        title: 'Preguntas sobre <em>Heliara One</em>',
        items: [
          { q: '¿Cuándo va a estar disponible?', a: '[A completar por CSPM.]' },
          { q: '¿Puedo participar como cliente piloto?', a: 'Sí. Dejanos tus datos en el formulario eligiendo "Térmica (Heliara One)" y te contactamos cuando abramos la etapa piloto.' },
          { q: '¿Hay versiones para distribuidores o instaladores?', a: '[A completar por CSPM.]' },
        ],
      },
    ],
    cta: {
      title: 'Solicitá información o una <em>propuesta</em>',
      text: 'Contanos tu necesidad de agua caliente o calor y te mantenemos al tanto de Heliara One.',
      primary: 'Solicitar información',
      unit: 'termica',
      whatsappMessage: 'Hola CSPM, quiero información sobre Heliara One.',
    },
  },

  en: {
    draft: true,
    meta: {
      title: 'Solar Thermal Energy — Heliara One',
      description: 'CSPM solar thermal solutions: using the sun’s heat for hot water, space heating and processes. Discover Heliara One.',
    },
    hero: {
      badge: 'Solar Thermal Energy',
      title: 'The <em>sun’s heat</em>, turned into useful energy',
      text: 'Solar thermal energy captures the sun’s heat to warm water, air or process fluids. It is one of the most direct and efficient ways to replace gas and electricity.',
      actions: [
        { label: 'Discover Heliara One', link: '#heliara-one', icon: 'arrow-right' },
        { label: 'Request information', link: 'contacto?unidad=termica', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'Applications',
        title: 'Where is <em>solar thermal</em> used?',
        items: [
          { icon: '🚿', title: 'Hot water', text: 'Domestic hot water for homes, hotels, clubs, schools and hospitals.' },
          { icon: '🏠', title: 'Space heating', text: 'Support for underfloor or radiator heating systems.' },
          { icon: '🏭', title: 'Industrial processes', text: 'Preheating water and fluids in industry, agriculture and food production.' },
        ],
      },
      {
        type: 'split',
        id: 'heliara-one',
        theme: 'light',
        tag: 'Product · Heliara One',
        title: 'Heliara One: a CSPM <em>in-house</em> development',
        paragraphs: [
          '[To be completed by CSPM: what Heliara One is in one or two sentences, who it is for and what problem it solves.]',
          '[To be completed: format, capacity, materials and what sets it apart from conventional solar collectors.]',
        ],
        link: { label: 'Request information or a proposal', link: 'contacto?unidad=termica' },
        items: [
          { icon: '☀️', title: '[Feature 1]', text: '[Short description of the feature.]' },
          { icon: '🌡️', title: '[Feature 2]', text: '[Short description of the feature.]' },
          { icon: '♻️', title: '[Feature 3]', text: '[Short description of the feature.]' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Operation',
        title: 'How <em>Heliara One</em> works',
        items: [
          { icon: '☀️', title: 'Capture', text: '[How it captures solar radiation and turns it into heat.]' },
          { icon: '🔁', title: 'Transfer', text: '[How heat passes to the water or working fluid.]' },
          { icon: '🛢️', title: 'Storage', text: '[How heat is stored for use when needed.]' },
          { icon: '🚿', title: 'Use', text: '[What the end user gets: hot water, heating, process heat.]' },
        ],
      },
      {
        type: 'timeline',
        id: 'estado',
        theme: 'dark',
        tag: 'Development status',
        title: 'Where we are <em>today</em>',
        intro: 'We share the project’s progress transparently. [Update with real dates and stages.]',
        items: [
          { icon: '💡', date: '[Date]', title: 'Concept', text: '[Origin of the idea and need identified.]', status: 'done' },
          { icon: '📐', date: '[Date]', title: 'Design & prototype', text: '[Development of the first working prototype.]', status: 'done' },
          { icon: '🧪', date: '[Date]', title: 'Field validation', text: '[Real-world testing and adjustments.]', status: 'current' },
          { icon: '🏭', date: '[Date]', title: 'Pilot production', text: '[First units for pilot customers.]', status: 'next' },
          { icon: '🚀', date: '[Date]', title: 'Launch', text: '[Commercial availability.]', status: 'next' },
        ],
      },
      {
        type: 'faq',
        theme: 'sand',
        align: 'center',
        tag: 'Enquiries',
        title: 'Questions about <em>Heliara One</em>',
        items: [
          { q: 'When will it be available?', a: '[To be completed by CSPM.]' },
          { q: 'Can I take part as a pilot customer?', a: 'Yes. Leave your details in the form selecting “Thermal (Heliara One)” and we will contact you when the pilot stage opens.' },
          { q: 'Are there versions for distributors or installers?', a: '[To be completed by CSPM.]' },
        ],
      },
    ],
    cta: {
      title: 'Request information or a <em>proposal</em>',
      text: 'Tell us about your hot water or heat needs and we will keep you posted on Heliara One.',
      primary: 'Request information',
      unit: 'termica',
      whatsappMessage: 'Hello CSPM, I would like information about Heliara One.',
    },
  },
};
