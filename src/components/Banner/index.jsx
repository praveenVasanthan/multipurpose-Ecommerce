import React from "react";
import { Link } from "react-router-dom";

const featuredSectionData = {
  backgroundImage: "images/banner/banner-13.jpg",
  mainProduct: {
    image: "images/item/laptop-2.png",
    price: "$450",
    subtitle: "Let power flow through you",
    name: "Dell G5 Gaming Laptop",
    link: "/",
  },
  otherProducts: [
    {
      id: 1,
      category: "Headphone",
      name: "Apple AirPods Max – Premium Over-Ear Wireless Headphones (Green)",
      image: "images/product/product-83.jpg",
      newPrice: "$51.500",
      oldPrice: "$64.990",
      link: "/products",
    },
    {
      id: 2,
      category: "Smart TVs",
      name: 'Amazon Fire TV Omni (65") – 4K UHD Smart TV with Hands-Free Alexa Control',
      image: "images/product/product-12.jpg",
      newPrice: "$68.499",
      oldPrice: "$85.999",
      link: "/products:id",
    },
  ],
};

const index = () => {
  const { backgroundImage, mainProduct, otherProducts } = featuredSectionData;

  return (
    <section className="has-bg-img" data-bg-img={backgroundImage}>
      <div className="container">
        <div className="banner-product style-2 flex-xl-nowrap p-xl-0">
          <div className="product-wrap hover-img flex-md-nowrap">
            <Link
              to={mainProduct.link}
              className="d-inline-flex item-product img-style"
              style={{ maxWidth: 618 }}
            >
              <img src={mainProduct.image} alt={mainProduct.name} />
            </Link>
            <div className="info-product">
              <div className="box-price">
                <p className="start">Starting</p>
                <h1 className="price text-secondary">{mainProduct.price}</h1>
              </div>
              <div className="box-title">
                <p className="sub-tag title-sidebar">{mainProduct.subtitle}</p>
                <h2 className="name">
                  <Link to={mainProduct.link} className="link font-5 fw-normal">
                    {mainProduct.name}
                  </Link>
                </h2>
              </div>
            </div>
          </div>

          <div className="other-item flex-xl-column flex-md-row">
            {otherProducts.map((product, index) => (
              <div
                className={`card-product style-row row-small-2 bg-white radius-8 ${
                  index === 1 ? "d-none d-sm-flex" : ""
                }`}
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
                            // data-bs-toggle="offcanvas"
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
                            <span className="tooltip">Add to Wishlist</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products:id"
                            // data-bs-toggle="modal"
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
  );
};

export default index;
