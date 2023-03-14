// const supportCard = document.getElementById("supportCard");
// const appreciationCard = document.getElementById("appreciationCard");
const ratingNodes = Array.from( document.querySelectorAll('#circleRating .circle input[type="radio"]'));
// const rating = document.querySelectorAll('.circle')
// const submitBtn = document.getElementById("submitBtn");
let ratingDisplay = document.getElementById('ratingDisplay')



//   function view() {
//     appreciationCard.style.display = "initial";
//     supportCard.style.display = "none";
//   }

//   submitBtn.addEventListener("click", view);
 
// for (let i = 0; i<rating.length ; i++) {

//   rating.forEach((circle) => {
//     circle.addEventListener("click", () => {
//       circle.style.backgroundColor = "red";
//     });
//   });



// }

// const rating = document.querySelectorAll(".circle label");
// const textDisplay = document.getElementById("textDisplay");



// for (let i = 0; i<rating.length; i++){
//   rating[i].addEventListener('click', () =>{


//     let textDisplay = rating[i].innerHTML = rating

    
//   })

//   submitBtn.addEventListener('click' , () => {

//     appreciationCard.style.display = "initial";
//     supportCard.style.display = "none";
//     textDisplay.innerHTML = 'you selected something'


//   })
 
// }




const rating = document.querySelectorAll(".circle");
const textDisplay = document.getElementById("textDisplay");
const submitBtn = document.getElementById("submitBtn");
const appreciationCard = document.getElementById("appreciationCard");
const supportCard = document.getElementById("supportCard");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    // rating.style.backgroundColor = 'red';
    textDisplay.innerHTML = `You selected ${rating[i].innerHTML} out of 5`;
  });

  submitBtn.addEventListener("click", () => {
    appreciationCard.style.display = "initial";
    supportCard.style.display = "none";
  });
}
