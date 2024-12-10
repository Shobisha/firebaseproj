// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe5qtZqXzjJxcS38G_kb_KxxEWOWhTUkM",
  authDomain: "fir-proj-5ac35.firebaseapp.com",
  projectId: "fir-proj-5ac35",
  storageBucket: "fir-proj-5ac35.firebasestorage.app",
  messagingSenderId: "612392724219",
  appId: "1:612392724219:web:13b16a7935e8414230f25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;