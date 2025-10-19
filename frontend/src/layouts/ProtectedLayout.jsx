// src/layouts/ProtectedLayout.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { setAuthenticated } from "../features/auth/slice/authSlice";

export default function ProtectedLayout() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const loggedin = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}api/protected/`, {
          withCredentials: true,
        });
        dispatch(setAuthenticated(true));
      } catch (err) {
        dispatch(setAuthenticated(false));
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [dispatch]); // ✅ only once

  if (loading) return <p>Loading...</p>;

  // 🔒 Redirect if not authenticated
  if (!loggedin) {
    return <Navigate to="/signin" replace />;
  }

  // ✅ Otherwise, show protected routes
  return <Outlet />;
}
