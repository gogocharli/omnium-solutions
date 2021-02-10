import { mount, unMount, hideScrollBar, showScrollBar } from './slider.js';

const mq = window.matchMedia('(min-width: 40em)');

mq.addListener(handleSizeChange);
mq.matches && hideScrollBar() && mount();

function handleSizeChange(e) {
  if (e.matches) {
    hideScrollBar();
    mount();
  } else {
    showScrollBar();
    unMount();
  }
}
