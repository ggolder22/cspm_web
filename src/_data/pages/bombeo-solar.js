/**
 * ============================================================================
 * PÁGINA: BOMBEO SOLAR  →  /ingenieria-solar/bombeo-solar/
 * ----------------------------------------------------------------------------
 * Acción principal: Solicitar evaluación.
 * BORRADOR: textos provisorios a validar por CSPM.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Bombeo solar — Agua para riego, ganadería y consumo sin red eléctrica',
      description: 'Sistemas de bombeo solar dimensionados según caudal, altura y recurso solar. Evaluación técnica, instalación y mantenimiento.',
    },
    hero: {
      badge: 'Ingeniería Solar · Bombeo',
      title: 'Agua donde la necesitás, con <em>energía del sol</em>',
      text: 'Diseñamos e instalamos sistemas de bombeo solar para riego, bebederos y consumo humano. Sin red eléctrica, sin combustible y con costos operativos mínimos.',
      actions: [
        { label: 'Solicitar evaluación', link: 'contacto?unidad=bombeo-solar', icon: 'arrow-right' },
        { label: 'Cómo lo dimensionamos', link: '#evaluacion', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'Aplicaciones',
        title: 'Soluciones para cada <em>uso del agua</em>',
        items: [
          { icon: '🌾', title: 'Riego', text: 'Goteo, aspersión o llenado de reservorios, con el caudal sincronizado a las horas de mayor radiación.' },
          { icon: '🐄', title: 'Ganadería', text: 'Abastecimiento de bebederos y aguadas en campos alejados de la red eléctrica.' },
          { icon: '🏠', title: 'Consumo y servicios', text: 'Agua para viviendas rurales, escuelas, puestos y comunidades aisladas.' },
        ],
      },
      {
        type: 'steps',
        id: 'evaluacion',
        theme: 'forest',
        align: 'center',
        tag: 'Evaluación técnica',
        title: 'Cómo <em>dimensionamos</em> tu bombeo',
        intro: 'Un sistema de bombeo bien diseñado depende de pocos datos, pero todos importan.',
        items: [
          { icon: '💧', title: 'Necesidad de agua', text: 'Litros por día requeridos y su variación a lo largo del año.' },
          { icon: '📏', title: 'Fuente y altura', text: 'Tipo de fuente (pozo, perforación, superficie), nivel dinámico y altura manométrica total.' },
          { icon: '☀️', title: 'Recurso solar', text: 'Radiación del sitio por mes para asegurar el caudal en el peor escenario.' },
          { icon: '⚙️', title: 'Selección de equipos', text: 'Bomba, controlador y generador fotovoltaico compatibles entre sí y con la fuente.' },
          { icon: '🔧', title: 'Instalación', text: 'Montaje de estructura, paneles, bomba y protecciones; prueba de caudal real.' },
          { icon: '📋', title: 'Entrega', text: 'Documentación, capacitación y plan de mantenimiento.' },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Ventajas',
        title: 'Por qué <em>bombeo solar</em>',
        paragraphs: [
          'El costo del bombeo solar se concentra en la inversión inicial: después, la energía es gratuita y el mantenimiento es mínimo comparado con un motor a combustible.',
          '[A completar por CSPM: marcas de bombas con las que trabajan, rango de potencias y garantías.]',
        ],
        items: [
          { icon: '⛽', title: 'Sin combustible', text: 'Eliminás la logística y el costo variable del gasoil.' },
          { icon: '🔌', title: 'Sin red eléctrica', text: 'Ideal para campos y sitios alejados del tendido.' },
          { icon: '🌱', title: 'Cero emisiones', text: 'Energía limpia y silenciosa durante toda la vida útil.' },
        ],
      },
      {
        type: 'faq',
        theme: 'sand',
        align: 'center',
        tag: 'Preguntas frecuentes',
        title: 'Dudas <em>comunes</em>',
        items: [
          { q: '¿Funciona en días nublados?', a: 'Sí, con menor caudal. Por eso dimensionamos con la radiación del peor mes y, si hace falta, sumamos un tanque de reserva en lugar de baterías.' },
          { q: '¿Qué datos necesito para pedir una evaluación?', a: 'Ubicación, tipo de fuente de agua, profundidad o nivel, distancia al punto de uso y litros por día que necesitás. Si no los tenés todos, te ayudamos a relevarlos.' },
          { q: '¿Qué mantenimiento requiere?', a: 'Limpieza de paneles y una revisión periódica de bomba y conexiones. Lo incluimos en un plan de mantenimiento opcional.' },
        ],
      },
    ],
    cta: {
      title: 'Solicitá una <em>evaluación</em> de bombeo',
      text: 'Con unos pocos datos de tu fuente de agua te decimos qué sistema necesitás.',
      primary: 'Solicitar evaluación',
      unit: 'bombeo-solar',
      whatsappMessage: 'Hola CSPM, quiero solicitar una evaluación de bombeo solar.',
    },
  },

  en: {
    draft: true,
    meta: {
      title: 'Solar pumping — Water for irrigation, livestock and drinking without grid power',
      description: 'Solar pumping systems sized by flow rate, head and solar resource. Technical assessment, installation and maintenance.',
    },
    hero: {
      badge: 'Solar Engineering · Pumping',
      title: 'Water where you need it, powered by <em>the sun</em>',
      text: 'We design and install solar pumping systems for irrigation, livestock watering and drinking water. No grid, no fuel and minimal operating costs.',
      actions: [
        { label: 'Request an assessment', link: 'contacto?unidad=bombeo-solar', icon: 'arrow-right' },
        { label: 'How we size it', link: '#evaluacion', variant: 'secondary' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'Applications',
        title: 'Solutions for every <em>water use</em>',
        items: [
          { icon: '🌾', title: 'Irrigation', text: 'Drip, sprinkler or reservoir filling, with flow synchronised to peak irradiance hours.' },
          { icon: '🐄', title: 'Livestock', text: 'Supply for troughs and watering points on land far from the power grid.' },
          { icon: '🏠', title: 'Drinking & services', text: 'Water for rural homes, schools, outposts and isolated communities.' },
        ],
      },
      {
        type: 'steps',
        id: 'evaluacion',
        theme: 'forest',
        align: 'center',
        tag: 'Technical assessment',
        title: 'How we <em>size</em> your pumping system',
        intro: 'A well-designed pumping system depends on a few data points, but every one of them matters.',
        items: [
          { icon: '💧', title: 'Water demand', text: 'Litres per day required and how it varies through the year.' },
          { icon: '📏', title: 'Source and head', text: 'Source type (well, borehole, surface), dynamic level and total dynamic head.' },
          { icon: '☀️', title: 'Solar resource', text: 'Monthly site irradiance to guarantee flow in the worst-case scenario.' },
          { icon: '⚙️', title: 'Equipment selection', text: 'Pump, controller and PV array compatible with each other and with the source.' },
          { icon: '🔧', title: 'Installation', text: 'Mounting of structure, panels, pump and protections; real flow test.' },
          { icon: '📋', title: 'Handover', text: 'Documentation, training and maintenance plan.' },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Advantages',
        title: 'Why <em>solar pumping</em>',
        paragraphs: [
          'The cost of solar pumping is concentrated in the initial investment: after that, energy is free and maintenance is minimal compared with a fuel engine.',
          '[To be completed by CSPM: pump brands used, power range and warranties.]',
        ],
        items: [
          { icon: '⛽', title: 'No fuel', text: 'Eliminate diesel logistics and variable costs.' },
          { icon: '🔌', title: 'No grid needed', text: 'Ideal for farms and sites far from power lines.' },
          { icon: '🌱', title: 'Zero emissions', text: 'Clean, silent energy throughout its lifetime.' },
        ],
      },
      {
        type: 'faq',
        theme: 'sand',
        align: 'center',
        tag: 'FAQ',
        title: 'Common <em>questions</em>',
        items: [
          { q: 'Does it work on cloudy days?', a: 'Yes, at a lower flow rate. That is why we size for the worst month and, if needed, add a storage tank instead of batteries.' },
          { q: 'What information do I need to request an assessment?', a: 'Location, type of water source, depth or level, distance to the point of use and litres per day needed. If you don’t have it all, we help you gather it.' },
          { q: 'What maintenance does it need?', a: 'Panel cleaning and a periodic check of the pump and connections. We include it in an optional maintenance plan.' },
        ],
      },
    ],
    cta: {
      title: 'Request a pumping <em>assessment</em>',
      text: 'With a few details about your water source we will tell you what system you need.',
      primary: 'Request an assessment',
      unit: 'bombeo-solar',
      whatsappMessage: 'Hello CSPM, I would like to request a solar pumping assessment.',
    },
  },
};
