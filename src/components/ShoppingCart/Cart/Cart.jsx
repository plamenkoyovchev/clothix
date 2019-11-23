import React from "react";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps)(Cart);
