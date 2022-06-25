//Grabbing Variables
const levels = document.querySelector(".span-levels");

const cover = document.querySelectorAll(".card-cover");

const prompt1 = document.querySelector("h2");

const reset = document.querySelector(".reset");

const nextLevel = document.querySelector(".next-level");

const cards = document.querySelectorAll(".card");

let cardNames = ["Empress", "Lovers", "World"];

let randomCards = 0;

let correctCard = 0;

const images = document.querySelectorAll(".card-img");

//Functions declared

const shuffleCards = function () {
  cardNames = cardNames.sort(() => Math.random() - 0.5);

  images.forEach((image, i) => {
    image.src = `images/the-${cardNames[i]}.jpg`;
  });
};

const resetCards = function () {
  // for (let i = 0; i < cover.length; i++) {
  //   let currentCard = cover.item(i);
  //   currentCard.classList.remove("hide");
  //}
  cover.forEach((c) => c.classList.remove("hide"));
  shuffleCards();
  randomCards = Math.floor(Math.random() * 3);
  prompt1.textContent = `Find The ${cardNames[randomCards]}`;
  correctCard = cover.item(randomCards);
};

const blockCards = function () {
  cover.forEach((c) => (c.disabled = true));
};

// for (let i = 0; i < cover.length; i++) {
//   let currentCard = cover.item(i);

//   currentCard.addEventListener("click", function () {
//     currentCard.classList.toggle("hide");
//   });
// }
resetCards();

cover.forEach((c) =>
  c.addEventListener("click", function () {
    c.classList.toggle("hide");

    nextLevel.disabled = true;

    if (c === correctCard) {
      prompt1.textContent = "You're a real psychic! Proceed to the Next Level!";

      nextLevel.disabled = false;
    } else {
      prompt1.textContent = "What a disappointment! Try again human";
    }

    if (levels.textContent === 7) {
      blockCards();
    }
  })
);

reset.addEventListener("click", function () {
  levels.textContent = 1;
  prompt1.textContent = "Find The Lovers";

  resetCards();
});

nextLevel.addEventListener("click", function () {
  levels.textContent++;
  resetCards();
});
