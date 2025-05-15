// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBxCkeO56Jgy7ZDZ3FpigCIOqKAF7U-I",
  authDomain: "fir-practice-f80a3.firebaseapp.com",
  projectId: "fir-practice-f80a3",
  storageBucket: "fir-practice-f80a3.firebasestorage.app",
  messagingSenderId: "352685589979",
  appId: "1:352685589979:web:b69e448c357c75248ad3fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getAuth();