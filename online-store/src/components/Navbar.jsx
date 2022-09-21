import React from "react";
import {  Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faRightFromBracket,

} from "@fortawesome/free-solid-svg-icons";
import { auth} from "../firebase/Firebase";
import { signOut } from "firebase/auth";





const Navbar = () => {

  const navigate = useNavigate();



 const logOut = (e)=>{
  e.preventDefault()
   signOut(auth).then(
    console.log('signout')
   )
  // await auth.signOut().then(console.log(auth))
  
 }



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
        <h3>
          
        </h3>
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
          <button className="text-white text-lg py-5 px-2 hover:bg-blue-900"
                  onClick={logOut}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="px-2 fa-lg"/> 
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
