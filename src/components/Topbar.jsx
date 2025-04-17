import React, { useContext, useState } from "react";
import APP_CONSTANTS from "@config/AppConstants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "@context/Context";

const index = () => {
  const location = useLocation().pathname;
  const { categories } = useContext(MyContext);
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/products/${searchText}`);
  };

  return (
    <header className="tf-header style-3">
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-8 d-flex align-items-center">
              <div className="logo-site">
                <a href="index.html">
                  <img src={APP_CONSTANTS.App_Logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="header-center justify-content-end">
                <form
                  onSubmit={handleSubmit}
                  className="form-search-product style-3"
                >
                  <div className="category-dropdown">
                    <div
                      className="dropdown-trigger"
                      onClick={() => setOpen(true)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {selected
                          ? categories.find((cat) => cat.value === selected)
                              ?.title
                          : "All Categories"}
                      </span>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <i className="icon icon-arrow-down"></i>
                      </span>
                    </div>

                    {open && (
                      <div className="dropdown-modal">
                        <div className="dropdown-header">
                          <span>Select Categories</span>
                          <button
                            onClick={() => setOpen(false)}
                            className="close-btn"
                          >
                            &times;
                          </button>
                        </div>
                        <div className="dropdown-grid">
                          {categories.map((cat, index) => (
                            <div
                              key={index}
                              className="dropdown-item"
                              onClick={() => (
                                handleSelect(cat.value),
                                navigate(`/products/${cat.value}`)
                              )}
                            >
                              {cat.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="br-line type-vertical bg-line"></span>
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Search for products"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </fieldset>
                  <button type="submit" className="btn-submit-form">
                    <i className="icon-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-4 d-flex align-items-center justify-content-end">
              <div className="header-right">
                <ul className="nav-icon justify-content-xl-center">
                  <li className="nav-support d-block d-xl-none d-md-none">
                    <Link
                      to={"#search"}
                      className="link link-fill nav-icon-item relative"
                      data-bs-toggle="offcanvas"
                      aria-controls="search"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#333E48"
                            strokeWidth="0.3"
                            d="M17.795 17.8101L13.5309 13.5225C14.9671 12.072 15.7894 10.1219 15.8267 8.07859C15.864 6.03526 15.1132 4.05635 13.7309 2.55423C12.3486 1.05211 10.4414 0.142631 8.40671 0.0154012C6.37204 -0.111829 4.36687 0.552966 2.80908 1.87124C1.25129 3.18952 0.261042 5.05958 0.0447082 7.09172C-0.171625 9.12385 0.402641 11.1613 1.64783 12.7795C2.89302 14.3976 4.71308 15.4716 6.72871 15.7777C8.74435 16.0838 10.8001 15.5983 12.4674 14.4225L16.8162 18.7977C16.8809 18.8622 16.9576 18.9132 17.042 18.9479C17.1264 18.9826 17.2167 19.0003 17.3079 19C17.3991 18.9997 17.4893 18.9814 17.5735 18.9461C17.6576 18.9109 17.734 18.8593 17.7982 18.7945C17.8625 18.7296 17.9134 18.6527 17.948 18.5682C17.9826 18.4836 18.0003 18.393 18 18.3016C17.9997 18.2102 17.9814 18.1197 17.9463 18.0354C17.9111 17.951 17.8597 17.8745 17.795 17.8101ZM1.49742 7.97499C1.50151 6.69476 1.88395 5.44444 2.59643 4.38196C3.30892 3.31948 4.31949 2.49252 5.50052 2.00544C6.68156 1.51836 7.98009 1.39299 9.23213 1.64527C10.4842 1.89754 11.6336 2.51614 12.5351 3.42285C13.4367 4.32957 14.0501 5.48378 14.2977 6.73971C14.5454 7.99565 14.4162 9.29694 13.9265 10.4793C13.4369 11.6617 12.6087 12.6722 11.5466 13.383C10.4844 14.0939 9.23598 14.4733 7.95891 14.4733C7.10897 14.4721 6.26759 14.303 5.48285 13.9757C4.6981 13.6485 3.98535 13.1694 3.38531 12.566C2.78528 11.9625 2.30971 11.2465 1.98578 10.4588C1.66185 9.67104 1.49591 8.82703 1.49742 7.97499Z"
                            fill="#333E48"
                          ></path>
                        </svg>
                      </span>
                      <p className="body-small">Search</p>
                    </Link>
                  </li>
                  <li className="nav-account">
                    <a
                      href="#authModal"
                      data-bs-toggle="modal"
                      className="link nav-icon-item link-fill"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9998 11.5283C5.20222 11.5283 0.485352 16.2452 0.485352 22.0428C0.485352 22.2952 0.69017 22.5 0.942518 22.5C1.19487 22.5 1.39968 22.2952 1.39968 22.0428C1.39968 16.749 5.70606 12.4426 10.9999 12.4426C16.2937 12.4426 20.6001 16.749 20.6001 22.0428C20.6001 22.2952 20.8049 22.5 21.0572 22.5C21.3096 22.5 21.5144 22.2952 21.5144 22.0428C21.5144 16.2443 16.7975 11.5283 10.9998 11.5283Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                          <path
                            d="M10.9999 0.5C8.22767 0.5 5.97119 2.75557 5.97119 5.52866C5.97119 8.30174 8.22771 10.5573 10.9999 10.5573C13.772 10.5573 16.0285 8.30174 16.0285 5.52866C16.0285 2.75557 13.772 0.5 10.9999 0.5ZM10.9999 9.64303C8.73146 9.64303 6.88548 7.79705 6.88548 5.52866C6.88548 3.26027 8.73146 1.41429 10.9999 1.41429C13.2682 1.41429 15.1142 3.26027 15.1142 5.52866C15.1142 7.79705 13.2682 9.64303 10.9999 9.64303Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </span>
                      <p className="body-small">Sign in</p>
                    </a>
                  </li>
                  <li className="nav-support d-none d-xl-block">
                    <Link
                      to={"/wishlist"}
                      className="link link-fill nav-icon-item relative"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1949 2.23732C15.1929 2.22573 13.2896 3.17827 12 4.83729C10.7184 3.16693 8.80988 2.21168 6.80503 2.23732C3.0467 2.23732 0 5.53791 0 9.60943C0 16.5867 11.2405 23.3993 11.6962 23.6626C11.8801 23.7957 12.1199 23.7957 12.3038 23.6626C12.7595 23.3993 24 16.6854 24 9.60943C24 5.53791 20.9532 2.23732 17.1949 2.23732ZM12 22.3461C10.238 21.2272 1.21519 15.2702 1.21519 9.60943C1.21519 6.26499 3.71785 3.55371 6.80508 3.55371C8.69561 3.52682 10.4648 4.55986 11.4836 6.28534C11.6904 6.59433 12.0893 6.66318 12.3746 6.43905C12.4291 6.39621 12.477 6.34437 12.5164 6.28534C14.206 3.48618 17.6702 2.70077 20.2541 4.53107C21.8358 5.65155 22.7879 7.56199 22.7848 9.60937C22.7848 15.336 13.762 21.2601 12 22.3461Z"
                            fill="#333E48"
                          />
                        </svg>
                      </span>
                      <span className="count-box style-pst-2 d-none d-xxl-flex">
                        04
                      </span>
                      <p className="body-small">Wishlist</p>
                    </Link>
                  </li>
                  <li className="nav-cart">
                    <Link
                      to={"/cart"}
                      // data-bs-toggle="offcanvas"
                      className="link link-fill nav-icon-item relative"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.55865 19.1096C6.8483 19.1096 5.46191 20.496 5.46191 22.2064C5.46191 23.9165 6.8483 25.3029 8.55865 25.3029C10.2688 25.3029 11.6552 23.9165 11.6552 22.2064C11.6534 20.4969 10.2681 19.1114 8.55865 19.1096ZM8.55865 24.1644C7.47712 24.1644 6.60037 23.2877 6.60037 22.2064C6.60037 21.1248 7.47712 20.2481 8.55865 20.2481C9.63996 20.2481 10.5167 21.1248 10.5167 22.2064C10.5167 23.2877 9.63996 24.1644 8.55865 24.1644Z"
                            fill="#333E48"
                          />
                          <path
                            d="M25.436 6.1144H5.33643L4.92663 3.82036C4.67403 2.40819 3.56715 1.30353 2.15453 1.05382L0.668757 0.792113C0.359017 0.736969 0.0635073 0.943536 0.00836329 1.25305C-0.0465584 1.56279 0.159787 1.8583 0.469527 1.91345L1.96086 2.17516C2.90187 2.34193 3.63853 3.07859 3.80529 4.01959L5.82027 15.387C6.05819 16.7472 7.24001 17.7393 8.62083 17.738H20.5746C21.8305 17.7418 22.9396 16.9197 23.3014 15.7172L25.9767 6.84861C26.0263 6.67562 25.995 6.48929 25.8913 6.34209C25.7831 6.19956 25.6147 6.11551 25.436 6.1144ZM22.214 15.3813C21.9992 16.1035 21.3337 16.5975 20.5804 16.5938H8.62661C7.79745 16.596 7.08769 15.9994 6.94739 15.182L5.54144 7.24707H24.6731L22.214 15.3813Z"
                            fill="#333E48"
                          />
                          <path
                            d="M20.5123 19.1096C18.8019 19.1096 17.4155 20.496 17.4155 22.2064C17.4155 23.9165 18.8019 25.3029 20.5123 25.3029C22.2224 25.3029 23.6088 23.9165 23.6088 22.2064C23.607 20.4969 22.2217 19.1114 20.5123 19.1096ZM20.5123 24.1644C19.4307 24.1644 18.554 23.2877 18.554 22.2064C18.554 21.1248 19.4307 20.2481 20.5123 20.2481C21.5936 20.2481 22.4703 21.1248 22.4703 22.2064C22.4703 23.2877 21.5936 24.1644 20.5123 24.1644Z"
                            fill="#333E48"
                          />
                        </svg>
                      </span>
                      <span className="count-box style-pst-2 d-none d-xxl-flex">
                        10
                      </span>
                      <p className="body-small">Your cart:</p>
                    </Link>
                  </li>
                  <li className="d-flex align-items-center d-xl-none btn-mobile">
                    <a
                      href="#mobileMenu"
                      className="mobile-button"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobileMenu"
                    >
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom bg-primary d-none d-xl-block">
        <div className="container">
          <div className="header-bt-left active-container bg-primary relative">
            <div className="nav-category-wrap style-2 style-white">
              <div className="nav-title btn-active">
                <i className="icon-menu-dots fs-20" />
                <p className="title fw-semibold">All Categories</p>
              </div>
              <nav className="category-menu active-item">
                <div className="tf-nav-menu menu-category-menu-container">
                  <ul className="menu-category-list">
                    {categories.map((category, index) => (
                      <li key={index} className="menu-item">
                        <Link
                          to={`/products/${category.value}`}
                          className="item-link body-text-3"
                        >
                          <span>{category.title}</span>
                        </Link>
                        <div className="sub-menu-container">
                          <ul className="sub-menu-list">
                            {category.subcategories.map((subcategory) => (
                              <li
                                className="sub-menu-item"
                                key={subcategory.id}
                              >
                                <a href="#" className="body-text-3 link">
                                  {subcategory.subTitle}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <nav className="main-nav-menu style-white">
              <ul className="nav-list">
                <li
                  className={`nav-item relative ${
                    location === "/" ? "active" : ""
                  }`}
                >
                  <Link to={"/"} className="item-link body-md-2 fw-semibold">
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={`nav-item relative ${
                    location === "/products" ? "active" : ""
                  }`}
                >
                  <Link
                    to={"/products"}
                    className="item-link body-md-2 fw-semibold"
                  >
                    <span>Products</span>
                  </Link>
                </li>
                <li
                  className={`nav-item relative ${
                    location === "/contact" ? "active" : ""
                  }`}
                >
                  <Link
                    to={"/contact"}
                    className="item-link body-md-2 fw-semibold"
                  >
                    <span>Contact</span>
                  </Link>
                </li>
                {/* <li
                  className={`nav-item relative ${
                    location === "/orders" ? "active" : ""
                  }`}
                >
                  <Link
                    to={"/orders"}
                    className="item-link body-md-2 fw-semibold"
                  >
                    <span>Orders</span>
                  </Link>
                </li>
                <li
                  className={`nav-item relative ${
                    location === "/wishlist" ? "active" : ""
                  }`}
                >
                  <Link
                    to={"/wishlist"}
                    className="item-link body-md-2 fw-semibold"
                  >
                    <span>Wishlist</span>
                  </Link>
                </li>
                <li
                  className={`nav-item relative ${
                    location === "/profile" ? "active" : ""
                  }`}
                >
                  <Link
                    to={"/profile"}
                    className="item-link body-md-2 fw-semibold"
                  >
                    <span>Profile</span>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
