import React from "react";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCartItemsSelector } from "../../../store/selectors/cartSelector.js";

import Button from "../../UI/Button/Button";

const Cart = ({ cartItems }) => {
  return (
    <div className="Cart">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(({ id, ...otherProps }) => (
            <CartItem key={id} {...otherProps} />
          ))
        ) : (
          <h3 className="empty-cart-msg">Your cart is empty!</h3>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector
});

export default connect(mapStateToProps)(Cart);
