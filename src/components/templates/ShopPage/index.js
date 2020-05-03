import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage";
import WithSpinner from "../../organisms/HOC/WithSpinner";
import CollectionOverview from "../../molecules/CollectionOverview";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../../firebase/firebase.utils";
import { updateCollections } from "../../../redux/shop/shop.actions";
import "./ShopPage.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    /* Using promises */
    collectionRef.get().then((snapshot) => {
      const collectionItems = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionItems);
      this.setState({ isLoading: false });
    });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/react-ecommerce-db-e7436/databases/(default)/documents/collections"
    // ).then((response) => response.toJSON());

    /* Using observable pattern */
    // collectionRef.onSnapshot((snapshot) => {
    //   const collectionItems = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionItems);
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: bindActionCreators(updateCollections, dispatch),
});

export default connect(null, mapDispatchToProps)(ShopPage);
