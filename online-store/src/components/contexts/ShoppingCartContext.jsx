import React, { useContext, useState } from "react";

export const ShoppingCartContext = React.createContext({});
export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartContext, setShoppingCartContext] = useState([]);

  const addToShoppingCart = (productId, quantity) => {
    setShoppingCartContext((shoppingCart) =>
      shoppingCart.concat({ productId: productId, quantity: quantity })
    );
  };

  const removeFromShoppingCart = (productId) => {
    // setShoppingCartContext(shoppingCartContext.filter(items => items.productId !== productId));
  
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartContext, addToShoppingCart, removeFromShoppingCart, setShoppingCartContext }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
