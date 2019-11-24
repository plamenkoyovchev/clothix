import React from "react";

import "./Shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopDataSelector } from "../../store/selectors/shopSelector";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop = ({ collections }) => {
  return (
    <div className="Shop">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getShopDataSelector
});

export default connect(mapStateToProps)(Shop);
