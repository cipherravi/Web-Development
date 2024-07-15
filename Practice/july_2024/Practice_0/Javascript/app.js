// for in loop
// let person = {
//   name: "Ravi",
//   age: 19,
//   gender: "male",
// };
// for (const key in person) {
//   // console.log(key);
//   // console.log(key + "  : " + person[key]);
//   console.log(`${key}  : ${person[key]}`);
// }

// let number = ["one", "two", "three"];
// for (const index in number) {
//   console.log(`${index} : ${number[index]}`);
// }
// const object = { a: 1, b: 2, c: 3 };
// for (let property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for of loop
// let names = ["Ravi", "Raju", "Abhishek"];
// for (name of names) {
//   console.log(name);
// }

// let array1 = ["a", "b", "c"];
// for (let abc of array1) {
//   console.log(abc);
// }

// ForEach Helper

// const colors = ["red", "blue", "green", "black"];
// colors.forEach((color) => console.log(color));

// const words = ["hello", "red", "table", "brid"];
// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// function adder(number) {
//   sum += number;
// }
// numbers.forEach(adder);
// console.log(sum);

// Map Method

// let number = [1, 2, 3, 4, 5];
// let results = number.map((num) => {
//   return num * 10;
// });
// console.log(results);

// Filter method

// const ages = [32, 33, 16, 40];
// console.log(
//   ages.filter((adult) => {
//     return adult >= 18;
//   })
// );

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// function newWord(neW) {
//   return neW.length > 5;
// }
// console.log(words.filter(newWord));

// //Find Method
// const ages = [3, 10, 19, 20];
// const agesRes = ages.find((age) => {
//   return age > 18;
// });
// console.log(agesRes);

// // Every && Some

// let name = ["ravi", "raju", "abhishek"];
// let everyres = name.every((name) => name.length === 4);
// let someres = name.some((name) => name.length !== 4);
// console.log(everyres);
// console.log(someres);

// // Reduce Method

// const number = [3, 5, 7, 9];
// const sum = number.reduce((pre, curr) => {
//   console.log(`previous : ${pre}`);
//   console.log(`current : ${curr}`);
//   return pre + curr;
// }, 0);
// console.log(sum);

// const num = [2, 3, 4, 5];
// const product = num.reduce((p, c) => {
//   return p * c;
// }, 1);
// console.log(product);

// // Map Data Structure

// const map = new Map();

// let key1 = "a";
// // let key2 = "b";
// // let key3 = "c";
// map.set(key1, 1);
// map.set("b", 2);
// map.set("c", 3);
// console.log(map.keys());
// console.log(map.get(key1));
// console.log(map.size);
// map.delete("b");
// console.log(map.size);

// // Set Data Structure

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// for (const item of letters) {
//   console.log(item);
// }

// // Symbol

// const symbol = Symbol("foo");
// console.log(typeof symbol);
// const obj = {};
// obj[symbol] = "Ravi";
// console.log(obj);
