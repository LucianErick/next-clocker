import firebase, { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBZY_rHYxX48LkvkytGks60HXf6XyHIYRQ",
    authDomain: "clocker-f9366.firebaseapp.com",
    projectId: "clocker-f9366",
    storageBucket: "clocker-f9366.appspot.com",
    messagingSenderId: "294986278714",
    appId: "1:294986278714:web:3bcbc394f9f051653c1203",
    measurementId: "G-KY2SRKBZJ4"
  };
  
  // Initialize Firebase

export default firebase.getApps().length ?
firebase.getApps()[0] :
firebase.initializeApp(firebaseConfig);