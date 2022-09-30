import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import SuccessfullPurchase from './ShoppingCart/SuccessfullPurchase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faBoxesPacking,
} from '@fortawesome/free-solid-svg-icons';
import { SalesDataService } from '../services/sales.services';
import { useEffect, useContext } from 'react';
import Footer from './Footer';
export const ShoppingCartContext = React.createContext({});
export const useShoppingCartContext = () => useContext(ShoppingCartContext);

const Ticket = () => {
  const [saleData, setSaleData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const { saleId } = useParams();

  useEffect(() => {
    async function fetchSale() {
      const sale = await new SalesDataService().getSale(saleId);
      setSaleData(sale);
    }
    fetchSale();
  }, [saleId]);

  useEffect(() => {
    async function getTotalPrice() {
      let total = 10;
      saleData.products?.map((product) => {
        const price = product.price * product.quantity;
        total += price;
      });
      setTotalPrice(total);
    }
    getTotalPrice();
  }, [saleData]);

  const columns = [
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Product',
      accessor: 'name',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Units sold',
      accessor: 'soldUnits',
    },
    {
      Header: 'Total Sales',
      accessor: 'totalSales',
    },
  ];

  return (
    <>
      <section className="bg-gray-100">
        <Navbar />
        <SuccessfullPurchase />
        <article className="flex bg-gray-100 text-gray-600 pt-10 pb-10 px-4 flex-col sm:flex-row">
          <div className="grow justify-center h-full mx-3">
            {/* <!-- Table --> */}
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded  hover:scale-105 duration-300 ease-in-out">
              <header className="px-5 py-4 border-b border-gray-100">
                <p className="font-semibold text-3xl text-gray-800">
                  Cart Summary
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="px-2   text-yellow-500"
                  />
                </p>
              </header>
              <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                  <thead className="text-sm uppercase text-gray-400 bg-gray-100">
                    <tr className="py-2">
                      {columns.map((column) => {
                        return (
                          <th className="py-2 px-2" key={column.accessor}>
                            {column.Header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  {/* Apply the table body props */}
                  <tbody className="text-sm divide-y divide-gray-100">
                    {saleData.products?.map((product) => (
                      <tr className="bg-white border-b" key={product.productId}>
                        <td className="py-4 px-6 text-center capitalize">
                          {product.category}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {product.name}
                        </td>
                        <td className="py-4 px-6 text-center">
                          ${product.price}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {product.quantity}
                        </td>
                        <td className="py-4 px-6 text-center">
                          ${product.quantity * product.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/*  total amount  */}
              <div className="flex justify-center font-bold text-2xl border-t border-gray-100 px-5 py-4">
                <p>Total $ {totalPrice}</p>
                {/* This is dummy content */}
                <p className="text-green-600 pl-1"></p>
              </div>
            </div>
          </div>

          {/*---------------------------------- SHIPPING INFO ---------------------------------- */}
          <article className="container mt-8 flex-1 flex justify-center sm:mx-auto sm:mt-0">
            <div className="bg-white w-80 shadow-lg rounded  hover:scale-105 duration-300 ease-in-out">
              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-3xl text-gray-800">
                  Shipping Info
                  <FontAwesomeIcon
                    icon={faBoxesPacking}
                    className="px-2 align-middle text-yellow-500"
                  />
                </div>
              </header>
              <div>
                <img
                  src="https://i.imgur.com/gcWnDPv.png"
                  alt="mailbox"
                  className="rounded-t w-3/5 m-auto"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl">{saleData.name}</h2>
                <p className="text-xl my-2">{saleData.address}</p>
                <p className="text-xl my-2">{saleData.email}</p>
              </div>
            </div>
          </article>
        </article>

        <Link
          to={'/'}
          className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center hover:scale-105 rounded shadow-lg uppercase  mt-6 mb-24 hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link>
        <hr className="bg-gray-100" />
      </section>
      <Footer />
    </>
  );
};

export default Ticket;
