import React, { useEffect } from "react";
import { useState } from "react";
import { ProductDataService } from "../../services/product.services";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await new ProductDataService().getAllProducts();
    console.log(data)
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
    <section className="flex flex-row flex-wrap">
      {products.map((product) =>{
        return <ProductCard product={product} />
      })}
    </section>
    </>
  );
};

export default ProductList;
