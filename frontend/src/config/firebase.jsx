// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { OAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT7F5LUez5-9NmCpOkZRR8BMGxoqPJA_Q",
  authDomain: "saarthi-d8d0f.firebaseapp.com",
  projectId: "saarthi-d8d0f",
  storageBucket: "saarthi-d8d0f.firebasestorage.app",
  messagingSenderId: "608733209149",
  appId: "1:608733209149:web:3f7a69796a26e9c1374054",
  measurementId: "G-3Z0SZWK0H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const Microsoftprovider = new OAuthProvider('microsoft.com');
export const Googleprovider = new GoogleAuthProvider()
export const Facebookprovider = new FacebookAuthProvider();

