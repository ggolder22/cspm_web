/**
 * ============================================================================
 * PÁGINA: ENERGÍA CIRCULAR  →  /energia-circular/  ·  /en/circular-energy/
 * ----------------------------------------------------------------------------
 * Contenido migrado de la landing anterior (cspm.com.ar): modelo de dos
 * flujos, líneas de recuperación, proceso de 9 etapas, categorías A/B/C,
 * impacto y minería. Las anclas #paneles #iluminacion #baterias las usa el menú.
 * ============================================================================
 */
module.exports = {
  es: {
    meta: {
      title: 'Energía Circular — Segunda vida para paneles, baterías e iluminación',
      description: 'CSPM diagnostica, clasifica y certifica paneles solares, baterías y luminarias usadas con trazabilidad completa. Retiro RAEE y equipos recuperados certificados.',
    },
    hero: {
      badge: 'Economía circular · Segunda vida',
      title: 'Damos <em>segunda vida</em> a la tecnología solar',
      text: 'Diagnosticamos, clasificamos y certificamos paneles solares, luminarias y baterías usadas con estándares técnicos rigurosos — transformando residuos en activos de valor real.',
      actions: [
        { label: 'Conocer el proceso', link: '#proceso', icon: 'arrow-right' },
        { label: 'Consultar soluciones', link: 'contacto?unidad=energia-circular', variant: 'secondary' },
      ],
      stats: [
        { value: '94%', label: 'Tasa de recuperación' },
        { value: '9', label: 'Etapas certificadas' },
        { value: 'A/B/C', label: 'Categorías CSPM' },
      ],
    },
    sections: [
      {
        type: 'flow',
        id: 'modelo',
        theme: 'light',
        align: 'center',
        tag: 'Cómo funciona',
        title: 'Un ciclo que funciona para <em>los dos lados</em>',
        intro: 'CSPM opera en los dos extremos del ciclo de vida solar. Eso no es doble negocio — es lo que hace posible la economía circular real.',
        sides: [
          {
            label: 'Generadores RAEE',
            title: 'Empresas con activos al final de su vida útil',
            text: 'Parques solares, instaladores, distribuidores y empresas de mantenimiento que necesitan retirar paneles, baterías y luminarias de forma responsable y documentada.',
            list: ['Retiro autorizado bajo normativa RAEE', 'Documentación de disposición final para auditorías', 'Trazabilidad completa del activo retirado', 'Reducción de pasivo ambiental certificada'],
          },
          {
            label: 'Nuevos proyectos',
            title: 'Empresas que incorporan energía solar certificada',
            text: 'Operaciones mineras, proyectos rurales, industrias y desarrolladores que buscan energía solar a menor CapEx con documentación técnica válida para reportes ESG.',
            list: ['Paneles certificados con clasificación A/B/C', 'Ficha técnica de rendimiento real medido', 'Documentación válida para reportes de carbono', 'Precio competitivo frente a equipamiento nuevo'],
          },
        ],
        hub: { icon: '⚙️', label: 'Diagnóstico · Reparación · Certificación' },
        note: {
          icon: '🔍',
          text: '<strong>Sobre el modelo económico:</strong> el retiro de activos tiene un costo de gestión que cubre logística, diagnóstico técnico y reparación — igual que cualquier operador RAEE autorizado. Ese costo hace posible que los activos recuperados lleguen al mercado a precios competitivos. <strong>Ambos lados financian el ciclo, y ambos se benefician de él.</strong>',
        },
      },
      {
        type: 'cards',
        id: 'lineas',
        theme: 'sand',
        tag: 'Líneas de recuperación',
        title: 'Tres líneas de <em>recuperación certificada</em>',
        intro: 'Protocolos específicos para cada tecnología, desarrollados y validados en campo con miles de unidades procesadas.',
        variant: 'product',
        items: [
          {
            id: 'paneles', icon: '☀️', badge: 'Silicio cristalino',
            title: 'Paneles recuperados',
            text: 'Módulos monocristalinos, policristalinos, PERC, bifaciales y half-cut. Diagnóstico eléctrico completo con corrección a condiciones STC y detección de PID y hot spots.',
            specs: [['Tecnologías', 'Mono · Poli · PERC · Bifacial'], ['Parámetros clave', 'Voc · Isc · Raisla'], ['Seguridad mínima', '40 MΩ·m²'], ['Recuperación típica', '> 90 %']],
          },
          {
            id: 'iluminacion', icon: '💡', badge: 'LED · Solar',
            title: 'Iluminación',
            text: 'Sistemas LED solares autónomos, alumbrado público y artefactos de interior. Verificación de driver, eficacia lumínica y estimación de vida útil residual documentada.',
            specs: [['Tipos', 'Solar · Red · Autónoma'], ['Parámetros clave', 'Lúmenes · Eficacia · CRI'], ['Componentes', 'Driver · LED · Óptica'], ['Resultado', 'Ficha técnica CSPM']],
          },
          {
            id: 'baterias', icon: '🔋', badge: 'Ion-litio · Pb-ácido',
            title: 'Baterías',
            text: 'Sistemas LFP, NMC y VRLA. Diagnóstico de estado de salud (SoH), balanceo de celdas y capacidad residual con protocolo de seguridad diferenciado por química.',
            specs: [['Tecnologías', 'LFP · NMC · VRLA'], ['Parámetros clave', 'SoH · Capacidad · Tensión'], ['Rango operativo', '12 V — 800 V'], ['Protocolo especial', 'Thermal runaway']],
          },
        ],
      },
      {
        type: 'steps',
        id: 'proceso',
        theme: 'forest',
        align: 'center',
        tag: 'Cómo trabajamos',
        title: 'Un proceso <em>riguroso</em> de 9 etapas',
        intro: 'Cada activo atraviesa un protocolo técnico estandarizado que garantiza clasificaciones confiables y trazabilidad completa — desde que ingresa hasta que sale certificado.',
        items: [
          { icon: '📥', title: 'Recepción', text: 'Registro con ID único irrepetible, fotografías estandarizadas y datos completos de la placa del fabricante.' },
          { icon: '🔍', title: 'Clasificación visual', text: 'Inspección en 5 criterios objetivos que organiza el flujo de diagnóstico y prioriza los recursos del centro.' },
          { icon: '⚡', title: 'Diagnóstico eléctrico', text: 'Medición de Voc, Isc y resistencia de aislamiento con instrumentos calibrados bajo condiciones controladas.' },
          { icon: '🔧', title: 'Reparación', text: 'Protocolos R-01 a R-04: sustitución de cajas, sellados, limpieza profunda y regeneración PID cuando aplica.' },
          { icon: '📊', title: 'Ensayo final', text: 'Triple medición que valida la eficiencia residual corregida a las condiciones de referencia internacionales STC.' },
          { icon: '✅', title: 'Validación', text: 'El algoritmo CSPM calcula la categoría sugerida. Un validador habilitado confirma la clasificación definitiva.' },
          { icon: '📄', title: 'Certificación', text: 'Ficha técnica y certificado CSPM con trazabilidad completa e inmutable, verificable por cualquier tercero.' },
          { icon: '🏭', title: 'Almacenamiento', text: 'Zonas A, B, C y D con condiciones controladas. Localización precisa de cada activo por ID en el sistema digital.' },
          { icon: '🌱', title: 'Segunda vida', text: 'El activo sale al mercado con documentación técnica completa. Su historia queda registrada para siempre en el sistema.' },
        ],
      },
      {
        type: 'cards',
        id: 'categorias',
        theme: 'sand',
        align: 'center',
        tag: 'Clasificación técnica',
        title: 'Tres categorías. <em>Un estándar</em> verificable.',
        intro: 'Nuestra clasificación convierte la incertidumbre del mercado de segunda vida en información objetiva, documentada y auditable por cualquier comprador o regulador.',
        variant: 'tier',
        items: [
          {
            label: 'Categoría A', value: '≥ 80%', title: 'Eficiencia residual',
            text: 'Activos en excelente estado técnico. Aptos para instalaciones de generación en cualquier escala.',
            list: ['Voc ≥ 85% del nominal corregido', 'Isc ≥ 85% del nominal corregido', 'Factor de forma ≥ 0,65', 'Aislamiento ≥ 40 MΩ·m²', 'Sin defectos de seguridad activos'],
          },
          {
            label: 'Categoría B', value: '50–79%', title: 'Eficiencia residual',
            text: 'Activos funcionales con degradación parcial. Aptos para sistemas off-grid, electrificación rural y proyectos sociales.',
            list: ['Voc ≥ 70% del nominal corregido', 'Isc ≥ 65% del nominal corregido', 'Factor de forma ≥ 0,55', 'Aislamiento ≥ 40 MΩ·m²', 'Ficha técnica con condicionantes'],
          },
          {
            label: 'Categoría C', value: '&lt; 50%', title: 'Eficiencia residual',
            text: 'Activos con generación reducida pero seguros eléctricamente. Aptos para educación técnica, proyectos experimentales o reciclaje certificado.',
            list: ['Generación mínima funcional', 'Aislamiento ≥ 40 MΩ·m² (obligatorio)', 'Sin riesgo eléctrico activo confirmado', 'Ficha técnica con advertencias', 'Derivación a reciclaje documentada'],
          },
        ],
      },
      {
        type: 'split',
        id: 'impacto',
        theme: 'moss',
        tag: 'Impacto real',
        title: 'Cada módulo recuperado es <em>carbono evitado</em>',
        paragraphs: [
          'CSPM cuantifica el impacto ambiental de cada operación: toneladas de CO₂ evitadas, kilogramos de materiales valiosos recuperados y energía embebida preservada.',
        ],
        stats: [
          { value: '94', unit: '%', label: 'Tasa media de recuperación del material procesado' },
          { value: '25', unit: 'kg', label: 'Materiales recuperables por módulo: vidrio, aluminio, silicio, plata' },
          { value: '−1.5', unit: 't', label: 'CO₂eq evitado por tonelada de módulos recuperados vs. descartados' },
          { value: '+10', unit: 'años', label: 'Vida útil adicional promedio de los activos Categoría A' },
        ],
      },
      {
        type: 'split',
        id: 'mineria',
        theme: 'dark',
        tag: 'Industria minera',
        title: 'Reducción de huella de carbono con <em>economía circular solar</em>',
        paragraphs: [
          'Las operaciones mineras dependen de energía en sitios remotos, y esa energía representa una porción significativa de su <strong>Scope 2</strong>. Los paneles certificados de segunda vida ofrecen una vía concreta y documentada para reducir esa huella — a menor CapEx que los paneles nuevos.',
          'No es material "usado sin garantía": es tecnología clasificada bajo estándares rigurosos, con documentación válida para reportes ESG, auditorías de sustentabilidad e informes de carbono.',
        ],
        link: { label: 'Consulta técnica para tu proyecto minero', link: 'contacto?unidad=energia-circular' },
        items: [
          { icon: '📉', title: 'Reducción de Scope 2 documentada', text: 'Cada panel certificado tiene ficha técnica con generación esperada: toneladas de CO₂eq evitadas, con números reales.' },
          { icon: '💰', title: 'Menor CapEx en renovables', text: 'Paneles A y B funcionan a plena capacidad o con degradación controlada, liberando presupuesto sin sacrificar performance.' },
          { icon: '📋', title: 'Válido para auditorías ESG', text: 'Documentación trazable de origen, diagnóstico, clasificación y rendimiento. Apta para due diligence e informes GRI.' },
        ],
      },
    ],
    cta: {
      title: 'El futuro de la energía solar es <em>circular</em>',
      text: '¿Tenés equipos fotovoltaicos que ya no usás? ¿Querés saber el valor real de un lote de paneles, baterías o luminarias? Contactanos.',
      primary: 'Consultar soluciones',
      unit: 'energia-circular',
    },
  },

  en: {
    meta: {
      title: 'Circular Energy — Second life for panels, batteries and lighting',
      description: 'CSPM diagnoses, classifies and certifies used solar panels, batteries and lighting with full traceability. E-waste collection and certified recovered equipment.',
    },
    hero: {
      badge: 'Circular economy · Second life',
      title: 'We give <em>second life</em> to solar technology',
      text: 'We diagnose, classify and certify used solar panels, lighting and batteries to rigorous technical standards — turning waste into assets of real value.',
      actions: [
        { label: 'See the process', link: '#proceso', icon: 'arrow-right' },
        { label: 'Ask about solutions', link: 'contacto?unidad=energia-circular', variant: 'secondary' },
      ],
      stats: [
        { value: '94%', label: 'Recovery rate' },
        { value: '9', label: 'Certified stages' },
        { value: 'A/B/C', label: 'CSPM categories' },
      ],
    },
    sections: [
      {
        type: 'flow',
        id: 'modelo',
        theme: 'light',
        align: 'center',
        tag: 'How it works',
        title: 'A cycle that works for <em>both sides</em>',
        intro: 'CSPM operates at both ends of the solar life cycle. That’s not a double business — it’s what makes a real circular economy possible.',
        sides: [
          {
            label: 'E-waste generators',
            title: 'Companies with end-of-life assets',
            text: 'Solar parks, installers, distributors and maintenance companies that need to retire panels, batteries and lighting responsibly and with documentation.',
            list: ['Authorised collection under e-waste regulations', 'Disposal documentation for audits', 'Full traceability of the retired asset', 'Certified reduction of environmental liability'],
          },
          {
            label: 'New projects',
            title: 'Companies adopting certified solar energy',
            text: 'Mining operations, rural projects, industries and developers seeking solar energy at lower CapEx with technical documentation valid for ESG reporting.',
            list: ['Certified panels with A/B/C classification', 'Data sheet with real measured performance', 'Documentation valid for carbon reporting', 'Competitive price vs. new equipment'],
          },
        ],
        hub: { icon: '⚙️', label: 'Diagnosis · Repair · Certification' },
        note: {
          icon: '🔍',
          text: '<strong>About the business model:</strong> asset collection has a management cost covering logistics, technical diagnosis and repair — like any authorised e-waste operator. That cost lets recovered assets reach the market at competitive prices. <strong>Both sides fund the cycle, and both benefit from it.</strong>',
        },
      },
      {
        type: 'cards',
        id: 'lineas',
        theme: 'sand',
        tag: 'Recovery lines',
        title: 'Three lines of <em>certified recovery</em>',
        intro: 'Technology-specific protocols, developed and field-validated with thousands of units processed.',
        variant: 'product',
        items: [
          {
            id: 'paneles', icon: '☀️', badge: 'Crystalline silicon',
            title: 'Recovered panels',
            text: 'Monocrystalline, polycrystalline, PERC, bifacial and half-cut modules. Full electrical diagnosis with STC correction and PID and hot-spot detection.',
            specs: [['Technologies', 'Mono · Poly · PERC · Bifacial'], ['Key parameters', 'Voc · Isc · Riso'], ['Minimum safety', '40 MΩ·m²'], ['Typical recovery', '> 90 %']],
          },
          {
            id: 'iluminacion', icon: '💡', badge: 'LED · Solar',
            title: 'Lighting',
            text: 'Autonomous solar LED systems, street lighting and indoor fixtures. Driver verification, luminous efficacy and documented residual lifetime estimate.',
            specs: [['Types', 'Solar · Grid · Autonomous'], ['Key parameters', 'Lumens · Efficacy · CRI'], ['Components', 'Driver · LED · Optics'], ['Outcome', 'CSPM data sheet']],
          },
          {
            id: 'baterias', icon: '🔋', badge: 'Li-ion · Lead-acid',
            title: 'Batteries',
            text: 'LFP, NMC and VRLA systems. State-of-health (SoH) diagnosis, cell balancing and residual capacity with a chemistry-specific safety protocol.',
            specs: [['Technologies', 'LFP · NMC · VRLA'], ['Key parameters', 'SoH · Capacity · Voltage'], ['Operating range', '12 V — 800 V'], ['Special protocol', 'Thermal runaway']],
          },
        ],
      },
      {
        type: 'steps',
        id: 'proceso',
        theme: 'forest',
        align: 'center',
        tag: 'How we work',
        title: 'A <em>rigorous</em> 9-stage process',
        intro: 'Every asset goes through a standardised technical protocol that guarantees reliable classification and full traceability — from intake to certified output.',
        items: [
          { icon: '📥', title: 'Intake', text: 'Registration with a unique ID, standardised photographs and complete manufacturer nameplate data.' },
          { icon: '🔍', title: 'Visual classification', text: 'Inspection against 5 objective criteria that organises the diagnostic flow and prioritises resources.' },
          { icon: '⚡', title: 'Electrical diagnosis', text: 'Measurement of Voc, Isc and insulation resistance with calibrated instruments under controlled conditions.' },
          { icon: '🔧', title: 'Repair', text: 'Protocols R-01 to R-04: junction box replacement, sealing, deep cleaning and PID regeneration when applicable.' },
          { icon: '📊', title: 'Final test', text: 'Triple measurement validating residual efficiency corrected to international STC reference conditions.' },
          { icon: '✅', title: 'Validation', text: 'The CSPM algorithm suggests a category. A qualified validator confirms the final classification.' },
          { icon: '📄', title: 'Certification', text: 'CSPM data sheet and certificate with complete, immutable traceability, verifiable by any third party.' },
          { icon: '🏭', title: 'Storage', text: 'Zones A, B, C and D under controlled conditions. Precise location of every asset by ID in the digital system.' },
          { icon: '🌱', title: 'Second life', text: 'The asset reaches the market with complete technical documentation. Its history is permanently recorded.' },
        ],
      },
      {
        type: 'cards',
        id: 'categorias',
        theme: 'sand',
        align: 'center',
        tag: 'Technical classification',
        title: 'Three categories. <em>One verifiable</em> standard.',
        intro: 'Our classification turns the uncertainty of the second-life market into objective, documented information auditable by any buyer or regulator.',
        variant: 'tier',
        items: [
          {
            label: 'Category A', value: '≥ 80%', title: 'Residual efficiency',
            text: 'Assets in excellent technical condition. Suitable for generation installations at any scale.',
            list: ['Voc ≥ 85% of corrected nominal', 'Isc ≥ 85% of corrected nominal', 'Fill factor ≥ 0.65', 'Insulation ≥ 40 MΩ·m²', 'No active safety defects'],
          },
          {
            label: 'Category B', value: '50–79%', title: 'Residual efficiency',
            text: 'Functional assets with partial degradation. Suitable for off-grid systems, rural electrification and social projects.',
            list: ['Voc ≥ 70% of corrected nominal', 'Isc ≥ 65% of corrected nominal', 'Fill factor ≥ 0.55', 'Insulation ≥ 40 MΩ·m²', 'Data sheet with conditions'],
          },
          {
            label: 'Category C', value: '&lt; 50%', title: 'Residual efficiency',
            text: 'Assets with reduced but electrically safe generation. Suitable for technical education, experimental projects or certified recycling.',
            list: ['Minimum functional generation', 'Insulation ≥ 40 MΩ·m² (mandatory)', 'No active electrical hazard confirmed', 'Data sheet with warnings', 'Documented referral to recycling'],
          },
        ],
      },
      {
        type: 'split',
        id: 'impacto',
        theme: 'moss',
        tag: 'Real impact',
        title: 'Every recovered module is <em>avoided carbon</em>',
        paragraphs: [
          'CSPM quantifies the environmental impact of every operation: tonnes of CO₂ avoided, kilograms of valuable materials recovered and embodied energy preserved.',
        ],
        stats: [
          { value: '94', unit: '%', label: 'Average recovery rate of processed material' },
          { value: '25', unit: 'kg', label: 'Recoverable materials per module: glass, aluminium, silicon, silver' },
          { value: '−1.5', unit: 't', label: 'CO₂eq avoided per tonne of recovered vs. discarded modules' },
          { value: '+10', unit: 'years', label: 'Average additional lifetime of Category A assets' },
        ],
      },
      {
        type: 'split',
        id: 'mineria',
        theme: 'dark',
        tag: 'Mining industry',
        title: 'Carbon footprint reduction through <em>circular solar</em>',
        paragraphs: [
          'Mining operations depend on energy at remote sites, and that energy is a significant share of their <strong>Scope 2</strong> emissions. Certified second-life panels offer a concrete, documented way to reduce that footprint — at lower CapEx than new panels.',
          'This is not “used material without warranty”: it is technology classified under rigorous standards, with documentation valid for ESG reports, sustainability audits and carbon reporting.',
        ],
        link: { label: 'Technical consultation for your mining project', link: 'contacto?unidad=energia-circular' },
        items: [
          { icon: '📉', title: 'Documented Scope 2 reduction', text: 'Every certified panel has a data sheet with expected generation: tonnes of CO₂eq avoided, with real numbers.' },
          { icon: '💰', title: 'Lower renewable CapEx', text: 'Category A and B panels run at full or controlled-degradation capacity, freeing budget without sacrificing performance.' },
          { icon: '📋', title: 'Valid for ESG audits', text: 'Traceable documentation of origin, diagnosis, classification and performance. Suitable for due diligence and GRI reports.' },
        ],
      },
    ],
    cta: {
      title: 'The future of solar energy is <em>circular</em>',
      text: 'Do you have photovoltaic equipment you no longer use? Want to know the real value of a batch of panels, batteries or lighting? Get in touch.',
      primary: 'Ask about solutions',
      unit: 'energia-circular',
    },
  },
};
