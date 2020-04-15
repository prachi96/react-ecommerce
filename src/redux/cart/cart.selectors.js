import { createSelector } from "reselect";

const selectCartDetails = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartDetails],
  (cart) => cart.cartItems
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
