import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "uber-eats-42d97.firebaseapp.com",
  projectId: "uber-eats-42d97",
  storageBucket: "uber-eats-42d97.appspot.com",
  messagingSenderId: "234843307274",
  appId: "1:234843307274:web:a1b8026098e56bfc9a0ef3",
};

export let db;
// if there is no firebase app, then initialize the firebase app with the firebaseConfig otherwise use this app
if(!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    db = getFirestore(app);
} else {
    firebase.app();
    db = getFirestore(app);
}


export default firebase;
