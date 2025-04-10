import React, { useState } from "react";

const AccountAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      firstName: "Themesflat",
      lastName: "",
      email: "onsus@support.com",
      company: "Company",
      address: "8500 Lorem Street",
      city: "Punchbowl",
      country: "Chicago",
      zip: "55030",
      phone: "+8(800) 123 4567",
    },
    {
      id: 2,
      firstName: "Onsus",
      lastName: "",
      email: "themesflat@support.com",
      company: "Company",
      address: "17 Yarran st",
      city: "Count",
      country: "Australia",
      zip: "9226",
      phone: "+6(800) 1234 3435",
    },
  ]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    phone: "",
  });

  const [activeFormType, setActiveFormType] = useState(null); // "add", "edit", or null
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      address: "",
      city: "",
      country: "",
      zip: "",
      phone: "",
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
      <h4 className="fw-semibold mb-20">
        Your addresses ({addresses.length})
      </h4>

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
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </div>
              <fieldset>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Address 1</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Country/Region</label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Postal/ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
              <fieldset>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
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
              <p className="title title-sidebar fw-semibold">{addr.address}</p>
              <div className="info-detail">
                <div className="box-infor">
                  <p className="title-sidebar">{addr.firstName}</p>
                  <p className="title-sidebar">{addr.email}</p>
                  <p className="title-sidebar">{addr.company}</p>
                  <p className="title-sidebar">{addr.address}</p>
                  <p className="title-sidebar">{addr.city}</p>
                  <p className="title-sidebar">{addr.country}</p>
                  <p className="title-sidebar">{addr.zip}</p>
                  <p className="title-sidebar">{addr.phone}</p>
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
