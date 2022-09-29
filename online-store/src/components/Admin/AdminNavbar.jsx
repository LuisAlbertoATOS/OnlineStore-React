import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebase/Firebase";
import { signOut } from "firebase/auth";


const AdminNavbar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(console.log("signout"))
      .then(
        setTimeout(() => {
          navigate("/");
        }, 1000)
      );
  };

  return (
    <header className="bg-blue-800 sticky top-0 z-50">
      <nav className="flex justify-between align-center px-8 ">
        <Link to="/admin-dashboard">
          <img
            className="h-16 px-6 py-2"
            alt="Logo"
            src="https://i.postimg.cc/FHrrsgPv/logo.png"
          ></img>
        </Link>
        <button
            className="text-white text-lg py-5 px-2 hover:bg-blue-900"
            onClick={logOut}
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="px-2 fa-lg" />
          </button>
      </nav>
    </header>
  );
};

export default AdminNavbar;
