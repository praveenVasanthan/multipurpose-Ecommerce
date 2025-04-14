import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const featuredSectionData = [
  {
    mainProduct: [
      {
        backgroundImage: "/images/banner/banner-13.jpg",
        image: "/images/item/laptop-2.png",
        price: "$450",
        subtitle: "Let power flow through you",
        name: "Dell G5 Gaming Laptop",
        link: "/",
        otherProducts: [
          {
            id: 1,
            category: "Headphone",
            name: "Apple AirPods Max – Premium Over-Ear Wireless Headphones (Green)",
            image: "/images/product/product-83.jpg",
            newPrice: "$51.500",
            oldPrice: "$64.990",
            link: "/products",
          },
          {
            id: 2,
            category: "Smart TVs",
            name: 'Amazon Fire TV Omni (65") – 4K UHD Smart TV with Hands-Free Alexa Control',
            image: "/images/product/product-12.jpg",
            newPrice: "$68.499",
            oldPrice: "$85.999",
            link: "/products:id",
          },
        ],
      },
      {
        backgroundImage: "/images/banner/banner-6.jpg",
        image: "/images/item/headphone.png",
        price: "$680",
        subtitle: "Feel The Music",
        name: "HeadSet & Head Phone",
        link: "/",
        otherProducts: [
          {
            id: 3,
            category: "Camera",
            name: "Nikon D5600 – DSLR Camera with 18-55mm VR Lens Kit",
            image: "/images/product/product-13.jpg",
            newPrice: "$45.499",
            oldPrice: "$59.990",
            link: "/products",
          },
          {
            id: 4,
            category: "Smartphones",
            name: "Samsung Galaxy S22 Ultra 5G – 256GB",
            image: "/images/product/product-14.jpg",
            newPrice: "$74.499",
            oldPrice: "$89.999",
            link: "/products:id",
          },
        ],
      },
    ],
  },
];

const index = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true, el: ".sw-pagination-banner" }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="my-featured-swiper position-relative"
      >
        {featuredSectionData[0].mainProduct.map((mains, idx) => (
          <SwiperSlide key={idx}>
            <section
              className="has-bg-img py-5"
              style={{
                backgroundImage: `url(${mains.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="banner-product style-2 flex-xl-nowrap p-xl-0">
                  <div className="product-wrap hover-img flex-md-nowrap w-100">
                    <Link
                      to={mains.link}
                      className="d-inline-flex img-style"
                      style={{ maxWidth: 618 }}
                    >
                      <img
                        src={mains.image}
                        alt={mains.name}
                        style={{
                          objectFit: "contain",
                          maxHeight: "320px",
                          width: "100%",
                        }}
                      />
                    </Link>
                    <div className="info-product">
                      <div className="box-price">
                        <p className="start">Starting</p>
                        <h1 className="price text-secondary">{mains.price}</h1>
                      </div>
                      <div className="box-title">
                        <p className="sub-tag title-sidebar">
                          {mains.subtitle}
                        </p>
                        <h2 className="name">
                          <Link
                            to={mains.link}
                            className="link font-5 fw-normal"
                          >
                            {mains.name}
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="other-item flex-xl-column flex-md-row">
                    {mains.otherProducts.map((product) => (
                      <div
                        className="card-product style-row row-small-2 bg-white radius-8"
                        key={product.id}
                      >
                        <div className="card-product-wrapper">
                          <Link to={product.link} className="product-img">
                            <img
                              className="img"
                              src={product.image}
                              alt={product.name}
                            />
                          </Link>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title">
                            <div className="bg-white relative z-5">
                              <p className="caption text-main-2 font-2">
                                {product.category}
                              </p>
                              <Link
                                to={product.link}
                                className="name-product body-md-2 fw-semibold text-secondary link"
                              >
                                {product.name}
                              </Link>
                            </div>
                            <div className="group-btn">
                              <p className="price-wrap fw-medium">
                                <span className="new-price price-text fw-medium">
                                  {product.newPrice}
                                </span>
                                <span className="old-price body-md-2 text-main-2">
                                  {product.oldPrice}
                                </span>
                              </p>
                              <ul className="list-product-btn flex-row">
                                <li>
                                  <Link
                                    to="/cart"
                                    className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-cart2" />
                                    <span className="tooltip">Add to Cart</span>
                                  </Link>
                                </li>
                                <li className="wishlist">
                                  <Link
                                    to="/wishlist"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-heart2" />
                                    <span className="tooltip">
                                      Add to Wishlist
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/products:id"
                                    className="box-icon quickview btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-view" />
                                    <span className="tooltip">Quick View</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-flex d-lg-none sw-dot-default sw-pagination-banner justify-content-center" />
    </section>
  );
};

export default index;
