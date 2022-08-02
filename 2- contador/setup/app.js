const d = document;

// configuramos contador inicial
let count = 0;

//seleccionamos value y buttons
const value = d.querySelector("#value");
const btns = d.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function(btn) {
    // console.log(btn);
    btn.addEventListener("click", function(e){
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        //quiere decir: si la variable contiene
        if(styles.contains("decrease")){
            count--;
        }
        
        else if(styles.contains("increase")){
            count++;
        }
        
        else {
            count = 0;
        }
        
        value.textContent = count;

        if(count < 0){
            value.style.color = "red";
        }
        
        if(count > 0){
            value.style.color = "green";
        }
        
        if (count === 0) {
            value.style.color = "#222";
        }



    })

})