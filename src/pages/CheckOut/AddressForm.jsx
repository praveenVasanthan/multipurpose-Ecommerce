import React from "react";

const AddressForm = () => {
  return (
    <div className="wrap">
      <h5 className="title fw-semibold">Delivery</h5>
      <form action="#" className="def">
        <div className="cols">
          <fieldset>
            <label>
              Name<span className="text-danger">*</span>
            </label>
            <input type="text" placeholder="Enter your full name" required />
          </fieldset>
          <fieldset>
            <label>
              Last name<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter your 10 digit contact number"
              required
            />
          </fieldset>
        </div>
        <div className="cols">
          <fieldset>
            <label>
              House No. / Flat No. / Building Name
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter house number, flat or building name"
              required
            />
          </fieldset>
          <fieldset>
            <label>
              Street / Colony<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter street name or colony"
              required
            />
          </fieldset>
          <fieldset>
            <label>
              Locality / Area<span className="text-danger">*</span>
            </label>
            <input type="text" placeholder="Enter locality or area" required />
          </fieldset>
        </div>
        <div className="cols">
          <fieldset>
            <label>
              City / Town<span className="text-danger">*</span>
            </label>
            <input type="text" placeholder="Enter your city or town" required />
          </fieldset>
          <fieldset>
            <label>
              State<span className="text-danger">*</span>
            </label>
            <input type="text" placeholder="Enter your state" required />
          </fieldset>
          <fieldset>
            <label>
              Pincode<span className="text-danger">*</span>
            </label>
            <input type="number" placeholder="Enter 6-digit pincode" required />
          </fieldset>
        </div>
        <fieldset>
          <label>Landmark</label>
          <input
            type="text"
            placeholder="Enter a nearby landmark (optional)"
            required
          />
        </fieldset>

        <div className="tf-cart-checkbox">
          <label className="fw-medium mb-1 d-block">Address Type</label>

          <input
            type="radio"
            name="address_type"
            className="tf-check"
            defaultChecked
            id="default-address-home"
          />
          <label htmlFor="default-address-home">Home</label>

          <input
            type="radio"
            name="address_type"
            className="tf-check"
            id="default-address-work"
          />
          <label htmlFor="default-address-work">Work</label>
        </div>

        <fieldset>
          <label>Order note</label>
          <textarea placeholder="Note on your order" defaultValue={""} />
        </fieldset>
      </form>
    </div>
  );
};

export default AddressForm;
