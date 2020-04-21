import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartTotal,
  selectCartItems,
} from "../../../redux/cart/cart.selectors";
import CheckoutItem from "../../molecules/CheckoutItem";
import "./CheckoutPage.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-page__header">
      <div className="checkout-page__header-item">
        <span>Product</span>
      </div>
      <div className="checkout-page__header-item">
        <span>Description</span>
      </div>
      <div className="checkout-page__header-item">
        <span>Quantity</span>
      </div>
      <div className="checkout-page__header-item">
        <span>Price</span>
      </div>
      <div className="checkout-page__header-item">
        <span>Remove</span>
      </div>
    </div>
    <div className="checkout-page__cart-items">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <span className="checkout-page__total">Total : ${cartTotal}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
