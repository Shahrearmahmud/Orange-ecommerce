// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBun7yHzUS_CkHWRYmTQvpNehv3O9vl8wA",
  authDomain: "eorange-a6a3c.firebaseapp.com",
  projectId: "eorange-a6a3c",
  storageBucket: "eorange-a6a3c.appspot.com",
  messagingSenderId: "197489985599",
  appId: "1:197489985599:web:a1cdc5a2e1e5970e4f508a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;