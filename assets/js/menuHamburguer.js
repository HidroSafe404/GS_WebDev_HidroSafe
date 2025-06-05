// Menu Hamburguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Fecha o menu ao clicar em um link (opcional)
document.querySelectorAll('.lista-header a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});