import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN,
  EMAIL_SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  CHECK_USER_SESSION,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.constants";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  data: user,
});

export const googleSignIn = () => ({
  type: GOOGLE_SIGN_IN,
});

export const emailSignIn = ({ email, password }) => ({
  type: EMAIL_SIGN_IN,
  data: { email, password },
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  data: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  data: error,
});

export const signOut = ({ email, password }) => ({
  type: SIGN_OUT,
  data: { email, password },
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  data: error,
});

export const signUp = ({ email, password, displayName }) => ({
  type: SIGN_UP,
  data: { email, password, displayName },
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  data: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  data: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export default {};
