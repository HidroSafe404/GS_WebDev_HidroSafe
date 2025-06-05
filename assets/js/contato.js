document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');
    const sucesso = document.getElementById('sucesso');

    function validarNome(valor) {
        return /^[A-Za-zÀ-ÿ\s]+$/.test(valor.trim());
    }

    function validarEmail(valor) {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(valor.trim());
    }

    function validarMensagem(valor) {
        return valor.trim().length >= 20;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valido = true;
        erroNome.textContent = '';
        erroEmail.textContent = '';
        erroMensagem.textContent = '';
        sucesso.textContent = '';

        // Nome
        if (!nome.value.trim()) {
            erroNome.textContent = 'Esse campo é obrigatório.';
            valido = false;
        } else if (!validarNome(nome.value)) {
            erroNome.textContent = 'Digite um nome válido (apenas letras).';
            valido = false;
        }

        // Email
        if (!email.value.trim()) {
            erroEmail.textContent = 'Esse campo é obrigatório.';
            valido = false;
            } else if (!validarEmail(email.value)) {
            erroEmail.textContent = 'Digite um email válido.';
            valido = false;
        }

        // Mensagem
        if (!mensagem.value.trim()) {
            erroMensagem.textContent = 'Esse campo é obrigatório.';
            valido = false;
        } else if (!validarMensagem(mensagem.value)) {
            erroMensagem.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
            valido = false;
        }

        if (valido) {
            sucesso.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        }
    });
});