// Import the functions you need from the SDKs you need
//import firebase from "firebase/compat/app";
//import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApMjEWo0oFNNRktfeI89-qFcapmORaZSE",
  authDomain: "drumshop-dwt.firebaseapp.com",
  projectId: "drumshop-dwt",
  storageBucket: "drumshop-dwt.appspot.com",
  messagingSenderId: "188842804482",
  appId: "1:188842804482:web:51adcb37f9f92b4625ae1b",
  measurementId: "G-Z063QMYKWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
/*
export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
*/
//export default db;