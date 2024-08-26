// A high-order function (HOF) is a function that returns a function
const radius = [3, 1, 2, 4];

// logic for area
function area(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

// logic for circumference of circle
function circumference(radius) {
  return 2 * Math.PI * radius;
}
// logic for diameter
function diameter(radius) {
  return radius * 2;
}
function calculate(radius, logic) {
  const res = [];
  for (let i = 0; i < radius.length; i++) {
    res.push(logic(radius[i]));
  }
  return res;
}

console.log("Area is: ", calculate(radius, area));
console.log("Circumference is: ", calculate(radius, circumference));
console.log("Diameter is: ", calculate(radius, diameter));
