import React from "react";
import { Link } from "react-router-dom";
import APP_CONSTANTS from "../../config/AppConstants";

const Card = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product-wrapper">
        <Link to={`/product/${product.id}`} className="product-img">
          <img
            className="img-product"
            src={product.imgMain}
            alt="image-product"
          />
          <img
            className="img-hover"
            src={product.imgMain}
            alt="image-product"
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
          <div>
            <Link
              to={`/product/${product.id}`}
              className="name-product body-md-2 fw-semibold text-secondary link"
            >
              {product.title}
            </Link>
          </div>
          <p className="price-wrap fw-medium">
            <span className="new-price price-text fw-medium">
              {APP_CONSTANTS.currency}
              {product.price}
            </span>
          </p>
        </div>

        <div className="box-infor-detail">
          <div className="star-review flex-wrap">
            <ul className="list-star">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <i
                    className={
                      i < product.rating ? "icon-star" : "icon-star text-main-4"
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
        <div className="box-btn">
          <a href="wishlist.html" className="tf-btn-icon style-2 type-black">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59837 5.26487C3.25014 5.61309 ..."
                stroke="-primary"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="body-text-3 fw-normal">Wishlist</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
