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
        {cartItems.map(({ id, ...otherProps }) => (
          <CartItem key={id} {...otherProps} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector
});

export default connect(mapStateToProps)(Cart);
