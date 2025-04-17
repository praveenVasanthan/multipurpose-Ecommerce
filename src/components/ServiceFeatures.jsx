import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  const [iconData] = useState([
    {
      iconClass: "icon-delivery",
      title: "Free Delivery",
      description: "Velit ullamco elit et aliqua magna",
    },
    {
      iconClass: "icon-check-2",
      title: "Support 24/7",
      description: "Velit ullamco elit et aliqua magna",
    },
    {
      iconClass: "icon-money-bag",
      title: "Payment",
      description: "Velit ullamco elit et aliqua magna",
    },
    {
      iconClass: "icon-shield",
      title: "Reliable",
      description: "Velit ullamco elit et aliqua magna",
    },
    {
      iconClass: "icon-accept",
      title: "Guarantee",
      description: "Velit ullamco elit et aliqua magna",
    },
  ]);

  return (
    <div className="tf-sp-2">
      <div className="container py-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true, el: ".sw-pagination-iconbox" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="tf-sw-iconbox position-relative"
        >
          {iconData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="tf-icon-box text-center">
                <div className="icon-box mb-2">
                  <i className={`icon ${item.iconClass} text-black`} />
                </div>
                <div className="content">
                  <p className="body-text fw-semibold">{item.title}</p>
                  <p className="body-text-3 text-cl-1">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-iconbox sw-dot-default justify-content-center"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default index;
