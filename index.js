//Define a constant name equal to your name.
const aname = "Hi Sergio!";

//Log name.
console.log(aname);

//log the document.
//The document is a built-in variable inside scripts. The document describes and controls the page.
console.log(document);

// one function does everything
function doEverything() {
  console.log("everything");
}

// check if elements are still loading
if (document.readyState === "loading") {
  // if elements are still loading,
  // wait for the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", doEverything);
} else {
  // if elements are already loaded,
  // run the function now
  doEverything();
}

function findElement() {
  const teacher = document.querySelector(".subtitle"); //returns the first element that matches a specified CSS selector(s) in the document.

  console.log(teacher);
  // Define a constant changeMe equal to passing the string 'button' to document.querySelector.
  // Log changeMe.
  const changeMe = document.querySelector("button");
  console.log(changeMe);
}

function findAllParagraphs() {
  const paragraphs = document.querySelectorAll("p"); //returns all elements in the document that matches a specified
  // CSS selector(s), as a static NodeList object.

  paragraphs.forEach((paragraph) => console.log(paragraph));
}

//Define a function onClick that takes an event argument and logs it.
function onClick(event) {
  console.log(event);
  const changeMe = document.querySelector("button");
  changeMe.textContent = aname;
}

function main() {
  // Select the element with a query.
  // Then, pass an event name and callback to its addEventListener method.
  // The callback will run when that event occurs on that element.
  const subject = document.querySelector("h3");
  subject.addEventListener(
    "click", // event name
    () => console.log("clicked") // callback
  );

  const changeMe = document.querySelector("button");
  changeMe.addEventListener("click", onClick);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", findElement);
} else {
  findElement();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", findAllParagraphs);
} else {
  findAllParagraphs();
}
