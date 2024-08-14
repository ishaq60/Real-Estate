import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import auth from '../FirebaseAuth/Firebase.config';
  export const AuthContext=createContext(null)
  const GoogleProvider=new GoogleAuthProvider();
  const GithubProvider=new GithubAuthProvider()
const FirebaseAuthProvider = ({children}) => {
  
    const GoogleLogIn=()=>{
        signInWithPopup(auth,GoogleProvider)
        .then((result) => {
            console.log("User signed in:", result.user);
            // Additional logic after successful sign-in can be added here
          })
          .catch((error) => {
            console.error("Error during Google login:", error.message);
            // Optionally handle different error codes
          });
    }

    // 
    const GithubLogIn=()=>{
        signInWithPopup(auth,GithubProvider)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
       console.log("eee");
        })
    }
    const allvalue={
    GoogleLogIn,GithubLogIn
    }
    return (
       <AuthContext.Provider value={allvalue}>
           {
          children
           }

       </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;