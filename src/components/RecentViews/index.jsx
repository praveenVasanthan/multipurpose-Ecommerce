import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const index = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Samsung Galaxy Note 10+, 256GB, Aura Black - Fully Unlocked",
      price: "80.00",
      rating: 3,
      reviews: 74,
      imgMain: "images/product/product-8.jpg",
    },
    {
      id: 2,
      title: "Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110",
      price: "80.00",
      rating: 4,
      reviews: 11,
      imgMain: "images/product/product-9.jpg",
    },
    {
      id: 3,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 3,
      reviews: 148,
      imgMain: "images/product/product-34.jpg",
    },
    {
      id: 4,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 5,
      reviews: 18,
      imgMain: "images/product/product-11.jpg",
    },
    {
      id: 5,
      title: "CORSAIR TC60 Fabric Gaming Chair - Relaxed Fit - Grey",
      price: "80.00",
      rating: 3,
      reviews: 168,
      imgMain: "images/product/product-137.jpg",
    },
    {
      id: 6,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 3,
      reviews: 148,
      imgMain: "images/product/product-34.jpg",
    },
    {
      id: 7,
      title: "Garmin fenix 7, adventure smartwatch, rugged outdoor",
      price: "80.00",
      rating: 5,
      reviews: 18,
      imgMain: "images/product/product-11.jpg",
    },
    {
      id: 8,
      title: "CORSAIR TC60 Fabric Gaming Chair - Relaxed Fit - Grey",
      price: "80.00",
      rating: 3,
      reviews: 168,
      imgMain: "images/product/product-137.jpg",
    },
  ]);

  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="flat-title" data-wow-delay="0s">
          <h5 className="fw-semibold">Recently Viewed</h5>
          <div className="box-btn-slide">
            <div className="swiper-button-prev nav-swiper nav-prev-products">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={{
            nextEl: ".nav-next-products",
            prevEl: ".nav-prev-products",
          }}
          pagination={{
            el: ".sw-pagination-products",
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="tf-sw-products"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="card-product style-img-border">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="img-product"
                      src={product.imgMain}
                      alt="product"
                    />
                    <img
                      className="img-hover"
                      src={product.imgMain}
                      alt="product"
                    />
                  </a>
                  <ul className="list-product-btn top-0 end-0">
                    <li>
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="offcanvas"
                        className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                      >
                        <span className="icon icon-cart2" />
                        <span className="tooltip">Add to Cart</span>
                      </a>
                    </li>
                    <li className="wishlist">
                      <a
                        href="#"
                        className="box-icon btn-icon-action hover-tooltip tooltip-left"
                      >
                        <span className="icon icon-heart2" />
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-product-info">
                  <div className="box-title">
                    <a
                      href="product-detail.html"
                      className="name-product body-md-2 fw-semibold text-secondary link"
                    >
                      {product.title}
                    </a>
                    <p className="price-wrap fw-medium">₹{product.price}</p>
                  </div>
                  <div className="box-infor-detail">
                    <div className="star-review flex-wrap">
                      <ul className="list-star">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <i
                              className={
                                i < product.rating
                                  ? "icon-star"
                                  : "icon-star text-main-4"
                              }
                            />
                          </li>
                        ))}
                      </ul>
                      <p className="caption text-main-2">({product.reviews})</p>
                    </div>
                  </div>
                </div>

                <div className="card-product-btn">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="offcanvas"
                    className="tf-btn btn-line w-100"
                  >
                    <span>Add to cart</span>
                    <i className="icon-cart-2" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination for mobile */}
        <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center" />
      </div>
    </section>
  );
};

export default index;
