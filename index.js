let button = document.querySelectorAll("#btn");
const card = document.querySelectorAll(".card");

// button.addEventListener("click", function () {
//   confirm("Is it deleted?");
// });

// button.addEventListener("click", function () {
//   deleteCard(card);
// });

function deleteCard(card) {
  const cards = document.querySelector(".cards");
  cards.removeChild(card);
}

button.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.parentNode;
    if (confirm("Is it deleted?")) {
      deleteCard(card);
    }
  });
});
