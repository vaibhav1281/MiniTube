// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0I__qypgkNycSRGyzMHTgiEJsTaXfilU",
  authDomain: "minitube-d17ef.firebaseapp.com",
  projectId: "minitube-d17ef",
  storageBucket: "minitube-d17ef.appspot.com",
  messagingSenderId: "1076378315308",
  appId: "1:1076378315308:web:b0bd82c183e5c0526eff89",
  measurementId: "G-6YSFQ4ZR6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();