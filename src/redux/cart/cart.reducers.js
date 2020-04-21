import {
  TOGGLE_CART_DROPDOWN,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
} from "./cart.constants";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
    case ADD_CART_ITEM: {
      const { cartItems } = state;
      return {
        ...state,
        cartItems: addItemToCart(cartItems, action.data),
      };
    }
    case REMOVE_CART_ITEM: {
      const { cartItems } = state;
      return {
        ...state,
        cartItems: removeItemFromCart(cartItems, action.data),
      };
    }
    case CLEAR_CART_ITEM: {
      const { cartItems } = state;
      const item = action.data;
      return {
        ...state,
        cartItems: cartItems.filter((cartItem) => cartItem.id !== item.id),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
