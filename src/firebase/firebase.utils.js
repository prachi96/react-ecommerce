import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBsGsz5hGqh-CPshC1FQmk__gauRUmOUaQ",
  authDomain: "react-ecommerce-db-e7436.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-e7436.firebaseio.com",
  projectId: "react-ecommerce-db-e7436",
  storageBucket: "react-ecommerce-db-e7436.appspot.com",
  messagingSenderId: "548416910276",
  appId: "1:548416910276:web:81111feff20297bc5cea91",
  measurementId: "G-DNN5J9G4F3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
