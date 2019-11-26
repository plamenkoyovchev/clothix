import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import "./CollectionPreviewItem.scss";
import {
  CollectionPreviewItemContainer,
  PreviewImage,
  CollectionPreviewItemFooter,
  CollectionPreviewItemFooterName,
  CollectionPreviewItemFooterPrice
} from "./CollectionPreviewItem.styles";
import Button from "../../../UI/Button/Button";

const CollectionPreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionPreviewItemContainer>
      <PreviewImage imageUrl={imageUrl} />
      <CollectionPreviewItemFooter>
        <CollectionPreviewItemFooterName>
          {name}
        </CollectionPreviewItemFooterName>
        <CollectionPreviewItemFooterPrice>
          $ {price}
        </CollectionPreviewItemFooterPrice>
      </CollectionPreviewItemFooter>
      <Button clicked={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </CollectionPreviewItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionPreviewItem);
