import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import {getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHeKv5NRyL5qlizRCYkhdzswGuvbsmVQU",
  authDomain: "components-93c13.firebaseapp.com",
  projectId: "components-93c13",
  storageBucket: "components-93c13.appspot.com",
  messagingSenderId: "154892346667",
  appId: "1:154892346667:web:582355e9cb02a3f806d16e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;