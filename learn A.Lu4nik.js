let inputIn = document.querySelector(".inputIn");
let button = document.querySelector(".button");
let div = document.querySelector(".out");

button.onclick = function (){
    console.log("Working");
    // console.log(inputIn.value);
    let b = +inputIn.value; // + before is for make numbers from string (by default inputIn gets only string)
    console.log(b + 10);
    div.innerHTML = b;
    inputIn.value = ""; // input value cleaner
    
};
