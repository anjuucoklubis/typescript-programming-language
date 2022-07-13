// //deklrasi typedata

// interface Pointlike {
//     x: number;
//     y: number;
//   }
// interface Named {
//     name: string;
// }


// //fungsi
// function logPoint(point: Pointlike) {
//     console.log("x = " + point.x + ", y = " + point.y);
//   }
   
// function logName(x: Named) {
//     console.log("Hello, " + x.name);
// }

   
//   const obj = {
//     x: 15,
//     y: 20,
//     name: "anju",
//   };
   
//   logPoint(obj);
//   logName(obj);

interface Sekolah{
  nama : string;
  alamat : string;
  kodesekolah: number;
}

interface kelas {
  namakelas : string;
}

function logSekolah(sekolah:Sekolah) {
  console.log("nama sekolah:" + sekolah.nama, "alamat sekolah:" + sekolah.alamat, "kode sekolah:" +sekolah.kodesekolah);
}

function logKelas(kelas:kelas) {
  console.log("nama kelas:" + kelas.namakelas);
}

const sekolah = {
  nama: "SMA BTB",
  alamat: "soposurung",
  kodesekolah: 5,
  namakelas: "IPA 5"
};

logSekolah(sekolah);


