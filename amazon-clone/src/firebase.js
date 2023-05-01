// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihRrejQDEHYxoys3Y1Bt_wOWJgUsG9CQ",
  authDomain: "clone-by-abenezer.firebaseapp.com",
  projectId: "clone-by-abenezer",
  storageBucket: "clone-by-abenezer.appspot.com",
  messagingSenderId: "1053695489294",
  appId: "1:1053695489294:web:5a6335161cfd22b134135f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}