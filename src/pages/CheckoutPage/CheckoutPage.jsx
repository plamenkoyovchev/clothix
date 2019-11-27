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
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector,
  totalSum: getTotalSumSelector
});

export default connect(mapStateToProps)(CheckoutPage);
