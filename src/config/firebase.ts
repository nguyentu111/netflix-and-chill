import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABfTFKYkb1TUwFkg07I8m0LzIuvPRVcWE",
  authDomain: "netflix-and-chill-c8f90.firebaseapp.com",
  projectId: "netflix-and-chill-c8f90",
  storageBucket: "netflix-and-chill-c8f90.appspot.com",
  messagingSenderId: "790422741181",
  appId: "1:790422741181:web:1378f8e4e1d432ea1157d4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
