import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="wrap-sidebar-account">
        <ul className="my-account-nav content-append">
          <li>
            <Link
              to={"/profile"}
              className={`my-account-nav-item ${
                location === "/profile" ? "active" : ""
              }`}
            >
              Account Details
            </Link>
          </li>
          <li>
            <Link
              to={"/profile/address"}
              className={`my-account-nav-item ${
                location === "/profile/address" ? "active" : ""
              }`}
            >
              Address
            </Link>
          </li>
          <li>
            <Link
              to={"/profile/orders"}
              className={`my-account-nav-item ${
                location === "/profile/orders" ? "active" : ""
              }`}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link to={"/wishlist"} className="my-account-nav-item">
              Wishlist
            </Link>
          </li>
          <li>
            <Link to={"/"} className="my-account-nav-item">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-sidebar-mb d-lg-none left">
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mbSidebar"
          aria-controls="mbSidebar"
        >
          <i className="icon icon-sidebar" />
        </button>
      </div>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start canvas-sidebar canvas-sidebar-account"
        tabIndex="-1"
        id="mbSidebar"
        aria-labelledby="mbSidebarLabel"
      >
        <div className="canvas-wrapper">
          <div className="canvas-header d-flex justify-content-between align-items-center">
            <h5 className="fw-semibold" id="mbSidebarLabel">
              SIDEBAR ACCOUNT
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="canvas-body sidebar-mobile-append my-account-nav">
            {/* Sidebar content goes here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
