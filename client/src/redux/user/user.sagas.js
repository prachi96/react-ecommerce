import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  GOOGLE_SIGN_IN,
  EMAIL_SIGN_IN,
  CHECK_USER_SESSION,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from "./user.constants";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* getUserSnapshot(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* signInWithEmail({ data: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInAfterSignUp({ data: { user, additionalData } }) {
  try {
    yield getUserSnapshot(user, additionalData);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signUp({ data: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(GOOGLE_SIGN_IN, signInWithGoogle),
    takeLatest(EMAIL_SIGN_IN, signInWithEmail),
    takeLatest(SIGN_UP, signUp),
    takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp),
    takeLatest(CHECK_USER_SESSION, isUserAuthenticated),
    takeLatest(SIGN_OUT, signOut),
  ]);
}
