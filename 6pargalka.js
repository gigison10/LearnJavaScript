////////////////////////////////// МЕТОДЫ МАССИВОВ ////////////////////////////////////////////////////////

let arr = ["Ваня", "Иштван", "Оля"];
console.log(arr);
//////////////////////////////////  1  ///////////////////////////////////////// //////////
// arr.push('Вася');
// console.log(`               1. Метод (push)
// - добавляет элемент в конец массива: [${arr}] `);
// /////////////////////////////////   2  ///////////////////////////////////////////////////
// arr.shift();
// console.log(`               2. Метод (shift)
// - удаляет элемент в начале:[${arr}]`);
// ////////////////////////////////   3   ////////////////////////////////////////////////////
// arr.pop();
// console.log(`               3.  Метод (pop)
// - удаляет последний элемент:[${arr}]`)
// ////////////////////////////////   4   ////////////////////////////////////////////////////////
// arr.unshift('Вася');
// console.log(`               4. Метод (unshift)
//  - добавляет элемент в начало массива:[${arr}] `)
////////////////////////////////  5   ///////////////////////////////////////////////////
arr.splice(0, 1);
console.log(`               5.Метод (splice.) 
-Позволяет добавлять, удалять и заменять элементы:[${arr}]`);
arr.splice(0, 1, "Толя");
console.log(`:(splice.)Заменяем элементы:[${arr}]`);
arr.splice(1, 0, "Коля", "Маша");
console.log(`:(splice.)Добавляем элементы:[${arr}]`);
///////////////////////////////   6  ////////////////////////////////////////////////////

let arrTwo = arr.slice(1, 3);
console.log(`                 6.(slice)
-копирует часть либо весь массив:[${arrTwo}]`);
let arrFour = arr.slice();
console.log(`Копируем весь массив:[${arrFour}]`);
///////////////////////////////  7  /////////////////////////////////////////////////////
let arrfive = arr.concat("Петя");
console.log(`                  7.(concat) 
Cоздаёт массив, в который копирует данные из других массивов
 и дополн значения в конец массива [${arrfive}]`);
//////////////////////////////////// 8 //////////////////////////////////////////////////
//  Поиск в массиве
// Методы indexOf/lastIndexOf и includes
console.log("               8. (Поиск в массиве)");
console.log(`[${arr.indexOf("Толя")}] Метод IndexOf`);
console.log(`[${arr.includes("Маша")}] метод includes`);

const people = [
  { name: "Dmitri", age: 32, budget: 1000 },
  { name: "anton", age: 18, budget: 320 },
  { name: "bogdan", age: 17, budget: 42000 },
  { name: "Diana", age: 29, budget: 1725 },
  { name: "artur", age: 23, budget: 180 },
  { name: "alik", age: 37, budget: 10 }
];
const finder = people.find((person) => person.name === "alik");
//........................................................................
console.log(finder, `метод find `);
//.....................................................
const filt = people.filter((person) => person.age >= 37);
console.log(filt, `метод filter `);
/////////////////////////////////     9  ///////////////////////////////////////////////
console.log("                9.(Сортировка массивов)");
//  (sort)сортирует массив на месте, меняя в нём порядок элементов
let arrOne = ["Иштван", "Ваня", "Оля"];
console.log(`[${arrOne.sort()}], метод sort`);
let number = [8, 22, 1, 5, 9, 7];
console.log(`[${number.sort((a, b) => a - b)}], Сотритовка чисел (sort)`);
//Метод reverse  меняет порядок элементов в массиве на обратный
console.log(`[${arrOne.reverse()}], метод reverse`);
//////////////////////////////   10   ///////////////////////////////////////
console.log("               10 (Преобразование массивов)");
// Метод map.
// вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции.

// const om = people.map(person => console.log(person.name))
const persone = [{ name: "Dmitri", age: 32, budget: 1000 }];
const newPeople = persone.map(
  (person) =>
    `${person.name} (${person.age}), ( Метод map) вызывает функцию для каждого элемента массива  и возвращает массив результатов выполнения этой функции  `
);
console.log(newPeople);
// const newOm = people.map(person => person.budget * 2)
// console.log(newOm)
// ...............................................................................
//  Метод split преобразовывает строку вмассив по заданному разделителю

let name = "dima , ana , diana ,andrei";
let lastName = name.split(",");
console.log(lastName, "(Метод split) преобразовывает строку в массив");
// Можно ограничить кол-во объектов которые попадут в массив
// let last = name.split(',', 2);
// console.log(last);
//..............................................................
// Метод join преобразовывает массив в строку c заданным разделителем
let firstName = ["dima", "ana", "diana", "andrei"];
let srt = firstName.join(",");
console.log(srt, "(Метод join) преобразовывает массив в строку");

/////////////////////////// 11 //////////////////////////////////////
console.log("                      11 ( Перебор элементов)");
console.log(
  "Цикл FOR...OF; Метод forEach;  Цикл FOR ; Методы reduce/reduceRight"
);
//  Цикл FOR...OF Можно использовать для вывода значений
// let arr4 = ['Ваня', 'Иштван', 'Оля',];
// for (let arrItem of arr4) {
// 	console.log(arrItem);}
//.................................................
// Метод перебора forEach  Выполняет функцию для каждого элемента массива
// const peoples = [
//   { name: "Dmitri", age: 32, budget: 1000 },
//   { name: "anton", age: 18, budget: 320 },

