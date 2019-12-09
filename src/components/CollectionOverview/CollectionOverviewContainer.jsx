import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../../store/selectors/shopSelector.js";
import withSpinner from "../../hoc/withSpinner/withSpinner";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
