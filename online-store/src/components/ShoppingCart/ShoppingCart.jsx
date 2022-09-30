import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShoppingCart = () => {
  const navigate = useNavigate();

  const {
    shoppingCartContext,
    setShoppingCartContext,
    totalPrice,
    setTotalPrice,
  } = useShoppingCartContext();

  const deleteItem = (productId) => {
    return () => {
      if (window.confirm('Are you sure you want to delete this product?')) {
        const newShoppingCart = shoppingCartContext.filter(
          (items) => items.productId !== productId
        );
        const prod = shoppingCartContext.filter(
          (items) => items.productId === productId
        );
        const removedPrice = +prod[0].price * +prod[0].quantity;
        setTotalPrice((totalPrice) => totalPrice - removedPrice);
        setShoppingCartContext(newShoppingCart);
      }
    };
  };

  const doCheckout = () => {
    if (shoppingCartContext.length > 0) {
      navigate('user-form');
    } else {
      console.log('You need items in your cart to do checkout');
    }
  };

  return (
    <section className="h-full overflow-hidden">
      <section className="w-screen">
        <Navbar />
        <div className="align-content-center container mx-auto mt-10 w-5/6 pb-10">
          <div className="flex shadow-xl">
            <div className="w-3/4 bg-blue-50 px-5 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {shoppingCartContext?.length} Item
                  {shoppingCartContext?.length > 1 && 's'}
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/2">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                  Total
                </h3>
              </div>

              {shoppingCartContext?.length === 0 && (
                <p>No items in the shopping cart</p>
              )}
              {shoppingCartContext?.length > 0 &&
                shoppingCartContext.map((item) => {
                  return (
                    <div
                      className="border-double border-4 bg-white border-blue-500 rounded-lg flex items-center hover:bg-gray-100 mx-1 pr-6 pl-3 py-5 mb-2"
                      key={item?.productId}
                    >
                      <div className="flex w-1/2">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="px-5 fa-xl self-center hover:text-red-500 cursor-pointer"
                          onClick={deleteItem(item?.productId)}
                        />
                        <div className="w-40">
                          <img className="h-24" src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col justify-between self-center flex-grow">
                          <span className="font-bold text-1xl">
                            {item?.name}
                          </span>
                        </div>
                      </div>
                      <span className="text-center w-1/6 font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <span className="text-center w-1/6 font-semibold text-sm text-green-600">
                        ${item?.price}
                      </span>
                      <span className="text-center w-1/6 font-semibold text-sm text-green-600">
                        ${item?.price * item.quantity}
                      </span>
                    </div>
                  );
                })}

              <Link
                to={'/'}
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

            <div id="summary" className="bg-blue-100 w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items</span>
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
                <button
                  onClick={doCheckout}
                  className="bg-blue-900 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-[8.8em] border-none" />
      <Footer />
    </section>
  );
};

export default ShoppingCart;
