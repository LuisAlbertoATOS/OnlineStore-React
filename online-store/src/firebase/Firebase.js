import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import{getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7gOZEVtAzohQv6GXbxiUD4PIhw1i_EPA",
  authDomain: "online-store-d6dd3.firebaseapp.com",
  databaseURL: "https://online-store-d6dd3-default-rtdb.firebaseio.com",
  projectId: "online-store-d6dd3",
  storageBucket: "online-store-d6dd3.appspot.com",
  messagingSenderId: "837558637365",
  appId: "1:837558637365:web:9bec027183f758e01c727c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

