import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDataService } from "../../services/product.services";
import AdminNavbar from "./AdminNavbar";
import AdminProductCard from "./AdminProductCard";

const Products = () => {
  // const dummyProducts = [
  //   {
  //     productId: "1",
  //     name: "PlayStation DualSense Wireless Controller",
  //     description:
  //       "PlayStation DualSense Wireless Controller. Color Midnight Black. Compatible with PS4 and PS5.",
  //     price: 77.05,
  //     category: "Videogames",
  //     stock: 20,
  //     image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_SL1475_.jpg",
  //     deleted: false,
  //   },
  //   {
  //     productId: "2",
  //     name: "Nintendo Switch Nintendo",
  //     description:
  //       "Nintendo Consola Switch Neon 32GB Version 1.1 - Standard Edition Importado.",
  //     price: 350.05,
  //     category: "Videogames",
  //     stock: 50,
  //     image: "https://m.media-amazon.com/images/I/61o6dOjquGL._AC_SL1500_.jpg",
  //     deleted: false,
  //   },
  //   {
  //     productId: "3",
  //     name: "JBL VIBE 100 Wireless In-Ear Headphones",
  //     description:
  //       "JBL VIBE 100 TWS - True Wireless In-Ear Headphones - Purple",
  //     price: 49.95,
  //     category: "Audio",
  //     stock: 0,
  //     image: "https://m.media-amazon.com/images/I/41HswNxIJzS._AC_SL1200_.jpg",
  //     deleted: false,
  //   },
  //   {
  //     productId: "4",
  //     name: "HyperX Alloy Gaming Keyboard",
  //     description:
  //       "HyperX Alloy Origins Core, Teclado Gaming en Inglés Ten Keyless, Interruptores mecánicos HyperX RED, Cuerpo de aluminio, iluminación RGB, Software HyperX NGenuity, Tres ángulos",
  //     price: 70.98,
  //     category: "Peripherals",
  //     stock: 15,
  //     image: "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SL1500_.jpg",
  //     deleted: false,
  //   },
  // ];

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
    <div>
      <AdminNavbar />
      <p className="py-5 font-medium leading-tight text-5xl">Products</p>
      <Link to={`new-product`}>
        <button
          type="button"
          className=" px-6 py-2.5 mb-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-300"
        >
          New product
        </button>
      </Link>
      <section className="flex flex-row flex-wrap justify-center">
        {products.map((product) => {
          return <AdminProductCard product={product} />;
        })}
      </section>
    </div>
  );
};

export default Products;
