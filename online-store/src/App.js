import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import SignInForm from './forms/SignInForm';
import ProductForm from './forms/ProductForm';

import './App.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <React.Fragment>
      <p>
        <Link to="/">Logo</Link>
      </p>
      <p>
        <Link to="/sign-in">Sign in</Link>
      </p>
      <p>
        <Link to="/shopping-cart">Shopping cart</Link>
      </p>

      {/* Temporary disable */}
      <p>
        <Link to="/product-form">New product</Link>
      </p>

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-form" element={<ProductForm action={'New'} />} />
      </Routes>

      <h1 className="debug bg-orange-500">
        This is a test, it will appear in every component{' '}
      </h1>
    </React.Fragment>
  );
}

export default App;
