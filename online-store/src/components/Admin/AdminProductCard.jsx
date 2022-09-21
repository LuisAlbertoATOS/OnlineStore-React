import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const AdminProductCard = (props) => {
  return (
    <section className="h-[32rem] my-4 mx-4">
      <div className="h-full flex justify-center">
        <Link to={`product-details/${props.product.productId}`}>
          <div className="h-full relative rounded-lg shadow-lg bg-white max-w-xs">
            <div href="#!">
              <img
                className="rounded-t-lg px-5 py-5"
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
                    {props.product.description.slice(0, 64) + "..."}
                  </div>
                </section>
              )}

              {props.product.description.length < 65 && (
                <p className="text-gray-700 text-base mb-4 text-left">
                  {props.product.description}
                </p>
              )}

              <div className="text-gray-700 text-base mb-4 text-left flex">
                <p className="font-bold">Category:&nbsp;</p>{props.product.category}
              </div>

              <section className="absolute bottom-0 my-4 w-5/6">
                {props.product.stock === 0 && (
                  <div>
                    <p className="text-base mb-4 text-left text-red-700 font-bold">
                      Not available
                    </p>{" "}
                  </div>
                )}

                {props.product.stock !== 0 && (
                  <div className="">
                    <p className="text-base mb-4 text-left text-green-700 font-bold">
                      Price: ${props.product.price}
                    </p>
                  </div>
                )}
            <FontAwesomeIcon icon={faPenToSquare} className="px-5 fa-2xl" />
            <FontAwesomeIcon icon={faTrash} className="px-5 fa-2xl" />
              </section>
            </div>
            
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AdminProductCard;
