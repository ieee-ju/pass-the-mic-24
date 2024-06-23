// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWGjcZzP1NjosvtMNSpF4TI55NhJxK0Nw",
  authDomain: "pass-the-mic-24.firebaseapp.com",
  projectId: "pass-the-mic-24",
  storageBucket: "pass-the-mic-24.appspot.com",
  messagingSenderId: "552545363053",
  appId: "1:552545363053:web:296a4abf7a4dc1dadd4b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };