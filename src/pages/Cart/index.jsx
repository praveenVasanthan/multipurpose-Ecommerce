import React, { useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { CardCarosel } from "../../components";

const index = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: "images/product/shop-cart-1.jpg",
      title:
        "5Pcs/Lot Trolling Bait Minnow Fishing Lure 8.37g Bass Crankbait Tackle Wobbler",
      price: 22.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "images/product/shop-cart-2.jpg",
      title:
        "Intel Core i9-12900K Unlocked Desktop Processor - 16 Cores And 24 Threads",
      price: 549.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "images/product/shop-cart-3.jpg",
      title:
        'Xiaomi Redmi Note 9 Pro 6/128GB GLOBAL VERSION 6.67" Snapdragon 720G By FedEx',
      price: 279.71,
      quantity: 1,
    },
    {
      id: 4,
      image: "images/product/shop-cart-4.jpg",
      title:
        'Lenovo G27Q 27" QHD (2560 x 1440) IPS 165Hz 1ms FreeSync Premium Gaming Monitor',
      price: 199.99,
      quantity: 1,
    },
  ]);

  const [recentlyViewed, setRecentlyViewed] = useState({
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

  return (
    <>
      <div className="s-shoping-cart tf-sp-2">
        <div className="container">
          <div className="checkout-status tf-sp-2 pt-0">
            <div className="checkout-wrap">
              <span className="checkout-bar first" />
              <div className="step-payment ">
                <span className="icon">
                  <i className="icon-shop-cart-1" />
                </span>
                <a href="shop-cart.html" className="text-secondary body-text-3">
                  Shopping Cart
                </a>
              </div>
              <div className="step-payment">
                <span className="icon">
                  <i className="icon-shop-cart-2" />
                </span>
                <a href="checkout.html" className="link-secondary body-text-3">
                  Shopping &amp; Checkout
                </a>
              </div>
              <div className="step-payment">
                <span className="icon">
                  <i className="icon-shop-cart-3" />
                </span>
                <a
                  href="order-details.html"
                  className="link-secondary body-text-3"
                >
                  Confirmation
                </a>
              </div>
            </div>
          </div>
          <Table cartData={cartData} />

          <div className="box-btn">
            <Link to={"/products"} className="tf-btn btn-gray">
              <span className="text-white">Continue shopping</span>
            </Link>
            <a href="checkout.html" className="tf-btn">
              <span className="text-white">Proceed to checkout</span>
            </a>
          </div>
        </div>
      </div>
      <CardCarosel caroselData={recentlyViewed} />
    </>
  );
};

export default index;
