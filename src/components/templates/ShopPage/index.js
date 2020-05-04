import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";
import CollectionOverviewContainer from "../../molecules/CollectionOverview/CollectionOverview.container";
import { fetchCollections } from "../../../redux/shop/shop.actions";
import "./ShopPage.scss";
import { bindActionCreators } from "redux";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: bindActionCreators(fetchCollections, dispatch),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// fetch(
//   "https://firestore.googleapis.com/v1/projects/react-ecommerce-db-e7436/databases/(default)/documents/collections"
// ).then((response) => response.toJSON());

/* Using observable pattern */
// collectionRef.onSnapshot((snapshot) => {
//   const collectionItems = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionItems);
//   this.setState({ isLoading: false });
// });
