import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopCollectionOverviewByCategory } from "../../../store/selectors/shopSelector.js";

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems
} from "./Collection.styles";
import CollectionPreviewItem from "../CollectionPreview/CollectionPreviewItem/CollectionPreviewItem";

const Collection = ({ collection }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItems>
        {collection.items.map(item => (
          <CollectionPreviewItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    collection: getShopCollectionOverviewByCategory(props.match.params.category)
  });

export default connect(mapStateToProps)(Collection);
