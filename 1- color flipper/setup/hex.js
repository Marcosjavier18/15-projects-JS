const d = document;


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = d.getElementById("btn");
const color = d.querySelector (".color");

btn.addEventListener("click", function(){
    //si usamos const nos da error. porque no se puede modificar.
    let hexColor = "#";
    //obtenemos una matriz de 6 elementos.
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    d.body.style.backgroundColor = hexColor;
})


function getRandomNumber(){
    return Math.floor(Math.random(hex)*hex.length)
}