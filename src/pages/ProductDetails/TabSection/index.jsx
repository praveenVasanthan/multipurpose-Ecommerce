import React from "react";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";

const index = () => {
  return (
    <section className="tf-sp-4 ">
      <div className="container">
        <div className="flat-animate-tab flat-title-tab-product-des">
          <div className=" flat-title-tab text-center">
            <ul className="menu-tab-line" role="tablist">
              <li className="nav-tab-item" role="presentation">
                <a
                  href="#prd-des"
                  className="tab-link product-title fw-semibold active"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Description
                </a>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="#prd-infor"
                  className="tab-link product-title fw-semibold"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Product information
                </a>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="#prd-review"
                  className="tab-link product-title fw-semibold"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <DescriptionTab />
            <InformationTab />
            <ReviewsTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
