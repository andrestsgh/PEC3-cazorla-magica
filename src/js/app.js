/* Need to set main marginTop for the fixed header responsive */

/* Event on content loaded */
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main-content');
  main.style.marginTop = `${header.offsetHeight}px`;
});

/* Event on resized window */
window.addEventListener('resize', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main-content');
  main.style.marginTop = `${header.offsetHeight}px`;
});