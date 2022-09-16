import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="bg-blue-800 sticky top-0">
      <nav className="flex justify-between align-center px-8 ">
        <Link to="/">
          <img
            className="h-16 px-6 py-2"
            alt="Logo"
            src="https://vantiq.com/wp-content/uploads/2019/07/logo-tokyo-white-2x.png"
          ></img>
        </Link>
        <input
          type="text"
          className="rounded-md w-1/2 m-3 px-3 font-medium focus:outline-gray-800 "
          placeholder="Search a Product!"
        />
        <div className="flex flex-row">
          <Link to="/sign-in">
            <p className="text-white text-lg py-5 px-2 hover:bg-blue-900">
              <FontAwesomeIcon icon={faCircleUser} className="px-2 fa-xl" />
              Sign in
            </p>
          </Link>
          <Link to="/shopping-cart">
            <p className="text-white text-lg py-5 px-2 hover:bg-blue-900">
              <FontAwesomeIcon icon={faCartShopping} className="px-2 fa-lg" />
              Cart
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
