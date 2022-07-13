// Generik menyediakan variabel untuk tipe. Contoh umum adalah array. 
// Array tanpa obat generik bisa berisi apa saja. 
// Sebuah array dengan generik dapat menjelaskan nilai-nilai yang berisi array.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;