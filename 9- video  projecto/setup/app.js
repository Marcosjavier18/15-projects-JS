// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// -------------   Conceptos claves aplicados  ----------
// Key concepts covered:

// document.querySelector()
// addEventListener()
// classList.contains()
// classList.add()
// classList.remove()
// play()
// pause()

const d = document;

const btn = d.querySelector(".switch-btn");
const video = d.querySelector(".video-container");
 

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide");
        video.play();
    }
});

// preloader function
const preloader = d.querySelector(".preloader");

window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader");
})