import { TOGGLE_CART_DROPDOWN, ADD_CART_ITEM } from "./cart.constants";
import { addItemToCart } from "./cart.utils";

const initialCartState = {
  isCartDropdownVisible: false,
  cartItems: [],
};

const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isCartDropdownVisible: !state.isCartDropdownVisible,
      };
    case ADD_CART_ITEM:
      const { cartItems } = state;
      return {
        ...state,
        cartItems: addItemToCart(cartItems, action.data),
      };
    default:
      return state;
  }
};

export default CartReducer;
