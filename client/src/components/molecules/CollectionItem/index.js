import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./CollectionItem.scss";
import CustomButton from "../../atoms/CustomButton";
import { addItem } from "../../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} isInverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: bindActionCreators(addItem, dispatch),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
