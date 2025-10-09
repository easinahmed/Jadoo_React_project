import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider, signInAnonymously, updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential, sendPasswordResetEmail } from "firebase/auth";
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
        anonymousLogin: () => { },
        getUserInfo: () => { },
        updateUserInfo: () => { },
        updateUserPass: () => { },
        resetPass: () => {},
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
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
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

    const getUserInfo = () => {
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const email = user.email;
            const displayName = user.displayName = email.slice(0, 1);
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;



        }
    }


    const updateUserInfo = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            console.log("user update done");

        }).catch((error) => {
            console.log(error.message);

        });
    }

    const updateUserPass = (newPassword, currentPassword) => {
    const user = auth.currentUser;

    if (!user) {
        alert("No user logged in!");
        return;
    }

    // ইউজারের current email & password দিয়ে reauthenticate
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    reauthenticateWithCredential(user, credential)
        .then(() => {
            // reauthentication successful
            updatePassword(user, newPassword)
                .then(() => {
                    alert("✅ Password updated successfully!");
                })
                .catch((error) => {
                    alert("Failed to update password: " + error.message);
                });
        })
        .catch((error) => {
            alert("Reauthentication failed: " + error.message);
        });
};


const resetPass = (email) => {

sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!")
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
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
        anonymousLogin,
        getUserInfo,
        updateUserInfo,
        updateUserPass,
        resetPass

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
