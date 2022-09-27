import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import { ProductDataService } from "../../services/product.services";
import { useShoppingCartContext } from "../contexts/ShoppingCartContext";
import Navbar from "../Navbar";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { shoppingCartContext, removeFromShoppingCart } = useShoppingCartContext();

  const [shoppingCart, setShoppingCart] = useState(shoppingCartContext);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  async function fetchProduct(productId, index) {
   
    await new ProductDataService().getProduct(productId).then((result) => {
      setItems((items) => items.concat(result));
      setTotalPrice(
        (totalPrice) => totalPrice + result.price * shoppingCart[index].quantity
      );
    });
   
  }

  useEffect(() => {
    return () => {
      shoppingCart.map((cartItem, index) => {
        fetchProduct(cartItem.productId, index);
      
      });
    };
  }, []);

  const deleteItem = (productId) => {
    return () => {
      removeFromShoppingCart(productId)
      console.log(productId);
      setShoppingCart()
      // const newShoppingCart = shoppingCart.filter((item) => {
      //   return item.productId != productId;
      // })
      // setShoppingCart((shoppingCart) => shoppingCart.filter((item) => {
      //   return item.productId !== productId;
      // }));
      // console.log(shoppingCart);
    }
  }

  const doCheckout = () => {
    if(shoppingCart.length > 0){
      navigate('user-form'); 
    } else {
      console.log("You need items in your cart to do checkout");
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{items?.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>

            {items?.length === 0 && <p>No items in the shopping cart</p>}
            {items?.length > 0 &&
              items.map((item, index) => {
                return (
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={item.image} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item?.name}</span>
                        <button
                          onClick={deleteItem(shoppingCart[index].productId)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {shoppingCart[index].quantity}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item?.price * shoppingCart[index].quantity}
                    </span>
                  </div>
                );
              })}

            <Link
              to={"/"}
              className="flex font-semibold text-blue-900 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-blue-900 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">${totalPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${+totalPrice + 10}</span>
              </div>
              <button onClick={doCheckout} className="bg-blue-900 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="italic font-semibold text-center text-2xl text-slate-100 bg-blue-600 m-5">
        ShoppingCart
      </h1> */}

      {/* <p>
        <Link to="successfull-purchase">Buy</Link>
      </p> */}
      {/* <Routes>
        <Route path="successfull-purchase" element={<SuccessfullPurchase />} />
      </Routes> */}
    </>
  );
};

export default ShoppingCart;
