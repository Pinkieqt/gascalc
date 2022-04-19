
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDFq1rm_s80fwB_dCoDcSmL2s9mx39EC_8",
  authDomain: "gascalc-3c535.firebaseapp.com",
  projectId: "gascalc-3c535",
  storageBucket: "gascalc-3c535.appspot.com",
  messagingSenderId: "995500541164",
  appId: "1:995500541164:web:12be761261e52bbb3a11c9",
  measurementId: "G-7NRY1QQEDD",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();