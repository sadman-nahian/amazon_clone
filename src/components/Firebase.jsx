// Import the necessary modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGdx60D8N0xGv8ibzdvhOd7xNtw2v5BOA",
  authDomain: "clone-ed099.firebaseapp.com",
  projectId: "clone-ed099",
  storageBucket: "clone-ed099.firebasestorage.app",
  messagingSenderId: "251252852751",
  appId: "1:251252852751:web:ccf4150de069096122bb7a",
  measurementId: "G-89WL8XVTTN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
