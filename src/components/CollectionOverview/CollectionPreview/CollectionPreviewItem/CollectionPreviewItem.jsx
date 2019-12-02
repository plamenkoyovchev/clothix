import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import "./CollectionPreviewItem.scss";
import {
  CollectionPreviewItemContainer,
  PreviewImage,
  CollectionPreviewItemFooter,
  CollectionPreviewItemFooterName,
  CollectionPreviewItemFooterPrice,
  AddToCartButton
} from "./CollectionPreviewItem.styles";

const CollectionPreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionPreviewItemContainer>
      <PreviewImage className="image" imageUrl={imageUrl} />
      <CollectionPreviewItemFooter>
        <CollectionPreviewItemFooterName>
          {name}
        </CollectionPreviewItemFooterName>
        <CollectionPreviewItemFooterPrice>
          $ {price}
        </CollectionPreviewItemFooterPrice>
      </CollectionPreviewItemFooter>
      <AddToCartButton clicked={() => addItem(item)} inverted>
        ADD TO CART
      </AddToCartButton>
    </CollectionPreviewItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionPreviewItem);
