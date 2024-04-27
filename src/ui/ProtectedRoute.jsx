import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, token } = useUser();

  useEffect(() => {
    if (!isLoading && !token) {
      navigate("/login");
    }
  }, [isLoading, token, navigate]);

  if (token) return children;
}

export default ProtectedRoute;
