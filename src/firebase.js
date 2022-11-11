// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaHAN2nzMTfcJrHYnlX5AvolrdUtEfyU8",
    authDomain: "only-swipes.firebaseapp.com",
    projectId: "only-swipes",
    storageBucket: "only-swipes.appspot.com",
    messagingSenderId: "465957444397",
    appId: "1:465957444397:web:bc01e99712b0c81f7151a4",
    measurementId: "G-BQ9W85QFKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



