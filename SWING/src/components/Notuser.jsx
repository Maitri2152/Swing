import React from "react";
import { Navigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";

const Notuser = ({ sign }) => {
  const { user } = signOut();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return sign;
  }
};

export default Notuser;
