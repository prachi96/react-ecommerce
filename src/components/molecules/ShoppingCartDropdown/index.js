import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../../atoms/CustomButton";
import "./ShoppingCartDropdown.scss";
import ShoppingCartItem from "../ShoppingCartItem";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../../redux/cart/cart.actions";
import { bindActionCreators } from "redux";

const ShoppingCartDropdown = ({ cartItems, history, toggleCartDropdown }) => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <ShoppingCartItem ke y={item.id} item={item} />)
      ) : (
        <span className="cart-item__info">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartDropdown();
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: bindActionCreators(toggleCartDropdown, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDropdown)
);
