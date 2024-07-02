console.log("Hello Wolrd!");
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
