//Grabbing Variables
const levels = document.querySelector(".span-levels");

const cover = document.querySelectorAll(".card-cover");

const prompt1 = document.querySelector("h2");

const reset = document.querySelector(".reset");

const nextLevel = document.querySelector(".next-level");

const cards = document.querySelectorAll(".card");

const prompts = ["The Lovers", "The World", "The Empress"];

const resetCards = function () {
  for (let i = 0; i < cover.length; i++) {
    let currentCard = cover.item(i);
    currentCard.classList.remove("hide");
  }
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffleCards = function (card) {
  shuffle(card);

  for (let i = 0; i < card.length; i++) {
    cards[i].innerHTML = card[i].innerHTML;
  }
};

const card = Array.from(cards);
shuffleCards(card);

for (let i = 0; i < cover.length; i++) {
  let currentCard = cover.item(i);

  currentCard.addEventListener("click", function () {
    currentCard.classList.toggle("hide");
  });
}

reset.addEventListener("click", function () {
  levels.textContent = 1;
  prompt1.textContent = "Find The Lovers";

  resetCards();
});

nextLevel.addEventListener("click", function () {
  levels.textContent++;
  resetCards();
});
