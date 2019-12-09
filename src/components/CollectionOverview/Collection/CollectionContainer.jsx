import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsLoaded } from "../../../store/selectors/shopSelector";

import withSpinner from "../../../hoc/withSpinner/withSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection);

export default CollectionContainer;
