import React from 'react';
import Navbar from '../Navbar';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="italic font-semibold text-center text-2xl text-slate-100 bg-blue-600 m-5">
        Home
      </div>

      <Link to={`product-form/`}>
        <button
          type="button"
          className=" px-6 py-2.5 mb-3 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-yellow-400"
        >
          To product form
        </button>
      </Link>

      {/* <CategoryCard /> */}
      <CategoryList />
    </div>
  );
};

export default Home;
