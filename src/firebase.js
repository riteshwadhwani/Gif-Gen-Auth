import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "generategif-735ae.firebaseapp.com",
  databaseURL: "https://generategif-735ae-default-rtdb.firebaseio.com",
  projectId: "generategif-735ae",
  storageBucket: "generategif-735ae.appspot.com",
  messagingSenderId: "754119246713",
  appId: "1:754119246713:web:6f9b30ec1db65b092725a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);

export {app};