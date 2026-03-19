// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuJBkATZolXppZGuxXIsMK6kHDGolXWWs",
  authDomain: "buynsell-fa42c.firebaseapp.com",
  databaseURL: "https://buynsell-fa42c-default-rtdb.firebaseio.com",
  projectId: "buynsell-fa42c",
  storageBucket: "buynsell-fa42c.firebasestorage.app",
  messagingSenderId: "627435770651",
  appId: "1:627435770651:web:ebd80f8a91519ab121f9be",
  measurementId: "G-KG1ZMJHB68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);