// import { SHOP_DATA } from "./shop.data";
import {
  FETCH_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
} from "./shop.constants";

const initialShopState = {
  collections: {},
  isFetching: false,
};

const shopReducer = (state = initialShopState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        collections: action.data,
      };
    }
    case FETCH_COLLECTIONS_ERROR: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.data,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
