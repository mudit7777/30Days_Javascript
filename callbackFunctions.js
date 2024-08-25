// function that is passed on as a parameter into another function

// Call back functions, the set timeouts, web apis, /
// help to achieve the asynchronous world
setTimeout(function () {
  console.log("TIMER");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
