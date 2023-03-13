import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkFTFWWfRJ2KBJ8CqHjA-qG3PCiuog1m0",
  authDomain: "sakura-manga-store.firebaseapp.com",
  projectId: "sakura-manga-store",
  storageBucket: "sakura-manga-store.appspot.com",
  messagingSenderId: "839203794721",
  appId: "1:839203794721:web:cb3b05af9a42b6bdbb5860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);