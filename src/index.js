import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbpSennSwiWMi7A83dJ1woLwi7YFpA9J0",
  authDomain: "pizzeria-tu-esquina.firebaseapp.com",
  projectId: "pizzeria-tu-esquina",
  storageBucket: "pizzeria-tu-esquina.appspot.com",
  messagingSenderId: "134022456835",
  appId: "1:134022456835:web:9502dfff66cb0974021036"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);


