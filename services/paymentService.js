app.factory('paymentService', function($http){
  var service = {};
  var baseurl = "https://playeuchre.online:4000/";
  service.processPayment = function(orderid, cartObject){
    return $http.post(baseurl + "payment/processPayment", {cart: cartObject, orderid: orderid});
  }
  return service;
});