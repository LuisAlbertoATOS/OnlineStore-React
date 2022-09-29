import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDataService } from "../../services/product.services";
import AdminNavbar from "./AdminNavbar";
import AdminProductCard from "./AdminProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [deletedSensor, setDeletedSensor] = useState(false);
  useEffect(() => {
    getProducts();
  }, [deletedSensor]);

  const getProducts = async () => {
    const data = await new ProductDataService().getAllProducts();
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <AdminNavbar />
      <p className="py-5 font-medium leading-tight text-5xl">Products</p>
      <Link to={`new-product`}>
        <button
          type="button"
          className=" px-6 py-2.5 mb-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-300"
        >
          New product
        </button>
      </Link>
      <section className="flex flex-row flex-wrap justify-center">
        {products.map((product) => {
          if(!product.deleted){
            return <AdminProductCard product={product} setDeletedSensor={setDeletedSensor} deletedSensor={deletedSensor} key={product.id}/>;
          }
        })}
      </section>
    </div>
  );
};

export default Products;
