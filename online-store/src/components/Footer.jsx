import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
  );
};

export default Footer;
