import { SHOP_DATA } from "./shop.data";

const initialShopState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialShopState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
