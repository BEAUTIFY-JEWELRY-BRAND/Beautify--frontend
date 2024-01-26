// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFQQ4CyCz1vmQR1AKuQPlhBHZPpq9MVVw",
  authDomain: "beautify-c4bb9.firebaseapp.com",
  projectId: "beautify-c4bb9",
  storageBucket: "beautify-c4bb9.appspot.com",
  messagingSenderId: "130675176966",
  appId: "1:130675176966:web:c0928e81b70d9c88ab3587",
  measurementId: "G-TNGFS79FJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();