import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../FirebaseAuth/Firebase.config';
  export const AuthContext=createContext(null)
  const GoogleProvider=new GoogleAuthProvider();
  const GithubProvider=new GithubAuthProvider()
const FirebaseAuthProvider = ({children}) => {
  const [user,setUser]=useState()
  console.log(user);


  // Registration
  const CreateUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  //LogIN
  const LogInuser=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)

  }
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
    // Logout
    const Logout=()=>{
      setUser(null)
     signOut(auth)
     .then(()=>{
       console.log("Logout successfully");
     })
     .catch(error =>{
      console.log("error");
     })
    }
  
    //
    useEffect(()=>{
      onAuthStateChanged(auth ,(user)=>{
        if(user){
          setUser(user)
        }
      })
    },[])
    const allvalue={
    GoogleLogIn,
    GithubLogIn,
    Logout,
    user,CreateUser,LogInuser
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