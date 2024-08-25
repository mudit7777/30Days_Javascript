// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("I'm Clicked", ++count);
//   });
// }

// attachEventListeners();
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("I'm Clicked", ++count);
  });
}
attachEventListeners();

// The call back function xya is foeming a closure with the attachEventListeners

// here above xyz is a callback function

// Closures Demo along with Evvent Listeners

// garbage collection and removeEventListeners
// EventListeners are heavy
