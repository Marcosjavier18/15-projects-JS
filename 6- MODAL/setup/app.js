const d = document;


// select modal-btn,modal-overlay,close-btn

const modalBtn = d.querySelector(".modal-btn");
const modal = d.querySelector(".modal-overlay");
const closeBtn = d.querySelector(".close-btn");


// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


modalBtn.addEventListener("click",function(){
    modal.classList.add("open-modal");
});



closeBtn.addEventListener("click",function(){
    modal.classList.remove("open-modal");
})

