import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  clearItem,
  addItem,
  removeItem,
} from "../../../redux/cart/cart.actions";
import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  clearCartItem,
  addCartItem,
  removeCartItem,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="checkoutItem" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </span>
        {quantity}
        <span className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: bindActionCreators(clearItem, dispatch),
  removeCartItem: bindActionCreators(removeItem, dispatch),
  addCartItem: bindActionCreators(addItem, dispatch),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
