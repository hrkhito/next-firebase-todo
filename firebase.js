import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-BLLo4xZy1yUEXFlTQXZ6ptudfjj_nro",
  authDomain: "next-firebase-todo-eefb5.firebaseapp.com",
  projectId: "next-firebase-todo-eefb5",
  storageBucket: "next-firebase-todo-eefb5.appspot.com",
  messagingSenderId: "475497536757",
  appId: "1:475497536757:web:18074ed74efe614ad7b9bc"
};

const firebase=initializeApp(firebaseConfig);
const firestore=getFirestore(firebase);

export default firestore;