import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { ShopContainer } from "./Shop.styles";

import withSpinner from "../../hoc/withSpinner/withSpinner";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import Collection from "../../components/CollectionOverview/Collection/Collection";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsLoaded } from "../../store/selectors/shopSelector.js";

const CollectionWithSpinner = withSpinner(Collection);

const Shop = ({ match, collectionsLoaded, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync();
  }, [fetchCollectionsAsync]);

  return (
    <ShopContainer>
      <Route exact path={match.path} component={CollectionOverviewContainer} />
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
  collectionsLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(actions.fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
