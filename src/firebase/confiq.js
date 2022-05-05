import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7DvecymqQYOBgOcRaOTuUH-2KMDVyT5M",
  authDomain: "app-chat-bacc9.firebaseapp.com",
  projectId: "app-chat-bacc9",
  storageBucket: "app-chat-bacc9.appspot.com",
  messagingSenderId: "261492191269",
  appId: "1:261492191269:web:1e07a0e6cecba7b35e8fcc",
  measurementId: "G-Y01XXP5R5N",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
