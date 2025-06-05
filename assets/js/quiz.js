const questions = [
    {
        question: "1. O que é uma enchente?",
        options: [
            "A) Um aumento do nível do mar",
            "B) O transbordamento de corpos d’água sobre áreas secas",
            "C) Um deslizamento de terra causado por chuvas",
            "D) Uma tempestade com raios"
        ],
        answer: 1
    },
    {
        question: "2. Qual dos fatores abaixo é uma causa comum de enchentes urbanas?",
        options: [
            "A) Secas prolongadas",
            "B) Vegetação abundante",
            "C) Impermeabilização do solo",
            "D) Altas altitudes"
        ],
        answer: 2
    },
    {
        question: "3. Como a vegetação ajuda a prevenir enchentes?",
        options: [
            "A) Aumentando a umidade do ar",
            "B) Absorvendo água da chuva e reduzindo o escoamento superficial",
            "C) Refletindo luz solar",
            "D) Causando evaporação rápida da água"
        ],
        answer: 1
    },
    {
        question: "4. O que é um sistema de drenagem pluvial?",
        options: [
            "A) Um sistema que gera energia a partir da chuva",
            "B) Um tipo de aquecimento urbano",
            "C) Um conjunto de estruturas para captar e escoar águas da chuva",
            "D) Um alarme de emergência para enchentes"
        ],
        answer: 2
    },
    {
        question: "5. Qual ação humana pode agravar o risco de enchentes?",
        options: [
            "A) Preservação de áreas verdes",
            "B) Construção em margens de rios",
            "C) Instalação de parques urbanos",
            "D) Uso de energia solar"
        ],
        answer: 1
    },
    {
        question: "6. Quais sinais indicam que uma área está em risco de enchente?",
        options: [
            "A) Solo seco e rachado",
            "B) Céu limpo e sem nuvens",
            "C) Nuvens carregadas e acúmulo de água nas ruas",
            "D) Baixa umidade no ar"
        ],
        answer: 2
    },
    {
        question: "7. O que fazer em caso de alerta de enchente?",
        options: [
            "A) Ficar em casa e esperar a água subir",
            "B) Se deslocar para áreas mais baixas",
            "C) Procurar abrigo em áreas elevadas e seguras",
            "D) Descer para o porão"
        ],
        answer: 2
    },
    {
        question: "8. Qual desses é um efeito direto das enchentes?",
        options: [
            "A) Melhora da qualidade do ar",
            "B) Contaminação da água potável",
            "C) Aumento da biodiversidade",
            "D) Aumento da fertilidade do solo urbano"
        ],
        answer: 1
    },
    {
        question: "9. Que tipo de tecnologia pode ajudar na prevenção de enchentes?",
        options: [
            "A) Semáforos inteligentes",
            "B) Drones recreativos",
            "C) Sistemas de alerta precoce e sensores de nível de água",
            "D) Aplicativos de jogos"
        ],
        answer: 2
    },
    {
        question: "10. Por que é importante ter rotas seguras planejadas em caso de enchente?",
        options: [
            "A) Para evitar pagar pedágios",
            "B) Para não usar o transporte público",
            "C) Para fugir de áreas de risco e chegar em segurança a abrigos",
            "D) Para testar aplicativos de navegação"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const quizDiv = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');

function showQuestion() {
    const q = questions[currentQuestion];
    quizDiv.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option" data-index="${i}">${opt}</button>`).join('')}
        </div>
    `;
    selectedOption = null;
    nextBtn.disabled = true;
    document.querySelectorAll('.option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedOption = parseInt(this.getAttribute('data-index'));
            nextBtn.disabled = false;
        });
    });
}

nextBtn.addEventListener('click', () => {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizDiv.innerHTML = '';
    nextBtn.style.display = 'none'; 
    resultDiv.classList.remove('hidden');

    let mensagemFinal = '';
    if (score >= 7) {
        mensagemFinal = `<p style="color: var(--green); font-weight: bold; margin-bottom: 1rem;">Parabéns! Você foi muito bem no quiz! 🎉</p>`;
    } else {
        mensagemFinal = `<p style="color: var(--red); font-weight: bold; margin-bottom: 1rem;">Tente um resultado melhor da próxima vez! 💡</p>`;
    }

    resultDiv.innerHTML = `
        ${mensagemFinal}
        Você acertou <span style="color:#0a2342;">${score}</span> de <span style="color:#0a2342;">${questions.length}</span> perguntas!
        <br>
        <button id="restartBtn">Recomeçar Quiz</button>
        <a href="../../index.html" id="homeBtn" class="home-btn">Voltar para Home</a>
    `;
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultDiv.classList.add('hidden');
    resultDiv.innerHTML = ''; 
    nextBtn.style.display = 'inline-block'; 
    showQuestion();
}

showQuestion();
resultDiv.classList.add('hidden');
nextBtn.disabled = true;

