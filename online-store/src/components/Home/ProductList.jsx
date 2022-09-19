import React from "react";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const dummyProducts = [
    {
      productId: "12345",
      name: "PlayStation DualSense Wireless Controller",
      description:
        "PlayStation DualSense Wireless Controller. Color Midnight Black. Compatible with PS4 and PS5.",
      price: 77.05,
      category: "Videogames",
      stock: 20,
      image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1475_.jpg",
      deleted: false,
    },
    {
      productId: "12345",
      name: "Nintendo Switch Nintendo",
      description:
        "Nintendo Consola Switch Neon 32GB Version 1.1 - Standard Edition Importado.",
      price: 350,
      category: "Videogames",
      stock: 50,
      image: "https://m.media-amazon.com/images/I/61o6dOjquGL._AC_SL1500_.jpg",
      deleted: false,
    },
    {
      productId: "12345",
      name: "PlayStation DualSense Wireless Controller",
      description:
        "Color Midnight Black. Compatible with PS4 and PS5.",
      price: 77.05,
      category: "Videogames",
      stock: 0,
      image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1475_.jpg",
      deleted: false,
    },
    {
      productId: "12345",
      name: "PlayStation DualSense Wireless Controller",
      description:
        "PlayStation DualSense Wireless Controller. Color Midnight Black. Compatible with PS4 and PS5. Very super duper limited edition only 500 controllers worldwide.",
      price: 77.05,
      category: "Videogames",
      stock: 0,
      image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1475_.jpg",
      deleted: false,
    },
  ];

  console.log(dummyProducts);
  return <section className="flex flex-row flex-wrap">
    {dummyProducts.map((product)=>{
      return <ProductCard product={product}/>;
    })}
  </section>
};

export default ProductList;
