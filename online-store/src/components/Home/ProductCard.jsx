import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const dummyProduct = {
    productId: "12345",
    name: "PlayStation DualSense Wireless Controller",
    description:
      "PlayStation DualSense Wireless Controller. Color Midnight Black. Compatible with PS4 and PS5.",
    price: 77.05,
    category: "Videogames",
    stock: 20,
    image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1475_.jpg",
    deleted: false,
  };

  const [shortDesc, setShortDesc] = useState(false);

  return (
    <section>
      <div className="flex justify-center">
        {/* <Link to={`product-detail/${dummyProduct.productId}`}> */}
        <Link to={`product-detail/`}>
          <div className="rounded-lg shadow-lg bg-white max-w-xs">
            <div href="#!">
              <img
                className="rounded-t-lg px-5 py-5"
                src={dummyProduct.image}
                alt={dummyProduct.name}
              />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {dummyProduct.name}
              </h5>
              {dummyProduct.description.length >= 50 && (
                <section className="">
                  <div className="text-gray-700 text-base mb-4 text-left">
                    {shortDesc
                      ? dummyProduct.description.slice(0, 50) + "..."
                      : dummyProduct.description}
                    <p
                      className="underline text-gray-400"
                      onClick={() => setShortDesc(!shortDesc)}
                    >
                      {shortDesc ? "See more..." : "See less..."}
                    </p>
                  </div>
                </section>
              )}

              {dummyProduct.description.length < 50 && (
                <p>{dummyProduct.description}</p>
              )}

              {dummyProduct.stock === 0 && (
                <div>
                  <p className="text-base mb-4 text-left text-red-700 font-bold">
                    Not available
                  </p>{" "}
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                  >
                    Add to shopping cart
                  </button>
                </div>
              )}

              {dummyProduct.stock !== 0 && (
                <div>
                  <p className="text-base mb-4 text-left text-green-700 font-bold">
                    Price: ${dummyProduct.price}
                  </p>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
                  >
                    Add to shopping cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
