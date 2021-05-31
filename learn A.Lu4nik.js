///~~~~~~~~~~~~~~~ Lesson 1 ~~~~~~~~~~~~~~~///

// let inputIn = document.querySelector(".inputIn");
// let button = document.querySelector(".button");
// let div = document.querySelector(".out");

// button.onclick = function (){
//     console.log("Working");
//     // console.log(inputIn.value);
//     let b = +inputIn.value; // + before is for make numbers from string (by default inputIn gets only string)
//     console.log(b + 10);
//     div.innerHTML = b;
//     inputIn.value = ""; // input value cleaner
// };

///~~~~~~~~~~~~~~~ Lesson 2 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ If Else Switch ~~~~~~~~~~~~~~~///


// const button2 = document.querySelector(".button2");
// const input = document.querySelector(".age");

// button2.onclick = () => {
//     let num = +input.value;
//     // if (num >= 16 && num < 60) {
//     //     console.log("Welcome");
//     // } else if (num > 60) {
//     //     console.log("Ha ha ha");
//     // }
//     // else {
//     //     console.log("Noooo");
//     // }
// //     switch (num) {
// //         case 15:
// //           console.log('One more year');
// //           break;
// //         case 16:
// //           console.log('You are welcome');
// //           break;
// //         default:
// //           console.log("Set as default");
// //     }
// }

// const button2 = document.querySelector(".button2");
// const input = document.querySelector(".age");
// const input2 = document.querySelector(".age2");

// button2.onclick = () => {
//     if (+input.value > +input2.value) {
//         console.log(input.value);
//     } else {
//         console.log(input2.value);
//     }
// }


///~~~~~~~~~~~~~~~ Lesson 3 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ Forms ~~~~~~~~~~~~~~~///

// document.querySelector(".button3").onclick = () => {
//     console.log(document.querySelector("#pass").value);
//     document.querySelector(".button3").style.backgroundColor =
//     document.querySelector("#pass").value
// }

///~~~~~~~~~~~~~~~ Lesson 4 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ For While Do While ~~~~~~~~~~~~~~~///

// let out = document.querySelector(".container4")

// for (let i = 0; i < 5; i++) {
//     for (let k =0; k < 10; k++){
//         out.innerHTML += k;
//     }
//     out.innerHTML += '<br>'; 
// }

// for (let i = 1; i < 10; i++) {
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML += `${i}*${k}=${k * i}<br>`
//     }
//     out.innerHTML += '<br>' ;
// }

///~~~~~~~~~~~~~~~ Lesson 5 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ DOM ~~~~~~~~~~~~~~~///