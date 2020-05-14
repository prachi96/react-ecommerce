import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../organisms/HOC/WithSpinner";
import CollectionOverview from "./index";
import { selectIsCollectionLoaded } from "../../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
