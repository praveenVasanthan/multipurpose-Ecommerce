import React from "react";
import { Link, useLocation } from "react-router-dom";
import APP_CONSTANTS from "../../config/AppConstants";

const index = () => {
  const location = useLocation().pathname;

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/products", label: "Products" },
    { id: "/cart", label: "Cart" },
    { id: "/orders", label: "Orders" },
    { id: "/wishlist", label: "Wishlist" },
    { id: "/profile", label: "Profile" },
  ];

  const contactInfo = [
    {
      type: "Address",
      value: "8500 Lorem Street Chicago, IL 55030 Dolor",
      href: "https://www.google.com/maps?q=8500LoremStreetChicago,IL55030Dolorsitamet",
    },
    {
      type: "Phone",
      value: "+8(800) 123 4567",
      href: "tel:+88001234567",
    },
    {
      type: "Email",
      value: "onsus@support.com",
      href: "mailto:onsus@support.com",
    },
  ];

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close btn-close-mb link" data-bs-dismiss="offcanvas" />
      <div className="logo-site">
        <Link to="/products">
          <img src={APP_CONSTANTS.App_Logo} alt="Site Logo" />
        </Link>
      </div>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="flat-animate-tab">
            <div className="tab-content">
              <div className="tab-pane active show" id="main-menu" role="tabpanel">
                <div className="mb-content-top">
                  <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                    {menuItems.map((item, idx) => (
                      <li
                        key={idx}
                        className={`nav-mb-item ${location === item.id ? "active" : ""}`}
                      >
                        <Link
                          to={`${item.id}`}
                          className="collapsed mb-menu-link"
                        //   data-bs-toggle="collapse"
                          aria-expanded="true"
                        >
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-other-content">
                  <ul className="mb-info">
                    {contactInfo.map((info, idx) => (
                      <li key={idx}>
                        <p>
                          {info.type}:
                          <a target="_blank" rel="noreferrer" href={info.href}>
                            <span className="fw-medium">{info.value}</span>
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
