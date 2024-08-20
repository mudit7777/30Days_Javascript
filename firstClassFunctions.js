a();
b();
// Function Statement
function a() {
  console.log("A");
}

//Function Expression
var b = function () {
  console.log("B");
};

// If you call them before even creating them in code,
// the function expression b will throw an error due to hoisting => Uncaught TypeError: b is not a function
// because, in memory creation, a is assigned space but b is treated like any other variable

// a();
// b();
