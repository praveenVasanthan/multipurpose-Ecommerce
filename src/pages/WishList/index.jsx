import React, { useState } from "react";
import Table from "./Table";

const index = () => {
  const [wishlistData, setWishlistData] = useState([
    {
      image: "images/product/product-165.jpg",
      title: "Samsung Galaxy S10+, 128GB, Ceramic Black - Unlocked",
      newPrice: "80.000",
      stock: "In Stock",
    },
    {
      image: "images/product/product-43.jpg",
      title: "TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model",
      newPrice: "80.000",
      stock: "In Stock",
    },
    {
      image: "images/product/product-137.jpg",
      title: "NEW Microsoft Surface Mobile Mouse - Ice Blue",
      newPrice: "80.000",
      stock: "In Stock",
    },
    {
      image: "images/product/product-86.jpg",
      title: "YSSOA FNGAMECHAIR01 Gaming Office High Back Computer",
      newPrice: "80.000",
      stock: "In Stock",
    },
  ]);

  return (
    <div className="tf-sp-2">
      <div className="container">
        <div className="tf-wishlist">
          <Table wishlistData={wishlistData} />
        </div>
      </div>
    </div>
  );
};

export default index;
