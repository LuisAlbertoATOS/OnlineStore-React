import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SuccessfullPurchase from './SuccessfullPurchase';

const ShoppingCart = () => {
  return (
    <div>
      <h1 className="italic font-semibold text-center text-2xl text-slate-100 bg-blue-600 m-5">
        ShoppingCart
      </h1>
      <p>
        <Link to="successfull-purchase">Buy</Link>
      </p>
      <Routes>
        <Route path="successfull-purchase" element={<SuccessfullPurchase />} />
      </Routes>
    </div>
  );
};

export default ShoppingCart;
