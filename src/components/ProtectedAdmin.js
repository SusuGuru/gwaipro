import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("adminToken");

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }

  // If token exists, show admin panel
  return children;
}