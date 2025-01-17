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

function loadVideo(placeholder, urlVideo) {
  const iframe = document.createElement('iframe');
  iframe.src = urlVideo;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.style.width = "100%";
  iframe.style.height= placeholder.height+'px';
  placeholder.parentNode.replaceChild(iframe, placeholder);
}