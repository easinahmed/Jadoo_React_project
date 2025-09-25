import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";
 
export const AuthContext = createContext(
    {currentUser : null,
        loading : true,
        signUp: ()=>{ }
    }
);



const AuthProvider = ( {children}) => {

    useEffect(
        ()=>{
            const unsubscribe = onAuthStateChanged(auth, (user)=>{
                setCurrentUser(user)
            })

            return ()=> unsubscribe()
        }, []
    )


const [currentUser, setCurrentUser] = useState(null)
const [loading, setLoading] = useState(true)
const signUp = (email, password) => {

createUserWithEmailAndPassword(auth, email, password)
  
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
