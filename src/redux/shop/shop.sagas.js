import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";
import { FETCH_COLLECTIONS } from "./shop.constants";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export default function* ShopSaga() {
  yield takeLatest(FETCH_COLLECTIONS, fetchCollections);
}
