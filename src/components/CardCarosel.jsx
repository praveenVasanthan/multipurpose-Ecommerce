import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import APP_CONSTANTS from "../config/AppConstants";

const index = ({ caroselData }) => {
  const nextButtonClass = `swiper-button-prev-${caroselData.id}`;
  const prevButtonClass = `swiper-button-next-${caroselData.id}`;
  const paginationClass = `swiper-pagination-${caroselData.id}`;

  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="flat-title" data-wow-delay="0s">
          <h5 className="fw-semibold">{caroselData.title}</h5>
          <div className="box-btn-slide">
            <div className={`swiper-button-next nav-swiper ${prevButtonClass}`}>
              <i className="icon-arrow-left-lg" />
            </div>
            <div className={`swiper-button-prev nav-swiper ${nextButtonClass}`}>
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={{
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
          }}
          pagination={{
            el: `.${paginationClass}`,
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
          {caroselData.values.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card-product style-img-border">
                <div className="card-product-wrapper">
                  <Link to={`/product/${product.id}`} className="product-img">
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
                  </Link>
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
                    <Link
                      to={`/product/${product.id}`}
                      className="name-product body-md-2 fw-semibold text-secondary link"
                    >
                      {product.title}
                    </Link>
                    <p className="price-wrap fw-medium">
                      {APP_CONSTANTS.currency}
                      {product.price}
                    </p>
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination for mobile */}
        <div
          className={`d-flex d-lg-none sw-dot-default ${paginationClass} justify-content-center`}
        />
      </div>
    </section>
  );
};

export default index;
