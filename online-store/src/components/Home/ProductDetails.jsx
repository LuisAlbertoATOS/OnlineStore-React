import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductDataService } from '../../services/product.services';
import Navbar from '../Navbar';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  async function fetchProduct() {
    const p = await new ProductDataService().getProduct(productId);
    setProduct(p);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const { addToShoppingCart } = useShoppingCartContext();

  const addToShoppingCartHandler = (productId, quantity) => {
    addToShoppingCart(productId, quantity);
  };

  return (
    <section>
      <Navbar />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-contain object-center rounded my-0 mx-auto max-h-[30em]"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category: {product?.category.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <p className="leading-relaxed">{product?.description}</p>
              <p className=" font-bold text-blue-500 mt-3 ">
                Stock: {product?.stock}
              </p>
              <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              {product?.stock !== 0 && (
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-green-500">
                    ${product?.price}
                  </span>
                  <button
                    onClick={() => addToShoppingCartHandler(productId, 1)}
                    className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    Add to cart
                  </button>
                </div>
              )}
              {product?.stock === 0 && (
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-red-700">
                    Not available
                  </span>
                  <button className="disabed flex ml-auto text-white bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded">
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
