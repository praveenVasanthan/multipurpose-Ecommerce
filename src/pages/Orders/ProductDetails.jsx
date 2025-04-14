import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShippingFast,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="flat-title-tab-product-des">
      <div className="flat-title-tab">
        <ul className="menu-tab-line">
          <li className="nav-tab-item">
            <p className=" product-title fw-semibold">Product information</p>
          </li>
        </ul>
      </div>
      <div className="tab-main tab-info">
        <ul className="list-feature" style={{ width: "100%" }}>
          <li className="d-flex justify-content-between align-items-start">
            <div style={{ marginBottom: "10px" }}>
              <a
                href="product-detail.html"
                className="name-product body-md-2 fw-semibold text-secondary link"
                style={{ fontSize: "17px" }}
              >
                Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110
              </a>

              <p className="body-text-2">Quantity: 1</p>

              <p className="body-text-2">Amount: 180</p>
            </div>
            <a
              href="shop-default.html"
              className="image img-style-1 overflow-visible"
              style={{ width: "120px", marginBottom: "10px" }}
            >
              <img
                src="/images/collection/cls-category-1.jpg"
                data-src="/images/collection/cls-category-1.jpg"
              />
            </a>
          </li>
          <li className="d-flex justify-content-between flex-column align-items-end">
            {/* -------------------------------------------- */}

            <div
              className="checkout-status tf-sp-2 pt-0 w-100"
              style={{ paddingBottom: "20px" }}
            >
              <div className="checkout-wrap">
                <span className="checkout-bar next" /> {/* first, next, end */}
                <div className="step-payment ">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <p className="text-primary body-text-3">Confirmed</p>
                  <p className="body-md-2 text-main-3 fw-normal">Apr 7, 2025</p>
                </div>
                <div className="step-payment">
                  <span className="icon">
                    <FontAwesomeIcon icon={faShippingFast} />
                  </span>
                  <p className="text-primary body-text-3">On the Way</p>
                  <p className="body-md-2 text-main-3 fw-normal">
                    Apr 10, 2025
                  </p>
                </div>
                <div className="step-payment">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBoxOpen} />
                  </span>
                  <p className="body-text-3">Delivered</p>
                </div>
              </div>
            </div>

            {/* ---------------------------------- */}

            <div className="product-box-btn">
              <Link to={`/products/1`} className="tf-btn text-white">
                Rate this product
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
