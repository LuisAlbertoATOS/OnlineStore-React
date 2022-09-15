import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import SignInForm from './forms/SignInForm';
import ProductForm from './forms/ProductForm';

import './App.css';

//! Tailwind styles doesn't get recognized

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* All the path names are temporary */}
        <Route path="/" element={<Home />} />
        {/* Better naming convention for signIn || sign-in || signin  */}
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>

      <h1 className="debug">
        This is a test, it will appear in every component{' '}
      </h1>

      {/* What is the meaning of action={'New'} */}
      {/* <div className="App">
        <ProductForm action={'New'} />
      </div> */}
    </React.Fragment>
  );
}

export default App;
