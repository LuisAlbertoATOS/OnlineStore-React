import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
  //! Name and Category? I only need the name?
  //? Price and stock don't need them right?
  const dummyProduct = {
    productId: '12345',
    name: 'Videogames',
    description:
      'Products related to videogames. Consoles,controllers, videogames, etc.',
    category: 'Videogames',
    image: 'https://i.imgur.com/cNVDCxs.png',
    deleted: false,
  };

  const [shortDesc, setShortDesc] = useState(false);

  return (
    <section>
      <div className="flex justify-center">
        {/* Maybe the link change it's position */}
        {/* Is it good to add this new component? (CategoryList) */}
        <Link to={`category-list/`}>
          <div className="rounded-lg shadow-lg bg-white max-w-xs border-dashed border-2 border-sky-500">
            <div>
              <img
                className="rounded-t-lg px-5 py-5"
                src={dummyProduct.image}
                alt={dummyProduct.description}
              />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {dummyProduct.name}
              </h5>

              {/* I don't with categories we need the "see more & see less" */}
              {dummyProduct.description.length >= 20 && (
                <section>
                  <div className="text-gray-700 text-base mb-4 text-left">
                    {shortDesc
                      ? dummyProduct.description.slice(0, 50) + '...'
                      : dummyProduct.description}
                    <p
                      className="underline text-gray-400"
                      onClick={() => setShortDesc(!shortDesc)}
                    >
                      {shortDesc ? 'See more...' : 'See less...'}
                    </p>
                  </div>
                </section>
              )}

              {dummyProduct.description.length < 20 && (
                <p>{dummyProduct.description}</p>
              )}

              {/* Do we need both of these statements? */}

              {dummyProduct.stock === 0 && (
                <div>
                  <p className="text-base mb-4 text-left text-red-700 font-bold">
                    Not available
                  </p>{' '}
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                  >
                    See {dummyProduct.category} Category
                  </button>
                </div>
              )}

              {dummyProduct.stock !== 0 && (
                <div>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
                  >
                    See {dummyProduct.category} Category
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

export default CategoryCard;
