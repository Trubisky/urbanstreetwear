//http://pirate.ftp.sh:4000/products/getFeaturedProducts
app.factory('cartService', function($cookies, $rootScope){
  if ($cookies.get("cart") == null){
    $cookies.putObject("cart", []);
  }
  var service = {};
  service.addItem = function(id, quantity, size, styledata){
    var cart = $cookies.getObject('cart');
    var added = false;
    for (var i=0; i<cart.length; i++){
      if (cart[i].id == id && cart[i].styleData.ID == styledata.ID){
        cart[i].quantity += quantity;
        added = true;
      }
    }
    if (!added){
      cart.push({id: id, quantity: quantity, size: size, styleData: styledata});
      $rootScope.cartlength++;
    }
    $cookies.putObject("cart", cart);
  }
  service.getCart = function(){
    return $cookies.getObject('cart');
  }
  service.updateQuantity = function(id, styleId, quantity){
    var cart = $cookies.getObject('cart');
    if (quantity == 0){
      var nArray = [];
      for (var item of cart){
        if (item.id != id){
          nArray.push(item);
        }
      }
      $cookies.putObject("cart", nArray);
      $rootScope.cartlength = nArray.length;
    }
    else{
      for (var i=0; i<cart.length; i++){
        if (cart[i].id == id && cart[i].styleData.ID == styleId){
          cart[i].quantity = quantity;
        }
      }
      $cookies.putObject("cart", cart);
    }
  }
  return service;
});