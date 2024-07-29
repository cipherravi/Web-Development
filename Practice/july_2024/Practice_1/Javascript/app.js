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

////
