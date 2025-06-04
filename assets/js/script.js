const imagens = document.querySelectorAll('.carrossel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function mostrarImagem(idx) {
    imagens.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
    });
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
});

// Troca automática a cada 5 segundos
autoplay();
function autoplay() {
    setInterval(() => {
        index = (index + 1) % imagens.length;
        mostrarImagem(index);
    }, 2000);
}