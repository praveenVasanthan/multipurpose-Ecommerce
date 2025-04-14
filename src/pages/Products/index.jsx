import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Control from "./Control";

const index = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Samsung Galaxy Note 10+, 256GB, Aura Black - Fully Unlocked",
      price: "80.00",
      rating: 3,
      reviews: 74,
      imgMain: "images/product/product-8.jpg",
    },
    {
      id: 2,
      title: "Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110",
      price: "80.00",
      rating: 4,
      reviews: 11,
      imgMain: "images/product/product-9.jpg",
    },
    {
      id: 3,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 3,
      reviews: 148,
      imgMain: "images/product/product-34.jpg",
    },
    {
      id: 4,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 5,
      reviews: 18,
      imgMain: "images/product/product-11.jpg",
    },
    {
      id: 5,
      title: "CORSAIR TC60 Fabric Gaming Chair - Relaxed Fit - Grey",
      price: "80.00",
      rating: 3,
      reviews: 168,
      imgMain: "images/product/product-137.jpg",
    },
  ]);
  return (
    <>
      <div className="flat-content">
        <div className="container">
          <div className="tf-product-view-content wrapper-control-shop">
            <Filter />
            <div className="content-area">
              <Control />
              <div className="meta-filter-shop" style={{ display: "none" }}>
                <div id="product-count-grid" className="count-text" />
                <div id="product-count-list" className="count-text" />
                <div id="applied-filters" />
                <button
                  id="remove-all"
                  className="remove-all-filters"
                  style={{ display: "none" }}
                >
                  <span className="caption">REMOVE ALL</span>
                  <i className="icon icon-close" />
                </button>
              </div>
              <div className="gridLayout-wrapper">
                <div
                  className="tf-grid-layout lg-col-4 md-col-3 sm-col-2 flat-grid-product wrapper-shop layout-tabgrid-1"
                  id="gridLayout"
                >
                  {/* Product Cards */}
                  {products.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}

                  {/* Navigation */}
                  <ul className="wg-pagination wd-load">
                    <li>
                      <a href="#" className="link">
                        <i className="icon-arrow-left-lg" />
                      </a>
                    </li>
                    <li className="active">
                      <p className="title-normal link">1</p>
                    </li>
                    <li>
                      <a href="#" className="title-normal link">
                        2
                      </a>
                    </li>
                    <li className="d-none d-sm-flex">
                      <a href="#" className="title-normal link">
                        3
                      </a>
                    </li>
                    <li className="d-none d-sm-flex">
                      <a href="#" className="title-normal link">
                        4
                      </a>
                    </li>
                    <li>
                      <p className="title-normal">...</p>
                    </li>
                    <li>
                      <a href="#" className="title-normal link">
                        10
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="icon-arrow-right-lg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
