//*********For Looop**********
// program to print 1-10
function printNumber(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
printNumber(10);

console.log("Table of 5");
function tableOf5() {
  for (let i = 0; i <= 10; i++) {
    console.log(i * 5);
  }
}
tableOf5();

// ****** While Loop *******
console.log("While Loop ki kahaani");
console.log("Program for sum of numers from 1-10");
function sumOfNumbers(from, to) {
  let sum = 0;
  let number = from;

  // Ensure that from is less than or equal to to
  if (from > to) {
    console.error("Invalid range: 'from' should be less than or equal to 'to'");
    return;
  }

  while (number <= to) {
    sum += number;
    number++;
  }

  return sum;
}
// Call the function with the range 1 to 10
const result = sumOfNumbers(1, 10);
console.log("The sum of numbers from 1 to 10 is:", result);

function printNumbersReverse(from, to) {
  let n = from;
  while (n >= to) {
    console.log(n);
    n--;
  }
}
console.log("The numbers from 10-1 are :");
printNumbersReverse(10, 1);

console.log("Do Whilwe Loop ki kahani");
console.log("Print number 5 to 1 ");

function print(from, to) {
  let n = from;
  do {
    console.log(n);
    n++;
  } while (n <= to);
}
print(1, 5);

console.log("Factorial of a number");
function factorial(n) {
  if (n < 0) {
    return "ni bataunga 0 ke lie, negative ke lie";
  }
  let res = 1;
  let i = n;
  do {
    res *= i;
    i--;
  } while (i > 0);

  return result;
}
console.log("factorial of 5 is : " + factorial(5));

const number = 10;
const resultt = factorial(number);
console.log(`Factorial of number ${number} is: ${result}`);

//Nested For Loops
function pattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
console.log("The star pattern is here : ");
pattern(5);

// print 1-10 skipping the number 5
console.log("print 1-10 skipping the number 5");

function printSkip(n) {
  let i = 1;
  while (i <= n) {
    if (i == 5) {
      continue;
    }
    console.log(i);
    i--;
  }
}
printSkip(10);
