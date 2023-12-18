// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDySsts15Ag2RjYebceWUv03nNd34q1rW0",
  authDomain: "netflixgpt-529a5.firebaseapp.com",
  projectId: "netflixgpt-529a5",
  storageBucket: "netflixgpt-529a5.appspot.com",
  messagingSenderId: "306860903793",
  appId: "1:306860903793:web:3e0ecbbd3fe303e350bad0",
  measurementId: "G-4BNWV1L2X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();