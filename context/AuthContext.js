import React, { useContext, useEffect, useState, useRef } from "react";
import { auth, db } from "../firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";


const AuthContext=  React.createContext();


export function  useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const userInfo = useRef();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    userInfo,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
