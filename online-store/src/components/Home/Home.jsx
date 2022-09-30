import React from 'react';
import Navbar from '../Navbar';
import CategoryList from './CategoryList';
import Footer from '../Footer';
import Hero from '../Hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryList />
      <Footer />
    </div>
  );
};

export default Home;
