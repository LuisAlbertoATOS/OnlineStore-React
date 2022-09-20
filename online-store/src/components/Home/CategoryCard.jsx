import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryCard = (props) => {
  const { id } = useParams();

  //! Name and Category? I only need the name?
  //? Price and stock don't need them right?

  return (
    <section>
      <div className="flex justify-center">
        {id}
        {/* Maybe the link change it's position */}
        <Link to={`category-list/:id`}>
          <div className="rounded-lg shadow-lg bg-white max-w-xs border-dashed border-2 border-sky-500">
            <div>
              <img
                style={{ width: '100%' }}
                className="rounded-t-lg px-5 py-5"
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

              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
              >
                See {props.category.category} Category
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryCard;
