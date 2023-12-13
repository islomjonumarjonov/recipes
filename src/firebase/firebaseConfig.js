import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAxJBSCHeQSNiyUZYsbL1D6ibf8ofP0kI",
  authDomain: "recipes-956ae.firebaseapp.com",
  projectId: "recipes-956ae",
  storageBucket: "recipes-956ae.appspot.com",
  messagingSenderId: "8589128410",
  appId: "1:8589128410:web:88a6842affcbfd6edb6be3",
  measurementId: "G-0SYD9L3BRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
