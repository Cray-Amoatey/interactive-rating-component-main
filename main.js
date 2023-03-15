const rating = document.querySelectorAll(".circle");
const textDisplay = document.getElementById("textDisplay");
const submitBtn = document.getElementById("submitBtn");
const appreciationCard = document.getElementById("appreciationCard");
const supportCard = document.getElementById("supportCard");

let selectedRating = null;

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    if (selectedRating !== null) {
      selectedRating.style.backgroundColor = "";
    }
    selectedRating = rating[i];
    textDisplay.innerHTML = `You selected ${selectedRating.innerHTML} out of 5`;
    selectedRating.style.backgroundColor = "red";
  });
}

submitBtn.addEventListener("click", () => {
  if (selectedRating !== null) {
    appreciationCard.style.display = "initial";
    supportCard.style.display = "none";
  }
});


