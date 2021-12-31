const cards = document.querySelectorAll('.basic-card');

let cardFlipped = false;
let frontFace, backFace;

function rotateCard () {
    this.classList.add('rotate');

    if (!cardFlipped) {
        cardFlipped = true;
        frontFace = this;
    } else {
        cardFlipped = false;
        backFace = this;
    }


}

cards.forEach(card => card.addEventListener('click', rotateCard))