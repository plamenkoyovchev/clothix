import React from "react";
import "./CheckoutPage.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getCartItemsSelector,
  getTotalSumSelector
} from "../../store/selectors/cartSelector";
import CheckoutItem from "../../components/ShoppingCart/Checkout/CheckoutItem";
import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalSumDiv
} from "./CheckoutPage.styles";

import StripeCheckoutButton from "../../components/Payments/StripeCheckoutButton";

const CheckoutPage = ({ cartItems, totalSum }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalSumDiv>TOTAL: ${totalSum}</TotalSumDiv>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalSum} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector,
  totalSum: getTotalSumSelector
});

export default connect(mapStateToProps)(CheckoutPage);
