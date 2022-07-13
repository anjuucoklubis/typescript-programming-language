//Sistem Tipe Struktural

//Salah satu prinsip inti TypeScript adalah bahwa pengecekan tipe berfokus pada bentuk yang dimiliki nilai. Ini kadang-kadang disebut "pengetikan bebek" atau "pengetikan struktural".

//Dalam sistem tipe struktural, jika dua objek memiliki bentuk yang sama, mereka dianggap bertipe sama.

//xxxxxx
// interface Point {
//     x : number;
//     y : number;
//     z : number;
// }
// function logPoint(params:Point) {
//     console.log(`${params.x}, ${params.y}, ${params.z}`)
// }
// const point1 = {x : 12, y:26, z:30};
// logPoint(point1);

// const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26




//xxxx
// interface Point1 {
//     width : number;
//     height : number;

// }

// function logPoint1(params1: Point1) {
//     console.log(`${params1.height}, ${params1.width}`)
// }
// const anju = { width: 30, height: 80 };
// logPoint1(anju); 



// xxxxxx
// interface Color {
//     warna : string;
// }
// function colorwarna(params:Color) {
//     console.log(`${params.warna}`)  
// }
// const warna1 = {warna: "#187ABF"};
// console.log(warna1);


// xxxxx
// interface Anju Lubis {
//     name: string;
//     size : number;
//     color : string;
// }

// function botolanju(params:AnjuLubis) {
//     console.log(`${params.name}, ${params.size}, ${params.color}`)
// }

// const botolanjuadalah ={
//     name: "Tupperware",
//     size : 20,
//     color : "#fffff",
// };

// console.log(`botolanjuadalah : ${botolanjuadalah}`)



//xxxxx
class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
  const newVPoint = new VirtualPoint(13, 56);
  console.log(newVPoint); // logs "13, 56"


// CLASSS DAN INTERFACE .. BEDAKAH????