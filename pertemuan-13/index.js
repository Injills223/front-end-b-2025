//Asynchronous JavaScript

//Synchronous -> single thread

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1. parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 1000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 4000);
//2. concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 3");
//         }, 1000);
//       }, 1000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
// let condition = True;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

//pakai/consume Promise
//1. then - catch
// newPromise
//   .then((result) => ${result} !!!) //Proses 1
//   .then((result2) => console.log(result2)) //Proses 2
//   .catch((error) => console.log(error));

//2. async - await
//Buat dalam function
// (async () => {
//   let result = await newPromise;
//   console.log(result);
// })();

//Test get data API from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => console.log(users));
//Mini exercise
//Ubah fatch menggunakan async - await
const getUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  console.log(users);
};

//Mini Exercise 
//Ubah fetch menggunakan async-await tampilkan name saja 



