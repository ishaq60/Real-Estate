
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA72LTng9RQOhH9BNr-6zfTOSvvfPuG4aM",
  authDomain: "real-estate-8b592.firebaseapp.com",
  projectId: "real-estate-8b592",
  storageBucket: "real-estate-8b592.appspot.com",
  messagingSenderId: "752570958039",
  appId: "1:752570958039:web:facff76cf86ac183043092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;