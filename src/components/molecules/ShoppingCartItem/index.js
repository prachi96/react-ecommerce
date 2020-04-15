import React from "react";
import "./ShoppingCartItem.scss";

const ShoppingCartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="shopping-cart-item">
    <img src={imageUrl} alt="cart-item" />
    <div className="shopping-cart-item__details">
      <span className="shopping-cart-item__details-name">{name}</span>
      <span className="shopping-cart-item__details-price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default ShoppingCartItem;
