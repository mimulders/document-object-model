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
