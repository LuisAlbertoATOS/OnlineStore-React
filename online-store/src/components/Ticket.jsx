import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Ticket = () => {
  return (
    <>
      <Navbar />
      <div class="container mx-auto  py-10 flex justify-center">
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
    </>
  );
};

export default Ticket;
