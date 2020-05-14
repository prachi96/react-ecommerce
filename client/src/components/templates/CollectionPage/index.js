import React from "react";
import { connect } from "react-redux";
import { selectCollectionItems } from "../../../redux/shop/shop.selectors";
import CollectionItem from "../../molecules/CollectionItem";
import "./CollectionPage.scss";

const CollectionPage = ({ collectionDetails }) => {
  if (!collectionDetails) {
    return null;
  }
  const { title, items } = collectionDetails;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="collection-items">
        {items.length &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionDetails: selectCollectionItems(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
