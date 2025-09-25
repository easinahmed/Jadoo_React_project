import { Navigate, useLocation } from "react-router"
import {useAuth} from "../hooks/useAuth"

const PublicRoute = ({children}) => {
    const location = useLocation()
    const {currentUser} = useAuth()
   
    if (currentUser) {
        return(
            <Navigate to={"/"} state={{from: location}} replace />
        )
    }

  return children
}

export default PublicRoute