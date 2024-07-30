let c = 100;
{
  let c = 10;
  {
    let c = 300;
    // console.log(c);
  }
  console.log(c);
}
console.log(c);

console.log("shadowing with const with function");

const cc = 100;
function x() {
  const cc = 1000;
  console.log(cc);
}
x();
console.log(cc);

console.log("shadowing with let with function");
let ccc = 100;
function x() {
  let ccc = 1000;
  console.log(ccc);
}
x();
console.log(ccc);
