/**
 * ============================================================================
 * POST /api/contact — Función serverless de Vercel
 * ----------------------------------------------------------------------------
 * Recibe el formulario de contacto, lo valida y lo envía por email usando
 * Resend (https://resend.com, plan gratuito: 3.000 emails/mes).
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   clave de API de Resend               (obligatoria)
 *   CONTACT_TO       casilla que recibe las consultas     (ej: ggolder@cspm.com.ar)
 *   CONTACT_FROM     remitente verificado en Resend       (ej: "CSPM Web <web@cspm.com.ar>")
 *                    Hasta verificar el dominio se puede usar "onboarding@resend.dev".
 * ============================================================================
 */

/* Campos aceptados y su largo máximo. Cualquier otro campo se ignora. */
const FIELDS = {
  name: 120,
  company: 120,
  email: 160,
  phone: 40,
  unit: 40,
  profile: 40,
  message: 3000,
  locale: 5,
};
const REQUIRED = ['name', 'email', 'unit', 'profile', 'message'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Etiquetas legibles para el email interno */
const LABELS = {
  name: 'Nombre', company: 'Empresa', email: 'Email', phone: 'Teléfono',
  unit: 'Unidad', profile: 'Perfil', locale: 'Idioma', message: 'Mensaje',
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const body = parseBody(req.body);

  /* Honeypot: si el campo oculto viene completo es un bot. Respondemos OK
     para no darle pistas, pero no enviamos nada. */
  if (body.website) return res.status(200).json({ ok: true });

  const data = sanitize(body);
  const errors = validate(data);
  if (errors.length) return res.status(400).json({ ok: false, errors });

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('[contact] Faltan variables de entorno RESEND_API_KEY / CONTACT_TO');
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM || 'CSPM Web <onboarding@resend.dev>',
        to: [CONTACT_TO],
        reply_to: data.email,
        subject: `[Web CSPM] ${data.unit} · ${data.name}${data.company ? ` (${data.company})` : ''}`,
        text: formatEmail(data),
      }),
    });

    if (!response.ok) {
      console.error('[contact] Resend respondió', response.status, await response.text());
      return res.status(502).json({ ok: false, error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Error de red', err);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
};

/* --------------------------------------------------------------- helpers */

function parseBody(raw) {
  if (!raw) return {};
  if (typeof raw === 'object') return raw;
  try { return JSON.parse(raw); } catch { return {}; }
}

/* Deja solo los campos conocidos, como texto, recortados a su largo máximo */
function sanitize(body) {
  return Object.fromEntries(
    Object.entries(FIELDS).map(([key, max]) => [key, String(body[key] ?? '').trim().slice(0, max)]),
  );
}

function validate(data) {
  const errors = REQUIRED.filter((key) => !data[key]);
  if (data.email && !EMAIL_RE.test(data.email)) errors.push('email');
  return errors;
}

function formatEmail(data) {
  const lines = Object.keys(LABELS)
    .filter((key) => key !== 'message' && data[key])
    .map((key) => `${LABELS[key]}: ${data[key]}`);
  return `${lines.join('\n')}\n\n${LABELS.message}:\n${data.message}`;
}
