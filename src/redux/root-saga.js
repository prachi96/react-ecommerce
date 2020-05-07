import { all, call } from "redux-saga/effects";
import ShopSaga from "./shop/shop.sagas";
import UserSaga from "./user/user.sagas";
import CartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(ShopSaga), call(UserSaga), call(CartSaga)]);
}
