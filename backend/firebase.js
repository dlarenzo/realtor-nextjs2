// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// IMPORT GETAUTH
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX94S9xnKpOUx_LlsmKsEiNTYUyBXXpa0",
  authDomain: "realtor-nextjs2.firebaseapp.com",
  projectId: "realtor-nextjs2",
  storageBucket: "realtor-nextjs2.firebasestorage.app",
  messagingSenderId: "742168723095",
  appId: "1:742168723095:web:6acfc388adfa350977b3d2",
  measurementId: "G-L8RYJ1KX80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
