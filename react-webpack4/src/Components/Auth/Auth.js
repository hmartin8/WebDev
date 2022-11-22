import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {Navigate, useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  

  // redirect already authenticated users back to home
  // if (checkUser()) {
  //   alert("Auth: You are already logged in");
  //   return(
  //     <Navigate to="/home" replace />
  //   );
  // } 
  const navigate = useNavigate();
  
  useEffect(() => {
    if (checkUser()) {
      alert("Auth: You are already logged in");
      navigate("/home");
    }
  }, [navigate]);
  // alert("hi");
  return (
    <div>
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <br />
      <br />
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
