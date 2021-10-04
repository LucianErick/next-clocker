import * as firebase from 'firebase/app';
import "firebase/auth";
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

//     apiKey: "AIzaSyBZY_rHYxX48LkvkytGks60HXf6XyHIYRQ",
//     authDomain: "clocker-f9366.firebaseapp.com",
//     projectId: "clocker-f9366",
//     storageBucket: "clocker-f9366.appspot.com",
//     messagingSenderId: "294986278714",
//     appId: "1:294986278714:web:3bcbc394f9f051653c1203",
//     measurementId: "G-KY2SRKBZJ4"

const app = firebase.getApps().length ? firebase.getApp() : firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)

export default app;