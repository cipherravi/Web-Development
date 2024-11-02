// function gcd(num1, num2) {
//   let ans = 1;
//   for (let i = 1; i <= Math.min(num1, num2); i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       //   return i;
//       ans = i;
//     }
//   }
//   return ans;
// }
// // gcd(28, 24);
// console.log(gcd(28, 24));

//------------------------------------
const student = {
  name: "Ravi",
  greet: function () {
    console.log(this.name);
  },
};
const student2 = {
  name: "Buchal",
};
student.greet();
student.greet.call(student2);
