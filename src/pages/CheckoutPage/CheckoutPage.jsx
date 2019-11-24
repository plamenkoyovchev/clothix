import React from "react";
import "./CheckoutPage.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getTotalSumSelector } from "../../store/selectors/cartSelector";

const CheckoutPage = ({ totalSum }) => {
  return (
    <div className="CheckoutPage">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      <div className="total">TOTAL: ${totalSum}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalSum: getTotalSumSelector
});

export default connect(mapStateToProps)(CheckoutPage);
