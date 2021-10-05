import * as admin from "firebase-admin";
import firebase from "firebase/app";

const app = firebase.getApps().length
  ? firebase.getApp()
  : admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });

export default admin;
