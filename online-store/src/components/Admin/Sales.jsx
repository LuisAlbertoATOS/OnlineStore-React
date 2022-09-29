import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import { SalesDataService } from "../../services/sales.services";
import { ProductDataService } from "../../services/product.services";

const Sales = () => {

  /**
   * Using React.useMemo here to ensure that our data isn't recreated on every render. If we didn't use React.useMemo, the table    would think it was receiving new data on every render and attempt to recalculate a lot of logic every single time.
   */
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getSalesAndProducts();
  }, []);

  const getSalesAndProducts = async () => {
    const productsPromise = await new ProductDataService().getAllProducts();
    const mappedProducts = productsPromise.docs.map((doc) => ({
      id: doc.id,
      category: doc.data().category,
      name: doc.data().name,
      price: doc.data().price,
      soldUnits: 0,
    }));
    
    const salesPromise = await new SalesDataService().getAllSales();
    const mappedSales = salesPromise.docs.map((doc) => ({
      products: doc.data().products,
      id: doc.id,
    }));
    
    mappedSales.map((sale) => {
      sale.products.map((product) => {
        mappedProducts.find((o, i) => {
          if (o.id === product.productId) {
            mappedProducts[i].soldUnits += product.quantity;
          }
        });
      });
    });
    
    mappedProducts.sort(function(a, b) {
      let totalPriceA = a.soldUnits * a.price;
      let totalPriceB = b.soldUnits * b.price;
      return totalPriceB - totalPriceA;
    });
    setProductsData(mappedProducts);
  };

  const columns = [
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Product",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Units sold",
      accessor: "soldUnits",
    },
    {
      Header: "Total Sales",
      accessor: "totalSales",
    },
  ];

  return (
    <>
      <AdminNavbar />
      <h2 className="font-bold text-3xl m-4">Sales</h2>
      <section className="w-11/12 m-0 mb-0 mx-auto my-auto">
        <table className="w-full text-sm text-left text-blue-400 dark:text-blue-200">
          <thead className="text-xs text-blue-700 uppercase bg-blue-50 dark:bg-blue-700 dark:text-blue-100 text-center py-2">
            <tr className="py-2">
              {columns.map((column) => {
                return <th className="py-2 px-2">{column.Header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => {
              return (
                <tr className="bg-white border-b dark:bg-blue-900 dark:border-blue-700" key={product.id}>
                  <td className="py-4 px-6 text-center capitalize">{product.category}</td>
                  <td className="py-4 px-6 text-center">{product.name}</td>
                  <td className="py-4 px-6 text-center">${product.price}</td>
                  <td className="py-4 px-6 text-center">{product.soldUnits}</td>
                  <td className="py-4 px-6 text-center">
                    ${product.soldUnits * product.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Sales;
