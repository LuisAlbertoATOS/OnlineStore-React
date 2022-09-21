import React from 'react';
import { ProductDataService } from '../../services/product.services';
import Navbar from '../Navbar';

const helperProductService = new ProductDataService();

// let test = helperProductService.getAllProducts();
// console.log(test);

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
                Nintendo (Nombre de la compañia o no se xd)
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Nintendo Switch
              </h1>
              <div class="flex mb-4 justify-center">
                <span class="flex items-center ">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
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

      <section className="h-[32rem] my-4 mx-4">
        <div className="h-full flex justify-center">
          {/* <Link to={`product-detail/${props.product.productId}`}> */}
          <div className="h-full relative rounded-lg shadow-lg bg-white max-w-xs">
            <div href="#!">
              {/* <img
                className="rounded-t-lg px-5 py-5"
                src={props.product.image}
                alt={props.product.name}
              /> */}
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {/* {props.product.name} */}
              </h5>
              {/* {props.product.description.length < 65 && (
                  <p className="text-gray-700 text-base mb-4 text-left">
                    {props.product.description}
                  </p>
                )} */}
              <section className="absolute bottom-0 my-4 w-5/6">
                {/* {props.product.stock === 0 && (
                    <div>
                      <p className="text-base mb-4 text-left text-red-700 font-bold">
                        Not available
                      </p>{" "}
                      <button
                        type="button"
                        className="w-full inline-block px-6 py-2.5 bg-blue-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                      >
                        Add to shopping cart
                      </button>
                    </div>
                  )} */}
                {/* {props.product.stock !== 0 && (
                    <div className="">
                      <p className="text-base mb-4 text-left text-green-700 font-bold">
                        Price: ${props.product.price}
                      </p>
                      <button
                        type="button"
                        className="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
                      >
                        Add to shopping cart
                      </button>
                    </div>
                  )} */}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
