// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQXELmnehA1DPgSKItckWXlZe1TqC2BCQ",
    authDomain: "esp32-5eae0.firebaseapp.com",
    databaseURL: "https://esp32-5eae0-default-rtdb.firebaseio.com",
    projectId: "esp32-5eae0",
    storageBucket: "esp32-5eae0.appspot.com",
    messagingSenderId: "335131065095",
    appId: "1:335131065095:web:122495aa623b94719923a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);