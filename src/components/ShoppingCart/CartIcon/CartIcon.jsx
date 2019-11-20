import React from "react";

import { ReactComponent as ShoppingBag } from "../../../assets/images/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
