// components/CategorySlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  const [categories] = useState([
    {
      id: 1,
      title: "deals",
      subtitle: "catch big",
      description: "on the headphones",
      sale: "20%",
      image: "images/collection/cls-category-1.jpg",
      delay: "0s",
    },
    {
      id: 2,
      title: "deals",
      subtitle: "catch big",
      description: "on the cameras",
      sale: "15%",
      image: "images/collection/cls-category-2.jpg",
      delay: "0.1s",
    },
    {
      id: 3,
      title: "deals",
      subtitle: "catch big",
      description: "on the phones",
      sale: "28%",
      image: "images/collection/cls-category-3.jpg",
      delay: "0.2s",
    },
    {
      id: 4,
      title: "deals",
      subtitle: "catch big",
      description: "on the watchs",
      sale: "22%",
      image: "images/collection/cls-category-4.jpg",
      delay: "0.3s",
    },
  ]);

  return (
    <div className="container py-5">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".sw-pagination-categories", }}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="tf-sw-categories position-relative"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="cls-category style-abs hover-img"
              data-wow-delay={item.delay}
            >
              <a href="product-detail.html" className="img-box img-style d-block">
                <img src={item.image} alt={item.title} className="lazyload" />
              </a>
              <div className="content">
                <div className="box-title font-2 text-white text-uppercase">
                  <p className="product-title-2">{item.subtitle}</p>
                  <p className="main-title-2 fw-bold">{item.title}</p>
                  <p className="product-title-2">{item.description}</p>
                </div>
                <a href="product-detail.html" className="tf-btn-icon style-white">
                  <i className="icon-circle-chevron-right" />
                  <span className="font-2">Shop now</span>
                </a>
              </div>
              <div className="box-sale-wrap">
                <p className="small-text">Sale</p>
                <p className="title-sidebar-2">{item.sale}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dot-default sw-pagination-categories justify-content-center"></div>
      </Swiper>
    </div>
  );
};

export default index;
