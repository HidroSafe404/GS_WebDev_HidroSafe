document.getElementById('lightModeBtn').onclick = function() {
  document.body.classList.remove('dark-mode', 'green-mode');
  setQuizImg('light');
};
document.getElementById('darkModeBtn').onclick = function() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('green-mode');
  setQuizImg('dark');
};
document.getElementById('greenModeBtn').onclick = function() {
  document.body.classList.add('green-mode');
  document.body.classList.remove('dark-mode');
  setQuizImg('green');
};

function setQuizImg(theme) {
  const quizImg = document.querySelector('.quiz-btn img');
  if (!quizImg) return;

  const isQuizPage = window.location.pathname.includes('quiz.html');
  let prefix = isQuizPage ? '../images/' : './assets/images/';
  if (theme === 'light') quizImg.src = prefix + 'beckerAzul.png';
  if (theme === 'dark') quizImg.src = prefix + 'beckerCinza.png';
  if (theme === 'green') quizImg.src = prefix + 'beckerVerde.png';
}