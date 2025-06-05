// Menu Hamburguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});


document.querySelectorAll('.lista-header a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});