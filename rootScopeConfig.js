app.run(function($rootScope, $location, cartService){
  $rootScope.navigate = function(path){
    $location.url(path);
  }
    $rootScope.navigateToProduct = function(id){
      $location.url("/products/" + id);
    }
  $rootScope.cartlength = cartService.getCart().length;
});