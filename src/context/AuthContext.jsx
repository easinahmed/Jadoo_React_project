import {  createContext, useState } from "react";
 
export const AuthContext = createContext(
    {currentUser : null,
        loading : true,
        signUp: ()=>{}
    }
);



const AuthProvider = ( {children}) => {


const [currentUser, setCurrentUser] = useState(null)
const [loading, setLoading] = useState(true)
const signUp = () => {

}

const value = {
    currentUser,
    loading,
    signUp
}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
