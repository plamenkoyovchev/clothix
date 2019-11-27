import React from "react";
import { connect } from "react-redux";

import "./CartIcon.scss";
import {
  CartIconContainer,
  ShoppingBagIcon,
  ItemCount
} from "./CartIcon.styles";

const CartIcon = ({ clicked, quantity }) => {
  return (
    <CartIconContainer onClick={clicked}>
      <ShoppingBagIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = state => {
  return {
    quantity: state.cart.cartItems.length
  };
};

export default connect(mapStateToProps)(CartIcon);
