import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../atoms/CustomButton";
import "./ShoppingCartDropdown.scss";
import ShoppingCartItem from "../ShoppingCartItem";

const ShoppingCartDropdown = ({ cartItems }) => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items">
      {cartItems.length &&
        cartItems.map((item) => <ShoppingCartItem key={item.id} item={item} />)}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(ShoppingCartDropdown);
