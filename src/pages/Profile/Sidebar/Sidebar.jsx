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
    </>
  );
};

export default Sidebar;
