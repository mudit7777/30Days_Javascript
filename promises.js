const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function () {
  proceedToPayment(orderId);
});

const promise = createOrder.then(cart);

// {data : orderDetailsf }

// attach a callback function to the promise object
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
