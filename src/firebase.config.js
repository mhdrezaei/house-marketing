// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vbYPFXXje1--Z515DYISqzAV28oPAcs",
  authDomain: "house-marketing-app-f69d3.firebaseapp.com",
  projectId: "house-marketing-app-f69d3",
  storageBucket: "house-marketing-app-f69d3.appspot.com",
  messagingSenderId: "117849770490",
  appId: "1:117849770490:web:bcc16463e1e5850ddebc43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()