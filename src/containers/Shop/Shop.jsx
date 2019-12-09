import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { ShopContainer } from "./Shop.styles";

import withSpinner from "../../hoc/withSpinner/withSpinner";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/CollectionOverview/Collection/Collection";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsFetching,
  selectCollectionsLoaded
} from "../../store/selectors/shopSelector.js";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

const Shop = ({
  match,
  isFetchingCollections,
  collectionsLoaded,
  fetchCollectionsAsync
}) => {
  useEffect(() => {
    fetchCollectionsAsync();
  }, [fetchCollectionsAsync]);

  return (
    <ShopContainer>
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={isFetchingCollections}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:category`}
        render={props => (
          <CollectionWithSpinner isLoading={!collectionsLoaded} {...props} />
        )}
      />
    </ShopContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsFetching,
  collectionsLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(actions.fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
