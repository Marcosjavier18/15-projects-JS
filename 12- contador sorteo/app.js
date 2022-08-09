const months = [
  "Ene",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekdays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

// conceptos claves:
// getFullYear()
// getMonth()
// getDate()
// Math.floor()
// setInterval()
// clearInterval()

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


//CAMBIAMOS LA FECHA A MOSTRAR
// let futureDate = new Date(2023,10,20,50,15,0);
// console.log(futureDate);

// acomodamdos para cambiar el horario de esta fecha actual
const futureDate = new Date(tempYear,tempMonth,tempDay + 14,11,11,30,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent =  `el sorteo termina el ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;


//future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemaingTime(){
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today ;
  // console.log(t);
  //1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24h

  //valores en ms
  const oneDay = 24 * 60 * 60 * 1000;
  // console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  // console.log(oneHour);
  const oneMinute = 60 * 1000;
      //calculamos todos

  let days = t / oneDay;
  
  // console.log(days); 
  days = Math.floor(days);
  // console.log(days); 
  
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //configuramos los valores del arreglo:

  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item <10){
      return item = `0${item}`
    }
    return item;
  }  



  items.forEach(function(item,index){
    item.innerHTML = values[index]
  });
  if(t < 0 ){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Perdon, este sorteo ya termino</h4>`
  }

}

//contador
let countdown = setInterval(getRemaingTime,1000);



getRemaingTime();



