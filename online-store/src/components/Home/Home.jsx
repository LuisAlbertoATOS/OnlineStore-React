import React from 'react';
import Navbar from '../Navbar';
import CategoryCard from './CategoryCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="italic font-semibold text-center text-2xl text-slate-100 bg-blue-600 m-5">
        Home
      </div>

      <CategoryCard />
    </div>
  );
};

export default Home;
