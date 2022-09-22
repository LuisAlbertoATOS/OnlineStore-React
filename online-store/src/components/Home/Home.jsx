import React from 'react';
import Navbar from '../Navbar';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryList />
    </div>
  );
};

export default Home;
