///~~~~~~~~~~~~~~~ Lesson 1 ~~~~~~~~~~~~~~~///

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

///~~~~~~~~~~~~~~~ Lesson 2 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ If Else Switch ~~~~~~~~~~~~~~~///


// const button2 = document.querySelector(".button2");
// const input = document.querySelector(".age");

// button2.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num <= 60) {
//         console.log("Welcome");
//     } else if (num > 60) {
//         console.log("To Old :)");
//     }
//     else {
//         console.log("To young");
//     }
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

const button2 = document.querySelector(".button2");
const input = document.querySelector(".age");
const input2 = document.querySelector(".age2");

button2.onclick = () => {
    if (+input.value > +input2.value) {
        console.log(input.value);
    } else {
        console.log(input2.value);
    }
}


///~~~~~~~~~~~~~~~ Lesson 3 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ Forms ~~~~~~~~~~~~~~~///

document.querySelector(".button3").onclick = () => {
    console.log(document.querySelector("#pass").value);
    document.querySelector(".button3").style.backgroundColor =
    document.querySelector("#pass").value
}

///~~~~~~~~~~~~~~~ Lesson 4 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ For  ~~~~~~~~~~~~~~~///

let out = document.querySelector(".container4")

// for (let i = 0; i < 5; i++) {
//     for (let k =0; k < 10; k++){
//         out.innerHTML += k;
//     }
//     out.innerHTML += '<br>'; 
// }
//////////////////////////////////////////////////////////////////
// for (let i = 1; i < 10; i++) {
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML += `${i}*${k}=${k * i}<br>`
//     }
//     out.innerHTML += '<br>' ;
// }

// let touchMe = document.querySelector(".out");
// out.onclick = function ()  {
//     this.classList.toggle("five");
// };

///~~~~~~~~~~~~~~~ Lesson 5 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ Function ~~~~~~~~~~~~~~~///

// function funcName () {
//     console.log("wwwwwwwww");
//     return 55; // is returning result in funcName()
// }
// console.log(1 + funcName());

///~~~~~~~~~~~~~~~ Lesson 6 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ DOM Work ~~~~~~~~~~~~~~~///

let one =document.querySelector(".one");

one.style.width = "150px";
one.style.background = "red";
one.classList.add("two", "tree",);
one.classList.remove("tree")

let toggle = document.querySelector(".toggle");
toggle.onclick = function ()  {
    this.classList.toggle("four");
};

//atributes - data in html

console.log(one.getAttribute("data"));
// console.log(document.querySelector("link").getAttribute("href"));
one.setAttribute("dataNum", 6)
////////////////////////////////////////////////////////////////////
let gas = document.querySelectorAll(".gas");
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let liters = document.querySelector(".liters").value;
        let price = this.getAttribute("data"); // ("data") is from html <button data = "1.2">
        console.log(liters * price);
    }
}

//////////// Making div in  HTML //////////////

let a =document.createElement("div");
a.innerHTML = "Hello";
a.classList.add("one");
document.querySelector(".test").appendChild(a); //adding this div in HTML div with class =test
a.onclick = function () {
    this.classList.toggle("four");
}
console.log(a);

/////////////////////////////////////////////////////////////////////

///~~~~~~~~~~~~~~~ Lesson 6 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ Arrays ~~~~~~~~~~~~~~~///

let arr = [1, 2, 3, 4];
console.log(arr);

let t = arr[0];
arr[0] = arr[arr.length -1];
arr[arr.length -1] = t;
console.log(arr);

/////////////////////Show all array//////////////////////////

let out10 = '';
for (let i = 0; i < arr.length; i++) {
    out10 += arr[i] + ' ';
};
document.querySelector(".out10").innerHTML = out10;

//////////////////////pair or impair///////////////////

// let out10 = '';
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0)
//     out10 += arr[i] + ' ';
// };
// document.querySelector(".out10").innerHTML = out10;

//////////////////////////Min or Max/////////////////////////////

let c = [1, 2, 7, 10, -5];
let max = c[0];
for (let i = 0; i < c.length; i++) {
    if(c[i] > max) {    // to minimum change only <
        max = c[i];
    }
}
console.log("Max " + max);

let summ = 0;
for (let i = 0; i < c.length; i++) {
    summ = summ + c[i];   
}
console.log("Summary " + summ);

// document.querySelector(".out10").innerHTML = out10;
