// index.html
document.getElementById('howto').addEventListener('click', showParagraf);

function showParagraf() {
  document.getElementById('paragraf').innerHTML = "The memory game is a common children's game played with a set of cards. The cards have a pictures on one side and each picture appears on twoFind the pair as fast as you can to win the game. Once you click your first card, the timer will start."
  document.getElementById('paragraf').style.display = "visible";
}