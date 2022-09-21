import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import SignInForm from './forms/SignInForm';
import ProductForm from './forms/ProductForm';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

// Components that aren't ready
import AdminDashboard from './components/Admin/AdminDashboard';
import Products from './components/Admin/Products';
import Sales from './components/Admin/Sales';
import ProductDetails from './components/Home/ProductDetails';
import ProductList from './components/Home/ProductList';
import UserInfoForm from './forms/UserInfoForm';

import './App.css';
import CategoryList from './components/Home/CategoryList';
import NotFound from './components/NotFound';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/shopping-cart/*" element={<ShoppingCart />} />

        {/* Routes below this comment doesn't work right now */}
        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/products" element={<Products />} />
        <Route path="/admin-dashboard/sales" element={<Sales />} />
        <Route path="/admin-dashboard/products/new-product" element={<ProductForm action={'New'} />} />

        {/* Home */}
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route path="/category/:categoryId" element={<ProductList />} />
        <Route path="/category/:categoryId/product-details/:productId" element={<ProductDetails />} />
        {/* Change later the id or name */}

        {/* Forms */}
        <Route path="/user-form" element={<UserInfoForm />} />
      </Routes>
    </section>
  );
}

export default App;
