const d = document;

const toggleBtn = d.querySelector(".sidebar-toggle");
const closeBtn = d.querySelector(".close-btn");
const sidebar = d.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    console.log(sidebar.classList);
        //forma larga
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar");
    // }
    // else{
    //     sidebar.classList.add("show-sidebar");
    // }
        //forma corta.
        sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})