// Timer



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