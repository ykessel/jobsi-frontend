// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRVa82LYBs2kgLISFAAV5ytM5e3yViMhE",
  authDomain: "react-native-expo-f24d8.firebaseapp.com",
  projectId: "react-native-expo-f24d8",
  storageBucket: "react-native-expo-f24d8.appspot.com",
  messagingSenderId: "724974700832",
  appId: "1:724974700832:web:47e9f8feffe13cb2cc2f45",
  measurementId: "G-NC1B9Y30XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
