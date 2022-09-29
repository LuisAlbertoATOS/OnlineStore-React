import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductDataService } from '../../services/product.services';

const AdminProductCard = ({ product, setDeletedSensor, deletedSensor }) => {
  const handleLogicalDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await new ProductDataService().logicalDelete(product.id);
      setDeletedSensor(!deletedSensor);
    }
  };

  return (
    <section className="h-[32rem] my-4 mx-1">
      <div className="h-full flex justify-center w-[90%]">
        <div className="h-full relative rounded-lg shadow-lg bg-white max-w-xs">
          <div href="#!">
            <img
              className="rounded-t-lg px-5 py-5 my-0 mx-auto max-h-60"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="p-6 pt-2">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {product.name}
            </h5>
            {product.description.length >= 65 && (
              <section className="">
                <div className="text-gray-700 text-base mb-4 text-left">
                  {product.description.slice(0, 64) + '...'}
                </div>
              </section>
            )}

            {product.description.length < 65 && (
              <p className="text-gray-700 text-base mb-4 text-left">
                {product.description}
              </p>
            )}

            <div className="text-gray-700 text-base mb-4 text-left flex">
              <p className="font-bold">Category:&nbsp;</p>
              {product.category}
            </div>

            <section className="absolute bottom-0 my-4 w-5/6">
              {product.stock === 0 && (
                <div>
                  <p className="text-base mb-4 text-left text-red-700 font-bold">
                    Not available
                  </p>{' '}
                </div>
              )}

              {product.stock !== 0 && (
                <div className="">
                  <p className="text-base mb-4 text-left text-green-700 font-bold">
                    Price: ${product.price}
                  </p>
                </div>
              )}
              <Link to={`edit-product/${product.id}`}>
                <FontAwesomeIcon icon={faPenToSquare} className="px-5 fa-2xl" />
              </Link>
              <FontAwesomeIcon
                icon={faTrash}
                className="px-5 fa-2xl"
                onClick={handleLogicalDelete}
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductCard;
