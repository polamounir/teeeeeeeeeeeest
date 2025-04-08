import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
