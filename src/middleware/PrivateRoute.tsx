// import React, { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

// interface PrivateRouteProps {
//   children: ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const token = localStorage.getItem("token");
//   return token ? <>{children}</> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;


import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[]; // Array of allowed roles
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole || "")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
