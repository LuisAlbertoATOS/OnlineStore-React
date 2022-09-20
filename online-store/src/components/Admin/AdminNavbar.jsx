import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminNavbar = () => {
  return (
    <header className="bg-blue-800 sticky top-0">
      <nav className="flex justify-between align-center px-8 ">
        <Link to="/admin-dashboard">
          <img
            className="h-16 px-6 py-2"
            alt="Logo"
            src="logo.png"
          ></img>
        </Link>
        <div className="flex flex-row">
          <p className="text-2xl text-white">Here will be a sign out icon</p>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
