import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SuccessfullPurchase from './ShoppingCart/SuccessfullPurchase';
import { useTable } from 'react-table';

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
      <section className="bg-gray-100 h-screen	">
        <Navbar />
        <SuccessfullPurchase />

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

        {/* Button above or below */}
        {/* <Link
          to={'/'}
          className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center rounded shadow-lg uppercase  mt-6 hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link> */}
        <Link
          to={'/'}
          className="block bg-blue-600 py-4 px-4 w-96 m-auto text-blue-200 text-center rounded shadow-lg uppercase  mt-6 hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
        >
          Return to Home
        </Link>
      </section>
    </>
  );
};

export default Ticket;
