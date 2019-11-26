import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopCollectionsForPreview } from "../../store/selectors/shopSelector.js";

import { CollectionOverviewContainer } from "./CollectionOverview.styles";
import CollectionPreview from "./CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer className="CollectionOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
