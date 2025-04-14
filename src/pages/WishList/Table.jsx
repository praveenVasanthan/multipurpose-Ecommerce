import React from "react";
import APP_CONSTANTS from "../../config/AppConstants";

const Table = ({ wishlistData }) => {
  return (
    <table className="tf-table-wishlist">
      <thead className="table-collapse">
        <tr>
          <th className="wishlist-item_image" />
          <th className="wishlist-item_info">
            <p className="product-title fw-semibold">Product Name</p>
          </th>
          <th className="wishlist-item_price">
            <p className="product-title fw-semibold">Unit Price</p>
          </th>
          <th className="wishlist-item_stock">
            <p className="product-title fw-semibold">Stock Status</p>
          </th>
          <th className="wishlist-item_action" />
        </tr>
      </thead>
      <tbody>
        {wishlistData.length > 0 ? (
          wishlistData.map((item, index) => (
            <tr className="wishlist-item" key={index}>
              <td className="wishlist-item_image">
                <a href="product-detail.html">
                  <img
                    src={item.image}
                    data-src={item.image}
                    alt="Image"
                    className="ls-is-cached lazyloaded"
                  />
                </a>
              </td>
              <td className="wishlist-item_info">
                <a
                  className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                  href="product-detail.html"
                >
                  {item.title}
                </a>
              </td>
              <td className="wishlist-item_price">
                <p className="price-wrap fw-medium flex-nowrap">
                  <span className="new-price price-text fw-medium mb-0">
                    {APP_CONSTANTS.currency}
                    {item.newPrice}
                  </span>
                </p>
              </td>
              <td className="wishlist-item_stock">
                <span className="wishlist-stock-status">{item.stock}</span>
              </td>
              <td className="wishlist-item_action">
                <span className="item-action">
                <span className="tf-btn btn-gray text-white">
                  <i className="icon-cart" />
                  <span className="tooltip-text">Add to Cart</span>
                </span>
                <span className="tf-btn btn-danger text-white">
                  <i className="icon-trash remove link cs-pointer" />
                  <span className="tooltip-text">Remove Wishlist</span>
                </span>
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center">
              No products added to the wishlist
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
