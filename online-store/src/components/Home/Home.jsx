import React from 'react';
import Navbar from '../Navbar';
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
