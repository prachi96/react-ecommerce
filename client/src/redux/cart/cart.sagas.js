import { all, takeLatest, put } from "redux-saga/effects";
import { SIGN_OUT_SUCCESS } from "../user/user.constants";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export default function* cartSaga() {
  yield all([takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignout)]);
}
