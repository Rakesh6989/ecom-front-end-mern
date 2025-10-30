import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProtectedRoute = ({ children, requiredRole }) => {
  const [isauthorized, setisauthorized] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setisauthorized(false);
      return;
    }

    axios
      .get("http://localhost:5000/verify-admin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setisauthorized(true))
      .catch(() => setisauthorized(false));

console.log("isauthorized",isauthorized)

  }, [token]);

  if (isauthorized === null) return <div>Checking Access..</div>;
  if (!isauthorized) return <Navigate to="/login" replace />;
  return children;
};
export default ProtectedRoute;
