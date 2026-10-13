/**
 * ============================================================================
 * PUNTO DE ENTRADA DE JAVASCRIPT
 * ----------------------------------------------------------------------------
 * Cada funcionalidad vive en su propio módulo (js/modules/) y se activa solo
 * si en la página existe el elemento que necesita. Para sumar una nueva:
 * crear el módulo, importarlo acá y agregarlo a la lista.
 * ============================================================================
 */
import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initContactForm } from './modules/contact-form.js';

[initNav, initReveal, initContactForm].forEach((init) => init());
