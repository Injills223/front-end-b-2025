//Buatlah program untuk menghitung BMI dimana menggunakan
// //1. IIFE 
// //2. Callback Function 
// //yang memiliki parameter dan return value 

// IIFE 
let output = (function(berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    return BMI > 25 
        ? "BMI anda adalah " + BMI + ", kategori kelebihan berat badan"
        : "BMI anda adalah " + BMI + ", kategori berat badan normal";
})(68, 1.55);

console.log(output);


// Callback 
function menghitungBMI(berat, tinggi, callback) {
    let BMI = berat / (tinggi * tinggi); 
    return callback(BMI); 
}  

function kategoriBMI(bmi) {
    return bmi > 25 
        ? "BMI anda adalah " + bmi + ", kategori kelebihan berat badan"
        : "BMI anda adalah " + bmi + ", kategori berat badan normal";
} 

let output2 = menghitungBMI(68, 1.55, kategoriBMI) 

console.log(output) ; 

