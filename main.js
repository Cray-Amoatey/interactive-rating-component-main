const supportCard = document.getElementById('supportCard')
const rating = document.querySelectorAll('.circleRating')
const circleInputs = document.querySelectorAll('.circle input');




 circleInputs.forEach(input =>{
    input.addEventListener('click', () =>{
        const circle = input.parentNode;
switch(input.value) {
    case '1':
        circle.style.backgroundColor = "red";
        break;


}
    })
 })
