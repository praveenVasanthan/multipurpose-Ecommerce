import React, { useState } from "react";

const AccountAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: "Themesflat",
      houseNo: "91/1",
      street: "Middle Street",
      area: "Lorem",
      city: "Punchbowl",
      state: "Chicago",
      pin: "55030",
      phone: "+8(800) 123 4567",
      landmark: "Near Asoka",
      addressType: "Home",
    },
    {
      id: 2,
      fullName: "Onsus",
      houseNo: "121A",
      street: "North Street",
      area: "Yarran",
      city: "Count",
      state: "Australia",
      pin: "9226",
      phone: "+6(800) 1234 3435",
      landmark: "Near TCS",
      addressType: "Home",
    },
  ]);

  const [form, setForm] = useState({
    fullName: "",
    houseNo: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
    landmark: "",
    addressType: "Home",
  });

  const [activeFormType, setActiveFormType] = useState(null); // "add", "edit", or null
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      houseNo: "",
      street: "",
      area: "",
      city: "",
      state: "",
      pin: "",
      phone: "",
      landmark: "",
    });
    setActiveFormType(null);
    setEditingId(null);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newAddress = { ...form, id: Date.now() };
    setAddresses([...addresses, newAddress]);
    resetForm();
  };

  const handleEdit = (address) => {
    setForm(address);
    setEditingId(address.id);
    setActiveFormType("edit");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setAddresses(
      addresses.map((addr) =>
        addr.id === editingId ? { ...form, id: editingId } : addr
      )
    );
    resetForm();
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="my-account-content account-address">
      <h4 className="mb-20">Your addresses ({addresses.length})</h4>

      <div className="widget-inner-address">
        {activeFormType !== "add" && activeFormType !== "edit" && (
          <button
            className="tf-btn btn-add-address"
            onClick={() => {
              resetForm();
              setActiveFormType("add");
            }}
          >
            <span className="text-white">Add new address</span>
          </button>
        )}

        {(activeFormType === "add" || activeFormType === "edit") && (
          <form
            className="wd-form-address show-form-address mb-20"
            onSubmit={activeFormType === "edit" ? handleUpdate : handleAdd}
          >
            <div className="form-content">
              <div className="cols">
              <fieldset>
                <label>Name</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Your Full Name"
                  required
                />
              </fieldset>
              <fieldset>
                <label>Contact Number</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  placeholder="Enter your 10 digit contact number"
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              </div>
              <div className="cols">
                <fieldset>
                  <label>House.No./ Flat No. / Building Name</label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="houseNo"
                    value={form.houseNo}
                    placeholder="Enter house number, flat or building name"
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label>Street / Colony</label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="street"
                    value={form.street}
                    placeholder="Enter street name or colony"
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </div>
              <div className="cols">
                <fieldset>
                  <label>Locality / Area</label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="area"
                    value={form.area}
                    placeholder="Enter locality or area"
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label>City / Town</label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    placeholder="Enter your city or town"
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </div>
              <div className="cols">
              <fieldset>
                <label>State</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  placeholder="Enter your state"
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Pincode</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  name="pin"
                  value={form.pin}
                  placeholder="Enter 6-digit pincode"
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              </div>
              <fieldset>
                <label>Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={form.landmark}
                  placeholder="Enter a nearby landmark (optional)"
                  onChange={handleInputChange}
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
            </div>
            <div className="box-btn">
              <button className="tf-btn btn-large" type="submit">
                <span className="text-white">
                  {activeFormType === "edit" ? "Update" : "Add"}
                </span>
              </button>
              <button
                type="button"
                className="tf-btn btn-large btn-hide-address d-inline-flex"
                onClick={resetForm}
              >
                <span className="text-white">Cancel</span>
              </button>
            </div>
          </form>
        )}

        <ul className="list-account-address tf-grid-layout md-col-2">
          {addresses.map((addr) => (
            <li className="account-address-item" key={addr.id}>
              <p className="title title-sidebar fw-semibold">{addr.area}</p>
              <div className="info-detail">
                <div className="box-infor">
                  <p className="title-sidebar">{addr.fullName}</p>
                  <p className="title-sidebar">{addr.houseNo}</p>
                  <p className="title-sidebar">{addr.street}</p>
                  <p className="title-sidebar">{addr.area}</p>
                  <p className="title-sidebar">{addr.city}</p>
                  <p className="title-sidebar">{addr.state}</p>
                  <p className="title-sidebar">{addr.pin}</p>
                  <p className="title-sidebar">{addr.phone}</p>
                  <p className="title-sidebar">{addr.landmark}</p>
                  <p className="title-sidebar">Type: {addr.addressType}</p>
                </div>
                <div className="box-btn">
                  <button
                    className="tf-btn btn-large btn-edit-address"
                    onClick={() => handleEdit(addr)}
                  >
                    <span className="text-white">Edit</span>
                  </button>
                  <button
                    className="tf-btn btn-large btn-delete-address"
                    onClick={() => handleDelete(addr.id)}
                  >
                    <span className="text-white">Delete</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountAddress;
