/**
 * FORMULARIO DE CONTACTO
 * - Preselecciona la unidad si la URL trae ?unidad=<clave>.
 * - "Enviar": valida y hace POST a /api/contact (ver api/contact.js).
 * - "WhatsApp": arma un mensaje con los datos cargados y abre wa.me.
 * Los textos de estado vienen en atributos data-msg-* (traducidos en el HTML).
 */
const REQUIRED = ['name', 'email', 'unit', 'profile', 'message'];

export function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[type="submit"]');

  preselectUnit(form);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate(form)) return showStatus(status, status.dataset.msgRequired, 'error');

    const label = submit.querySelector('span');
    const original = label.textContent;
    submit.disabled = true;
    label.textContent = submit.dataset.labelSending;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      showStatus(status, status.dataset.msgSuccess, 'success');
    } catch (err) {
      console.error('[contact-form]', err);
      showStatus(status, status.dataset.msgError, 'error');
    } finally {
      submit.disabled = false;
      label.textContent = original;
    }
  });

  form.querySelector('[data-whatsapp-send]')?.addEventListener('click', () => {
    if (!validate(form, ['name', 'message'])) return showStatus(status, status.dataset.msgRequired, 'error');
    const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(buildWhatsappText(form))}`;
    window.open(url, '_blank', 'noopener');
  });
}

/* ------------------------------------------------------------------ helpers */

function preselectUnit(form) {
  const unit = new URLSearchParams(window.location.search).get('unidad');
  const select = form.elements.unit;
  if (unit && select?.querySelector(`option[value="${CSS.escape(unit)}"]`)) select.value = unit;
}

/* Marca los campos vacíos/ inválidos y devuelve true si todo está bien */
function validate(form, fields = REQUIRED) {
  let ok = true;
  fields.forEach((name) => {
    const field = form.elements[name];
    const valid = field.value.trim() !== '' && field.checkValidity();
    field.classList.toggle('is-invalid', !valid);
    ok = ok && valid;
  });
  return ok;
}

/* Texto legible para WhatsApp usando las etiquetas visibles del formulario */
function buildWhatsappText(form) {
  const selectedText = (name) => form.elements[name].selectedOptions[0]?.textContent;
  const value = (name) => form.elements[name].value.trim();

  return [
    `${value('name')}${value('company') ? ` (${value('company')})` : ''}`,
    `${selectedText('unit')} · ${selectedText('profile')}`,
    '',
    value('message'),
  ].join('\n');
}

function showStatus(el, message, type) {
  el.textContent = message;
  el.className = `form__status is-${type}`;
}
