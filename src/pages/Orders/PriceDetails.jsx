import React from "react";
import APP_CONSTANTS from "../../config/AppConstants";

const PriceDetails = () => {
  return (
    <>
      <div className="flat-title-tab-product-des" style={{ marginTop: "50px" }}>
        <div className="flat-title-tab">
          <ul className="menu-tab-line">
            <li className="nav-tab-item">
              <p className=" product-title fw-semibold">Price details</p>
            </li>
          </ul>
        </div>
        <div className="tab-main tab-info">
          <ul className="sec-total-price">
            <li>
              <span className="body-text-3">Product price</span>
              <span className="body-text-3">{APP_CONSTANTS.currency}180</span>
            </li>
            <li>
              <span className="body-text-3">Delivary charge</span>
              <span className="body-text-3">{APP_CONSTANTS.currency}40</span>
            </li>
            <li>
              <span className="body-text-3">Handiling fee</span>
              <span className="body-text-3">{APP_CONSTANTS.currency}20</span>
            </li>
            <li>
              <span className="body-md-2 fw-semibold">Total</span>
              <span className="body-md-2 fw-semibold text-primary">
                {APP_CONSTANTS.currency}240
              </span>
            </li>
            <li>
              <span className="body-text-3 fw-semibold">Payment Method</span>
              <span className="body-text-3">Cash on delivary</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
