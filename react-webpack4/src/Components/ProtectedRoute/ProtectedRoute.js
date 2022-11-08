import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// redirects unauthenticated users to the auth page
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  useEffect(() => {
    if (checkUser()) {
        console.log("authenticated");
    }
    else {
        console.log("unauthenticated");
        navigate("/auth");
    }
  }, [navigate]);
  return <Component />
};

export default ProtectedRoute;