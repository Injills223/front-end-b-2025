// IIFE & Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
//    self-executing anonymous Function
// (function () {
//   console.log("Hello World");
// })();
// //IIFE with parameter & return value
// let output = (function (fullName) {
//   return "Hello " + fullName;
// })("Jane");

// console.log(output);

//2. Callback Function
// funtion passed into another function as an argument

function greetings(callback) {
  callback();
}
//callback function must be an anonymous function
greetings(function () {
  console.log("Hello Callback");
});

//Callback with parameter & return value
function greetings(callback) {
  let result = callback("Jane");
  return result;
}

//Callback function must be an anonymous function
let output = greetings(function (fullName) {
  return "Hello " + fullName;
});
console.log(output);

//Exercise #01
//Buatlah program untuk menghitung BMI di mana menggunakan
//1. IIFE
//2. Callback Function
//yang memiliki parameter dan return value