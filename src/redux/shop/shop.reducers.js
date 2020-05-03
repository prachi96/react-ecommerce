// import { SHOP_DATA } from "./shop.data";
import { UPDATE_COLLECTIONS } from "./shop.constants";

const initialShopState = {
  collections: {},
};

const shopReducer = (state = initialShopState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: action.data,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
