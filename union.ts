// UNION
//Anda dapat mendeklarasikan bahwa suatu tipe bisa menjadi salah satu dari banyak tipe.
// Misalnya, Anda dapat mendeskripsikan tipe boolean sebagai benar atau salah


type status = "active" | "nonactive";
type WindowStates = "open" | "sleep" | "shutdown";
type AngkaGenap = 2 | 4 | 6 | 8 |10 ;


// Dan menyediakan cara untuk menangani tipe yang berbeda. Misalnya, Anda mungkin memiliki fungsi yang mengambil array atau string.
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
              

    }
    return obj;
  }