// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const d = document;

const navToggle = d.querySelector(".nav-toggle");
const links = d.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    //da false porque la clase aleatoria no esta en proceso
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    // }

    //      SOLUCION CORTA
    links.classList.toggle("show-links");
})