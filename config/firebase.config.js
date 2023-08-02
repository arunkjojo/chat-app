import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFbl3VRcXQcnPcFaxout5ZITWjejgwMAs",
  authDomain: "ajoin-chat-app.firebaseapp.com",
  projectId: "ajoin-chat-app",
  storageBucket: "ajoin-chat-app.appspot.com",
  messagingSenderId: "40663190592",
  appId: "1:40663190592:web:4301c065dcaf02b16f63a5",
  measurementId: "G-TSV16H02M2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
