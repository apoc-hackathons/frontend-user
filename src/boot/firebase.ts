// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSXeVikjReMSJRweEVdxEw9GqiUk8wh1s',
  authDomain: 'vue-fire-todo-35d77.firebaseapp.com',
  projectId: 'vue-fire-todo-35d77',
  storageBucket: 'vue-fire-todo-35d77.appspot.com',
  messagingSenderId: '302642746061',
  appId: '1:302642746061:web:a4a3ecbb85efa615fc4f84',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
