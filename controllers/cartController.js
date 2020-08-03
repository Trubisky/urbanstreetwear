app.controller('cartController', function($scope, $rootScope, $http, $cookies, $location, productService, cartService) {
  var cart = cartService.getCart();
  $scope.extendedCart = [];
  $scope.totalPrice = 0;
  function getExtended(initial){
    if (initial == cart.length) {afterTotal(); return}
    productService.getProductDetails(cart[initial]["id"]).then(function(result){
      result.data.quantity = cart[initial].quantity;
      result.data.size = cart[initial].size;
      result.data.styleData = cart[initial].styleData;
      $scope.extendedCart.push(result.data);
      $scope.totalPrice += result.data.quantity*result.data.PRICE;
      getExtended(initial + 1);
    });
  }
  function afterTotal(){
    console.log($scope.extendedCart);
    console.log($scope.totalPrice);
    $scope.totalPrice = $scope.totalPrice + "";
    $scope.totalPrice = $scope.totalPrice.substring(0, $scope.totalPrice.indexOf(".") + 1) + $scope.totalPrice.substring($scope.totalPrice.indexOf(".") + 1, $scope.totalPrice.indexOf(".") + 3);
    $scope.totalPrice = Number($scope.totalPrice);
    $rootScope.finalPrice = $scope.totalPrice;
    $rootScope.extendedCart = $scope.extendedCart;
    /*paypal.Buttons({
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: $scope.totalPrice + ""
          }
        }]
      });
    }
  }).render('#paymentButtons'); */
  }
  getExtended(0);
});
