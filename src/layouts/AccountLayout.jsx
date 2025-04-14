import React from "react";
import Sidebar from "@pages/Profile/Sidebar/Sidebar";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AccountLayout = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate()
  return (
    <>
      <section className="tf-sp-2 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
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
          <div className="my-account-nav">
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
            <Link to={"/wishlist"} className="my-account-nav-item" data-bs-dismiss="offcanvas" onClick={()=>navigate("/wishlist")}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              to={"#logout"}
              className="my-account-nav-item"
              data-bs-toggle="modal"
            >
              Logout
            </Link>
          </li>
        </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
