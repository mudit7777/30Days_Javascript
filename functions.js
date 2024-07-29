// Functions in JS

function a() {
  c();
  function c() {}
  var b = 10;
  console.log(b);
}
a();
// console.log(b);

// Function Declaration
console.log("**********Functional Declaration**********");
// odd or even
function oddOrEven(n) {
  if (n % 2 == 0) {
    return `number ${n} is even`;
  } else return `number ${n} is odd`;
}
console.log(oddOrEven(10));

// square of number
console.log("Function for square of a number");
function square(n) {
  return `square of number ${n} is : ` + n * n;
}
console.log(square(10));

// Function Expression
console.log("**********Function Expression**********");

// max of two numbers
function maxNumber(a, b) {
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else {
    return `${b} is greater than  ${a} `;
  }
}
console.log("Max of two numbers is : " + maxNumber(10, 20));

// concatenate string
function concatenateString(a, b) {
  let res = a + " " + b;
  return res;
}
console.log(
  "Concate of two strings is : " + concatenateString("Billionaire", "Mudit")
);

console.log("*************arrow Functions********");

const printSum = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log("Sum of numbers is " + printSum(4, 5));

var print = (a, b) => console.log(a + b);
print(5, 10);

// Check if string contains specific value return true/false
const containsValue = (str, value) =>
  str.toLowerCase().includes(value.toLowerCase());
console.log(containsValue("Hello, World", "WOrld"));

console.log("**********Function Parameters and Default Values***************");
function product(a, b = 1) {
  // default value of
  return a * b;
}
console.log(product(5));

// name and age - returns greeting message
function greet(name, age = "kitne") {
  return `Hello, ${name}! Tu ${age} saal ka h bhai`;
}
console.log(greet("Mudit", 24));
console.log(greet("Mudit"));

console.log("*********High Order Functions******");

function highOrderFunction(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

const func = () => console.log("This is High Order Function");
highOrderFunction(func, 8);

function highOrderrrFunction(funcc, funccc, value) {
  return funccc(funcc(value));
}
const funcc = (x) => x * 2;
const funccc = (x) => x * x;

const result = highOrderrrFunction(funcc, funccc, 3);
console.log(result);
