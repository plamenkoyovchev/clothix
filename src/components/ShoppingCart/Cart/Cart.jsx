import React from "react";
import { withRouter } from "react-router-dom";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCartItemsSelector } from "../../../store/selectors/cartSelector.js";

import * as actions from "../../../store/actions/index";

import Button from "../../UI/Button/Button";

const Cart = ({ cartItems, history, dispatch }) => {
  const navigateToCheckout = () => {
    history.push("/checkout");
    dispatch(actions.toggleCartVisibility());
  };

  return (
    <div className="Cart">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <h3 className="empty-cart-msg">Your cart is empty!</h3>
        )}
      </div>
      <Button clicked={navigateToCheckout}>CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector
});

export default withRouter(connect(mapStateToProps)(Cart));
