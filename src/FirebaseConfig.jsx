// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import for authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtdYWpp2mTtgK4gGnWe4J5tibSMyV_YJE",
  authDomain: "clone-e4086.firebaseapp.com",
  projectId: "clone-e4086",
  storageBucket: "clone-e4086.appspot.com",
  messagingSenderId: "507427831347",
  appId: "1:507427831347:web:3f7bbcd0d25c36a10b2d46",
  measurementId: "G-NZBFZ04W57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication
const auth = getAuth(app);

export { auth };
