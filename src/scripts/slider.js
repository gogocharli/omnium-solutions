const slidesWrapper = document.querySelector('.clients');
const slides = slidesWrapper.querySelector('.slides');

function mount() {
  slidesWrapper.addEventListener('mousemove', handleMouseMove);
  slidesWrapper.addEventListener('click', handleClick);
}

function unMount() {
  slidesWrapper.removeEventListener('mousemove', handleMouseMove);
  slidesWrapper.removeEventListener('click', handleClick);
}

function hideScrollBar() {
  slides.style.overflowX = 'hidden';
}
function showScrollBar() {
  slides.style.overflowX = 'scroll';
}

function handleClick(e) {
  const width = slidesWrapper.getBoundingClientRect().width;
  const orientation = getMouseOrientation(e.clientX, width);
  scrollToSlide(orientation);
}

function handleMouseMove(e) {
  const width = slidesWrapper.getBoundingClientRect().width;
  const orientation = getMouseOrientation(e.clientX, width);
  showArrow(orientation);
}

function getMouseOrientation(mousePosition, containerWidth) {
  return mousePosition >= containerWidth / 2 ? 'right' : 'left';
}

function showArrow(mouseOrientation) {
  if (mouseOrientation === 'right') {
    slidesWrapper.setAttribute('data-arrow', 'right');
  } else {
    slidesWrapper.setAttribute('data-arrow', 'left');
  }
}

function scrollToSlide(orientation) {
  const scrollOpts = { top: 0, left: 0, behavior: 'smooth' };
  if (orientation === 'right') {
    scrollOpts.left = slides.getBoundingClientRect().width;
  }
  slides.scrollTo(scrollOpts);
}

export { mount, unMount, hideScrollBar, showScrollBar };
