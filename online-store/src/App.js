import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import SignInForm from './forms/SignInForm';
import ProductForm from './forms/ProductForm';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import AdminDashboard from './components/Admin/AdminDashboard';
import Products from './components/Admin/Products';
import Sales from './components/Admin/Sales';
import ProductDetails from './components/Home/ProductDetails';
import ProductList from './components/Home/ProductList';
import UserInfoForm from './forms/UserInfoForm';

import CategoryList from './components/Home/CategoryList';
import NotFound from './components/NotFound';
import RequireAuth from './components/contexts/RequireAuth';
import Ticket from './components/Ticket';
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
import Hero from './components/Hero';

function App() {
  return (
    <ShoppingCartProvider>
      <section className="text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/shopping-cart/*" element={<ShoppingCart />} />
          <Route path="/shopping-cart/user-form" element={<UserInfoForm />} />
          <Route path="/ticket/:saleId" element={<Ticket />} />

          {/* Admin */}
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard/sales"
            element={
              <RequireAuth>
                <Sales />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard/products/new-product"
            element={
              <RequireAuth>
                <ProductForm action={"New"} />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard/products/edit-product/:productId"
            element={
              <RequireAuth>
                <ProductForm action={"Update"} />
              </RequireAuth>
            }
          />

          {/* Home */}
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/category/:categoryId" element={<ProductList />} />
          <Route
            path="/category/:categoryId/product-details/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </section>
    </ShoppingCartProvider>
  );
}

export default App;
