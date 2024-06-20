// console.log("Hello Wolrd!");
// let name = "ravi kumar yadav";
// console.log(name.split(" ").join("_"));
// console.log(name.includes(" "));
// let number = "50";
// number = +number;
// number = Number(number);
// number = parseInt(number);
// console.log(number);
// console.log(typeof number);
// let a = 1;
// do {
//   console.log("first", a);
//   a++;
// } while (a < 5);
// for (i = 1; i < 5; i++) {
//   console.log("Hello", i);
// }

// for (let i = 0; i < 5; i++) {
//   console.log("*", i);
//   for (let y = 0; y < 5; y++) {
//     console.log("$", y);
//   }
// }

// let arr = {};
// console.log(typeof arr);

// let person = { firstName: "Ravi" };
// person.firstName = "Raju";
// console.log(person);

// function greet() {
//   console.log("Hello World");
// }
// greet();
// let a = 1;
// while (a < 5) {
//   greet();
//   a++;
// }

// const power = function (base, exponent) {
// let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result = result * base;
//   }
//   return result;
// };
// console.log(power(2, 1));

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };
// hummus(1);

// const greeting = (name, callback) => {
//   console.log(`Hi ${name}`);
//   callback();
// };
// const cb = () => {
//   console.log("I am a callback function");
// };
// const result = greeting("Ravi", cb);

// const calculate = (num1, num2, callback) => {
//   return callback(num1, num2);
// };

// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// const multiply = (a, b) => {
//   return a * b;
// };

// const divide = (a, b) => {
//   return a / b;
// };

// const addres = calculate(10, 5, add);
// // calculate(10, 5, subtract);
// // calculate(10, 5, multiply);
// // calculate(10, 5, divide);
// console.log(addres);

// const sortArray = (arr, compareFn) => {
//   return [...arr].sort(compareFn);
// };

// const ascending = (a, b) => a - b;
// const descending = (a, b) => b - a;

// const arr = [5, 3, 8, 1, 2];

// const sortedAsc = sortArray(arr, ascending);
// const sortedDesc = sortArray(arr, descending);

// console.log(sortedAsc);
// console.log(sortedDesc);

// const fetchDataWithCallback = (url, callback) => {
//   setTimeout(() => {
//     const data = `Fetched data from ${url}`;
//     callback(data);
//   }, 2000);
// };

// const handleData = (data) => {
//   console.log(data);
// };

// fetchDataWithCallback("https://api.example.com/data", handleData);
// Output (after 2 seconds): "Fetched data from https://api.example.com/data"

//SCOPES

// var a = 6;
// {
//   // var a = 9;
//   console.log(a);
// }
// // console.log(a);

// function greet() {
//   return `hello i am ${person.name}`;
// }
// const person = { name: "Ravi", greet };
// console.log(person.greet());

// const CurrentDate = new Date();
// console.log(CurrentDate);

// function count(count = true) {
//   if (count === true) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`count : ${i}`);
//     }
//   }
// }
// count(false);

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const combine = num1.concat(num2);
// console.log(combine);
// console.log(typeof combine);

// const colors = ["red", "blue", "green", "black", "white"];
// const [color1, color2, color3, ...color4] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);
// console.log(color4);

// const person = {
//   name: "Ravi",
//   age: 19,
//   gender: "male",
//   country: "India",
// };

// const { name: Ravi, age, country } = person;
// console.log(Ravi, age, country);

// console.log(2 > 5 ? "yes " : "nope");

let person = {
  name: "Ravi",
  age: 19,
  gender: "male",
};
for (const key in person) {
  // console.log(key);
  // console.log(key + ": " + person[key]);
  console.log(`${key}  : ${person[key]}`);
}
