import React from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "../Admin/AdminNavbar";
import Navbar from "../Navbar";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const dummyProducts = [
    {
      productId: "1",
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
      productId: "2",
      name: "Nintendo Switch Nintendo",
      description:
        "Nintendo Consola Switch Neon 32GB Version 1.1 - Standard Edition Importado.",
      price: 350.05,
      category: "Videogames",
      stock: 50,
      image: "https://m.media-amazon.com/images/I/61o6dOjquGL._AC_SL1500_.jpg",
      deleted: false,
    },
    {
      productId: "3",
      name: "JBL VIBE 100 Wireless In-Ear Headphones",
      description:
        "JBL VIBE 100 TWS - True Wireless In-Ear Headphones - Purple",
      price: 49.95,
      category: "Audio",
      stock: 0,
      image: "https://m.media-amazon.com/images/I/41HswNxIJzS._AC_SL1200_.jpg",
      deleted: false,
    },
    {
      productId: "4",
      name: "HyperX Alloy Gaming Keyboard",
      description:
        "HyperX Alloy Origins Core, Teclado Gaming en Inglés Ten Keyless, Interruptores mecánicos HyperX RED, Cuerpo de aluminio, iluminación RGB, Software HyperX NGenuity, Tres ángulos",
      price: 70.98,
      category: "Peripherals",
      stock: 15,
      image: "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SL1500_.jpg",
      deleted: false,
    },
  ];

  
  let { categoryId } = useParams();

  return (
    <section>
      <Navbar />
      <section className="flex flex-row flex-wrap">
        {dummyProducts.map((product) => {
          if(product.category.toLowerCase() == categoryId.toLowerCase()){
            return <ProductCard product={product} />;
          }
        })}
      </section>
    </section>
  );
};

export default ProductList;
