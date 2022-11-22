import React from "react";
import {Navigate, useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  if (checkUser()) {
    return <Component />;
  } 
  else {
    //this forces a redirect if the user is not recognized
    return ( 
      <Navigate to="/auth" replace />
    );
  }
};

export default ProtectedRoute;
