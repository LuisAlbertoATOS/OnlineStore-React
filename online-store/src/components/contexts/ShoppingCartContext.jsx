import React, { useContext, useState } from "react";

export const ShoppingCartContext = React.createContext({});
export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}) => {
  const [shoppingCartContext, setShoppingCart] = useState([]);

  const addToShoppingCart = (productId, quantity) => {
    setShoppingCart((shoppingCart) =>
      shoppingCart.concat({ productId: productId, quantity: quantity })
    );
  };

  const removeFromShoppingCart = (productId) => {
    const newShoppingCart = shoppingCartContext.filter(items => items.productId !== productId);
    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartContext, addToShoppingCart, removeFromShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
