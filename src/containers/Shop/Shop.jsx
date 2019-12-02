import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/CollectionOverview/Collection/Collection";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../shared/utils/firebase-utils";

const Shop = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, [updateCollections]);

  return (
    <div>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collections =>
      dispatch(actions.updateCollections(collections))
  };
};

export default connect(null, mapDispatchToProps)(Shop);
