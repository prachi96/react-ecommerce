import { TOGGLE_CART_DROPDOWN, ADD_CART_ITEM } from "./cart.constants";

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: ADD_CART_ITEM,
  data: item,
});

export default {};
