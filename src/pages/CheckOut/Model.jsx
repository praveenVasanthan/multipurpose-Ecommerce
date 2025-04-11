import React from "react";

const Model = () => {
  const addresses = [
    {
      id: "default-address-home",
      name: "John Doe",
      pincode: "600000",
      addressLine: "123, main street, village, district, state.",
      checked: true,
    },
    {
      id: "default-address-work",
      name: "Jane Smith",
      pincode: "641001",
      addressLine: "456, tech park, city, state.",
      checked: false,
    },
  ];

  return (
    <div className="modal modalCentered fade modal-log" id="addresOption">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon icon-close btn-hide-popup"
            data-bs-dismiss="modal"
          />
          <div className="modal-log-wrap list-file-delete">
            <h5 className="title fw-semibold">Select Address</h5>
            {/* 
            <div className="tf-cart-checkbox align-items-start">
              <input
                type="radio"
                name="address_type"
                className="tf-check check-mod"
                defaultChecked
                id="default-address-home"
              />
              <div className="content">
                <p className="body-text fw-semibold">John Doe, 600000</p>
                <p className="body-text-3 text-cl-1">
                  123, main street, village, district, state.
                </p>
              </div>
            </div> */}

            {addresses.map((item) => (
              <div key={item.id} className="tf-cart-checkbox align-items-start">
                <input
                  type="radio"
                  name="address_type"
                  className="tf-check check-mod"
                  id={item.id}
                  defaultChecked={item.checked}
                />
                <label
                  htmlFor={item.id}
                  className="content"
                  style={{ cursor: "pointer" }}
                >
                  <p className="body-text fw-semibold">
                    {item.name}, {item.pincode}
                  </p>
                  <p className="body-text-3 text-cl-1">{item.addressLine}</p>
                </label>
              </div>
            ))}

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="tf-btn w-25 text-white"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
