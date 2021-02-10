import { mount, unMount, hideScrollBar, showScrollBar } from './slider.js';
import { mountFileInput, validateForm } from './forms/index.js';

var lang = document.documentElement.lang;
var mainForm = document.querySelector('.form form');
var containsHelper = mainForm.getAttribute('data-size') !== 'full';

var mq = window.matchMedia('(min-width: 40em)');
mq.addListener(handleSizeChange);

// Only hide the scrollbar when the window is viewport is wide enoughƒ
if (mq.matches) {
  hideScrollBar();
  mount();
}

if (!containsHelper) {
  mountFileInput();
} else {
  validateForm(mainForm, lang);
}

/**
 * Mounts or unmounts event listeners depending on viewport size
 * @param {mediaChangeEvent} e mediaList event
 */
function handleSizeChange(e) {
  if (e.matches) {
    hideScrollBar();
    mount();
  } else {
    showScrollBar();
    unMount();
  }
}
