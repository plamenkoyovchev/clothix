import React from "react";
import "./Shop.scss";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/CollectionOverview/Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="Shop">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={Collection} />
    </div>
  );
};

export default Shop;
