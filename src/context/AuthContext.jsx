import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider, signInAnonymously } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext(
    {
        currentUser: null,
        loading: true,
        signUp: () => { },
        logout: () => { },
        login: () => { },
        googleLogin: () => { },
        fbLogin: () => { },
        githubLogin: () => { },
        anonymousLogin: () => {}
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
            .then(() => {


                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Check Your Mail. Verification Mail Sent")
                        if (navigate) {
                            return navigate("/auth/login")
                        }
                        alert("Verification Mail Sent. Plz check your mail.")
                        // Email verification sent!
                        // ...
                    }).catch((err) => {
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

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    const fbLogin = () => {
        const fbProvider = new FacebookAuthProvider();

        signInWithPopup(auth, fbProvider)
            .then((result) => {
                // Signed-in user info
                const user = result.user;

                // Facebook Access Token
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential ? credential.accessToken : null;

                console.log("Facebook user:", user);
                console.log("Facebook accessToken:", accessToken);

                // এখানে তুমি চাইলে user কে redirect করতে পারো
            })
            .catch((error) => {
                // Error handling
                console.log("Error code:", error.code);
                console.log("Error message:", error.message);
                console.log("Email:", error.email);
                console.log("Credential:", FacebookAuthProvider.credentialFromError(error));
            });
    }

    const githubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }


    const anonymousLogin = () => {
        signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
    }


    const logout = () => {
        signOut(auth)
    }



    const value = {
        currentUser,
        loading,
        signUp,
        logout,
        login,
        googleLogin,
        fbLogin,
        githubLogin,
        anonymousLogin

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
