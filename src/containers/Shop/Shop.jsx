import React from "react";
import "./Shop.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";

const Shop = ({ match }) => {
  return (
    <div className="Shop">
      <Route exact path={match.path} component={CollectionOverview} />
    </div>
  );
};

export default Shop;
