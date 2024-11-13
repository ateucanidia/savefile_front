import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children }){
    // let isAuthenticated = false;
    const isAuthenticated = localStorage.getItem('accessToken');
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;