app.controller('shopController', function($scope, $rootScope, $http, $cookies, $location, productService, cartService, $routeParams) {
  var page = Number($routeParams.page);
  $scope.page = page;
  productService.getProducts(page).then(function(result){
    $scope.products = result.data;
    var maxH = 0;
    setTimeout(function(){
      $(".adjustHeight").each(function(index){
        var height = $(this).height();
        if (height > maxH){
          maxH = height;
        }
      });
      $(".adjustHeight").each(function(index){
        $(this).height(maxH);
      });
    }, 50);
  });
  $scope.next = function(){
    $rootScope.navigate("/shop/" + (page+1));
  }
  $scope.previous = function(){
    if (page != 1){
      $rootScope.navigate("/shop/" + (page-1));
    }
  }
});
