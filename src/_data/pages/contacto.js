/**
 * ============================================================================
 * PÁGINA: CONTACTO  →  /contacto/  ·  /en/contact/
 * ----------------------------------------------------------------------------
 * Formulario de contacto y registro comercial (textos en i18n.js → form).
 * Sin banda CTA final (cta: false) porque la página ya es el contacto.
 * ============================================================================
 */
module.exports = {
  es: {
    meta: {
      title: 'Contacto y registro comercial',
      description: 'Consultá por energía solar fotovoltaica (paneles, iluminación, baterías) o térmica (Heliara One). Formulario, email y WhatsApp.',
    },
    hero: {
      badge: 'Contacto',
      title: 'Hablemos de tu <em>proyecto</em>',
      text: 'Respondemos todas las consultas con una persona del equipo técnico. Elegí el canal que te quede más cómodo.',
    },
    sections: [{ type: 'contact', theme: 'sand' }],
    cta: false,
  },

  en: {
    meta: {
      title: 'Contact & business registration',
      description: 'Ask about solar photovoltaic (panels, lighting, batteries) or solar thermal (Heliara One). Form, email and WhatsApp.',
    },
    hero: {
      badge: 'Contact',
      title: 'Let’s talk about your <em>project</em>',
      text: 'Every enquiry is answered by a member of our technical team. Choose the channel that suits you best.',
    },
    sections: [{ type: 'contact', theme: 'sand' }],
    cta: false,
  },
};
