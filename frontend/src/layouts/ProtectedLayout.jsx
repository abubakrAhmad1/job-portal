// src/layouts/ProtectedLayout.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const isAuthenticated = localStorage.getItem("token"); 
  // Or use a global auth context instead

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // renders child routes when authenticated
}
