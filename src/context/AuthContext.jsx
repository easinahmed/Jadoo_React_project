import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";
 
export const AuthContext = createContext(
    {currentUser : null,
        loading : true,
        signUp: ()=>{ },
        logout: () => {},
    }
);



const AuthProvider = ( {children}) => {

    useEffect(
        ()=>{
            setLoading(true)
            const unsubscribe = onAuthStateChanged(auth, (user)=>{
                setCurrentUser(user)
                setLoading(false)
            })

            return ()=> unsubscribe()
        }, []
    )


const [currentUser, setCurrentUser] = useState(null)
const [loading, setLoading] = useState(true)
const signUp = (email, password) => {

createUserWithEmailAndPassword(auth, email, password)
  
}

   const logout = () => {
        signOut(auth)
    }

const value = {
    currentUser,
    loading,
    signUp,
    logout
}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
