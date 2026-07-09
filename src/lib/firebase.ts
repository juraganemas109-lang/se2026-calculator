import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpKxXPyBNtCQ31vbQfvqQNvqrSXC12_Cc",
  authDomain: "data-sensus.firebaseapp.com",
  projectId: "data-sensus",
  storageBucket: "data-sensus.firebasestorage.app",
  messagingSenderId: "1011742807806",
  appId: "1:1011742807806:web:af2319df4a532a0bd377af",
  measurementId: "G-D71V1M273B"
};

// Initialize Firebase
// getApps() is used to prevent multiple initializations in Next.js development mode
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
