import React from "react";
import CustomButton from "../../atoms/CustomButton";
import "./ShoppingCartDropdown.scss";

const ShoppingCartDropdown = () => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default ShoppingCartDropdown;
