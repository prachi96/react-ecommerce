import {
  createSelector
} from "reselect";

const selectCartDetails = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartDetails],
  (cart) => cart.cartItems
);

export const selectIsCartDropdownVisible = createSelector(
  [selectCartDetails],
  (cart) => cart.isCartDropdownVisible
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
    accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
    accumulatedQuantity + (cartItem.quantity * cartItem.price),
    0
  )
);