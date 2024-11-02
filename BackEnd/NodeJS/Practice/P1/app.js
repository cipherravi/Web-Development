const { x, xyz } = require("./xyz.js");

var a = 10;
var b = 100;
var c = a + b;
console.log(c);
// console.log(globalThis);
console.log(globalThis === global);

xyz();
console.log(x);
