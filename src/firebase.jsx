
import "firebase/database";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU2Zu2JTWtAddXcJfk4c83zYvuNkNwZMM",
  authDomain: "twitter-react-app-dafe4.firebaseapp.com",
  projectId: "twitter-react-app-dafe4",
  storageBucket: "twitter-react-app-dafe4.appspot.com",
  messagingSenderId: "1070773229952",
  appId: "1:1070773229952:web:89d97c07677f278816c965",
  measurementId: "G-22EB2K9JNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;