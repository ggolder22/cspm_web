/**
 * ============================================================================
 * PÁGINA: HELIARA ONE  →  /heliara-one/  ·  /en/heliara-one/
 * ----------------------------------------------------------------------------
 * Secciones según el organigrama: #producto · #estado · #consultas
 * Acción principal: Solicitar información o propuesta.
 * BORRADOR: los textos entre [corchetes] requieren datos reales del producto.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Heliara One — Desarrollo de producto de CSPM',
      description: 'Heliara One es el desarrollo de producto propio de CSPM. Conocé su funcionamiento, el estado del proyecto y cómo solicitar información.',
    },
    hero: {
      badge: 'Producto en desarrollo',
      title: 'Heliara One: <em>energía solar</em> lista para usar',
      text: '[A completar por CSPM: descripción en una o dos frases de qué es Heliara One, para quién está pensado y qué problema resuelve.]',
      actions: [
        { label: 'Solicitar información', link: 'contacto?unidad=heliara-one', icon: 'arrow-right' },
        { label: 'Estado del proyecto', link: '#estado', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'split',
        id: 'producto',
        theme: 'sand',
        tag: 'Producto y funcionamiento',
        title: 'Qué es <em>Heliara One</em>',
        paragraphs: [
          '[A completar por CSPM: descripción del producto. Componentes principales, formato (portátil, fijo, modular), potencia o capacidad y casos de uso.]',
          '[A completar: qué lo diferencia de alternativas existentes y cómo se relaciona con la experiencia de CSPM en ingeniería y economía circular.]',
        ],
        items: [
          { icon: '☀️', title: '[Característica 1]', text: '[Descripción breve de la característica.]' },
          { icon: '🔋', title: '[Característica 2]', text: '[Descripción breve de la característica.]' },
          { icon: '📡', title: '[Característica 3]', text: '[Descripción breve de la característica.]' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'Cómo funciona',
        title: 'Funcionamiento en <em>cuatro pasos</em>',
        items: [
          { icon: '☀️', title: 'Captación', text: '[Cómo genera o recibe la energía.]' },
          { icon: '⚙️', title: 'Gestión', text: '[Cómo se controla y estabiliza la energía.]' },
          { icon: '🔋', title: 'Almacenamiento', text: '[Cómo se guarda la energía, si aplica.]' },
          { icon: '💡', title: 'Uso', text: '[Qué equipos o cargas puede alimentar.]' },
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
        id: 'consultas',
        theme: 'light',
        align: 'center',
        tag: 'Consultas',
        title: 'Preguntas sobre <em>Heliara One</em>',
        items: [
          { q: '¿Cuándo va a estar disponible?', a: '[A completar por CSPM.]' },
          { q: '¿Puedo participar como cliente piloto?', a: 'Sí. Dejanos tus datos en el formulario indicando "Heliara One" y te contactamos cuando abramos la etapa piloto.' },
          { q: '¿Hay versiones para distribuidores o integradores?', a: '[A completar por CSPM.]' },
        ],
      },
    ],
    cta: {
      title: 'Solicitá información o una <em>propuesta</em>',
      text: 'Contanos tu caso de uso y te mantenemos al tanto del avance de Heliara One.',
      primary: 'Solicitar información',
      unit: 'heliara-one',
      whatsappMessage: 'Hola CSPM, quiero información sobre Heliara One.',
    },
  },

  en: {
    draft: true,
    meta: {
      title: 'Heliara One — A CSPM product in development',
      description: 'Heliara One is CSPM’s in-house product. Learn how it works, the project status and how to request information.',
    },
    hero: {
      badge: 'Product in development',
      title: 'Heliara One: <em>solar energy</em> ready to use',
      text: '[To be completed by CSPM: one or two sentences on what Heliara One is, who it is for and what problem it solves.]',
      actions: [
        { label: 'Request information', link: 'contacto?unidad=heliara-one', icon: 'arrow-right' },
        { label: 'Project status', link: '#estado', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'split',
        id: 'producto',
        theme: 'sand',
        tag: 'Product & operation',
        title: 'What is <em>Heliara One</em>',
        paragraphs: [
          '[To be completed by CSPM: product description. Main components, format (portable, fixed, modular), power or capacity and use cases.]',
          '[To be completed: what sets it apart from existing alternatives and how it builds on CSPM’s engineering and circular economy experience.]',
        ],
        items: [
          { icon: '☀️', title: '[Feature 1]', text: '[Short description of the feature.]' },
          { icon: '🔋', title: '[Feature 2]', text: '[Short description of the feature.]' },
          { icon: '📡', title: '[Feature 3]', text: '[Short description of the feature.]' },
        ],
      },
      {
        type: 'steps',
        theme: 'forest',
        align: 'center',
        tag: 'How it works',
        title: 'Operation in <em>four steps</em>',
        items: [
          { icon: '☀️', title: 'Capture', text: '[How it generates or receives energy.]' },
          { icon: '⚙️', title: 'Management', text: '[How energy is controlled and stabilised.]' },
          { icon: '🔋', title: 'Storage', text: '[How energy is stored, if applicable.]' },
          { icon: '💡', title: 'Use', text: '[What devices or loads it can power.]' },
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
        id: 'consultas',
        theme: 'light',
        align: 'center',
        tag: 'Enquiries',
        title: 'Questions about <em>Heliara One</em>',
        items: [
          { q: 'When will it be available?', a: '[To be completed by CSPM.]' },
          { q: 'Can I take part as a pilot customer?', a: 'Yes. Leave your details in the form selecting “Heliara One” and we will contact you when the pilot stage opens.' },
          { q: 'Are there versions for distributors or integrators?', a: '[To be completed by CSPM.]' },
        ],
      },
    ],
    cta: {
      title: 'Request information or a <em>proposal</em>',
      text: 'Tell us about your use case and we will keep you posted on Heliara One’s progress.',
      primary: 'Request information',
      unit: 'heliara-one',
      whatsappMessage: 'Hello CSPM, I would like information about Heliara One.',
    },
  },
};
