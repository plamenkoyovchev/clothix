import React from "react";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
  RemoveButton,
  ItemImage
} from "./CartItem.styles";

const CartItem = ({ item, removeItem }) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImage imageUrl={imageUrl} name={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetails>
      <RemoveButton onClick={() => removeItem(id)}>&#10008;</RemoveButton>
    </CartItemContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: itemId => dispatch(actions.removeCheckoutItem(itemId))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
