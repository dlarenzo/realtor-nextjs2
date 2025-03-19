import { useContext, createContext, useState, useEffect } from "react";

// FIREBASE IMPORTS WE WANT TO USE
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

// IMPORT FIREBASE.JS FILE
import { auth } from "../../../backend/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //  STATE MANAGEMENT FOR AUTHENTICATION
  const [user, setUser] = useState(null);

  // SIGN IN WITH GOOGLE
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // SIGN OUT
  const logOut = () => {
    signOut(auth);
  };

  // MANAGE WHO'S LOGGED IN AND WHO'S NOT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
