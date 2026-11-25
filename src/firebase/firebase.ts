
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCbldCg66VjKGAckvCTuXNu0-Ona0nbZYQ",
  authDomain: "data-repository-442c4.firebaseapp.com",
  projectId: "data-repository-442c4",
  storageBucket: "data-repository-442c4.firebasestorage.app",
  messagingSenderId: "345981478053",
  appId: "1:345981478053:web:ef9c4aae40e9164b5f994c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
