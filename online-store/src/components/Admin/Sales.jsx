import React, { useMemo } from "react";
import AdminNavbar from "./AdminNavbar";
import { useTable } from "react-table";

const Sales = () => {
  // const tableInstance = useTable({ columns, data });

  /**
   * In the docs
   * Using React.useMemo here to ensure that our data isn't recreated on every render. If we didn't use React.useMemo, the table    would think it was receiving new data on every render and attempt to recalculate a lot of logic every single time.
   */
  const data = useMemo(
    () => [
      {
        col1: "Videogames",
        col2: "Nintendo DS",
        col3: "$ 30",
        col4: "10",
        col5: "$ 300",
      },
      {
        col1: "Audio",
        col2: "rocks",
        col3: "for col 3",
        col4: "10",
        col5: "732",
      },
      {
        col1: "Computers",
        col2: "you want",
        col3: "for col 3",
        col4: "10",
        col5: "3214",
      },
      {
        col1: "Periferals",
        col2: "you want",
        col3: "for col 3",
        col4: "10",
        col5: "4224",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Category",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Product",
        accessor: "col2",
      },
      {
        Header: "Price",
        accessor: "col3",
      },
      {
        Header: "Units sold",
        accessor: "col4",
      },
      {
        Header: "Total Sales",
        accessor: "col5",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <AdminNavbar />
      <h2 className="font-bold text-3xl m-4">Sales</h2>
      {/* // apply the table props */}
      <section className="w-11/12 m-0 mb-0 mx-auto my-auto">
        <table
          {...getTableProps()}
          className="w-full text-sm text-left text-blue-400 dark:text-blue-200  "
        >
          <thead className="text-xs text-blue-700 uppercase bg-blue-50 dark:bg-blue-700 dark:text-blue-100 text-center">
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()} className="py-3 px-6">
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr
                    {...row.getRowProps()}
                    className="bg-white border-b dark:bg-blue-900 dark:border-blue-700"
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="py-4 px-6 text-center"
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell")
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
      </section>
    </>
  );
};

export default Sales;
