import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage
import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";
import directoryReducer from "./directory/directory.reducers";
import shopReducer from "./shop/shop.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
