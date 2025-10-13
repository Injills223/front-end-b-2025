// //Array & Object in JS 
// //1. Array 
// //Cara mendeklarasikan array 
// //Cara 1. Array Literal 
// let students = ["John", "Jack", "Jane", "Peter"]; 
// let John = ["John Doe", 30, true, [80, 90, 100]]; 
// //Cara 2. Kata kunci 'new' 
// let employes = new Array("John", "Jack", "Jane", "Peter")

// //Menampilkan semua element array sekaligus 
// console.log(students);
// //Menampilkan salah satu element berdasarkan index 
// console.log(students[2]); 
// John[2] = false; 
// console.log(John); 
// //Menampilkan element terakhir dalam array 
// console.log(students.length);
// console.log(students[students.length - 1]); 

// //Array Method 
// let array = [1, 2, 3, "Hello", false, true]; 
// //1. toString() - merubah array menjadi string 
// console.log(array.toString()); 
// //2. Join() 
// console.log(array.join("-")); 
// console.log(array.join(" ")); 
// console.log(array.join("#")); 
// //3. pop() - menghapus element terakhir 
// array.pop(); 
// console.log(array); 
// //4. Push() - menambah element terakhir 
// array.push("Selamat pagi");  
// console.log(array); 
// //5. Shift() - menghapus element pertama 
// array.shift(); 
// console.log(array); 
// //6. unshift() - menambah element pertama 
// array.unshift("Selamat pagi"); 
// console.log(array); 
// //7. Splice() - tambah/hapus element ditengah 
// array.splice(3, 0, 4); 
// console.log(array); 
// //8. Slice() - ambil element array dan simpan ke array baru 
// let numbers = array.slice(1, 4); 
// console.log(numbers)  
// //9. Concat() - menggabungkan array 
// let num1 = [1, 2, 3]; 
// let num2 = [4, 5, 6];
// let num3 = [7, 8, 9];
// let combinedNumbers = num1.concat(num2, num3); 
// console.log(combinedNumbers); 

// //2. Object 
// let jane = {
//     fullName: "Jane Doe", 
//     age: 30, 
//     isActive: true, 
//     grade: [88, 98, 100], 
//     address: {
//         street: "Jl. Arnold Mononutu", 
//         city: "Minahasa Utara", 
//         province: "Sulawesi Utara", 
//     },
//     sayHello: function () {
//         console.log("Hello my name is " + this.fullName);         
//     },
// }; 

// //Menampilkan semua element dalam object 
// console.log(jane); 
// //Cara akses element dalam object 
// //Cara 1. dot notation 
// console.log(jane.fullName); 
// console.log(jane.grade[1]); 
// console.log(jane.address.city); 
// jane.sayHello(); 

// //Cara 2. bracket notation 
// console.log(jane["fullName"]); 
// console.log(jane["grade"][1]); 
// console.log(jane["address"["city"]]); 
// jane["sayHello"](); 

// jane.age = 35; 
// console.log(jane); 
// jane.job = "programmer"; //menambahkan property baru 
// delete jane.isActive; // Menghapus property 
// console.log(jane)
