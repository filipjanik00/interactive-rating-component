let selectedBtn = 0;

function setRating(rating) {
  selectedBtn = rating;

  // Reset all buttons
  document.querySelectorAll(".rating-btns button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Selected button
  document
    .querySelector(`.rating-btns button:nth-child(${rating})`)
    .classList.add("active");
}

function submitRating() {
  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".thank-you").style.display = "block";

  document.querySelector(
    ".rating"
  ).innerText = `You selected ${selectedBtn} out of 5`;
}
