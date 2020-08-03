app.controller('checkoutController', function($scope, $rootScope, $http, $timeout, $cookies, $location, productService, cartService, paymentService) {
  if (!$rootScope.finalPrice){
    $rootScope.navigate("/cart");
  }
  console.log(cartService.getCart());
  paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'blue'
    },
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: $rootScope.finalPrice + ""
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // Capture the funds from the transaction
      return actions.order.capture().then(function(details) {
        paymentService.processPayment(details.id, cartService.getCart());
        console.log(details);
      });
    }
  }).render('#paymentButtons');
});
