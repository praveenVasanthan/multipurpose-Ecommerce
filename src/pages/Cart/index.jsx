import React, { useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { CardCarosel, ServiceFeatures } from "../../components";

const index = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: "/images/product/shop-cart-1.jpg",
      title:
        "5Pcs/Lot Trolling Bait Minnow Fishing Lure 8.37g Bass Crankbait Tackle Wobbler",
      price: 22.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "/images/product/shop-cart-2.jpg",
      title:
        "Intel Core i9-12900K Unlocked Desktop Processor - 16 Cores And 24 Threads",
      price: 549.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/images/product/shop-cart-3.jpg",
      title:
        'Xiaomi Redmi Note 9 Pro 6/128GB GLOBAL VERSION 6.67" Snapdragon 720G By FedEx',
      price: 279.71,
      quantity: 1,
    },
    {
      id: 4,
      image: "/images/product/shop-cart-4.jpg",
      title:
        'Lenovo G27Q 27" QHD (2560 x 1440) IPS 165Hz 1ms FreeSync Premium Gaming Monitor',
      price: 199.99,
      quantity: 1,
    },
  ]);

  return (
    <>
      <Table cartData={cartData} />

      <div className="box-btn">
        <Link to={"/products"} className="tf-btn btn-gray">
          <span className="text-white">Continue shopping</span>
        </Link>
        <Link to={"/cart/checkout"} className="tf-btn">
          <span className="text-white">Proceed to checkout</span>
        </Link>
      </div>
    </>
  );
};

export default index;
