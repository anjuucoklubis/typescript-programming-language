// interface Daerah {
//     namadaerah : string;
//     deskripsi : string;
//     cirikhas: string;
//     kodepos: number;
// }

// const daerah : Daerah = {
//     namadaerah : "Balige",
//     deskripsi : "balige adalah...",
//     cirikhas : "Ulos",
//     kodepos : 331231,
// }   

// console.log(`ini adalah daerah : ${daerah.namadaerah}`)

// const user = {
//     name: "Daniel",
//     age: 26,
//     location : "Balige"
//   };
   
//   console.log(`${user.location}`)

// const announcement = "Hello World!";
 
// // How quickly can you spot the typos?
// announcement.toLocaleLowerCase();

function greet(person:string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString}!`);
}

greet("Anju", new Date());