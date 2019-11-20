import React from "react";

import "./Cart.scss";

import Button from "../../UI/Button/Button";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="cart-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default Cart;
