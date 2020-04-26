import React from "react";
import { Route } from "react-router-dom";
import "./ShopPage.scss";
import CollectionOverview from "../../molecules/CollectionOverview";
import CollectionPage from "../CollectionPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
