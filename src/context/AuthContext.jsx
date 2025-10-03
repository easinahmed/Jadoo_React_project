import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext(
    {
        currentUser: null,
        loading: true,
        signUp: () => { },
        logout: () => { },
        login: () => { }
    }
);



const AuthProvider = ({ children }) => {

    useEffect(
        () => {
            setLoading(true)
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setLoading(false)
            })

            return () => unsubscribe()
        }, []
    )


    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signUp = (email, password, navigate) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            

            sendEmailVerification(auth.currentUser)
            .then(() => {
                if(navigate) {
                    return navigate("/auth/login")
                }
                alert("Verification Mail Sent. Plz check your mail.")
                // Email verification sent!
                // ...
            }).catch((err)=>{
                console.log("Verification Failed");
                
            })
            
        }
        )

    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }

    const logout = () => {
        signOut(auth)
    }

    const value = {
        currentUser,
        loading,
        signUp,
        logout,
        login

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
