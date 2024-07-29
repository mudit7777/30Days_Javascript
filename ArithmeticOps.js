function sum(a, b) {
  return a + b;
}
console.log("res of sum function is:" + sum(10, 10));

function subtract(a, b) {
  return a - b;
}
console.log("res of subtract function is: " + subtract(10, 10));

//multiply two numbers
// divide two numbers

function remainder(a, b) {
  return a % b;
}
console.log("res of remainder function is:" + remainder(10, 3));

function divide(a, b) {
  if (b === 0) {
    return "Division not allowed";
  }
}
console.log("Result of division function is" + divide(10, 0));

var a = 10;
a += 10;
console.log(a);

var a = 10;
a -= 10;
console.log(a);

// program to compare using > and <

function compare(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else if (a < b) {
    console.log("b is greater than a");
  } else {
    console.log("a is equal to b");
  }
}
console.log(compare(10, 20));

function isPositive(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log("The res of isPostive is : " + isPositive(10));

// //Achievement
// Use of Arithmetic operators
// use of assignment operators
// compare values using comparispon operators
// combine conditions using logical operators
// use the ternary for concise conditional expressions
