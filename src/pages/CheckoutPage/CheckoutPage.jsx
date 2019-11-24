import React from "react";
import "./CheckoutPage.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getCartItemsSelector,
  getTotalSumSelector
} from "../../store/selectors/cartSelector";
import CheckoutItem from "../../components/ShoppingCart/Checkout/CheckoutItem";

const CheckoutPage = ({ cartItems, totalSum }) => {
  return (
    <div className="CheckoutPage">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL: ${totalSum}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector,
  totalSum: getTotalSumSelector
});

export default connect(mapStateToProps)(CheckoutPage);
