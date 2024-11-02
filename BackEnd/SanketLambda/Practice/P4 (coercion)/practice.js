const obj = {
  x: 10,
  y: 20,
};
console.log(`x is ${obj.x}`);

let x = NaN;
// console.log(isNaN(x));
// console.log(isNaN("Ravi"));

// console.log(Number.isNaN(x));
// console.log(Number.isNaN("Ravi"));

console.log(x == NaN);
console.log(NaN === NaN);

console.log(x !== x); // check whether any problem in this approach

// to check sign of  a number

function checkSign(num) {
  let sign = Math.sign(num);
  if (sign === 0) {
    console.log(Object.is(num, -0) ? "Negative Zero" : "Zero");
  } else if (num > 0) {
    console.log("Number is Positive");
  } else if (num < 0) {
    console.log("Number is Negative");
  } else {
    console.log("Enter a Value");
  }
}
checkSign(-0);
