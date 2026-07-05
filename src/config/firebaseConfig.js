import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD--ZKNGSI1-waZg1qE7IVe67ugIWpXfGg",
  authDomain: "first-app-63f97.firebaseapp.com",
  projectId: "first-app-63f97",
  storageBucket: "first-app-63f97.firebasestorage.app",
  messagingSenderId: "146005820447",
  appId: "1:146005820447:web:036625888e880018d8012a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };