import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const allKey = import.meta.env;

const firebaseConfig = {
  apiKey: allKey.VITE_APIKEY,
  authDomain: allKey.VITE_AUTHDOMAIN,
  projectId: allKey.VITE_PROJECTID,
  storageBucket: allKey.VITE_STORAGEBUCKET,
  messagingSenderId: allKey.VITE_MESSAGINGSENDERID,
  appId: allKey.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
