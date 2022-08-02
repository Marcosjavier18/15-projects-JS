const d = document;
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = d.getElementById("btn");
const color = d.querySelector(".color");


btn.addEventListener("click", function() {
    // console.log(d.body);

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    //get random number between 0 - 3
    d.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

    //el *colors.length es para que consiga un numero entre 0.algo a 3.alo
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}