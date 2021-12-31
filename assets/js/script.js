const cards = document.querySelectorAll('.basic-card');

function rotateCard () {
    this.classList.toggle('rotate')
}

cards.forEach(card => card.addEventListener('click', rotateCard))