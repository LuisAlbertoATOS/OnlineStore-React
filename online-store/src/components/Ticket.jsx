import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SuccessfullPurchase from './ShoppingCart/SuccessfullPurchase';

const Ticket = () => {
  // Testing for the total
  let a = 12;
  let b = 23;

  return (
    <section className="bg-gray-100 h-screen	">
      <Navbar />

      <SuccessfullPurchase />

      {/* Button above or below */}
      {/* <Link
        to={'/'}
        className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center rounded shadow-lg uppercase  mt-6 hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
      >
        Return to Home
      </Link> */}

      <article className="flex bg-gray-100 text-gray-600 pt-10 pb-10 px-4">
        <div className="grow justify-center h-full ">
          {/* <!-- Table --> */}
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded  hover:scale-105 duration-300 ease-in-out">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-3xl text-gray-800">
                Cart Summary 🛒
              </div>
            </header>
            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Product Name
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Quantity</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Price per unit
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Total</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {/* <!-- record 1 --> */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">
                          Nintendo ds
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">3</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">75</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center font-medium text-green-500">
                        $ 225
                      </div>
                    </td>
                  </tr>
                  {/* <!-- record 2 --> */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">
                          Alexa 4th Gen
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">2</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">420</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center font-medium text-green-500">
                        $ 840
                      </div>
                    </td>
                  </tr>
                  {/* <!-- record 3 --> */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">
                          Nintendo switch
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">1</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">350</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center font-medium text-green-500">
                        $ 350
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*  total amount  */}
            <div className="flex justify-center font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
              <p>Total $</p>
              <p className="text-green-600 p-0 m-0">{a + b}</p>
            </div>
          </div>
        </div>

        {/* classes deleted py-10 */}
        <article className="container mx-auto flex-1 justify-center">
          <div className="bg-white w-80 shadow-lg rounded  hover:scale-105 duration-300 ease-in-out">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-3xl text-gray-800">
                Shipping Info 📦
              </div>
            </header>
            <div>
              <img
                src="https://i.imgur.com/gcWnDPv.png"
                alt="mailbox"
                className="rounded-t"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl">Alan Garcia</h2>
              <p className="text-xl my-2">Paseo plata 725, Calle Simon</p>
              <p className="text-xl my-2">equisde@gmail.com</p>
            </div>
          </div>
        </article>
      </article>

      <Link
        to={'/'}
        className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center rounded shadow-lg uppercase  mt-6 hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
      >
        Return to Home
      </Link>
    </section>
  );
};

export default Ticket;
