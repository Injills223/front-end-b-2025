
export async function ambilDataUser() {
  try {
    let res = await fetch("https://reqres.in/api/users");
    let data = await res.json();

    data.data.forEach(({ first_name, last_name }) => {
      console.log(`Nama Lengkap: ${first_name} ${last_name}`);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

//Jawaban Pertanyaan Bagian 3:
//1. Promise chaining pakai .then(), lebih susah dibaca kalau panjang (callback bertingkat).
//2. Async/await bikin kode lebih singkat & mirip synchronous, lebih gampang dibaca & maintain.
