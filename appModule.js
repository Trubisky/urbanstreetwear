var app = angular.module('myPortal', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/home.html",
    controller: "homeController"
  })
  .when("/products/:id", {
    templateUrl: "templates/product.html",
    controller: "productController"
  })
  .when("/shop/:page", {
    templateUrl: "templates/shop.html",
    controller: "shopController"
  })
  .when("/cart", {
    templateUrl: "templates/cart.html",
    controller: "cartController"
  })
  .when("/checkout", {
    templateUrl: "templates/checkout.html",
    controller: "checkoutController"
  })
  
});