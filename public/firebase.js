// firebase.js (Firebase v9 Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAVQGPEqsiESRrUvQ9K5cS9tW6PjWRsua4",
  authDomain: "supermallwebapp-872bc.firebaseapp.com",
  projectId: "supermallwebapp-872bc",
  storageBucket: "supermallwebapp-872bc.firebasestorage.app",
  messagingSenderId: "440078203020",
  appId: "1:440078203020:web:2b982f2863ce99451f63a9",
  measurementId: "G-2LQZSBB2CB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
