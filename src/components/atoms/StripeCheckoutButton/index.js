import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_pMCpNnlO62lF0CGPvjVQPrdR0067B4PWtX";

  const onToken = (token) => {
    console.log("Payment successful : ", token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="React ecommerce"
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
