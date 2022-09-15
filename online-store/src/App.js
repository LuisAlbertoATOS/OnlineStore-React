import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import SignInForm from "./forms/SignInForm";
import ProductForm from "./forms/ProductForm";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

// Components that aren't ready
import AdminDashboard from "./components/Admin/AdminDashboard";
import Products from "./components/Admin/Products";
import Sales from "./components/Admin/Sales";
import ProductDetails from "./components/Home/ProductDetails";
import ProductList from "./components/Home/ProductList";
import UserInfoForm from "./forms/UserInfoForm";

import "./App.css";

function App() {
  return (
    <React.Fragment className="App">
      <Home />
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
        <Route path="/shopping-cart/*" element={<ShoppingCart />} />
        <Route path="/product-form" element={<ProductForm action={"New"} />} />

        {/* Routes below this comment doesn't work right now */}
        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />

        {/* Home */}
        <Route path="/product-detail" element={<ProductDetails />} />
        <Route path="/product-list" element={<ProductList />} />

        {/* Forms */}
        <Route path="/user-form" element={<UserInfoForm />} />
      </Routes>

      <h1 className="debug bg-orange-500">
        This is a test, it will appear in every component{" "}
      </h1>
    </React.Fragment>
  );
}

export default App;
