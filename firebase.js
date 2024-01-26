import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMgmUXLdyNc1gR3yF-ng577wIfPGPnHOc",
  authDomain: "react-notes-9f3be.firebaseapp.com",
  projectId: "react-notes-9f3be",
  storageBucket: "react-notes-9f3be.appspot.com",
  messagingSenderId: "35396256902",
  appId: "1:35396256902:web:2b85cb82ca7a4450573d07",
  measurementId: "G-9KZD3E1W8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")