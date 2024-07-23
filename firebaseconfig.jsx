// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkfFmPvzf-C7028lEMM6_qsTpF319L9Ec",
  authDomain: "community-market-fc971.firebaseapp.com",
  projectId: "community-market-fc971",
  storageBucket: "community-market-fc971.appspot.com",
  messagingSenderId: "911924599317",
  appId: "1:911924599317:web:ba9f3008d2658fa820cc1c",
  measurementId: "G-8ETRHNV623"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);