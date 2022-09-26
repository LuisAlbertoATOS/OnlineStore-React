import { useState } from "react";

var shoppingCart = [];
export class ShoppingCartDataService {
  // const [shoppingCart, setShoppingCart] = useState([]);
  getShoppingCart = () => {
    return shoppingCart;
  };

  addToShoppingCart = (productId, quantity) => {
    shoppingCart.concat({ productId: productId, quantity: quantity });
    // setShoppingCart((shoppingCart) =>
    //   shoppingCart.concat({ productId: productId, quantity: quantity })
    // );
    console.log(shoppingCart);
  };

  cleanShoppingCart = () => {
    shoppingCart = [];
    // setShoppingCart([]);
  };
}
