import React from "react";

import "./CheckoutPage.scss";

const CheckoutPage = () => {
  return (
    <div className="CheckoutPage">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
