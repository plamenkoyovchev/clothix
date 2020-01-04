import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { ShopContainer } from "./Shop.styles";

import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionContainer from "../../components/CollectionOverview/Collection/CollectionContainer";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

const Shop = ({ match, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync();
  }, [fetchCollectionsAsync]);

  return (
    <ErrorBoundary>
      <ShopContainer>
        <Route
          exact
          path={match.path}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:category`}
          component={CollectionContainer}
        />
      </ShopContainer>
    </ErrorBoundary>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(actions.fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(Shop);
