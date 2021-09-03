import * as firebase from 'firebase/app';
import "firebase/auth";
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZY_rHYxX48LkvkytGks60HXf6XyHIYRQ",
    authDomain: "clocker-f9366.firebaseapp.com",
    projectId: "clocker-f9366",
    storageBucket: "clocker-f9366.appspot.com",
    messagingSenderId: "294986278714",
    appId: "1:294986278714:web:3bcbc394f9f051653c1203",
    measurementId: "G-KY2SRKBZJ4"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)

export default app;