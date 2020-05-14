import {
  FETCH_COLLECTIONS,
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop.constants";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  data: collectionMap,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: FETCH_COLLECTIONS_ERROR,
  data: errorMessage,
});

/* Thunk implementation 

export const fetchCollections = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // Using promises 
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionItems = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionItems));
      })
      .catch((error) => {
        dispatch(fetchCollectionsError(error.message));
      });
  };
};
*/
