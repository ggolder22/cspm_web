/**
 * ============================================================================
 * TEXTOS DE INTERFAZ (UI)  →  en plantillas: `t` (idioma actual)
 * ----------------------------------------------------------------------------
 * Acá van solo los textos COMUNES a todo el sitio (menú, botones, formulario,
 * footer). El contenido propio de cada página vive en src/_data/pages/*.js.
 *
 * Regla: ES y EN deben tener exactamente las mismas claves.
 * ============================================================================
 */
module.exports = {
  /* ------------------------------------------------------------------ ES */
  es: {
    langName: 'Español',

    /* Nombres de páginas y secciones (menú, breadcrumbs, footer) */
    labels: {
      'home': 'Inicio',
      'ingenieria-solar': 'Ingeniería Solar',
      'bombeo-solar': 'Bombeo solar',
      'mantenimiento': 'Instalación y mantenimiento',
      'sistemas-solares': 'Sistemas solares',
      'energia-circular': 'Energía Circular',
      'paneles': 'Paneles recuperados',
      'iluminacion': 'Iluminación',
      'baterias': 'Baterías',
      'heliara-one': 'Heliara One',
      'heliara-producto': 'Producto y funcionamiento',
      'heliara-estado': 'Estado de desarrollo',
      'heliara-consultas': 'Consultas',
      'nosotros': 'Nosotros',
      'contacto': 'Contacto',
      'blog': 'Blog',
    },

    nav: {
      skip: 'Saltar al contenido',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
      contact: 'Contacto',
      breadcrumb: 'Ruta de navegación',
      language: 'Idioma',
      main: 'Principal',
      more: 'Ver más',
    },

    /* Banda de contacto al pie de cada página (cada página puede sobrescribirla) */
    cta: {
      title: 'Hablemos de tu <em>proyecto</em>',
      text: 'Contanos qué necesitás y te respondemos con una propuesta técnica concreta.',
      primary: 'Ir al formulario',
      whatsapp: 'Escribir por WhatsApp',
      whatsappMessage: 'Hola CSPM, quiero hacer una consulta.',
    },

    footer: {
      tagline: 'Ingeniería solar, energía circular y desarrollo de producto.',
      units: 'Unidades',
      company: 'Empresa',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados · Metodología registrada DNDA Argentina',
    },

    form: {
      title: 'Contacto y registro comercial',
      intro: 'Completá el formulario y te respondemos por email o WhatsApp. Si sos proveedor, instalador o querés registrarte como cliente comercial, indicálo en el perfil.',
      name: 'Nombre y apellido',
      company: 'Empresa',
      email: 'Email',
      phone: 'Teléfono / WhatsApp',
      unit: 'Unidad de interés',
      profile: 'Perfil',
      message: 'Mensaje',
      messagePlaceholder: 'Contanos brevemente tu proyecto, ubicación y plazos.',
      optional: 'opcional',
      units: {
        'bombeo-solar': 'Bombeo solar',
        'mantenimiento': 'Instalación y mantenimiento',
        'sistemas-solares': 'Sistemas solares',
        'energia-circular': 'Energía Circular (paneles, baterías, iluminación)',
        'heliara-one': 'Heliara One',
        'otro': 'Otro / no estoy seguro',
      },
      profiles: {
        'proyecto': 'Necesito un proyecto o servicio',
        'retiro': 'Tengo equipos para retirar o recuperar',
        'compra': 'Quiero comprar equipos recuperados',
        'comercial': 'Registro comercial (proveedor, instalador, distribuidor)',
      },
      submit: 'Enviar consulta',
      whatsapp: 'Enviar por WhatsApp',
      sending: 'Enviando…',
      success: '¡Gracias! Recibimos tu consulta y te vamos a responder a la brevedad.',
      error: 'No pudimos enviar el formulario. Probá por WhatsApp o escribinos a',
      required: 'Completá los campos obligatorios.',
      directTitle: 'Contacto directo',
    },

    draft: 'Borrador — contenido provisorio pendiente de revisión',

    blog: {
      tag: 'Publicaciones',
      title: 'Blog <em>CSPM</em>',
      intro: 'Artículos técnicos sobre energía solar, economía circular, gestión de activos RAEE y huella de carbono.',
      readMore: 'Leer artículo →',
      back: '← Volver al blog',
      empty: 'Los primeros artículos están en camino.',
      authorRole: 'Fundador · CSPM',
    },

    notFound: {
      title: 'Página no encontrada',
      text: 'La página que buscás no existe o cambió de dirección.',
      back: 'Volver al inicio',
    },
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    langName: 'English',

    labels: {
      'home': 'Home',
      'ingenieria-solar': 'Solar Engineering',
      'bombeo-solar': 'Solar pumping',
      'mantenimiento': 'Installation & maintenance',
      'sistemas-solares': 'Solar systems',
      'energia-circular': 'Circular Energy',
      'paneles': 'Recovered panels',
      'iluminacion': 'Lighting',
      'baterias': 'Batteries',
      'heliara-one': 'Heliara One',
      'heliara-producto': 'Product & operation',
      'heliara-estado': 'Development status',
      'heliara-consultas': 'Enquiries',
      'nosotros': 'About us',
      'contacto': 'Contact',
      'blog': 'Blog',
    },

    nav: {
      skip: 'Skip to content',
      menu: 'Open menu',
      close: 'Close menu',
      contact: 'Contact',
      breadcrumb: 'Breadcrumb',
      language: 'Language',
      main: 'Main',
      more: 'Learn more',
    },

    cta: {
      title: 'Let’s talk about your <em>project</em>',
      text: 'Tell us what you need and we will get back to you with a concrete technical proposal.',
      primary: 'Go to the form',
      whatsapp: 'Message us on WhatsApp',
      whatsappMessage: 'Hello CSPM, I would like to make an enquiry.',
    },

    footer: {
      tagline: 'Solar engineering, circular energy and product development.',
      units: 'Business units',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved · Methodology registered with DNDA Argentina',
    },

    form: {
      title: 'Contact & business registration',
      intro: 'Fill in the form and we will reply by email or WhatsApp. If you are a supplier, installer or want to register as a business customer, select it in your profile.',
      name: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      unit: 'Area of interest',
      profile: 'Profile',
      message: 'Message',
      messagePlaceholder: 'Briefly describe your project, location and timeline.',
      optional: 'optional',
      units: {
        'bombeo-solar': 'Solar pumping',
        'mantenimiento': 'Installation & maintenance',
        'sistemas-solares': 'Solar systems',
        'energia-circular': 'Circular Energy (panels, batteries, lighting)',
        'heliara-one': 'Heliara One',
        'otro': 'Other / not sure',
      },
      profiles: {
        'proyecto': 'I need a project or service',
        'retiro': 'I have equipment to retire or recover',
        'compra': 'I want to buy recovered equipment',
        'comercial': 'Business registration (supplier, installer, distributor)',
      },
      submit: 'Send enquiry',
      whatsapp: 'Send via WhatsApp',
      sending: 'Sending…',
      success: 'Thank you! We received your enquiry and will get back to you shortly.',
      error: 'We could not send the form. Try WhatsApp or email us at',
      required: 'Please fill in the required fields.',
      directTitle: 'Direct contact',
    },

    draft: 'Draft — provisional content pending review',

    blog: {
      tag: 'Articles',
      title: 'CSPM <em>Blog</em>',
      intro: 'Technical articles on solar energy, circular economy, e-waste asset management and carbon footprint.',
      readMore: 'Read article →',
      back: '← Back to blog',
      empty: 'The first articles are on their way.',
      authorRole: 'Founder · CSPM',
    },

    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has moved.',
      back: 'Back to home',
    },
  },
};
