const menuButton = document.querySelector('#mobile-menu-btn');
const menu = document.querySelector('#navbar-menu');
const header = document.querySelector('.header');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');
  menuButton.innerHTML = isOpen ? '&#10006;' : '&#9776;';
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuButton.innerHTML = '&#9776;';
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
