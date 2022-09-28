import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SuccessfullPurchase from './ShoppingCart/SuccessfullPurchase';
import { useTable } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faBoxesPacking,
} from '@fortawesome/free-solid-svg-icons';

const Ticket = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Nintendo ds',
        col2: '3',
        col3: '75',
        col4: '$ 225',
      },
      {
        col1: 'Alexa 4th Gen',
        col2: '2',
        col3: '420',
        col4: '$ 840',
      },
      {
        col1: 'Nintendo switch',
        col2: '1',
        col3: '350',
        col4: '$ 350',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Quantity',
        accessor: 'col2',
      },
      {
        Header: 'Price Per Unit',
        accessor: 'col3',
      },
      {
        Header: 'Total',
        accessor: 'col4',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Testing for the total
  let a = 12;
  let b = 23;

  return (
    <>
      <section className="bg-gray-100 	">
        <Navbar />
        <SuccessfullPurchase />

        {/* <Link
          to={'/'}
          className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center hover:scale-105 rounded shadow-lg uppercase  mt-6 hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link> */}

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
                <table {...getTableProps()} className="table-auto w-full">
                  <thead className="text-sm uppercase text-gray-400 bg-gray-100">
                    {
                      // Loop over the header rows
                      headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {
                            // Loop over the headers in each row
                            headerGroup.headers.map((column) => (
                              // Apply the header cell props
                              <th {...column.getHeaderProps()} className="p-2">
                                {
                                  // Render the header
                                  column.render('Header')
                                }
                              </th>
                            ))
                          }
                        </tr>
                      ))
                    }
                  </thead>
                  {/* Apply the table body props */}
                  <tbody
                    {...getTableBodyProps()}
                    className="text-sm divide-y divide-gray-100"
                  >
                    {
                      // Loop over the table rows
                      rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                          // Apply the row props
                          <tr {...row.getRowProps()}>
                            {
                              // Loop over the rows cells
                              row.cells.map((cell) => {
                                // Apply the cell props
                                return (
                                  <td {...cell.getCellProps()} className="p-2">
                                    {
                                      // Render the cell contents
                                      cell.render('Cell')
                                    }
                                  </td>
                                );
                              })
                            }
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
              {/*  total amount  */}
              <div className="flex justify-center font-bold text-2xl border-t border-gray-100 px-5 py-4">
                <p>Total $</p>
                {/* This is dummy content */}
                <p className="text-green-600 pl-1">{a + b}</p>
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
                <h2 className="text-2xl">Alan Garcia</h2>
                <p className="text-xl my-2">Paseo plata 725, Calle Simon</p>
                <p className="text-xl my-2">equisde@gmail.com</p>
              </div>
            </div>
          </article>
        </article>

        {/* Button above or below */}
        <Link
          to={'/'}
          className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center hover:scale-105 rounded shadow-lg uppercase  mt-6 mb-20 hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link>
      </section>

      {/*---------------------------------- Footer ---------------------------------- */}
      {/* Maybe add the footer later bc well it's not thaat obligatory but looks profreshional */}
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-blue-800 ">
        <div className="m-auto w-1/2 sm:m-auto sm:w-auto  sm:flex sm:items-center sm:justify-between">
          <Link to={'#'} className="flex items-center mb-4 sm:mb-0">
            <img
              className="h-16 px-6 py-2"
              alt="Logo"
              src="https://i.postimg.cc/FHrrsgPv/logo.png"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-200 sm:mb-0 dark:text-gray-100">
            <li>
              <Link to={'#'} className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to={'#'} className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={'#'} className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-200">
          © 2022{' '}
          <Link to={'#'} className="hover:underline">
            BestTech™
          </Link>
          . <p className="p-1">All Rights Reserved.</p>
        </span>
      </footer>
    </>
  );
};

export default Ticket;
