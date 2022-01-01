const cards = document.querySelectorAll('.basic-card');

  let rotateCard = false;
  let lockGame = false;
  let worldCard, countryCard;

  function rotateCard() {
    if (lockGame) return;
    if (this === worldCard) return;

    this.classList.add('rotate');

    if (!rotateCard) {
      rotateCard = true;
      worldCard = this;
      return;
    }

    countryCard = this;
    lockGame = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    worldCard.removeEventListener('click', rotateCard);
    countryCard.removeEventListener('click', rotateCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      worldCard.classList.remove('rotate');
      countryCard.classList.remove('rotate');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [rotateCard, lockGame] = [false, false];
    [worldCard, countryCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));