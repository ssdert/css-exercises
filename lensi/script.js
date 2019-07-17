const ball = document.getElementById('ball');
const btnPink = document.getElementById('bigPinkBtn');
const btnGreen = document.getElementById('btn-green');
const btnBlack = document.getElementById('btn-defult');

btnPink.addEventListener('click', makeItPink);

function makeItPink() {
  console.log('hello');

  ball.style.setProperty('--bgColor', 'pink');
  ball.style.setProperty('--scale', '20');
}

btnGreen.addEventListener('click', makeItGreen);

function makeItGreen() {
  console.log('g');
  ball.style.setProperty('--bgColor', 'green');
}

btnBlack.addEventListener('click', makeItBlack);

function makeItBlack() {
  console.log('R');
  ball.style.setProperty('--bgColor', 'black');
  ball.style.setProperty('--scale', '2');
}
