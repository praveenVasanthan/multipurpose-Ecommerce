import React from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const index = () => {
  return (
    <div className="tf-checkout-wrap flex-lg-nowrap">
      <div className="page-checkout">
        <AddressForm />
        <PaymentForm />
      </div>
    </div>
  );
};

export default index;
