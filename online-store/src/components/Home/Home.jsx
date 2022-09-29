import React from 'react';
import Navbar from '../Navbar';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryList />
      <Footer />
    </div>
  );
};

export default Home;
