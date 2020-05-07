import {
  SET_CURRENT_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.constants";

const initialUserState = {
  currentUser: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
        isSignInError: false,
        errorMessage: undefined,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSignInError: true,
        errorMessage: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
