import { initializeApp } from "firebase/app";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBQ5NqJohnlfRhqVny5gwlUSihtXkfaly4",
  authDomain: "fir-auth-3-f5793.firebaseapp.com",
  databaseURL: "https://fir-auth-3-f5793-default-rtdb.firebaseio.com",
  projectId: "fir-auth-3-f5793",
  storageBucket: "fir-auth-3-f5793.appspot.com",
  messagingSenderId: "973043220731",
  appId: "1:973043220731:web:cba603a30300ee1fe8f05e"
};
  
const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  });
  
    const logout = async () => {
      try {
        await onAuthStateChanged.auth.signOut();
      } catch (error) {
        console.error('Error logging out:', error.message);
      }
    };

    return { user, logout };
  };

export default useAuth;
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)