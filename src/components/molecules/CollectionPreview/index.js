import React from "react";
import CollectionItem from "../CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
    <div className="collection-preview__items">
      {items &&
        items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
    </div>
  </div>
);

export default CollectionPreview;
