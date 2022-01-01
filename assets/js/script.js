// Timer
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendTens = document.getElementById('tens');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
var interval;

function startTimer () {
  tens++; 
  
  if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
  }
  
  if (tens > 9){
    appendTens.innerHTML = tens;
    
  } 
  
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}

startButton.onclick = function() {
  interval = setInterval(startTimer);
}

stopButton.onclick = function() {
  clearInterval(interval);
}

resetButton.onclick = function() {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
}

// Game area JS

const cards = document.querySelectorAll('.basic-card');

let rotateCard = false;
let lockGame = false;
let firstFlag, secondFlag;

function flipCard() {
  if (lockGame) return;
  if (this === firstFlag) return;
  this.classList.add('rotate');

  if (!firstFlag) {
    rotateCard = true;
    firstFlag = this;
    return;
  }
  secondFlag = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstFlag.dataset.name === secondFlag.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstFlag.removeEventListener('click', flipCard);
  secondFlag.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockGame = true;
  setTimeout(() => {
    firstFlag.classList.remove('rotate');
    secondFlag.classList.remove('rotate');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [rotateCard, lockGame] = [false, false];
  [firstFlag, secondFlag] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
