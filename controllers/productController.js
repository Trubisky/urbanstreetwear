app.controller('productController', function($scope, $rootScope, $timeout, $cookies, $location, productService, $routeParams, cartService){
  var productId = $routeParams.id;
  productService.getProductDetails(productId).then(function(result){
    $scope.product = result.data;
    $scope.displayImage = result.data.DEFAULTIMAGE;
  });
  $scope.changeImage = function(){
    $scope.styleData = JSON.parse($scope.selectedStyleInfo);
    $scope.displayImage = $scope.styleData.IMAGE;
  }
  $scope.addtocart = function(proceed){
    var quantity = $scope.quantity;
    var size = $scope.size;
    var id = productId;
    console.log("s");
    if (!quantity || !size || !id || !$scope.styleData){
      alert("Please select a quantity, style, and size.");
      return;
    }
    cartService.addItem(id, Number(quantity), size, $scope.styleData);
    $rootScope.navigate('/shop/1');
  }
});
