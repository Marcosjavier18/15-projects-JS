// local reviews data  , estos son enrrutadores
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const d = document , w = window;

  // items seleccionados
const img = d.getElementById("person-img");
const author = d.getElementById("author");
const job = d.getElementById("job");
const info = d.getElementById("info");

const prevBtn = d.querySelector(".prev-btn");
const nextBtn = d.querySelector(".next-btn");
const randomBtn = d.querySelector(".random-btn");


// configuramos el item inicial
let currentItem = 0;

// cargamos el item inicial
w.addEventListener("DOMContentLoaded", function(){
  // console.log("shake and bake");
 showPerson(currentItem);
});


// show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//mostrar proxima persona

nextBtn.addEventListener("click", function(){
  currentItem++;
  //si el elemento actual es mayor que 4 tendre mi error, significa que tenemos que restarle 1 al final.
  if(currentItem > reviews.length - 1){
    currentItem = 0;

  }
  showPerson();
});


// show prev person

prevBtn.addEventListener("click",function(){
  currentItem--;

  if(currentItem < 0){
  currentItem = reviews.length - 1;   
  }
  showPerson();
});

//  show random person

randomBtn.addEventListener("click" , function(){
 
  currentItem = Math.floor(Math.random()*reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
})


