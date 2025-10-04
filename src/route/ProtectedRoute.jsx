import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser} = useAuth();

 
   if (!currentUser ) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
  }
  if (currentUser && currentUser.emailVerified === false ) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
