import React from "react";
import { withRouter } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCartItemsSelector } from "../../../store/selectors/cartSelector.js";

import * as actions from "../../../store/actions/index";

import Button from "../../UI/Button/Button";
import { CartContainer, CartItems, EmptyCartMsg } from "./Cart.styles";

const Cart = ({ cartItems, history, dispatch }) => {
  const navigateToCheckout = () => {
    history.push("/checkout");
    dispatch(actions.toggleCartVisibility());
  };

  return (
    <CartContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCartMsg>Your cart is empty!</EmptyCartMsg>
        )}
      </CartItems>
      <Button clicked={navigateToCheckout}>CHECKOUT</Button>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector
});

export default withRouter(connect(mapStateToProps)(Cart));
