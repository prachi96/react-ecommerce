import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ReactComponent as CartIcon } from "../../../assets/cart-icon.svg";
import "./ShoppingCartIcon.scss";
import { toggleCartDropdown } from "../../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../../redux/cart/cart.selectors";

const ShoppingCartIcon = ({ toggleCartDropdown, cartItemCount }) => (
  <div className="shopping-cart-icon" onClick={toggleCartDropdown}>
    <CartIcon className="cart-icon" />
    <span className="cart-item-count">{cartItemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: bindActionCreators(toggleCartDropdown, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);
