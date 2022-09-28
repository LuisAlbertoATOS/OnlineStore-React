import React, { useContext, useState } from "react";
import { ProductDataService } from "../../services/product.services";

export const ShoppingCartContext = React.createContext({});
export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartContext, setShoppingCartContext] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToShoppingCart = async (productId, quantity) => {
    await new ProductDataService().getProduct(productId).then((result) => {   
      setTotalPrice((totalPrice)=>(totalPrice+(result.price*quantity)));
      setShoppingCartContext((shoppingCart) =>
        shoppingCart.concat({
          productId: productId,
          quantity: quantity,
          name: result.name,
          price: result.price,
          description: result.description,
          image: result.image,
          category: result.category,
        }))
    });
  };

  const removeFromShoppingCart = (productId) => {
    // setShoppingCartContext(shoppingCartContext.filter(items => items.productId !== productId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartContext,
        addToShoppingCart,
        removeFromShoppingCart,
        setShoppingCartContext,
        totalPrice
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
