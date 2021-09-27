// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmQ7EDY_hqiL7mtp0uRPzJSVbw9O59A0",
  authDomain: "my-test-f98ec.firebaseapp.com",
  projectId: "my-test-f98ec",
  storageBucket: "my-test-f98ec.appspot.com",
  messagingSenderId: "509184730404",
  appId: "1:509184730404:web:0348b86eefc78e95fa7fb1",
  measurementId: "G-4JESB0988Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export {db};