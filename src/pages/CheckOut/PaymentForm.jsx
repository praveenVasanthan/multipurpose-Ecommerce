import React from "react";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  return (
    <div className="wrap">
      <h5 className="title">Payment</h5>
      <form action="#" className="form-payment">
        <div className="payment-box" id="payment-box">
          <div className="payment-item payment-choose-card">
            <label
              htmlFor="credit-card-method-mastercard"
              className="payment-header"
              data-bs-toggle="collapse"
              data-bs-target="#credit-card-payment-mastercard"
              aria-controls="credit-card-payment-mastercard"
              aria-expanded="true"
            >
              <span className="body-md-2 fw-semibold title">
                Credit / Debit / ATM Card
              </span>
              <input
                type="radio"
                name="payment-method"
                className="d-none tf-check-rounded"
                id="credit-card-method-mastercard"
                defaultChecked
              />
              <p className="select-payment">Mastercard</p>
            </label>
            <div
              id="credit-card-payment-mastercard"
              className="collapse"
              data-bs-parent="#payment-box"
            >
              <div className="payment-body">
                <fieldset>
                  <label>Card number</label>
                  <input
                    type="text"
                    className="number-credit-card"
                    placeholder="xxxx   xxxx   xxxx   xxxx"
                  />
                </fieldset>
                <div className="cols">
                  <fieldset>
                    <label>Expiration date</label>
                    <input type="date" />
                  </fieldset>
                  <fieldset>
                    <label>CVV</label>
                    <input type="number" placeholder="xxx" />
                  </fieldset>
                </div>
                <fieldset>
                  <label>Name on card</label>
                  <input type="text" placeholder="e.g. JOHNDOE" />
                </fieldset>
              </div>
            </div>
          </div>

          <div className="payment-item payment-choose-card">
            <label
              htmlFor="credit-card-method-upi"
              className="payment-header"
              data-bs-toggle="collapse"
              data-bs-target="#credit-card-payment-upi"
              aria-controls="credit-card-payment-upi"
              aria-expanded="false"
            >
              <span className="body-md-2 fw-semibold title">
                Pay by any UPI app
              </span>
              <input
                type="radio"
                name="payment-method"
                className="d-none tf-check-rounded"
                id="credit-card-method-upi"
              />
              <p className="select-payment">UPI</p>
            </label>

            <div
              id="credit-card-payment-upi"
              className="collapse"
              data-bs-parent="#payment-box"
            >
              <div className="payment-body">
                <fieldset>
                  <label htmlFor="upi-id">Enter your UPI ID</label>{" "}
                  <input
                    type="text"
                    id="upi-id"
                    placeholder="e.g. yourname@bank"
                  />
                </fieldset>

                <a
                  className="tf-btn btn-gray"
                  href="/products"
                  style={{ width: "200px" }}
                >
                  <span className="text-white">Pay</span>
                </a>
                <div className="text-note mt-2">
                  <small>
                    You'll receive a payment request in your UPI app to approve
                    the payment.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-item">
            <label
              htmlFor="delivery-method"
              className="payment-header radio-item collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#delivery-payment"
              aria-controls="delivery-payment"
              aria-expanded="false"
            >
              <input
                type="radio"
                name="payment-method"
                className="tf-check-rounded"
                id="delivery-method"
              />
              <span className="body-text-3">Cash on delivery</span>
            </label>
            <div
              id="delivery-payment"
              className="collapse"
              data-bs-parent="#payment-box"
            />
          </div>
        </div>
        <div className="box-btn">
          <Link to="/cart/confirmation" className="tf-btn w-100">
            <span className="text-white">Place order</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
