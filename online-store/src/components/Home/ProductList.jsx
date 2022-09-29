import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDataService } from '../../services/product.services';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await new ProductDataService().getAllProducts();
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  let { categoryId } = useParams();

  return (
    <>
      <Navbar />
      <section className="flex flex-row flex-wrap justify-center">
        {products.map((product) => {
          if (
            product.category.toLowerCase() === categoryId.toLowerCase() &&
            !product.deleted
          ) {
            return <ProductCard product={product} key={product.id}/>;
          }
        })}
      </section>
      <Footer />
    </>
  );
};

export default ProductList;
