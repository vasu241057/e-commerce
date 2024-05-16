// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhDq5F9whLgBXUdZiPEzFx4CQx09b0FG4",
  authDomain: "e-commerce-bea0f.firebaseapp.com",
  projectId: "e-commerce-bea0f",
  storageBucket: "e-commerce-bea0f.appspot.com",
  messagingSenderId: "718984170302",
  appId: "1:718984170302:web:2abe52f9f2d0895c7f3a6f",
  measurementId: "G-N6MLZS5DDG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
