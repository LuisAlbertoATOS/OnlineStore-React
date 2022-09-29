import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <section className="h-[32rem] my-4 mx-1">
      <div className="h-full flex justify-center w-[90%]">
        <Link to={`product-details/${props.product.id}`}>
          <div className="h-full relative rounded-lg shadow-lg bg-white max-w-xs">
            <div href="#!">
              <img
                className="rounded-t-lg px-5 py-5 my-0 mx-auto max-h-60"
                src={props.product.image}
                alt={props.product.name}
              />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {props.product.name}
              </h5>
              {props.product.description.length >= 65 && (
                <section className="">
                  <div className="text-gray-700 text-base mb-4 text-left">
                    {props.product.description.slice(0, 64) + '...'}
                  </div>
                </section>
              )}

              {props.product.description.length < 65 && (
                <p className="text-gray-700 text-base mb-4 text-left">
                  {props.product.description}
                </p>
              )}

              <section className="absolute bottom-0 my-4 w-5/6">
                <div>
                  {props.product.stock === 0 && (
                    <p className="text-base mb-4 text-left text-red-700 font-bold">
                      Not available
                    </p>
                  )}
                  {props.product.stock !== 0 && (
                    <p className="text-base mb-4 text-left text-green-700 font-bold">
                      Price: ${props.product.price}
                    </p>
                  )}
                  <button
                    type="button"
                    className="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
                  >
                    See details
                  </button>
                </div>
              </section>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
