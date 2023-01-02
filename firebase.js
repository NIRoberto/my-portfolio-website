import { initializeApp } from 'firebase/app';
import {getAuth}  from  "firebase/auth";
import {getFirestore} from  "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0sQE0XfYzmB3oanL7ZIJGYhI8NPrmug",
  authDomain: "portfolio-project-9f76b.firebaseapp.com",
  projectId: "portfolio-project-9f76b",
  storageBucket: "portfolio-project-9f76b.appspot.com",
  messagingSenderId: "259855353206",
  appId: "1:259855353206:web:a33a4e313a7a8cf8ede657",
};

const app = initializeApp(firebaseConfig);

export const  auth =  getAuth(app);

export const db =  getFirestore(app);

