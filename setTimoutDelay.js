console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");

// 1 million lines of code

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("While Expires");
