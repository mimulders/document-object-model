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
