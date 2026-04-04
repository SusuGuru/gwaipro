import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";

export default function ProtectedAdmin({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    setToken(storedToken);
  }, []);

  if (!token) return <AdminLogin />;

  return children;
}