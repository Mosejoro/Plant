// Preloader
var loader = document.querySelector(".loader");
// add Event Listner
window.addEventListener("load", Vane);
function Vane() {
  loader.classList.add("vane");
}
// Service
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function showCards(index) {
  cards.forEach((card, i) => {
    if (i >= index && i < index + 3) {
      card.style.display = "grid";
      card.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
      card.style.display = "none";
      card.style.animation = "fadeOut 0.5s ease-in-out";
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 3 + cards.length) % cards.length;
  showCards(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 3) % cards.length;
  showCards(currentIndex);
});

showCards(currentIndex);
