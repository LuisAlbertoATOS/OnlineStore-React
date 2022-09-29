import React, { useContext, useState } from "react";
import { ProductDataService } from "../../services/product.services";

export const ShoppingCartContext = React.createContext({});
export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartContext, setShoppingCartContext] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [repeatedArticleMsg, setRepeatedArticleMsg] = useState('')
  const [successfulMsg, setSuccessfulMsg] = useState('')

  const addToShoppingCart = async (productId, quantity) => {
    await new ProductDataService().getProduct(productId).then((result) => {   
      setTotalPrice((totalPrice)=>(totalPrice + (result.price * quantity)));
      
      if(shoppingCartContext.find(item=> item.productId === productId)){
        setRepeatedArticleMsg('This article is already in the shopping cart')
        setTimeout(() => {
          setRepeatedArticleMsg('')
        }, 3000);

      } else {
        setSuccessfulMsg('Successfully purchased!')
        setTimeout(() => {
          setSuccessfulMsg('')
        }, 3000);

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
    
      }
      
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartContext,
        addToShoppingCart,
        setShoppingCartContext,
        totalPrice,
        setTotalPrice,
        repeatedArticleMsg,
        successfulMsg
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
