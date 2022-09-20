import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const Products = () => {
  return (
    <div>
      <AdminNavbar />
        Products
      <Link to={`new-product`}>
        <button
          type="button"
          className=" px-6 py-2.5 mb-3 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-yellow-400"
        >
          New product
        </button>
      </Link>
    </div>
  );
};

export default Products;
