function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();

// Example 2
function m() {
  var b = 100;
  function n() {
    var a = 77;
    function o() {
      console.log(a, b);
    }
    o();
  }
  n();
}
m();
