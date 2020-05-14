import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items, routeName, match, history }) => (
  <div className="collection-preview">
    <div onClick={() => history.push(`${match.path}/${routeName}`)}>
      <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
    </div>
    <div className="collection-preview__items">
      {items &&
        items
          .filter((item, index) => index < 4)
          .map((item) => <CollectionItem key={item.id} item={item} />)}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
