import React from "react";
import "./Collection.scss";

import { connect } from "react-redux";
import { createStructuredSelection } from "reselect";
import { getShopCollectionOverviewByCategory } from "../../../store/selectors/shopSelector.js";
import CollectionPreviewItem from "../CollectionPreview/CollectionPreviewItem/CollectionPreviewItem";

const Collection = ({ title, items }) => {
  return (
    <div className="Collection">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <CollectionPreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) =>
  createStructuredSelection({
    collection: getShopCollectionOverviewByCategory(props.match.params.category)
  });

export default connect(mapStateToProps)(Collection);
