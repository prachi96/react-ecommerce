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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;
  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userReference.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating a user : ", error.message);
    }
  }
  return userReference;
};

export const addCollectionAndItems = async (collectionKey, itemsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  itemsToAdd.forEach((item) => {
    const docReference = collectionRef.doc();
    batch.set(docReference, item);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
