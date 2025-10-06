import { Navigate, useLocation } from "react-router"
import {useAuth} from "../hooks/useAuth"
import Loading from "../components/Loading"

const PublicRoute = ({children}) => {
    const location = useLocation()
    const {currentUser, loading} = useAuth()
   
 if (loading) {
    return <Loading/>
  }

  if (
        currentUser?.providerData[0]?.providerId === "github.com" || 
        currentUser?.providerData[0]?.providerId === "facebook.com" ||
        currentUser?.isAnonymous

    ) {
        return (

            <Navigate to={"/"} state={{from: location}} replace />
        )
    }

    if (currentUser && currentUser?.emailVerified) {
        return(
            <Navigate to={"/"} state={{from: location}} replace />
        )
    }

  return children
}

export default PublicRoute