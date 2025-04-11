import APP_CONSTANTS from "../../config/AppConstants";

const index = () => {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="tf-checkout-wrap flex-lg-nowrap">
          <div className="page-checkout">
            <div className="wrap">
              <h5 className="title has-account">
                <span className="fw-semibold">Contact</span>
                <span className="body-text-3">
                  Have an account?{" "}
                  <a
                    href="#register"
                    data-bs-toggle="modal"
                    className="body-text-3 text-secondary link"
                  >
                    Login
                  </a>
                </span>
              </h5>
              <form action="#" className="form-checkout-contact">
                <label className="body-md-2 fw-semibold">Email or Phone</label>
                <input
                  className="def"
                  type="text"
                  placeholder="Your contact"
                  required
                />
                <p className="caption text-main-2 font-2">
                  Order information will be sent to your email
                </p>
              </form>
            </div>
            <div className="wrap">
              <h5 className="title fw-semibold">Delivery</h5>
              <form action="#" className="def">
                <fieldset>
                  <label>Country/Region</label>
                  <div className="tf-select">
                    <select>
                      <option selected>Select your Country/Region</option>
                      <option>American</option>
                    </select>
                  </div>
                </fieldset>
                <div className="cols">
                  <fieldset>
                    <label>First name</label>
                    <input type="text" placeholder="e.g. Jonn" required />
                  </fieldset>
                  <fieldset>
                    <label>Last name</label>
                    <input type="text" placeholder="e.g. Doe" required />
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset>
                    <label>City</label>
                    <input type="text" placeholder="e.g. New York" required />
                  </fieldset>
                  <fieldset>
                    <label>State</label>
                    <div className="tf-select">
                      <select>
                        <option selected>Select</option>
                        <option>Alabam</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Georgia</option>
                        <option>Washington</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset>
                    <label>ZIP code</label>
                    <input type="text" placeholder="e.g. 83254" required />
                  </fieldset>
                </div>
                <fieldset>
                  <label>Address</label>
                  <input
                    type="email"
                    placeholder="Your detailed address"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label>Order note</label>
                  <textarea
                    placeholder="Note on your order"
                    defaultValue={""}
                  />
                </fieldset>
              </form>
            </div>
            <div className="wrap">
              <h5 className="title">Payment</h5>
              <form action="#" className="form-payment">
                <div className="payment-box" id="payment-box">
                  <div className="payment-item payment-choose-card active">
                    <label
                      htmlFor="credit-card-method"
                      className="payment-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#credit-card-payment"
                      aria-controls="credit-card-payment"
                      aria-expanded="true"
                    >
                      <span className="body-md-2 fw-semibold title">
                        Select payment method
                      </span>
                      <input
                        type="radio"
                        name="payment-method"
                        className="d-none tf-check-rounded"
                        id="credit-card-method"
                        defaultChecked
                      />
                      <p className="select-payment">Mastercard</p>
                    </label>
                    <div
                      id="credit-card-payment"
                      className="collapse show"
                      data-bs-parent="#payment-box"
                    >
                      <div className="payment-body">
                        <fieldset>
                          <label>Credit Card number</label>
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
                  <a href="order-details.html" className="tf-btn w-100">
                    <span className="text-white">Place order</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="flat-sidebar-checkout">
            <div className="sidebar-checkout-content">
              <h5
                className="fw-semibold infor-heading"
                style={{
                  borderBottom: "1px solid var(--gray-5)",
                  paddingBottom: "20px",
                }}
              >
                Shipping details
              </h5>
              <div className="box-infor">
                <p className="title-sidebar">Themesflat</p>
                <p className="title-sidebar">onsus@support.com</p>
                <p className="title-sidebar">Company</p>
                <p className="title-sidebar">8500 Lorem Street</p>
                <p className="title-sidebar">Punchbowl</p>
                <p className="title-sidebar">Chicago</p>
                <p className="title-sidebar">55030</p>
                <p className="title-sidebar">+8(800) 123 4567</p>
              </div>
            </div>
            <div
              className="sidebar-checkout-content"
              style={{ marginTop: "50px" }}
            >
              <h5 className="fw-semibold infor-heading">Price details</h5>
              <ul className="sec-total-price">
                <li>
                  <span className="body-text-3">Product price</span>
                  <span className="body-text-3">
                    {APP_CONSTANTS.currency}180
                  </span>
                </li>
                <li>
                  <span className="body-text-3">Delivary charge</span>
                  <span className="body-text-3">
                    {APP_CONSTANTS.currency}40
                  </span>
                </li>
                <li>
                  <span className="body-text-3">Handiling fee</span>
                  <span className="body-text-3">
                    {APP_CONSTANTS.currency}20
                  </span>
                </li>
                <li>
                  <span className="body-md-2 fw-semibold">Total</span>
                  <span className="body-md-2 fw-semibold text-primary">
                    {APP_CONSTANTS.currency}240
                  </span>
                </li>
                <li>
                  <span className="body-text-3 fw-semibold">
                    Payment Method
                  </span>
                  <span className="body-text-3">Cash on delivary</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
