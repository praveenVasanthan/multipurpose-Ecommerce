import React, { useState } from "react";
import MainCardSection from "./MainCard";
import TabContent from "./TabSection";
import { CardCarosel } from "../../components";

const index = () => {
  const [product, setProduct] = useState({
    title:
      "Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle, Cordless 360° Base",
    rating: 4,
    reviews: 165,
    sold_items: 234,
    price: 18.99,
    short_details: [
      { title: "Brand", value: "Elite Gourmet" },
      { title: "Capacity", value: "1 Liters" },
      { title: "Material", value: "Glass" },
      { title: "Wattage", value: "1100 watts" },
    ],
    about: [
      "Here’s the quickest way to enjoy your delicious hot tea every single day.",
      "100% BPA - Free premium design meets excellent",
      "No more messy accidents or spills",
      "So easy & convenient that everyone can use it",
      "This powerful 900-1100-Watt kettle has convenient capacity markings on the body lets you accurately",
      "1 year limited warranty and us-based customer support team lets you buy with confidence.",
    ],
    details: [
      "Return policy: Eligible for Return, Refund or Replacement within 30 days of receipt",
      "Support: Free Amazon tech support included",
    ],
  });

  const [similarItems, setSimilarItems] = useState({
    id: 4,
    title: "Discover Similar Items",
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
      <MainCardSection product={product} />
      <TabContent />
      <CardCarosel caroselData={similarItems} />
    </>
  );
};

export default index;