// ];
// peoples.forEach(person => console.log(person))
//.........................................................
// Методы reduce/reduceRight
// let arrArrow = [1, 2, 3, 4];
// let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
// console.log(reduceValueArrow);
//.//////////////////////////////////////////////////////////////////////////////////

// const people1 = [
//   { name: "Dmitri", age: 32, budget: 1000 },
//   { name: "anton", age: 18, budget: 320 },
//   { name: "bogdan", age: 17, budget: 42000 },
//   { name: "Diana", age: 29, budget: 1725 },
//   { name: "artur", age: 23, budget: 180 },
//   { name: "alik", age: 37, budget: 10 },

// ];
// const newMosiv = people1
//         .filter((person) => person.budget > 500)
//         .map((person) => {
//           return {
//             info: `${person.name} (${person.age})`,
//              budget: person.budget
//     };
//   });

// console.log(newMosiv)
/////////////////////////////////////////////////////////////////////////////
//  // Пересечение
// let arrA= [1,3,4,5]
// let arrB= [1,2,5,6,7]
// let intersection = arrA.filter(x => arrB.includes(x))
// console.log(` Пересечение: [${intersection}]`)
// //.............................................................................
// let diference = arrA.filter(x =>!arrB.includes(x))
// console.log(` элементы из массива A,которых нет в массиве B:[${diference}]`)
// // //.............................................................................
// let difference = arrA.filter(x => !arrB.includes(x)).concat(arrB.filter(x => !arrA.includes(x)));
// console.log(`элементы arrA, которых нет в arrB, и наоборот: [${difference}]`)
// //////////////////////////////////////////////////////////////////////////////////
// // camelize("background-color") == 'backgroundColor';

// function camelize(str) {
//   return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
//  console.log(camelize("background-color"))
/////////////////////////////////////////////////////////////////////////////////
// // // Получить средний возраст
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let ages = [vasya,petya,masha]

// let suma = ages.reduce((a,b) => a + b.age,0)/ages.length
// console.log('средний возраст',suma)

/////////////////////////////////////////////////////////////////////////////////////
//Палиндром
// const polindrom = str => {
//   str = str.toLowerCase()
//   return str === str.split('').reverse().join('')
// }
// console.log(polindrom('arra'))
////////////////////////////////////////////////////////////////
// .......................................................................
// Треугольник
// const arrt = Array(7).keys()
// const arrr = Array.from(arrt)

// arrr.reduce(acc => {
//   const result = acc + "#"
//   console.log(result)
//   return result
// },'')
//////////////////////////////////////////////////////////////////////
// function fizzBuzz (){
//   let counter= 1
//   while (counter <= 100){
//     counter % 3 === 0 && counter % 5 === 0
//     ?console.log(`${counter} - fizzBuzz`)
//     : counter % 3 === 0 && console.log(` ${counter} - fizz`)
//   ||  counter % 5 === 0 && console.log(`${counter} - Buz`)
//   counter ++
//   }
// }

// fizzBuzz()
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//Рекурсия
// function isEven(number){
//   switch(number){
//   case 0 :
//   return true;
//   case 1 :
//   return false
//   case -1:
//   return false
//   default:
//   return isEven(Math.abs(number - 2))
//   }
// }

// console.log(isEven(50));
// → true
////////////////////////////////////////////////////////////////////
//  //Считаем 'BBBBBBB
// function countBs(string = ''){
//   return string.split('')
//   .reduce((sum,current) => {
//     return current  === 'B'? ++sum :sum
//   },0)

// }
// console.log(countBs('BABABA'))
///////////////////////////////////////////////////////////////////
// data
//d = new Date
// console.log(d.getFullYear())
//////////////////////////////////////////////////////////////////
// function chees(){
// const limit = 4
// const x = Array.from(Array(limit).keys())
// let result = ''
// let result1 = []
// a.map( x => x % 2 === 0
// ? result.push(x)
// :result1.push(x))
// console.log(result)
// console.log(result1)
// x.map((a, b) => {
//  a % 2 === 0  &&
//   console.log(result += b +'x ')
// },'')

//  return result + '\n'
// }
// chees()

// /////////////////////////////////////////////////

// function chees(){
//   limit = 8
//   let
// }
// const ggg = [1,2,3,4,1,2,3,4]
// console.log(
//   ggg.map(i => {
// if(i % 2 === 0) {
//   return 'x'
// }
// }
//  ).join(' ') )

// function greeting(firstName) {
//   return function (lastName) {
//     return ` ${firstName} ${lastName}`;
//   };

// }

// function quastion(){

//   const password = prompt('password?' ,'')
//   if(password=== '1111' ){
//     return function (name){
//       return `${name}`
//     }
//   }
//   return greeting('dima')('sonnic')
// }
// const password = quastion('1111')
// console.log(password('welkome') +

// )

// function login(job) {
//   const jobDictionary = {
//     name: function names(firstName) {
//   return function (lastName) {
//     return ` ${firstName} ${lastName}`;
//   };

// },
//     password: "какой предмет вы ведете"
//   };
//   return function (name) {
//     return `${name},${jobDictionary[job]}`;
//   };
// }

// const fullName = login( "dima")('sonnic');
// console.log(fullName);
// const teacherQuesstion = login("password");
// console.log(teacherQuesstion("Dima"));

// // ///////////////////////////////////////////////

// let arrA = ["s", "y", "t", "r", "a", "r", "o", "s"];
// let arrB = ["s", "t", "t", "a", "s", "d", "p", "i"];

// let letter = arrA.filter((x) => arrB.includes(x)).join();

// const compatibility = (a) => a.split(",").join("");

// console.log(compatibility(letter));
