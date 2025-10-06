import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser} = useAuth();

   if (
        currentUser?.providerData[0]?.providerId === "github.com" || 
        currentUser?.providerData[0]?.providerId === "facebook.com" ||
        currentUser?.isAnonymous

    ) {
        return (children)
    }
 
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
