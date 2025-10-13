//JavaScript Function

//Cara 1. Function Declaration 
// function greetings(){
//     console.log("Hello World")
// } 

// greetings() //Call Function  

// //Cara 2. Function Expression 
// const greetings2 = function (){
//     console.log("Hello World 2")
// } 
// greetings2()

//Function with input (parameter & argument) 
// and output (return value)
//Cara 1  
//                 parameter
// function greetings(fullName){ 
//     return "Hello" + fullName 
// } 
// //                      argument 
// let output = greetings("John Doe") 
// console.log(output) 

// const greetings2 = function(fullName){
//     return "Hello" + fullName
// }

// let output = greetings2("Jane Doe") 
// console.log(output2) 

// //Global, Local, Block Scope dari Variable 
// let x = 10 //Global Variable
// console.log(x) //10 
// function func1(){ 
//     let y = 20 //Local Variable 
//     console.log(x) //10
//     console.log(y) //20 
//     if(true){ 
//         let z = 30 //Block Variable
//         console.log(x) //10
//         console.log(y) //20 
//         console.log(z) //30 
//     }
//     // console.log(z) //EROR  
// }
// // console.log(y) //EROR 
// func1() 

//Mini Exercise 
//Modifikasi mini Exercise sebelumnya ttg menghitung BMI 
//dengan menggunakan function dimana function tsb memiliki 
//input dan output. Berat & tinggi sebagai dan BMI sebagai output 

// let berat = 78  
// let tinggi = 1.77 
// console.log(berat) 
// console.log(tinggi)    //SALAH 
// function func1(){ 
//     if(true){
//         console.log(berat) 
//         console.log(tinggi)
//     }
 
// } 
// func1() 

// function calculate(berat, tinggi){ 
//     let bmi = berat / (tinggi * tinggi) 
//     let hasil = bmi > 25 ? "BMI anda adalah " + bmi + ", kategori kelebihan berat badan " : "BMI anda adalah " + bmi +, kategori berat badan normal" 
//     return hasil 
// } 
// let output = calculateBMI(36, 1.6) 
// console.log(output) 

// Pelajari dirumah tentang IIFE & callback fuction 




