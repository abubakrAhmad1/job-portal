// src/layouts/ProtectedLayout.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedLayout() {
  // const isAuthenticated = localStorage.getItem("token"); 
  // Or use a global auth context instead
  const isAuthenticated = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // renders child routes when authenticated
}
