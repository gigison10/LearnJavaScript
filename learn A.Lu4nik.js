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

//////////////////////////////////////

// array.push(12, 13); // adding elements in array to the end
// array.pop(); // deleting last element from array
// delete array[3];//3 is deleting index No 3
// array.splice(2, 3 "hi" hi is going after si deleting 3 indexes from 2);// 2 is index to start from 3 is how many after (but is recounting indexes again)
//shift unshift

//////////// 2 Dimensional Arrays ////////////
// https://itgid.info/unit/javascript-2?unit=array-in-array-js

///////////// associate array ///////////

// let arr3 = { // in  this case we can name our indexes however we want
//     "a" : 5,
//     "b" : "hello",
//     "c" : "hi",
//     t34 : 3467,
//  //q1 g : werw3, //is not ok because of space
//  "q1 g" : "werw3",
// };
// arr3.c = "HE hey hi" //changing index c
// console.log(arr3);
// console.log(arr3.b);
// let kk = "c";        // appling index c to kk
// console.log(arr3[kk]);

// https://itgid.info/unit/javascript-2?unit=object-js

///~~~~~~~~~~~~~~~ Lesson 7 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ Set ~~~~~~~~~~~~~~~///

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add("Hello");
// set.add("1");
// set.clear();
// set.delete("Hello"); deletind a specified element
// console.log(set);
// console.log(set.size);
// console.log(set.has(2)); //check if we have 2 in Set

// for (let i of set) {
//     console.log(i);
// }

// let arra = [1, 45, 56, 57, "hell", 1, 45]
// let arrb = new Set(arra);
// console.log(arrb);

// let arrc = Array.from(arrb)
// console.log(arrc[2]);

///~~~~~~~~~~~~~~~ Lesson 8 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ For, For In, For Of ~~~~~~~~~~~~~~~///

// let arra = [1, 45, 56, 57,]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arra);
// };

// for (let i in arra) {
//     console.log(arra[2]);
// };

// for (let i of arra) {
//     console.log(i);
// };

///~~~~~~~~~~~~~~~ Lesson 8 ~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~ For, For In, For Of ~~~~~~~~~~~~~~~///