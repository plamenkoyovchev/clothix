import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/CollectionOverview/Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={Collection} />
    </div>
  );
};

export default Shop;
