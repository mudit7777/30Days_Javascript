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

console.log("________04th August _Closures Advantages_____________");

//example of closures fascilitating Encapsulation

function outest() {
  function outer(b) {
    function inner() {
      var c = 30;

      console.log(b, a, c);
    }
    let a = 20;
    return inner;
  }
  return outer;
}
var bc = outest()("Hello");
bc();
console.log("__Scalable and best code for encapsulation example ");

function Counter() {
  var count = 1;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
