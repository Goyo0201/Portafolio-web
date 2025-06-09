// js/main.js
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu-mobile');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
