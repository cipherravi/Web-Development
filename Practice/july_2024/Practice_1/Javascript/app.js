//// DOM

// console.dir(document);

////getElementsByTagName

// console.log(document.getElementsByTagName("h1"));

////getElementById

// console.log(document.getElementById("main"));

////getElementsByClassName

// console.log(document.getElementsByClassName("group"));

////querySelector

// console.log(document.querySelector(".selectgroup"));
// console.log(document.querySelector("#select"));

////querySelectorAll

// console.log(document.querySelectorAll("li"));

// console.log(document.querySelector("#para").innerHTML);

// document.querySelector("#para").innerHTML = "<p>Hello</p>";

// console.log(document.querySelector("#para").innerText);

// let newElement = document.createElement("div");
// document.querySelector("newElement").innerHTML = "<p>hello</p>";
// document.querySelector("ul").appendChild(newElement);
// document.querySelector("div").innerHTML = "<p>hello</p>";
// console.log(document.querySelector("body"));

//// CREATE ELEMENT & APPEND CHILD

// let newElement = document.createElement("div");
// let newElementChild = document.createElement("p");
// newElementChild.textContent = "hello";
// newElement.appendChild(newElementChild);

// let list = document.querySelector("ul");

// list.appendChild(newElement);
// console.log(list);

//// PLACING ELEMENT AND REMOVING ELEMENT

// let element = document.querySelector("ul");
// let newText = document.createElement("h1");
// newText.textContent = "Hello World";
// // console.log(newText);
// element.insertAdjacentElement("afterbegin", newText);

// // element.removeChild(newText); //way-1

// newText.parentElement.removeChild(newText); //way-2 Easy one
// console.log(element);

//// CSS via JS
// let content = document.querySelector("h1");

// //.style way1  ony one item can change

// content.style.color = "blue";
// content.style.backgroundColor = "white";

// //.cssText way2 multiple item can change

// content.style.cssText = "color:red;background-color:yellow;font-size:2.4em";

//.setAttribute way3 it uses for many methods like for style for setting id and classes . for any attribute you can use

// content.setAttribute("style", "color:yellow; background-color:green");

//// ClassName & classList ; classList is useful rather than ClassName

////classList methods --> add() , remove() , toggle() , contains()

//// writing in browser it is working fine

// let classes = document.querySelector("#divL");
// classes.classList;
// console.log(classes);

//// Event Listener

//fetching element
// let element = document.querySelector("h1");
// // defining function
// function changeBackground() {
//   element.style.background = "red";
// }
// //adding event listener
// element.addEventListener("click", changeBackground);
// //removing event listener
// element.removeEventListener("click", changeBackground);

//fetching event
// para.addEventListener("click", function (event) {
//   console.log(event);
// });

///Prevent Default
// let link = document.querySelector("#link");
// link.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Prevented link from being open");
// });

function personData() {
  let data = {
    firstName: "Ravi",
    age: 20,
    intro: function () {
      console.log(
        `Hello i am ${this.firstName} and i am ${this.age} years old`
      );
    },
  };
  return data;
}
let obj1 = personData();
obj1.age;

// let data = {
//   firstName: "Ravi",
//   age: 20,
//   intro: function () {
//     console.log(`Hello i am ${firstName} and i am ${age} years old`);
//   },
// };
// console.log(data.firstName);
