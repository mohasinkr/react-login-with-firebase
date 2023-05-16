import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase.js";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(){
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //cleanup function for useEffect
    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    user,
    signUp,
    login,
    logOut
  };

  return (
    <UserAuthContext.Provider value={values}>
      {children}
    </UserAuthContext.Provider>
  );

}

export function useUserAuth(){
  return useContext(UserAuthContext);
}
