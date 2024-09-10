import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPzV0_XKWdSYTcb5pSmzyMYsjYVSulCGE",
  authDomain: "convo-gpt-ab172.firebaseapp.com",
  projectId: "convo-gpt-ab172",
  storageBucket: "convo-gpt-ab172.appspot.com",
  messagingSenderId: "748657866645",
  appId: "1:748657866645:web:571643097591fd9152289c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
