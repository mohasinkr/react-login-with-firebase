import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailandPassword,
  signinWithEmailandPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase.js";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user,setUser] = useState('');

  function signUp(email, password) {
    return createUserWithEmailandPassword(auth, email, password);
  }

  function login(email, password) {
    return signinWithEmailandPassword(auth, email, password);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    //cleanup function for useeffect
    return ()=>{
        unsubscribe();
    }
  },[])

  return (
    <UserAuthContext.Provider value={{}}>{children}</UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
