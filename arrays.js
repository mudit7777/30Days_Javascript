// Array creation and access

console.log("Loggin the array to the console");
let a = [1, 2, 3, 4, 5];
console.log(a);

// access the first and last element of the array and log them
console.log("the first and last element of the array");
console.log(a[0]);
console.log(a[a.length - 1]);

// Array Methods - Basic

console.log("Array", a);
//push
a.push(6, 8, 9, 10);
console.log("Array after pushing at last", a);
//pop
const lastElement = a.pop();
console.log("Popped Element : ", lastElement);
console.log("Array after pop: ", a);

//shift
const firstElement = a.shift();
console.log("Shift Element : ", firstElement);
console.log("Array after shift of first element:", a);

// unshift - add element to the beginning of the array
const addedElementinBegin = a.unshift(1);
console.log("Element added at begin : ", addedElementinBegin);
console.log("Array after adding at first:", a);

//Array Methods Intermediate
console.log(
  "************************Array Methods Intermediate********************"
);

// use map to create a array
const doubledArray = a.map((x) => x * 2);
console.log("Doubled array using map function is: ", doubledArray);

// filter the array of even numbers
const evenArrayElemeents = a.filter((x) => x % 2 == 0);
console.log("Even Array using filter function is : ", evenArrayElemeents);

// use redduce to calculate sum
const sum = a.reduce((accumulator, currentValue) => {
  console.log(`Accumuator: ${accumulator}, CurrentValue : ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("Sum of the array is :", sum);

// Array Iteration
function arrayPrint() {
  let n = [1, 2, 3, 4, 5, 6];
  let len = n.length;

  console.log("Length of array is:", len);
  for (let i = 0; i < len; i++) {
    console.log(n[i]);
  }
}
arrayPrint();

console.log("Array print using for each");

a.forEach((element) => {
  console.log(element);
});

console.log("Array print using for each");
doubledArray.forEach((element) => {
  console.log(element);
});

//Two DImensional Array
console.log("2D Array ");

const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.log("2D Array is: ", twoDArray);

console.log("print in more readable format");
twoDArray.forEach((row) => {
  console.log(row.join(" "));
});

console.log("1st row, 1st index elements");
console.log(twoDArray[0][1]);

console.log("2nd row, 2nd index elements");
console.log(twoDArray[1][2]);
