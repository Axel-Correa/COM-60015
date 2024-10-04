import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import "./index.css"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV10wt2D2hYKEuh-Gy3rH77v2SMU_AOXw",
  authDomain: "react-60015.firebaseapp.com",
  projectId: "react-60015",
  storageBucket: "react-60015.appspot.com",
  messagingSenderId: "661070037285",
  appId: "1:661070037285:web:f263206f334c3923bd5acc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
