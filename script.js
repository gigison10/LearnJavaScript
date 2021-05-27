//  ----------  Functions    ----------  //

//Function Declaration
/*
greet("lena")
function greet(name) {
    console.log("Hello", name);
}
*/

//function Expresion
/*
let greett =function greett(name) {
    console.log("Hello", name);
}
greett("Lena")
*/

//Arrow Function
/*
let greettt =(name) => {
    console.log("Hello", name);
}
greettt("Lllena")

let greetttt =(name) => console.log("Hello", name);
greettt("VAsea")

let summ = (a, b) => a + b ;
console.log(summ(1, 5));
*/


//  ----------  CallBack    ----------  //


/*function calcSumm(numOne, numTwo, more, less,) {
    let numSumm = numOne + numTwo;

    if (numSumm > 10) {
        more();
    } else {
        less();
    }
}

function showMore() { 
    console.log("More then 10");
}
function showLess() {
    console.log("Less then 10");
}
calcSumm (11, 5, showMore, showLess);


//  ----------  Recursive    ----------  //


function summ(numFirst, numSecond) {
    if (numSecond ===1) {
        return numFirst;
    } else { 
        return numFirst * summ(numFirst, numSecond -1);
    }
 }
console.log(summ(5, 3));*/



////////////////22222222222222/////////////////?????????
//https://htmllab.ru/zadachi-po-javascript/

/*function calcSumm(firstName, more, less,) {

    if (firstName = String) {
        more();
    } else {
        less();
    }
}
function helloName() { 
    console.log("Hello Vasile");
}
function helloGuest() {
    console.log("Hello Guest");
}
calcSumm ("Vasile", helloName, helloGuest);*/

////////////////222222222222//////////????????????????


//  ----------  Objects    ----------  //


// let person = {
//     name: "Gigison",
//     age: 31,
//     languages: ["EN", "RU", "RO"],
//     greet: function() {
//         console.log("greet from person");
//     }
// }

////////////////////////////////////
// console.log(person.name);
// console.log(person.age);
// person.greet()
//////////////OR // Easier////////////
// let {name, age, languages} = person;
// console.log(name, age, languages);
/////////////////////////////////////


//  ----------  Promises    ----------  //

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Preparing data...");
//         let backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//         }
//         resolve(backendData)
//     }, 1000)
// })

// p.then((data)=> {
//     console.log("Promise Resolved", data);
// })

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// let p = new Promise ((resolve, reject) => {
//     let a = 1 + 3;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// p.then((resolve) => {
//     console.log("this in the then " + resolve);
// }).catch((reject) => {
//     console.log("this is in catch " + reject);
// })

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

