

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDn86wbG_up07Lz5Pqh1zGHbbk9Vnr4ViA",
  authDomain: "yooi-96128.firebaseapp.com",
  databaseURL: "https://yooi-96128-default-rtdb.firebaseio.com",
  projectId: "yooi-96128",
  storageBucket: "yooi-96128.firebasestorage.app",
  messagingSenderId: "869312201687",
  appId: "1:869312201687:web:88ddb16d45c193991f8192",
  measurementId: "G-XVW46M6SKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
// export const auth = getauth();
