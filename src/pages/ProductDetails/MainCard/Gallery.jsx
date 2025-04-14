import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "/images/product/product-detail-1.jpg",
    "/images/product/product-detail-2.jpg",
    "/images/product/product-detail-3.jpg",
    "/images/product/product-detail-4.jpg",
    "/images/product/product-detail-5.jpg",
    "/images/product/product-detail-6.jpg",
  ];

  return (
    <div className="tf-product-media-wrap thumbs-default sticky-top">
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="tf-product-media-main"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="item"
            >
              <img
                className="tf-image-zoom"
                src={src}
                alt={`Product detail ${index + 1}`}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="tf-product-media-thumbs other-image-zoom"
        style={{ width: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <img src={src} alt={`Thumbnail ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
