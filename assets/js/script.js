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
var counter = 0;
var text = document.getElementById('text');

// Game area JS

// Add card to the HTML
const FLAGS = [
  {
    name: 'germany',
    flagImgSrcName: '../images/germany.jpeg'
  },
  {
    name: 'netherlands',
    flagImgSrcName: '../images/netherlands.png'
  },
  {
    name: 'us',
    flagImgSrcName: '../images/us.png'
  },
  {
    name: 'uk',
    flagImgSrcName: '../images/uk.png'
  },
  {
    name: 'canada',
    flagImgSrcName: '../images/canada.png'
  },
  {
    name: 'spain',
    flagImgSrcName: '../images/spain.png'
  }
];


function shuffleList(list) {
  return list.sort( () => .5 - Math.random() );
}

function showFlagsOnUI() {
  let flagsList = [...FLAGS, ...FLAGS];
  flagsList = shuffleList(flagsList)

  let flagsHTML = '';

  flagsList.forEach(eachFlag => {
    flagsHTML += `
      <div class="basic-card" data-name="${eachFlag.name}">
        <img class="back-side" src="./assets/images/${eachFlag.flagImgSrcName}" alt="${eachFlag.name}-flag">
        <img class="front-side" src="./assets/images/world.png" alt="world-flag">
      </div>
    `
  });

  document.getElementById('game-area').innerHTML =flagsHTML;
}

function addEventListenerToFlagCards() {
  const cards = document.querySelectorAll('.basic-card');
  cards.forEach(card => card.addEventListener('click', flipCard));
}

(function () {
  showFlagsOnUI();
  addEventListenerToFlagCards();
} )();

// Game logic
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
    interval = setInterval(startTimer)
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
  }, 1000);
}

function resetBoard() {
  [rotateCard, lockGame] = [false, false];
  [firstFlag, secondFlag] = [null, null];
}
function startTimer () {
  tens++;

  if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9){
    appendTens.innerHTML = tens;

  }

  if (tens > 99) {
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
};

stopButton.onclick = function(){
  clearInterval(interval);
};

resetButton.onclick = function() {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};