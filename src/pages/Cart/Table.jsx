import React from "react";
import APP_CONSTANTS from "../../config/AppConstants";

const Table = ({ cartData }) => {
  return (
    <form action="#" className="form-discount">
      <div className="overflow-x-auto">
        <table className="tf-table-page-cart">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr className="tf-cart-item" key={item.id}>
                <td className="tf-cart-item_product">
                  <a href="#" className="img-box">
                    <img src={item.image} alt={item.title} />
                  </a>
                  <div className="cart-info">
                    <a
                      href="#"
                      className="cart-title body-md-2 fw-semibold link"
                    >
                      {item.title}
                    </a>
                  </div>
                </td>
                <td data-cart-title="Price" className="tf-cart-item_price ">
                  <p className="cart-price price-on-sale price-text fw-medium">
                    {APP_CONSTANTS.currency}
                    {item.price.toFixed(2)}
                  </p>
                </td>
                <td
                  data-cart-title="Quantity"
                  className="tf-cart-item_quantity"
                >
                  <div className="wg-quantity">
                    <span className="btn-quantity btn-decrease">
                      <i className="icon-minus" />
                    </span>
                    <input
                      className="quantity-product"
                      type="text"
                      name="number"
                      defaultValue={item.quantity}
                    />
                    <span className="btn-quantity btn-increase">
                      <i className="icon-plus" />
                    </span>
                  </div>
                </td>
                <td data-cart-title="Total" className="tf-cart-item_total">
                  <p className="cart-total total-price price-text fw-medium">
                    {APP_CONSTANTS.currency}
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </td>
                <td
                  data-cart-title="Remove"
                  className="remove-cart text-xxl-end"
                >
                  <span className="remove icon icon-close link" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-bottom" style={{ justifyContent: "end" }}>
        <span className="last-total-price main-title fw-semibold">
          Total: {APP_CONSTANTS.currency}
          {cartData
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
    </form>
  );
};

export default Table;
