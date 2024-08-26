// map(), filter(), reduce() are high order functions
// map() function
const arr = [1, 2, 3, 4];
function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);
console.log(output);

const res = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(res);

const outputt = arr.map((x) => x.toString(2));
console.log(outputt);

// filter() Function
const evenArray = arr.filter((x) => x % 2 == 0);
console.log("even array is: " + evenArray);

const greaterthan1 = arr.filter((x) => x > 1);
console.log(greaterthan1);

//reduce() function
// is used at a place where you have to take all the elements of the array
// find out a single element as a result

const sumOfArray = arr.reduce(
  (accumulator, currentVal) => accumulator + currentVal
);

console.log("sumOfArray is : ", sumOfArray);

const maxNumberInArray = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(maxNumberInArray);

// Tricky Example of Map
const users = [
  { firstName: "Mudit", LastName: "Arora", Age: 25 },
  { firstName: "Earn", LastName: "Nightingale", Age: 74 },
  { firstName: "Richard", LastName: "Bernard", Age: 88 },
];
const result = users.map((x) => x.firstName + " " + x.LastName);
console.log(result);

// Tricky Example of reduce
// const age = users.reduce(function (acc, curr) {
//   if (acc[curr.Age] > 25) {
//   }
// });
// console.log(age);

// filter() with map()
const userAgeLessThan30 = users
  .filter((x) => x.Age < 30)
  .map((x) => x.firstName);
console.log(userAgeLessThan30);

// reduce ()
const userAgeLessThan80 = users.reduce((acc, curr) => {
  if (curr.Age < 80) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(userAgeLessThan80);
