app.controller('homeController', function($scope, $rootScope, $http, $timeout, $cookies, $location, productService) {
  productService.getFeaturedProducts().then(function(result){
    console.log(result.data);
    $scope.featured = result.data;
  });
  productService.getPopularProducts().then(function(result){
    console.log(result.data);
    $scope.popular = result.data;
  });
});
function onHomePageLoad(){
  var brandHeight = $("#brandlogo").height();
  $("#fixBrand").height(brandHeight);
  console.log("load");
}