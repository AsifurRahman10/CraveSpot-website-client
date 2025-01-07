// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdMsfvXaVxhitsKOvDcNJwxuvRooFGga4",
    authDomain: "travel-guru-64301.firebaseapp.com",
    projectId: "travel-guru-64301",
    storageBucket: "travel-guru-64301.firebasestorage.app",
    messagingSenderId: "1018578682542",
    appId: "1:1018578682542:web:f94755b5f0520b4438e33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);