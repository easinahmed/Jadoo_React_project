// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjAT7pNkNt80L15KxDY5yrXbpFqrD9dbI",
  authDomain: "jadoo-9aebf.firebaseapp.com",
  projectId: "jadoo-9aebf",
  storageBucket: "jadoo-9aebf.firebasestorage.app",
  messagingSenderId: "149376458345",
  appId: "1:149376458345:web:c9eac1ab5d9a97274a4cf8",
  measurementId: "G-H95HNP7KPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);