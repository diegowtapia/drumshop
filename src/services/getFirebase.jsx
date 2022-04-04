// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, updateDoc, doc } from "firebase/firestore";
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

//Manejar stock
export const updateStock = async (itemId, quantity) => {
  const item = await getDoc(doc(db, "items", itemId));
  await updateDoc(doc(db, "items", itemId), {
    stock: item.data().stock - quantity,
  });
}