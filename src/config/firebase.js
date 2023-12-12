// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgJs7XiYf7NFYSRebJYYIfhqP6WAtBHQ",
  authDomain: "beautify-e4944.firebaseapp.com",
  projectId: "beautify-e4944",
  storageBucket: "beautify-e4944.appspot.com",
  messagingSenderId: "163172607423",
  appId: "1:163172607423:web:7bf208e7c086437bf9ad0a",
  measurementId: "G-YP99CTW53K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)