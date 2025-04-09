import React, { useState } from "react";
import MainCardSection from "./MainCardSection";
import TabContent from "./TabSection";

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

  return (
    <>
      <MainCardSection product={product} />
      <TabContent />
    </>
  );
};

export default index;
