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
                Category: Videogames
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Nintendo Switch
              </h1>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
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

      {/* Temporary disable */}
      <section className=" hidden h-[32rem] my-4 mx-4">
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
