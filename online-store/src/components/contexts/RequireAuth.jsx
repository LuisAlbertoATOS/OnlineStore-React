import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";

const RequireAuth = ({ children }) => {
  return (
    <div>
      {/* {auth.currentUser ? children : <Navigate to="/sign-in" replace />} */}
      {auth.currentUser ? children : children}
    </div>
  );
};

export default RequireAuth;
