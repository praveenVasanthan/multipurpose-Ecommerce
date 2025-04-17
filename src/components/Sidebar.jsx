import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import APP_CONSTANTS from "../config/AppConstants";
import { MyContext } from "../context/Context";

const index = () => {
  const location = useLocation().pathname;

  const { categories } = useContext(MyContext);

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
    <>
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close btn-close-mb link"
          data-bs-dismiss="offcanvas"
        />
        <div className="logo-site">
          <Link to="/products">
            <img src={APP_CONSTANTS.App_Logo} alt="Site Logo" />
          </Link>
        </div>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <div className="flat-animate-tab">
              <div className="flat-title-tab-nav-mobile">
                <ul className="menu-tab-line" role="tablist">
                  <li className="nav-tab-item" role="presentation">
                    <a
                      href="#main-menu"
                      className="tab-link link fw-semibold active"
                      data-bs-toggle="tab"
                    >
                      Menu
                    </a>
                  </li>
                  <li className="br-line type-vertical bg-line h23" />
                  <li className="nav-tab-item" role="presentation">
                    <a
                      href="#category"
                      className="tab-link link fw-semibold"
                      data-bs-toggle="tab"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="main-menu"
                  role="tabpanel"
                >
                  <div className="mb-content-top">
                    <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                      {menuItems.map((item, idx) => (
                        <li
                          key={idx}
                          className={`nav-mb-item ${
                            location === item.id ? "active" : ""
                          }`}
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
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={info.href}
                            >
                              <span className="fw-medium">{info.value}</span>
                            </a>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tab-pane" id="category" role="tabpanel">
                  <div className="mb-content-top">
                    <ul className="nav-ul-mb">
                      {categories.map((category) => (
                        <li className="nav-mb-item" key={category.id}>
                          <a
                            href={`#drd-categories-${category.value}`}
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="drd-categories-appearl"
                          >
                            <span>{category.title}</span>
                            <span className="btn-open-sub"></span>
                          </a>
                          <div
                            id={`drd-categories-${category.value}`}
                            className="collapse"
                          >
                            <ul className="sub-nav-menu">
                              {category.subcategories.map((sub) => (
                                <li key={sub.id}>
                                  <a href="#" className="sub-nav-link">
                                    {sub.subTitle}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
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

      {/* Search canvas */}
      <div className="offcanvas offcanvas-top offcanvas-search" id="search">
        <div className="offcanvas-content">
          <div className="popup-header">
            <button
              className="icon-close icon-close-popup link"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="looking-for-wrap">
                  <h3 className="heading fw-semibold text-center">
                    What are you looking for?
                  </h3>
                  <form action="#" className="form-search">
                    <fieldset>
                      <input
                        className=""
                        type="text"
                        placeholder="Search for anything"
                        name="text"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <button type="submit" className="button-submit">
                      <i className="icon-search" />
                    </button>
                  </form>
                  <div className="popular-searches justify-content-md-center">
                    <span className="text fw-semibold body-text-3">
                      Popular searches:
                    </span>
                    <ul>
                      <li>
                        <a className="link body-text-3 fw-medium" href="#">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a className="link body-text-3 fw-medium" href="#">
                          Trendy
                        </a>
                      </li>
                      <li>
                        <a className="link body-text-3 fw-medium" href="#">
                          New
                        </a>
                      </li>
                      <li>
                        <a className="link body-text-3 fw-medium" href="#">
                          Sale
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
