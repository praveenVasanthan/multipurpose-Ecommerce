import React, { useState } from "react";
import { Banner, ServiceFeatures, CardCarosel, OfferCards } from "@components/index.js";

const index = () => {
  const [caroselData, setCaroselData] = useState({
    title: "Recently Viewed",
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
  },
  // {
  //   title: "",
  //   values: [
  //     {
  //       id: 1,
  //       title: "deals",
  //       subtitle: "catch big",
  //       description: "on the headphones",
  //       sale: "20%",
  //       image: "images/collection/cls-category-1.jpg",
  //       delay: "0s",
  //     },
  //     {
  //       id: 2,
  //       title: "deals",
  //       subtitle: "catch big",
  //       description: "on the cameras",
  //       sale: "15%",
  //       image: "images/collection/cls-category-2.jpg",
  //       delay: "0.1s",
  //     },
  //     {
  //       id: 3,
  //       title: "deals",
  //       subtitle: "catch big",
  //       description: "on the phones",
  //       sale: "28%",
  //       image: "images/collection/cls-category-3.jpg",
  //       delay: "0.2s",
  //     },
  //     {
  //       id: 4,
  //       title: "deals",
  //       subtitle: "catch big",
  //       description: "on the watchs",
  //       sale: "22%",
  //       image: "images/collection/cls-category-4.jpg",
  //       delay: "0.3s",
  //     },
  //   ]
  // }
);
  return (
    <>
      <Banner />
      <ServiceFeatures />
      <CardCarosel caroselData={caroselData} />
      <OfferCards />
    </>
  );
};

export default index;
