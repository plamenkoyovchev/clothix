import React from "react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  LeftArrow,
  RightArrow,
  ItemPrice,
  RemoveButton,
  ItemImage
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item, removeCheckoutItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage imageUrl={imageUrl} name={name} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <LeftArrow onClick={() => removeItem(item.id)}>&#10094;</LeftArrow>
        {quantity}
        <RightArrow onClick={() => addItem(item)}>&#10095;</RightArrow>
      </ItemQuantity>
      <ItemPrice>${price}</ItemPrice>
      <RemoveButton onClick={() => removeCheckoutItem(item.id)}>
        &#10008;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCheckoutItem: itemId => dispatch(actions.removeCheckoutItem(itemId)),
    addItem: item => dispatch(actions.addItem(item)),
    removeItem: itemId => dispatch(actions.removeItem(itemId))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
