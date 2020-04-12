import { combineReducers } from "redux";
import { SET_CURRENT_USER } from "./constants";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
