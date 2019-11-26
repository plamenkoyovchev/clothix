import React from "react";
import "./Collection.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopCollectionOverviewByCategory } from "../../../store/selectors/shopSelector.js";

import CollectionPreviewItem from "../CollectionPreview/CollectionPreviewItem/CollectionPreviewItem";

const Collection = ({ collection }) => {
  return (
    <div className="Collection">
      <h1 className="title">{collection.title}</h1>
      <div className="items">
        {collection.items.map(item => (
          <CollectionPreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    collection: getShopCollectionOverviewByCategory(props.match.params.category)
  });

export default connect(mapStateToProps)(Collection);
