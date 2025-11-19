import helloWorld from "./helloWorld.js";

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();

//Jawaban Pertanyaan Bagian 1:
//1. Kita butuh await karena helloWorld() return Promise. await bikin kode nunggu hasil Promise sebelum lanjut.
//2. Kalau await dihapus → msg isinya Promise, bukan string, jadi yang keluar di console Promise { <pending> }.
//3. export & import dipakai biar fungsi bisa dipanggil di file lain (modular, reusable).
