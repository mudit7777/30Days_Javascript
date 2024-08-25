// Function Statement = Function Declaration
function a() {
  console.log("A");
}

//Function Expression
var b = function () {
  console.log("B");
};

a();
b();

// If you call them before even creating them in code,
// the function expression b will throw an error due to hoisting => Uncaught TypeError: b is not a function
// because, in memory creation, a is assigned space but b is treated like any other variable
// so the value of b is undefined

//Anonymous Function
// function () {

// }
// You cannot create anonymous functions like this
// Error will be - Function statements require a function name

//Anonymous functions are used when they are used as values.
// like you assign any other value to variable

var c = function () {
  console.log("C");
};

// Named Function Expression
var d = function mudit() {
  console.log("Named Function Expression");
};

c();
d();
//mudit();  # this cannot be called error would be  mudit is not defined
//          # mudit is not created in global scope, but it is created as local variable

var e = function aj() {
  console.log(aj); // function ee can be accessed inside like this
};
e();

//First Class Functions
console.log("FirstClass Functions :");
console.log(
  "The ability of functions to be used as values, passed into another funct, returned out of another functions"
);

var firstF = function (param1) {
  return function xyz() {};
};
// console.log(firstF());
console.log(firstF());

// ***** Functions are First Class Citizens***
console.log(
  "**************************Functions are First Class Citizens*******************************"
);
