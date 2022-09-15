import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SuccessfullPurchase from "./SuccessfullPurchase";

const ShoppingCart = () => {
  return (
    <div>
      ShoppingCart
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
