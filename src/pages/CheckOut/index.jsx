import React from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Model from "./Model";

const index = () => {
  return (
    <>
      <div className="tf-checkout-wrap flex-lg-nowrap">
        <div className="page-checkout">
          <AddressForm />
          <PaymentForm />
        </div>
      </div>
      <Model />
    </>
  );
};

export default index;
