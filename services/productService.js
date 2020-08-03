//http://pirate.ftp.sh:4000/products/getFeaturedProducts
app.factory('productService', function($http){
  var service = {};
  var baseurl = "https://playeuchre.online:4000/";
  service.getFeaturedProducts = function(){
    return $http.get(baseurl + "products/getFeaturedProducts");
  }
  service.getPopularProducts = function(){
    return $http.get(baseurl + "products/getPopularProducts");
  }
  service.getProductDetails = function(id){
    return $http.get(baseurl + "products/getProductDetails/" + id + "-prod");
  }
  service.getProducts = function(page){
    return $http.get(baseurl + "products/getProducts/" + page);
  }
  return service;
});