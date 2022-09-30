import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  
  return (
    <section className="h-[25rem] my-4 mx-1">
      <div className="h-full flex justify-center">
        <Link to={`category/${props.category.category}`}>
          <div className="h-full relative rounded-lg shadow-lg bg-white max-w-xs border-dashed border-2 border-sky-500">
            <div>
              <img
                style={{ width: "100%" }}
                className="rounded-t-lg px-5 pt-5"
                src={props.category.image}
                alt={props.category.description}
              />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {props.category.name}
              </h5>

              <p className="text-gray-700 text-base mb-4 text-center">
                {props.category.description}
              </p>

              <section className="absolute bottom-0 mb-6 w-5/6">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
                >
                  See {props.category.category} Category
                </button>
              </section>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryCard;
