import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../atoms/CustomButton";
import "./ShoppingCartDropdown.scss";
import ShoppingCartItem from "../ShoppingCartItem";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

const ShoppingCartDropdown = ({ cartItems }) => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items">
      {cartItems.length &&
        cartItems.map((item) => <ShoppingCartItem key={item.id} item={item} />)}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(ShoppingCartDropdown);
