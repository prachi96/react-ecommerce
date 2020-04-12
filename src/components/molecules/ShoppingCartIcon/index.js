import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ReactComponent as CartIcon } from "../../../assets/cart-icon.svg";
import "./ShoppingCartIcon.scss";
import { toggleCartDropdown } from "../../../redux/cart/cart.actions";

const ShoppingCartIcon = ({ toggleCartDropdown }) => (
  <div className="shopping-cart-icon" onClick={toggleCartDropdown}>
    <CartIcon className="cart-icon" />
    <span className="cart-item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: bindActionCreators(toggleCartDropdown, dispatch),
});

export default connect(null, mapDispatchToProps)(ShoppingCartIcon);
