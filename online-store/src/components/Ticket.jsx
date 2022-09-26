import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Ticket = () => {
  return (
    <>
      <Navbar />
      <div class="container mx-auto hidden py-10 flex justify-center">
        <div class="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
          <div class="">
            <img
              src="https://i.imgur.com/gcWnDPv.png"
              alt="mailbox"
              class="rounded-t"
            />
          </div>
          <div class="p-4">
            <h2 class="text-2xl uppercase">Item a</h2>
            <p class="font-light text-gray-500 text-lg my-2">$29,99</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>
            {/* Pending Link  | return to home or cart don't know*/}
            <Link
              to={'/'}
              class="block bg-blue-600 py-2 px-2 text-blue-200 text-center rounded shadow-lg uppercase  mt-6 hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
            >
              Return to cart
            </Link>
          </div>
        </div>
      </div>

      {/* Later delete unnessary classes */}
      <section
        class="antialiased bg-gray-100 text-gray-600 h-screen px-4"
        x-data="app"
      >
        <div class="flex flex-col justify-center h-full">
          {/* <!-- Table --> */}
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <div class="font-semibold text-gray-800">Manage Carts</div>
            </header>

            <div class="overflow-x-auto p-3">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th></th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Product Name</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Quantity</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Total</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>

                <tbody class="text-sm divide-y divide-gray-100">
                  {/* <!-- record 1 --> */}
                  <tr>
                    <td class=""></td>
                    <td class="p-2">
                      <div class="font-medium text-gray-800">
                        Samsung Galaxy Note 4
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
                        RM 2,890.66
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="flex justify-center">
                        <button>
                          <svg
                            class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- record 2 --> */}
                  <tr>
                    <td class="p-2">
                      <input type="checkbox" class="w-5 h-5" value="id-2" />
                    </td>
                    <td class="p-2">
                      <div>
                        <div class="font-medium text-gray-800">
                          Logitech Keyboard
                        </div>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
                        RM 120.50
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="flex justify-center">
                        <button>
                          <svg
                            class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* <!-- record 3 --> */}
                  <tr>
                    <td class="p-2">
                      <input type="checkbox" class="w-5 h-5" value="id-3" />
                    </td>
                    <td class="p-2">
                      <div>
                        <div class="font-medium text-gray-800">Earphone</div>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
                        RM 15.00
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="flex justify-center">
                        <button>
                          <svg
                            class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- total amount --> */}
            <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
              <div>Total</div>
              <div class="text-blue-600">
                RM <span x-text="total.toFixed(2)"></span>
              </div>
            </div>

            <div class="flex justify-end">
              {/* <!-- send this data to backend (note: use class 'hidden' to hide this input) --> */}
              <input
                type="hidden"
                class="border border-black bg-gray-50"
                x-model="selected"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticket;
