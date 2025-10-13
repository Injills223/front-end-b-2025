//Exercise 2 - Array Exercise 

let people = ["Greg", "Mary", "devon", "James"]; 

//3. Hapus "Greg" 
people.shift()
console.log(people) 

//4. Hapus "James" 
people.pop(); 
console.log(people) 

//5. Tambahkan "Matt" di depan 
people.unshift("Matt"); 
console.log(people) 

//6. Tambahkan nama kamu di akhir 
people.push("sakul")
console.log(people) 

//7. Iterasi dengan for-loop, berhenti setelah "Mary" 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]); 
    if (people[i] == "Mary") {
        break
    }
} 

//8. Buat copy array tanpa "Mary" & "Matt" 
let copy = people.slice(2); 
console.log(copy); 

//9. mengubah people dan pakai splice 
people = ["Matt", "Marry", "Devon", "sakul"]; 
people.splice(2, 1, "Elizabeth", "Artie"); 
console.log(people);

//10. tambahkan "Bob" 
let withBob = people.concat("Bob"); 
console.log(withBob) 

// Exercise 2 - Object Exercise 

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Tambahkan "GO" 
programming.languages.push("Go"); 
console.log(programming.languages); 

//2. Ubah difficulty jadi 7
programming["difficulty"] = 7; 
console.log(programming.difficulty); 

//3. Hapus Jokes 
delete programming.jokes; 
console.log(programming); 

//4. Tambahkan key baru 
programming.isFun = true; 
console.log(programming); 

//5. Map 
programming.languages.map(function(lang, index) {
    console.log(index + " - " + lang);
});