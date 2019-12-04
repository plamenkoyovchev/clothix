import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { ShopContainer } from "./Shop.styles";

import withSpinner from "../../hoc/withSpinner/withSpinner";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/CollectionOverview/Collection/Collection";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../shared/utils/firebase-utils";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

const Shop = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  });

  return (
    <ShopContainer>
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:category`}
        render={props => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </ShopContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collections =>
      dispatch(actions.updateCollections(collections))
  };
};

export default connect(null, mapDispatchToProps)(Shop);
