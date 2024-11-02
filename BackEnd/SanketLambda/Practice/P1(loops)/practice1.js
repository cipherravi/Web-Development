// for (let i = 1; i <= 5; i++) {
//   //   console.log("*");
//   let stars = "";

//   for (let x = 1; x <= i; x++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// we can bind logic into a function to use multiple times

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";

//     for (let x = 1; x <= i; x++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// printStars(10);

////new problem

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";
//     // let space = n - i;
//     for (let spaces = 1; spaces <= n - i; spaces++) {
//       stars += " ";
//     }
//     for (let x = 1; x <= i; x++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// printStars(5);

////new problem

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";
//     for (let spaces = 1; spaces <= n - i; spaces++) {
//       stars += " ";
//     }
//     for (let left = 1; left <= 2 * i - 1; left++) {
//       stars += "*";
//     }
//     // for (let right = 2; right <= i; right++) {
//     //   stars += "*";
//     // }
//     console.log(stars);
//   }
// }
// printStars(5);

////new problem

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";

//     for (let x = n; x >= i; x--) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// printStars(5);

// new way

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";

//     for (let x = 1; x <= n - i + 1; x++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// printStars(5);

//// New Problem (Diamond)

// function printUpperTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";
//     for (let spaces = 1; spaces <= n - i; spaces++) {
//       stars += " ";
//     }
//     for (let upper = 1; upper <= 2 * i - 1; upper++) {
//       stars += "*";
//     }

//     console.log(stars);
//   }
// }
// function printLowerTriangle(n) {
//   //lower triangle n-1 row
//   for (let row = 1; row <= n - 1; row++) {
//     let str = "";
//     //spaces = current row
//     for (let spaces = 1; spaces <= row; spaces++) {
//       str += " ";
//     }
//     //for every row we have a formula
//     let stars = 2 * (n - row) - 1;
//     for (let star = 1; star <= stars; star++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// function printStar(n) {
//   printUpperTriangle(n);

//   printLowerTriangle(n);
// }

// printStar(3);

//// New Problem (ButterFly)

// function upperPart(n) {
//   for (let row = 1; row <= (n - 1) / 2; row++) {
//     let str = "";
//     //leftStars
//     for (let left = 1; left <= row; left++) {
//       str += "*";
//     }
//     //spaces
//     for (let spaces = 1; spaces <= n - 2 * row; spaces++) {
//       str += " ";
//     }
//     //rightStars
//     for (let right = 1; right <= row; right++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// // upperPart(7);

// function middle(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "*";
//   }
//   console.log(str);
// }
// // middle(7);

// function lowerPart(n) {
//   for (let row = 1; row <= (n - 1) / 2; row++) {
//     let str = "";
//     //leftStars
//     for (let left = 1; left <= (n - 1) / 2 - row + 1; left++) {
//       str += "*";
//     }
//     //spaces
//     for (let spaces = 1; spaces <= 2 * row - 1; spaces++) {
//       str += " ";
//     }
//     //rightStars
//     for (let right = 1; right <= (n - 1) / 2 - row + 1; right++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// // lowerPart(7);

// function printButterfly(n) {
//   upperPart(n);
//   middle(n);
//   lowerPart(n);
// }
// printButterfly(7);

//-----------------------------------------------------------

function printNumberPyramid(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let space = 1; space <= n - row; space++) {
      str += " ";
    }
    let counter = 1;
    for (let number = 1; number <= row; number++) {
      str += counter;
      counter++;
    }
    let counter2 = row - 1;
    for (let right = 1; right <= row - 1; right++) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}
printNumberPyramid(5);
//----------------------------------------------------------------------------END
