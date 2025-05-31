// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA_hn312nqxvEatLTQdXHkRdxlqS5rmklI",
  authDomain: "sabi-rights.firebaseapp.com",
  projectId: "sabi-rights",
  storageBucket: "sabi-rights.firebasestorage.app",
  messagingSenderId: "319954734670",
  appId: "1:319954734670:web:9f311182fc927e2408fd1f",
  measurementId: "G-J1TW2GKKE0",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { app, auth, googleProvider, db };
