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
      <CategoryList />
    </div>
  );
};

export default Home;
