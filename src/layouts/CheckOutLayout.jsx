import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { CardCarosel, ServiceFeatures } from "../components";

const CheckOutLayout = () => {
  const { pathname } = useLocation();
  const [recentlyViewed, setRecentlyViewed] = useState({
    id: 21,
    title: "Recent Viewed",
    values: [
      {
        id: 1,
        title: "Samsung Galaxy Note 10+, 256GB, Aura Black - Fully Unlocked",
        price: "80.00",
        rating: 3,
        reviews: 74,
        imgMain: "/images/product/product-8.jpg",
      },
      {
        id: 2,
        title: "Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110",
        price: "80.00",
        rating: 4,
        reviews: 11,
        imgMain: "/images/product/product-9.jpg",
      },
      {
        id: 3,
        title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
        price: "80.00",
        rating: 3,
        reviews: 148,
        imgMain: "/images/product/product-34.jpg",
      },
      {
        id: 4,
        title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
        price: "80.00",
        rating: 5,
        reviews: 18,
        imgMain: "/images/product/product-11.jpg",
      },
      {
        id: 5,
        title: "CORSAIR TC60 Fabric Gaming Chair - Relaxed Fit - Grey",
        price: "80.00",
        rating: 3,
        reviews: 168,
        imgMain: "/images/product/product-137.jpg",
      },
      {
        id: 6,
        title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
        price: "80.00",
        rating: 3,
        reviews: 148,
        imgMain: "/images/product/product-34.jpg",
      },
      {
        id: 7,
        title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
        price: "80.00",
        rating: 5,
        reviews: 18,
        imgMain: "/images/product/product-11.jpg",
      },
      {
        id: 8,
        title: "CORSAIR TC60 Fabric Gaming Chair - Relaxed Fit - Grey",
        price: "80.00",
        rating: 3,
        reviews: 168,
        imgMain: "/images/product/product-137.jpg",
      },
    ],
  });

  const stepClass =
    {
      "/cart": "first",
      "/cart/checkout": "next",
      "/cart/confirmation": "end",
    }[pathname] || "";

  return (
    <>
      <div className="s-shoping-cart tf-sp-2">
        <div className="container">
          <div className="checkout-status tf-sp-2 pt-0">
            <div className="checkout-wrap">
              <span className={`checkout-bar ${stepClass}`} />
              <div className="step-payment">
                <span className="icon">
                  <i className="icon-shop-cart-1" />
                </span>
                <Link
                  to="/cart"
                  className={`body-text-3 ${
                    pathname === "/cart" ? "text-secondary" : "link-secondary"
                  }`}
                >
                  Shopping Cart
                </Link>
              </div>

              <div className="step-payment">
                <span className="icon">
                  <i className="icon-shop-cart-2" />
                </span>
                <Link
                  to="/cart/checkout"
                  className={`body-text-3 ${
                    pathname === "/cart/checkout"
                      ? "text-secondary"
                      : "link-secondary"
                  }`}
                >
                  Shopping &amp; Checkout
                </Link>
              </div>

              <div className="step-payment">
                <span className="icon">
                  <i className="icon-shop-cart-3" />
                </span>
                <Link
                  to="/cart/confirmation"
                  className={`body-text-3 ${
                    pathname === "/cart/confirmation"
                      ? "text-secondary"
                      : "link-secondary"
                  }`}
                >
                  Confirmation
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <CardCarosel caroselData={recentlyViewed} />
      <ServiceFeatures />
    </>
  );
};

export default CheckOutLayout;
