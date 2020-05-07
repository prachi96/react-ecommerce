import {
  TOGGLE_CART_DROPDOWN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART_ITEM,
  CLEAR_CART,
} from "./cart.constants";

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: ADD_CART_ITEM,
  data: item,
});

export const removeItem = (item) => ({
  type: REMOVE_CART_ITEM,
  data: item,
});

export const clearItem = (item) => ({
  type: CLEAR_CART_ITEM,
  data: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export default {};
