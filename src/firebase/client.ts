// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB0r2yar_2x00Rl87l_rf759zK8YOQl4MY",
  // authDomain: "emoji-riddle-with-friends.firebaseapp.com",
  // projectId: "emoji-riddle-with-friends",
  // storageBucket: "emoji-riddle-with-friends.appspot.com",
  // messagingSenderId: "526900602444",
  // appId: "1:526900602444:web:9fe9522c0981a061f5f6e9",
  apiKey: "AIzaSyB41-DMy-o3iOzKqAZj3SPwpUPAJl0BSbA",
  authDomain: "pictoverse-puzzle.firebaseapp.com",
  projectId: "pictoverse-puzzle",
  storageBucket: "pictoverse-puzzle.appspot.com",
  messagingSenderId: "737641848080",
  appId: "1:737641848080:web:e51aa81afc759fce5d9995",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
