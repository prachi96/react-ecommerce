import { TOGGLE_CART_DROPDOWN } from "./cart.constants";

const initialCartState = {
  isCartDropdownVisible: false,
};

const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isCartDropdownVisible: !state.isCartDropdownVisible,
      };
    default:
      return state;
  }
};

export default CartReducer;
