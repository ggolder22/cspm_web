/**
 * ============================================================================
 * PÁGINA: SISTEMAS SOLARES  →  /ingenieria-solar/sistemas-solares/
 * ----------------------------------------------------------------------------
 * Acción principal: Consultar un proyecto.
 * BORRADOR: textos provisorios a validar por CSPM.
 * ============================================================================
 */
module.exports = {
  es: {
    draft: true,
    meta: {
      title: 'Sistemas solares on-grid, off-grid e híbridos',
      description: 'Diseño e instalación de sistemas solares conectados a red, aislados e híbridos con baterías para hogares, empresas, campos e industria.',
    },
    hero: {
      badge: 'Ingeniería Solar · Sistemas',
      title: 'El sistema solar <em>justo</em> para tu consumo',
      text: 'Conectado a red para reducir la factura, aislado para llegar donde no hay red, o híbrido para tener respaldo. Lo definimos con tus datos de consumo, no con una tabla genérica.',
      actions: [
        { label: 'Consultar un proyecto', link: 'contacto?unidad=sistemas-solares', icon: 'arrow-right' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'Tipos de sistema',
        title: 'Tres configuraciones, <em>un criterio</em>: tu uso real',
        variant: 'product',
        items: [
          {
            icon: '🔌', badge: 'On-grid',
            title: 'Conectado a red',
            text: 'Genera energía para autoconsumo e inyecta excedentes a la red bajo el régimen de generación distribuida.',
            list: ['Reducción directa de la factura', 'Sin baterías: menor inversión', 'Tramitación de usuario-generador'],
          },
          {
            icon: '🏕️', badge: 'Off-grid',
            title: 'Aislado',
            text: 'Autonomía total en sitios sin red: campos, puestos, estaciones de monitoreo y comunicaciones.',
            list: ['Banco de baterías dimensionado por días de autonomía', 'Ideal para cargas críticas remotas', 'Compatible con bombeo solar'],
          },
          {
            icon: '🔋', badge: 'Híbrido',
            title: 'Híbrido con respaldo',
            text: 'Combina red, paneles y baterías para mantener cargas esenciales ante cortes de suministro.',
            list: ['Respaldo ante cortes', 'Gestión inteligente de la energía', 'Escalable por etapas'],
          },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Economía circular aplicada',
        title: 'Opción con <em>paneles recuperados</em> certificados',
        paragraphs: [
          'Para proyectos off-grid, rurales o sociales podemos proponer paneles de segunda vida categoría A o B, certificados por nuestra unidad de Energía Circular.',
          'Menor inversión inicial, rendimiento medido y documentado, y un proyecto con menor huella de carbono.',
        ],
        link: { label: 'Conocé Energía Circular', link: 'energia-circular' },
        stats: [
          { value: 'A/B', label: 'Categorías aptas para generación' },
          { value: '100%', label: 'Equipos con ficha técnica medida' },
        ],
      },
    ],
    cta: { title: 'Diseñemos tu <em>sistema solar</em>', primary: 'Consultar un proyecto', unit: 'sistemas-solares' },
  },

  en: {
    draft: true,
    meta: {
      title: 'On-grid, off-grid and hybrid solar systems',
      description: 'Design and installation of grid-tied, off-grid and hybrid battery solar systems for homes, businesses, farms and industry.',
    },
    hero: {
      badge: 'Solar Engineering · Systems',
      title: 'The <em>right</em> solar system for your consumption',
      text: 'Grid-tied to cut your bill, off-grid to reach places without power lines, or hybrid for backup. We define it from your real consumption data, not a generic table.',
      actions: [
        { label: 'Discuss a project', link: 'contacto?unidad=sistemas-solares', icon: 'arrow-right' },
      ],
    },
    sections: [
      {
        type: 'cards',
        theme: 'sand',
        tag: 'System types',
        title: 'Three configurations, <em>one criterion</em>: your real use',
        variant: 'product',
        items: [
          {
            icon: '🔌', badge: 'On-grid',
            title: 'Grid-tied',
            text: 'Generates energy for self-consumption and exports surplus to the grid under distributed generation rules.',
            list: ['Direct reduction of your bill', 'No batteries: lower investment', 'Prosumer registration paperwork'],
          },
          {
            icon: '🏕️', badge: 'Off-grid',
            title: 'Off-grid',
            text: 'Full autonomy where there is no grid: farms, outposts, monitoring and telecom stations.',
            list: ['Battery bank sized by days of autonomy', 'Ideal for remote critical loads', 'Compatible with solar pumping'],
          },
          {
            icon: '🔋', badge: 'Hybrid',
            title: 'Hybrid with backup',
            text: 'Combines grid, panels and batteries to keep essential loads running during outages.',
            list: ['Backup during outages', 'Smart energy management', 'Scalable in stages'],
          },
        ],
      },
      {
        type: 'split',
        theme: 'light',
        tag: 'Circular economy in practice',
        title: 'An option with certified <em>recovered panels</em>',
        paragraphs: [
          'For off-grid, rural or social projects we can propose Category A or B second-life panels, certified by our Circular Energy unit.',
          'Lower upfront investment, measured and documented performance, and a project with a smaller carbon footprint.',
        ],
        link: { label: 'Explore Circular Energy', link: 'energia-circular' },
        stats: [
          { value: 'A/B', label: 'Categories suitable for generation' },
          { value: '100%', label: 'Equipment with measured data sheet' },
        ],
      },
    ],
    cta: { title: 'Let’s design your <em>solar system</em>', primary: 'Discuss a project', unit: 'sistemas-solares' },
  },
};
