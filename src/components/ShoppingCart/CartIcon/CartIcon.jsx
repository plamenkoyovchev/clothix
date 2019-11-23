import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingBag } from "../../../assets/images/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = ({ clicked, quantity }) => {
  return (
    <div className="cart-icon" onClick={clicked}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quantity: state.cart.cartItems.length
  };
};

export default connect(mapStateToProps)(CartIcon);
