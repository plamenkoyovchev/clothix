import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_YLqV59bWIrDEdH9el6ZFT12F00hg3u0yHX"; //this is a test key!

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      panelLabel="Pay now"
      name="Clothix"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
