import React from "react";

import "./CollectionOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopCollectionsForPreview } from "../../store/selectors/shopSelector.js";

import CollectionPreview from "./CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="CollectionOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
