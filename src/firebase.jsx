import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDUqhjEr66m8izWHNc6A-Qefdn5JYIgOM",
    authDomain: "e-commerce-reactjs-2021.firebaseapp.com",
    projectId: "e-commerce-reactjs-2021",
    storageBucket: "e-commerce-reactjs-2021.appspot.com",
    messagingSenderId: "111778998429",
    appId: "1:111778998429:web:ac16743cfd004f7bd60c74"
};

// Initializar Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);