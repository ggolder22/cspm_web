/**
 * ============================================================================
 * PÁGINA: NOSOTROS  →  /nosotros/  ·  /en/about/
 * ----------------------------------------------------------------------------
 * Quiénes somos, misión/visión/valores e historia (migrado de la landing
 * anterior). Acción principal: conocer el equipo y contactar.
 * ============================================================================
 */
module.exports = {
  es: {
    meta: {
      title: 'Nosotros — Equipo, misión e historia de CSPM',
      description: 'CSPM es un equipo de ingenieros y técnicos especializados en energía solar y economía circular. Conocé nuestra misión, valores e historia.',
    },
    hero: {
      badge: 'Empresa',
      title: 'Un equipo comprometido con el <em>ciclo solar</em> completo',
      text: 'Somos ingenieros, técnicos y especialistas en economía circular. Diseñamos e instalamos sistemas solares, recuperamos los que llegan al final de su primera vida y desarrollamos producto propio.',
    },
    sections: [
      {
        type: 'split',
        theme: 'sand',
        tag: 'Quiénes somos',
        title: 'Nacimos de una <em>pregunta</em> que nadie respondía',
        paragraphs: [
          '¿Qué le pasa a un panel solar cuando deja de ser "útil"? Paneles que todavía generan energía terminan en basurales. Baterías con capacidad residual se descartan. Luminarias que aún funcionan se abandonan.',
          'Para responderla desarrollamos un sistema de gestión riguroso, estandarizado y trazable. Hoy esa misma forma de trabajar guía nuestras tres unidades: Ingeniería Solar, Energía Circular y Heliara One.',
        ],
        items: [
          { label: '🌿 Misión', title: 'Energía solar que dure más y rinda mejor', text: 'Diseñar, mantener y recuperar sistemas solares con diagnóstico objetivo y trazabilidad completa, maximizando su valor técnico, económico y ambiental.' },
          { label: '🔭 Visión', title: 'Ser referencia en energía solar circular', text: 'El estándar técnico que el mercado exige y la red que conecta proyectos nuevos con tecnología solar recuperada.' },
          { label: '💡 Valores', title: 'Rigor, transparencia y compromiso ambiental', text: 'Medimos todo. Documentamos todo. No decidimos por apariencia sino por evidencia objetiva.' },
        ],
      },
      {
        type: 'timeline',
        id: 'historia',
        theme: 'dark',
        tag: 'Nuestra historia',
        title: 'Una <em>idea simple</em> con impacto profundo',
        intro: 'Todo comenzó con una anomalía detectada en campo: cientos de módulos en perfecto estado técnico eran descartados sin diagnóstico.',
        items: [
          { icon: '🔍', date: 'El origen · 2020', title: 'El problema que nadie resolvía', text: 'Trabajando en proyectos de instalación fotovoltaica, el Ing. Germán Golder detecta que cientos de módulos con valor real eran descartados sin diagnóstico. No existía ningún estándar para evaluarlos.' },
          { icon: '📐', date: 'Desarrollo · 2021 – 2022', title: 'Construyendo la metodología', text: 'Investigación técnica, revisión de normativa internacional (IEC 61215, IEC 61730) y pruebas de campo. Se definen los protocolos de diagnóstico, la clasificación A/B/C y la trazabilidad digital.' },
          { icon: '⚡', date: 'Primeras operaciones · 2023', title: 'El sistema en acción', text: 'Los primeros lotes se procesan bajo el protocolo CSPM: más del 90% del material resulta recuperable.' },
          { icon: '📄', date: 'Registro oficial · 2024', title: 'Propiedad intelectual protegida', text: 'La metodología CSPM se registra ante la Dirección Nacional del Derecho de Autor (DNDA) de la República Argentina.' },
          { icon: '🌱', date: 'Hoy · 2026', title: 'Tres unidades de negocio', text: 'CSPM se organiza en Ingeniería Solar, Energía Circular y Heliara One, con el Manual Técnico CSPM v1.0 como base común.' },
        ],
      },
    ],
    cta: { title: 'Trabajemos <em>juntos</em>' },
  },

  en: {
    meta: {
      title: 'About us — CSPM team, mission and story',
      description: 'CSPM is a team of engineers and technicians specialised in solar energy and circular economy. Learn about our mission, values and story.',
    },
    hero: {
      badge: 'Company',
      title: 'A team committed to the full <em>solar cycle</em>',
      text: 'We are engineers, technicians and circular economy specialists. We design and install solar systems, recover those reaching the end of their first life, and develop our own products.',
    },
    sections: [
      {
        type: 'split',
        theme: 'sand',
        tag: 'Who we are',
        title: 'Born from a <em>question</em> no one was answering',
        paragraphs: [
          'What happens to a solar panel when it is no longer “useful”? Panels that still generate energy end up in landfills. Batteries with residual capacity are discarded. Lighting that still works is abandoned.',
          'To answer it we developed a rigorous, standardised and traceable management system. Today that same way of working guides our three units: Solar Engineering, Circular Energy and Heliara One.',
        ],
        items: [
          { label: '🌿 Mission', title: 'Solar energy that lasts longer and performs better', text: 'Design, maintain and recover solar systems with objective diagnosis and full traceability, maximising their technical, economic and environmental value.' },
          { label: '🔭 Vision', title: 'To be the reference in circular solar energy', text: 'The technical standard the market demands and the network connecting new projects with recovered solar technology.' },
          { label: '💡 Values', title: 'Rigour, transparency and environmental commitment', text: 'We measure everything. We document everything. We decide on objective evidence, not appearance.' },
        ],
      },
      {
        type: 'timeline',
        id: 'historia',
        theme: 'dark',
        tag: 'Our story',
        title: 'A <em>simple idea</em> with deep impact',
        intro: 'It all started with an anomaly spotted in the field: hundreds of modules in perfect technical condition were being discarded without diagnosis.',
        items: [
          { icon: '🔍', date: 'The origin · 2020', title: 'The problem no one was solving', text: 'Working on PV installation projects, Eng. Germán Golder noticed that hundreds of modules with real value were discarded without diagnosis. No standard existed to assess them.' },
          { icon: '📐', date: 'Development · 2021 – 2022', title: 'Building the methodology', text: 'Technical research, review of international standards (IEC 61215, IEC 61730) and field testing. Diagnostic protocols, A/B/C classification and digital traceability are defined.' },
          { icon: '⚡', date: 'First operations · 2023', title: 'The system in action', text: 'The first batches are processed under the CSPM protocol: over 90% of the material proves recoverable.' },
          { icon: '📄', date: 'Official registration · 2024', title: 'Intellectual property protected', text: 'The CSPM methodology is registered with Argentina’s National Copyright Directorate (DNDA).' },
          { icon: '🌱', date: 'Today · 2026', title: 'Three business units', text: 'CSPM is organised into Solar Engineering, Circular Energy and Heliara One, with the CSPM Technical Manual v1.0 as a common foundation.' },
        ],
      },
    ],
    cta: { title: 'Let’s work <em>together</em>' },
  },
};
