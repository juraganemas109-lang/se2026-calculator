import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQBiRsJuazdKjLk7xsxYHrTuawg8oB94Q",
  authDomain: "se2026-data.firebaseapp.com",
  projectId: "se2026-data",
  storageBucket: "se2026-data.firebasestorage.app",
  messagingSenderId: "430416261689",
  appId: "1:430416261689:web:4a80a81b2c53a2217613e8",
  measurementId: "G-M8272LJ8D7"
};

// Initialize Firebase
// getApps() is used to prevent multiple initializations in Next.js development mode
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
