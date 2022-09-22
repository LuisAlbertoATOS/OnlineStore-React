import React from 'react';
import Navbar from '../Navbar';

const ProductDetails = (props) => {
  return (
    <>
      <Navbar />
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://m.media-amazon.com/images/I/61o6dOjquGL._AC_SL1500_.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Category: Videogames
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Nintendo Switch
              </h1>
              <p class="leading-relaxed">32 GB. Red and blue</p>
              <p class=" font-bold text-blue-500 mt-3 ">Stock: 60</p>
              <div class="flex items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-green-500">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
