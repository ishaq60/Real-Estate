import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../FirebaseAuth/Firebase.config';
  export const AuthContext=createContext(null)
  const GoogleProvider=new GoogleAuthProvider();
  const GithubProvider=new GithubAuthProvider()
const FirebaseAuthProvider = ({children}) => {
  const [user,setUser]=useState()
  const [loading,setloading]=useState(true)
  console.log(loading);
  console.log(user);

// 

  // Registration
  const CreateUser=(email,password)=>{
    setloading(true)
   return createUserWithEmailAndPassword(auth,email,password)
  }
  //LogIN
  const LogInuser=(email,password)=>{
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)

  }
    const GoogleLogIn=()=>{
      setloading(true)
     return   signInWithPopup(auth,GoogleProvider)
        
    }

    // 
    const GithubLogIn=()=>{
      setloading(true)
       return signInWithPopup(auth,GithubProvider)
      
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
  const updateCreateUser = (userName, photoUrl) => {
    setloading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };
    //
    useEffect(()=>{
    const unsuscribe=  onAuthStateChanged(auth ,(user)=>{
        if(user){
          setUser(user)
          setloading(false)
        }
      })
      return ()=>unsuscribe()
    },[])
    const allvalue={
    GoogleLogIn,
    GithubLogIn,
    Logout,
    user,CreateUser,LogInuser,loading,updateCreateUser
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