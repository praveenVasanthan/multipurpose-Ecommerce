import React from "react";

const Home = () => {
  return (
    <>
      <>
        <button id="goTop">
          <span className="border-progress" />
          <span className="icon icon-arrow-right" />
        </button>
        {/* preload */}
        <div className="preload preload-container" id="preload">
          <div className="preload-logo">
            <div className="spinner" />
          </div>
        </div>
        {/* /preload */}
        <div id="wrapper">
          {/* Top Bar*/}
          <div className="tf-topbar line-bt">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-12">
                  <div className="topbar-left justify-content-xl-start h-100">
                    <p className="body-small text-main-2">
                      <i className="icon-headphone" />
                      Call us for free:
                      <a
                        href="tel:+18001234567"
                        className="text-primary link-secondary fw-semibold"
                      >
                        +1(800) 123 4567
                      </a>
                    </p>
                    <p className="body-small text-main-2">
                      Free Shipping on Orders
                      <span className="fw-semibold text-main">$50+</span>
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  <div className="tf-cur justify-content-end bar-lang">
                    <div className="tf-cur-item tf-currencies gap-0">
                      <i className="icon icon-budget" />
                      <div className="tf-curs">
                        <select className="image-select center style-default type-cur">
                          <option selected="">USD | United States ($)</option>
                          <option>EUR | France (€)</option>
                          <option>EUR | Germany (€)</option>
                          <option>VND | Vietnam (₫)</option>
                        </select>
                      </div>
                    </div>
                    <div className="tf-cur-item tf-languages gap-0">
                      <i className="icon icon-global" />
                      <div className="tf-lans">
                        <select className="image-select center style-default type-lan">
                          <option>English</option>
                          <option>العربية</option>
                          <option>简体中文</option>
                          <option>اردو</option>
                        </select>
                      </div>
                    </div>
                    <a
                      href="#log"
                      data-bs-toggle="modal"
                      className="tf-cur-item link"
                    >
                      <i className="icon-user-3" />
                      <span className="body-small">My account:</span>
                      <i className="icon-arrow-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Top Bar */}
          {/* Header */}
          <header className="tf-header style-2">
            <div className="inner-header">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-7 d-flex align-items-center">
                    <div className="logo-site">
                      <a href="index.html">
                        <img src="images/logo/logo.svg" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 d-none d-md-block">
                    <div className="header-center justify-content-end">
                      <form action="#" className="form-search-product style-2">
                        <div className="select-category">
                          <select
                            name="product_cat"
                            id="product_cat"
                            className="dropdown_product_cat"
                          >
                            <option value="" selected="selected">
                              All categories
                            </option>
                            <option className="level-0" value="apple-products">
                              Apple products
                            </option>
                            <option
                              className="level-0"
                              value="audio-equipments"
                            >
                              Audio Equipments
                            </option>
                            <option className="level-0" value="camera-video">
                              Camera &amp; Video
                            </option>
                            <option
                              className="level-0"
                              value="game-room-furniture"
                            >
                              Game &amp; Room Furniture
                            </option>
                            <option
                              className="level-0"
                              value="gaming-accessories"
                            >
                              Gaming Accessories
                            </option>
                            <option className="level-0" value="headphone">
                              Headphone
                            </option>
                            <option className="level-0" value="laptop-tablet">
                              Laptop &amp; Tablet
                            </option>
                            <option
                              className="level-0"
                              value="server-workstation"
                            >
                              Server &amp; Workstation
                            </option>
                            <option className="level-0" value="smartphone">
                              Smartphone
                            </option>
                            <option className="level-0" value="smartwatch">
                              Smartwatch
                            </option>
                            <option
                              className="level-0"
                              value="storage-digital-devices"
                            >
                              Storage &amp; Digital Devices
                            </option>
                            <option
                              className="level-0"
                              value="tv-computer-screen"
                            >
                              TV &amp; Computer Screen
                            </option>
                          </select>
                          <ul className="select-options">
                            <li className="link" rel="">
                              <span>All categories</span>
                            </li>
                            <li className="link" rel="apple-products">
                              <span>Apple products</span>{" "}
                            </li>
                            <li className="link" rel="audio-equipments">
                              <span>Audio Equipments</span>
                            </li>
                            <li className="link" rel="camera-video">
                              <span>Camera &amp; Video</span>
                            </li>
                            <li className="link" rel="game-room-furniture">
                              <span>Game &amp; Room Furniture</span>
                            </li>
                            <li className="link" rel="gaming-accessories">
                              <span>Gaming Accessories</span>
                            </li>
                            <li className="link" rel="headphone">
                              <span>Headphone</span>
                            </li>
                            <li className="link" rel="laptop-tablet">
                              <span>Laptop &amp; Tablet</span>
                            </li>
                            <li className="link" rel="server-workstation">
                              <span>Server &amp; Workstation</span>
                            </li>
                            <li className="link" rel="smartphone">
                              <span>Smartphone</span>
                            </li>
                            <li className="link" rel="smartwatch">
                              <span>Smartwatch</span>
                            </li>
                            <li className="link" rel="storage-digital-devices">
                              <span>Storage &amp; Digital Devices</span>
                            </li>
                            <li className="link" rel="tv-computer-screen">
                              <span>TV &amp; Computer Screen</span>
                            </li>
                          </ul>
                        </div>
                        <span className="br-line type-vertical bg-line" />
                        <fieldset>
                          <input
                            type="text"
                            placeholder="Search for products"
                          />
                        </fieldset>
                        <button type="submit" className="btn-submit-form">
                          <i className="icon-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3 col-5 d-flex align-items-center justify-content-end">
                    <div className="header-right">
                      <div className="support-wrap d-none d-xl-flex">
                        <img
                          src="icons/headphone-2.svg"
                          alt=""
                          className="flex-shrink-0"
                          style={{ height: 44, width: 44 }}
                        />
                        <div className="content">
                          <p className="call-us body-text-3">
                            Call us now:
                            <a
                              href="tel:1234567"
                              className="text-primary link-main body-md-2"
                            >
                              +1(800) 123 4567
                            </a>
                          </p>
                          <p className="mail-us body-text-3">
                            Email:
                            <a
                              href="mailto:Onsus@support.com"
                              className="text-secondary link-main "
                            >
                              Onsus@support.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <ul className="nav-icon justify-content-xl-center d-xl-none">
                        <li className="nav-account">
                          <a
                            href="#log"
                            data-bs-toggle="modal"
                            className="link nav-icon-item"
                          >
                            <span>
                              <svg
                                width={22}
                                height={23}
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
                        <li className="nav-cart">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="link nav-icon-item"
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
                                  d="M20.512 19.1096C18.8017 19.1096 17.4153 20.496 17.4153 22.2064C17.4153 23.9165 18.8017 25.3029 20.512 25.3029C22.2221 25.3029 23.6085 23.9165 23.6085 22.2064C23.6068 20.4969 22.2215 19.1114 20.512 19.1096ZM20.512 24.1644C19.4305 24.1644 18.5537 23.2877 18.5537 22.2064C18.5537 21.1248 19.4305 20.2481 20.512 20.2481C21.5933 20.2481 22.4701 21.1248 22.4701 22.2064C22.4701 23.2877 21.5933 24.1644 20.512 24.1644Z"
                                  fill="#333E48"
                                />
                              </svg>
                            </span>
                            <p className="body-small">Your cart:</p>
                          </a>
                        </li>
                        <li className="d-flex align-items-center d-xl-none">
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
            <div className="header-bottom bg-gray-5 d-none d-xl-block">
              <div className="container relative">
                <div className="row">
                  <div className="col-xl-9 col-12">
                    <div className="header-bt-left">
                      <nav className="main-nav-menu">
                        <ul className="nav-list">
                          <li className="nav-item active pst-unset">
                            <a
                              href="javascript:void(0)"
                              className="item-link link body-md-2 fw-semibold"
                            >
                              <span>Home</span>
                              <i className="icon icon-arrow-down" />
                            </a>
                            <div className="sub-menu-container mega-menu mega-home">
                              <div className="container">
                                <ul className="row-demo">
                                  <li className="demo-item active">
                                    <a href="index.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-1.jpg"
                                          data-src="images/demo/home-1.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span>Trend</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 1</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-2.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-2.jpg"
                                          data-src="images/demo/home-2.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">New</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 2</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-3.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-3.jpg"
                                          data-src="images/demo/home-3.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 3</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-4.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-4.jpg"
                                          data-src="images/demo/home-4.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 4</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-5.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-5.jpg"
                                          data-src="images/demo/home-5.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span>Trend</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 5</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-6.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-6.jpg"
                                          data-src="images/demo/home-6.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span>Trend</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 6</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-7.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-7.jpg"
                                          data-src="images/demo/home-7.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">Hot</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 7</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-8.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-8.jpg"
                                          data-src="images/demo/home-8.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">Hot</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 8</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-9.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-9.jpg"
                                          data-src="images/demo/home-9.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">Hot</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 9</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-10.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-10.jpg"
                                          data-src="images/demo/home-10.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">Hot</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 10</span>
                                    </a>
                                  </li>
                                  <li className="demo-item">
                                    <a href="home-11.html">
                                      <div className="demo-image relative">
                                        <img
                                          src="images/demo/home-11.jpg"
                                          data-src="images/demo/home-11.jpg"
                                          alt=""
                                          className="lazyload"
                                        />
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                          <span className="demo-hot">Hot</span>
                                        </div>
                                      </div>
                                      <span className="demo-name">Home 11</span>
                                    </a>
                                  </li>
                                </ul>
                                {/* <div class="view-all-demo text-center">
                                                  <a href="#modalDemo" data-bs-toggle="modal"
                                                      class="tf-btn d-inline-flex">
                                                      <span class="text-white">View All Demos</span>
                                                  </a>
                                              </div> */}
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="javascript:void(0)"
                              className="item-link body-md-2 fw-semibold"
                            >
                              <span>Shop</span>
                              <i className="icon icon-arrow-down" />
                            </a>
                            <div className="sub-menu-container mega-menu text-nowrap">
                              <div className="wrapper-sub-menu">
                                <div className="mega-menu-item">
                                  <p className="menu-heading body-small">
                                    SHOP LAYOUT
                                  </p>
                                  <ul className="menu-list">
                                    <li>
                                      <a
                                        href="shop-default.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Shop Default</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-right-sidebar.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Shop Right Sidebar</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-fullwidth.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Shop Full Width</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-cart.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Shop Cart</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mega-menu-item">
                                  <p className="menu-heading body-small">
                                    WOO PAGE
                                  </p>
                                  <ul className="menu-list">
                                    <li>
                                      <a
                                        href="compare.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Compare</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Wishlist</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="checkout.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Check Out</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="order-details.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Order Detail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="track-your-order.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Track Your Order</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="my-account.html"
                                        className="body-md-2 link"
                                      >
                                        <span>My Account</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="javascript:void(0)"
                              className="item-link body-md-2 fw-semibold"
                            >
                              <span>Product</span>
                              <i className="icon icon-arrow-down" />
                            </a>
                            <div className="sub-menu-container mega-menu text-nowrap">
                              <div className="wrapper-sub-menu">
                                <div className="mega-menu-item">
                                  <p className="menu-heading body-small">
                                    PRODUCT LAYOUTS
                                  </p>
                                  <ul className="menu-list">
                                    <li>
                                      <a
                                        href="product-detail.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Detail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-thumbs-right.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Right Thumbnail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-thumbs-left.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Left Thumbnail</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mega-menu-item">
                                  <p className="menu-heading body-small">
                                    PRODUCT DETAILS
                                  </p>
                                  <ul className="menu-list">
                                    <li>
                                      <a
                                        href="product-detail-2.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Detail Style 2</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-detail-3.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Detail Style 3</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-detail-4.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Detail Style 4</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-inner-zoom.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Inner Zoom</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-inner-circle-zoom.html"
                                        className="body-md-2 link"
                                      >
                                        <span>Product Inner Circle Zoom</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="javascript:void(0)"
                              className="item-link body-md-2 fw-semibold"
                            >
                              <span>Blog</span>
                              <i className="icon icon-arrow-down" />
                            </a>
                            <div className="sub-menu-container">
                              <ul className="sub-menu-list">
                                <li>
                                  <a
                                    href="blog-list.html"
                                    className="body-md-2 link"
                                  >
                                    <span>Blog List</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="blog-grid.html"
                                    className="body-md-2 link"
                                  >
                                    <span>Blog Grid</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="blog-detail.html"
                                    className="body-md-2 link"
                                  >
                                    <span>Blog Detail</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item relative">
                            <a
                              href="javascript:void(0)"
                              className="item-link body-md-2 fw-semibold"
                            >
                              <span>Page</span>
                              <i className="icon icon-arrow-down" />
                            </a>
                            <div className="sub-menu-container">
                              <ul className="sub-menu-list">
                                <li>
                                  <a
                                    href="contact.html"
                                    className="body-md-2 link"
                                  >
                                    <span>Contact</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="about.html"
                                    className="body-md-2 link"
                                  >
                                    <span>About</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="privacy.html"
                                    className="body-md-2 link"
                                  >
                                    <span>Privacy</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="faq.html" className="body-md-2 link">
                                    <span>FAQs</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html" className="body-md-2 link">
                                    <span>404</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 d-none d-xl-flex align-items-center justify-content-end">
                    <div className="header-bt-right">
                      <ul className="nav-icon style-2">
                        <li>
                          <a href="#compare" data-bs-toggle="offcanvas">
                            <svg
                              width={26}
                              height={26}
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.85714 10.4286L4.42857 13.8572L1 10.4286"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.1429 15.625L21.5714 12.1964L25 15.625"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 20.7142C7 19.2941 5.84874 18.1428 4.42858 18.1428C3.00841 18.1428 1.85715 19.2941 1.85715 20.7142C1.85715 22.1344 3.00841 23.2856 4.42858 23.2856C5.84874 23.2856 7 22.1344 7 20.7142Z"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M24.1429 5.28575C24.1429 3.86559 22.9916 2.71432 21.5714 2.71432C20.1513 2.71432 19 3.86559 19 5.28575C19 6.70591 20.1513 7.85718 21.5714 7.85718C22.9916 7.85718 24.1429 6.70591 24.1429 5.28575Z"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.42856 13L4.42856 8.5C4.42856 7.64752 4.76721 6.82995 5.37 6.22716C5.9728 5.62436 6.79036 5.28571 7.64284 5.28571L19 5.28571"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21.5714 13.0535L21.5714 17.5535C21.5714 18.406 21.2328 19.2236 20.63 19.8264C20.0272 20.4292 19.2096 20.7678 18.3571 20.7678L7 20.7678"
                                stroke="#333E48"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="count-box">0</span>
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html" className="d-flex">
                            <i className="icon-hearth text-main fs-26 link" />
                            <span className="count-box">4</span>
                          </a>
                        </li>
                        <li className="nav-shop-cart ">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="d-flex"
                          >
                            <i className="icon-cart text-main fs-26 link" />
                            <span className="count-box">10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* /Header */}
          {/* Banner */}
          <section className="tf-sp-5">
            <div className="container">
              <div className="s-banner-wrapper">
                <div className="wrap-item-1 d-none d-lg-block">
                  <div className="tf-nav-menu">
                    <div className="main-nav">
                      <h6 className="fw-semibold title">
                        <i className="icon-menu-dots" />
                        All departments
                      </h6>
                      <ul className="menu-category-list">
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-clothing" />
                              Apparel
                            </span>
                          </a>
                          <div className="sub-menu-container d-flex">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  New arrival
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Steall the deals
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Best sellers
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Men
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Season collection
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  This Week's Highlights
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Home wear
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Underwear
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Travel clothes
                                </a>
                              </li>
                            </ul>
                            <div className="cls-category style-abs abs-2 hover-img">
                              <a
                                href="product-detail.html"
                                className="img-box img-style d-block"
                              >
                                <img
                                  src="images/collection/autumn-cls.jpg"
                                  data-src="images/collection/autumn-cls.jpg"
                                  alt=""
                                  className=" lazyload"
                                />
                              </a>
                              <div className="content text-center">
                                <div className="box-title">
                                  <h3 className="fw-bold text-uppercase">
                                    -60%
                                  </h3>
                                  <p className="product-title-2 text-uppercase">
                                    Autumn collection
                                  </p>
                                </div>
                                <div className="box-btn">
                                  <a
                                    href="product-detail.html"
                                    className="tf-btn btn-line-white text-main d-inline-flex"
                                  >
                                    <span>Shop now</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <span className="icon">
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g mask="url(#mask0_1739_24870)">
                                    <path
                                      d="M17.5037 10.9552C17.5037 15.6269 13.7165 19.4141 9.04482 19.4141C4.37311 19.4141 0.585938 15.6269 0.585938 10.9552C0.585938 6.28348 4.37311 2.49634 9.04482 2.49634"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                    />
                                    <path
                                      d="M10.336 10.9553C10.336 11.6694 9.75791 12.2483 9.04483 12.2483C8.33171 12.2483 7.75366 11.6694 7.75366 10.9553C7.75366 10.2412 8.33171 9.66232 9.04483 9.66232C9.75791 9.66232 10.336 10.2412 10.336 10.9553Z"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.6223 10.9551C14.6223 7.82548 12.2025 5.35873 9.03296 5.35873L9.04491 0.585891C14.5859 0.585891 19.4141 4.94236 19.4141 10.9551H14.6223Z"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12.5154 10.9552C12.5154 12.8813 10.9562 14.4426 9.03282 14.4426C7.10939 14.4426 5.55017 12.8813 5.55017 10.9552C5.55017 9.02913 7.10939 7.46777 9.03282 7.46777C10.9562 7.46777 12.5154 9.02913 12.5154 10.9552Z"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.0448 16.6132V17.3433"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M2.6283 10.9551H3.35837"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.50122 15.3274L5.01747 14.8111"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.1156 14.8111L13.6318 15.3274"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.16481 6.86035L4.64856 6.3441"
                                      stroke="black"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                </svg>
                              </span>
                              Automotive parts
                            </span>
                          </a>
                          <div className="sub-menu-container">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Engine
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Lubricants &amp; Fluids
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Best sellers
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Cooling System
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Exhaust System
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Battery
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Interior
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-beauti" />
                              Beauty &amp; personal care
                            </span>
                          </a>
                          <div className="sub-menu-container">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Skincare
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Makeup
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Haircare
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Fragrance &amp; Deodorant
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Body Care
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-computer" />
                              Consumer Electronics
                            </span>
                          </a>
                          <div className="sub-menu-container">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Mobile Devices
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Computers
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Audio &amp; Video
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Smart Home
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-sofa" />
                              Furniture
                            </span>
                          </a>
                          <div className="sub-menu-container">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Living Room
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Dining &amp; Kitchen
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-computer-wifi" />
                              Home products
                            </span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-machine" />
                              Machinery
                            </span>
                          </a>
                          <div className="sub-menu-container">
                            <ul className="sub-menu-list">
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Industrial{" "}
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Construction{" "}
                                </a>
                              </li>
                              <li className="sub-menu-item">
                                <a href="#" className="body-text-3 link">
                                  Metal &amp; Woodworking
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-jewelry" />
                              Timepieces, jewelry &amp; eyewear
                            </span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-tool" />
                              Tool &amp; hardware
                            </span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#" className="item-link body-text-3">
                            <span>
                              <i className="icon icon-best-seller" />
                              Bestseller
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wrap-item-2">
                  <div
                    className="banner-image-product-4 style-2 hover-img has-bg-img"
                    data-bg-img="images/banner/banner-30.jpg"
                  >
                    <div className="content">
                      <div className="box-title">
                        <div className="d-grid gap-10">
                          <h2 className="fw-normal">
                            <a
                              href="product-detail.html"
                              className="link font-5 text-white"
                            >
                              The New <br />
                              Standard
                            </a>
                          </h2>
                          <p className="title-sidebar-2 font-5 text-white">
                            Under favorable 360 cameras
                          </p>
                        </div>
                        <div className="box-price">
                          <p className="main-title-3 lh-19 text-cl-7">From</p>
                          <h1 className="fw-bold text-secondary lh-xxl-71 text-third-2">
                            $287
                          </h1>
                        </div>
                      </div>
                      <div className="box-btn">
                        <a
                          href="product-detail.html"
                          className="tf-btn-icon type-2 style-white"
                        >
                          <i className="icon-circle-chevron-right" />
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                    <a
                      href="product-detail.html"
                      className="img-style img-item overflow-visible"
                    >
                      <img
                        src="images/item/tivi-3.png"
                        data-src="images/item/tivi-3.png"
                        alt=""
                        className="lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div className="wrap-item-3">
                  <div className="cls-category style-abs hover-img">
                    <a
                      href="product-detail.html"
                      className="img-box img-style d-block"
                    >
                      <img
                        src="images/collection/cls-category-5.jpg"
                        data-src="images/collection/cls-category-5.jpg"
                        alt=""
                        className="lazyload"
                      />
                    </a>
                    <div className="content">
                      <div className="box-title">
                        <p className="text-white product-title-2 text-uppercase">
                          catch big
                        </p>
                        <p className="text-white main-title-2 text-uppercase fw-bold">
                          deals
                        </p>
                        <p className="text-white product-title-2 text-uppercase">
                          on the cameras
                        </p>
                      </div>
                      <a
                        href="product-detail.html"
                        className="tf-btn-icon style-white"
                      >
                        <i className="icon-circle-chevron-right" />
                        <span>Shop now</span>
                      </a>
                    </div>
                    <div className="box-sale-wrap">
                      <p className="small-text">Sale</p>
                      <p className="title-sidebar-2">17%</p>
                    </div>
                  </div>
                  <div className="cls-category style-abs hover-img">
                    <a
                      href="product-detail.html"
                      className="img-box img-style d-block"
                    >
                      <img
                        src="images/collection/cls-category-6.jpg"
                        data-src="images/collection/cls-category-6.jpg"
                        alt=""
                        className="lazyload"
                      />
                    </a>
                    <div className="content">
                      <div className="box-title">
                        <p className="text-white product-title-2 text-uppercase">
                          catch big
                        </p>
                        <p className="text-white main-title-2 text-uppercase fw-bold">
                          deals
                        </p>
                        <p className="text-white product-title-2 text-uppercase">
                          on the cameras
                        </p>
                      </div>
                      <a
                        href="product-detail.html"
                        className="tf-btn-icon style-white"
                      >
                        <i className="icon-circle-chevron-right" />
                        <span>Shop now</span>
                      </a>
                    </div>
                    <div className="box-sale-wrap">
                      <p className="small-text">Sale</p>
                      <p className="title-sidebar-2">10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Banner */}
          {/* Iconbox */}
          <div className="tf-sp-2 pt-0">
            <div className="container">
              <div
                className="swiper tf-sw-iconbox"
                data-preview={5}
                data-tablet={3}
                data-mobile-sm={2}
                data-mobile={1}
                data-space-lg={20}
                data-space-md={20}
                data-space={15}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="tf-icon-box wow fadeInLeft"
                      data-wow-delay={0}
                    >
                      <div className="icon-box">
                        <i className="icon icon-delivery-2" />
                      </div>
                      <div className="content">
                        <p className="body-text fw-semibold">Free delivery</p>
                        <p className="body-text-3">
                          Free Shipping for orders over $20
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="tf-icon-box wow fadeInLeft"
                      data-wow-delay="0.1s"
                    >
                      <div className="icon-box">
                        <i className="icon icon-support-2" />
                      </div>
                      <div className="content">
                        <p className="body-text fw-semibold">Support 24/7</p>
                        <p className="body-text-3">
                          24 hours a day, 7 days a week
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="tf-icon-box wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon-box">
                        <i className="icon icon-payment" />
                      </div>
                      <div className="content">
                        <p className="body-text fw-semibold">Payment</p>
                        <p className="body-text-3">
                          Pay with Multiple Credit Cards
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="tf-icon-box wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon-box">
                        <i className="icon icon-reliable" />
                      </div>
                      <div className="content">
                        <p className="body-text fw-semibold">Reliable</p>
                        <p className="body-text-3">
                          Trusted by 2000+ major brands
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="tf-icon-box wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <i className="icon icon-check-3" />
                      </div>
                      <div className="content">
                        <p className="body-text fw-semibold">Guarantee</p>
                        <p className="body-text-3">
                          Within 30 days for an exchange
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-pagination-iconbox sw-dot-default justify-content-center" />
              </div>
            </div>
          </div>
          {/* /Iconbox */}
          {/* Deal Today */}
          <section className="tf-sp-2 pt-0">
            <div className="container">
              <div className="flat-title pb-8 wow fadeInUp" data-wow-delay={0}>
                <h5 className="fw-semibold text-primary flat-title-has-icon">
                  <span className="icon">
                    <i className="icon-fire tf-ani-tada" />
                  </span>
                  Deal Of The Day
                </h5>
                <div className="box-btn-slide relative">
                  <div className="swiper-button-prev nav-swiper nav-prev-products">
                    <i className="icon-arrow-left-lg" />
                  </div>
                  <div className="swiper-button-next nav-swiper nav-next-products">
                    <i className="icon-arrow-right-lg" />
                  </div>
                </div>
              </div>
              <div className="box-btn-slide-2 sw-nav-effect">
                <div
                  className="swiper tf-sw-products slider-thumb-deal"
                  data-preview={4}
                  data-tablet={3}
                  data-mobile-sm={2}
                  data-mobile={1}
                  data-space-lg={30}
                  data-space-md={20}
                  data-space={15}
                  data-pagination={1}
                  data-pagination-sm={2}
                  data-pagination-md={3}
                  data-pagination-lg={4}
                >
                  <div className="swiper-wrapper">
                    {/* card 1 */}
                    <div className="swiper-slide">
                      <div
                        className="card-product style-border wow fadeInLeft"
                        data-wow-delay={0}
                      >
                        <div className="card-product-wrapper overflow-visible ">
                          <div className="product-thumb-image">
                            <a
                              href="product-detail.html"
                              className="card-image"
                            >
                              <img
                                src="images/product/product-thumb/product-1.jpg"
                                alt="Image Product"
                                className="lazyload img-product"
                              />
                            </a>
                            <ul className="list-image-product">
                              <li className="image-swap active">
                                <img
                                  src="images/product/product-thumb/product-1.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-1.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-2.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-3.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-4.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                            </ul>
                          </div>
                          <ul className="list-product-btn top-0 end-0">
                            <li>
                              <a
                                href="#shoppingCart"
                                data-bs-toggle="offcanvas"
                                className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-cart2" />
                                <span className="tooltip">Add to Cart</span>
                              </a>
                            </li>
                            <li className=" wishlist">
                              <a
                                href="javascript:void(0);"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-heart2" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="#compare"
                                data-bs-toggle="offcanvas"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-compare1" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                          </ul>
                          <div className="box-sale-wrap top-0 start-0 z-5">
                            <p className="small-text">Sale</p>
                            <p className="title-sidebar-2">27%</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-12">
                            <div className="d-flex flex-column">
                              <h6>
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  30" Antique Bronze Baldaud Roman Numeral Wall
                                  Clock
                                </a>
                              </h6>
                            </div>
                            <p className="price-wrap fw-medium">
                              <span className="new-price h4 fw-normal text-primary mb-0">
                                $37.500
                              </span>
                              <span className="box-sale-tag">Save: $6</span>
                            </p>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={102738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                            <div className="product-progress-sale">
                              <div
                                className="progress-sold progress"
                                role="progressbar"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="box-quantity d-flex justify-content-between">
                                <p className="text-avaiable caption">
                                  Sold:
                                  <span className="fw-bold">57</span>
                                </p>
                                <p className="text-avaiable caption">
                                  Available:
                                  <span className="fw-bold">72</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 2 */}
                    <div className="swiper-slide">
                      <div
                        className="card-product style-border  wow fadeInLeft"
                        data-wow-delay="0.1s"
                      >
                        <div className="card-product-wrapper overflow-visible">
                          <div className="product-thumb-image">
                            <a
                              href="product-detail.html"
                              className="card-image"
                            >
                              <img
                                src="images/product/product-thumb/product-2.jpg"
                                alt="Image Product"
                                className="lazyload img-product"
                              />
                            </a>
                            <ul className="list-image-product">
                              <li className="image-swap active">
                                <img
                                  src="images/product/product-thumb/product-2.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-5.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-6.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-7.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-8.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                            </ul>
                            <div className="box-sale-wrap top-0 start-0 z-5">
                              <p className="small-text">Sale</p>
                              <p className="title-sidebar-2">13%</p>
                            </div>
                          </div>
                          <ul className="list-product-btn top-0 end-0">
                            <li>
                              <a
                                href="#shoppingCart"
                                data-bs-toggle="offcanvas"
                                className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-cart2" />
                                <span className="tooltip">Add to Cart</span>
                              </a>
                            </li>
                            <li className=" wishlist">
                              <a
                                href="javascript:void(0);"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-heart2" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="#compare"
                                data-bs-toggle="offcanvas"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-compare1" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-12">
                            <div className="d-flex flex-column">
                              <h6>
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Canon PowerShot SX70 HS Digital Camerat
                                </a>
                              </h6>
                            </div>
                            <p className="price-wrap fw-medium">
                              <span className="new-price h4 fw-normal text-primary mb-0">
                                $62.000
                              </span>
                              <span className="box-sale-tag">Save: $13</span>
                            </p>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={22671}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                            <div className="product-progress-sale">
                              <div
                                className="progress-sold progress"
                                role="progressbar"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "35%" }}
                                />
                              </div>
                              <div className="box-quantity d-flex justify-content-between">
                                <p className="text-avaiable caption">
                                  Sold:
                                  <span className="fw-bold">32</span>
                                </p>
                                <p className="text-avaiable caption">
                                  Available:
                                  <span className="fw-bold">68</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 3 */}
                    <div className="swiper-slide">
                      <div
                        className="card-product style-border wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <div className="card-product-wrapper overflow-visible">
                          <div className="product-thumb-image">
                            <a
                              href="product-detail.html"
                              className="card-image"
                            >
                              <img
                                src="images/product/product-thumb/product-3.jpg"
                                alt="Image Product"
                                className="lazyload img-product"
                              />
                            </a>
                            <ul className="list-image-product">
                              <li className="image-swap active">
                                <img
                                  src="images/product/product-thumb/product-3.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-9.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-10.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-11.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-12.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                            </ul>
                          </div>
                          <ul className="list-product-btn top-0 end-0">
                            <li>
                              <a
                                href="#shoppingCart"
                                data-bs-toggle="offcanvas"
                                className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-cart2" />
                                <span className="tooltip">Add to Cart</span>
                              </a>
                            </li>
                            <li className=" wishlist">
                              <a
                                href="javascript:void(0);"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-heart2" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="#compare"
                                data-bs-toggle="offcanvas"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-compare1" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                          </ul>
                          <div className="box-sale-wrap top-0 start-0 z-5">
                            <p className="small-text">Sale</p>
                            <p className="title-sidebar-2">33%</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-12">
                            <div className="d-flex flex-column">
                              <h6>
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Net10 Alcatel TCL A3, 32GB, Black Prepaid
                                  Smartphone (Locked)
                                </a>
                              </h6>
                            </div>
                            <p className="price-wrap fw-medium">
                              <span className="new-price h4 fw-normal text-primary mb-0">
                                $42.500
                              </span>
                              <span className="box-sale-tag">Save: $7.5</span>
                            </p>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={5804}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                            <div className="product-progress-sale">
                              <div
                                className="progress-sold progress"
                                role="progressbar"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "88%" }}
                                />
                              </div>
                              <div className="box-quantity d-flex justify-content-between">
                                <p className="text-avaiable caption">
                                  Sold:
                                  <span className="fw-bold">40</span>
                                </p>
                                <p className="text-avaiable caption">
                                  Available:
                                  <span className="fw-bold">60</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 4 */}
                    <div className="swiper-slide">
                      <div
                        className="card-product style-border wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="card-product-wrapper overflow-visible">
                          <div className="product-thumb-image">
                            <a
                              href="product-detail.html"
                              className="card-image"
                            >
                              <img
                                src="images/product/product-thumb/product-4.jpg"
                                alt="Image Product"
                                className="lazyload img-product"
                              />
                            </a>
                            <ul className="list-image-product">
                              <li className="image-swap active">
                                <img
                                  src="images/product/product-thumb/product-4.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-13.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-14.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-15.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-16.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                            </ul>
                          </div>
                          <ul className="list-product-btn top-0 end-0">
                            <li>
                              <a
                                href="#shoppingCart"
                                data-bs-toggle="offcanvas"
                                className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-cart2" />
                                <span className="tooltip">Add to Cart</span>
                              </a>
                            </li>
                            <li className=" wishlist">
                              <a
                                href="javascript:void(0);"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-heart2" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="#compare"
                                data-bs-toggle="offcanvas"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-compare1" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                          </ul>
                          <div className="box-sale-wrap top-0 start-0 z-5">
                            <p className="small-text">Sale</p>
                            <p className="title-sidebar-2">20%</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-12">
                            <div className="d-flex flex-column">
                              <h6>
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Microsoft Xbox One X Console w/ Accessories,
                                  1TB HDD - White
                                </a>
                              </h6>
                            </div>
                            <p className="price-wrap fw-medium">
                              <span className="new-price h4 fw-normal text-primary mb-0">
                                $48.000
                              </span>
                              <span className="box-sale-tag">Save: $9</span>
                            </p>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={8738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                            <div className="product-progress-sale">
                              <div
                                className="progress-sold progress"
                                role="progressbar"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "55%" }}
                                />
                              </div>
                              <div className="box-quantity d-flex justify-content-between">
                                <p className="text-avaiable caption">
                                  Sold:
                                  <span className="fw-bold">55</span>
                                </p>
                                <p className="text-avaiable caption">
                                  Available:
                                  <span className="fw-bold">45</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 5 */}
                    <div className="swiper-slide">
                      <div className="card-product style-border">
                        <div className="card-product-wrapper overflow-visible">
                          <div className="product-thumb-image">
                            <a
                              href="product-detail.html"
                              className="card-image"
                            >
                              <img
                                src="images/product/product-thumb/product-1.jpg"
                                alt="Image Product"
                                className="lazyload img-product"
                              />
                            </a>
                            <ul className="list-image-product">
                              <li className="image-swap active">
                                <img
                                  src="images/product/product-thumb/product-1.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-1.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-2.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-3.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                              <li className="image-swap">
                                <img
                                  src="images/product/product-thumb/thumb-4.jpg"
                                  alt="Image Product"
                                  className="lazyload"
                                />
                              </li>
                            </ul>
                          </div>
                          <ul className="list-product-btn top-0 end-0">
                            <li>
                              <a
                                href="#shoppingCart"
                                data-bs-toggle="offcanvas"
                                className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-cart2" />
                                <span className="tooltip">Add to Cart</span>
                              </a>
                            </li>
                            <li className=" wishlist">
                              <a
                                href="javascript:void(0);"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-heart2" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="modal"
                                className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-view" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="#compare"
                                data-bs-toggle="offcanvas"
                                className="box-icon btn-icon-action hover-tooltip tooltip-left"
                              >
                                <span className="icon icon-compare1" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                          </ul>
                          <div className="box-sale-wrap top-0 start-0 z-5">
                            <p className="small-text">Sale</p>
                            <p className="title-sidebar-2">11%</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-12">
                            <div className="d-flex flex-column">
                              <h6>
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  30" Antique Bronze Baldaud Roman Numeral Wall
                                  Clock
                                </a>
                              </h6>
                            </div>
                            <p className="price-wrap fw-medium">
                              <span className="new-price h4 fw-normal text-primary mb-0">
                                $80.000
                              </span>
                              <span className="box-sale-tag">Save: $6</span>
                            </p>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={102738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                            <div className="product-progress-sale">
                              <div
                                className="progress-sold progress"
                                role="progressbar"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="box-quantity d-flex justify-content-between">
                                <p className="text-avaiable caption">
                                  Sold:
                                  <span className="fw-bold">57</span>
                                </p>
                                <p className="text-avaiable caption">
                                  Available:
                                  <span className="fw-bold">72</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-dot-default sw-pagination-products justify-content-center" />
                </div>
                <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-products-2">
                  <i className="icon-arrow-left-lg" />
                </div>
                <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-products-2">
                  <i className="icon-arrow-right-lg" />
                </div>
              </div>
            </div>
          </section>
          {/* /Deal Today */}
          {/* Banner Image Product */}
          <section
            className="has-bg-img"
            data-bg-img="images/banner/banner-1.jpg"
            data-bg-size="cover"
            data-bg-repeat="no-repeat"
          >
            <div className="container">
              <div className="banner-image-product hover-img">
                <a
                  href="product-detail.html"
                  className="image img-2 img-style overflow-visible relative"
                >
                  <img
                    src="images/item/tivi.png"
                    data-src="images/item/tivi.png"
                    alt=""
                    className="lazyload"
                  />
                  <div className="box-sale-wrap position1">
                    <p className="small-text">Sale</p>
                    <p className="title-sidebar-2">25%</p>
                  </div>
                </a>
                <div className="content">
                  <div className="box-title">
                    <h1 className="fw-normal">
                      <a href="product-detail.html" className="link text-white">
                        GameConsole <br className="d-none d-xl-block" />
                        Destiny Special Edition
                      </a>
                    </h1>
                    <div className="box-price">
                      <p className="old-price style-white main-title-2 fw-light">
                        $80.000
                      </p>
                      <h3 className="fw-semibold text-third">$60.000</h3>
                    </div>
                  </div>
                  <div className="box-btn">
                    <a
                      href="product-detail.html"
                      className="tf-btn-icon type-2 style-white"
                    >
                      <i className="icon-circle-chevron-right" />
                      <span>Shop now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Banner Image Product */}
          {/* Grid Collection */}
          <section className="tf-sp-2 flat-animate-tab">
            <div className="container">
              <div className="flat-title">
                <div className="flat-title-tab-default">
                  <ul className="menu-tab-line" role="tablist">
                    <li className="nav-tab-item d-flex" role="presentation">
                      <a
                        href="#feature"
                        className="tab-link main-title link fw-semibold active"
                        data-bs-toggle="tab"
                      >
                        Feature
                      </a>
                    </li>
                    <li className="nav-tab-item d-flex" role="presentation">
                      <a
                        href="#toprate"
                        className="tab-link main-title link fw-semibold"
                        data-bs-toggle="tab"
                      >
                        Toprate
                      </a>
                    </li>
                    <li className="nav-tab-item d-flex" role="presentation">
                      <a
                        href="#on-sale"
                        className="tab-link main-title link fw-semibold"
                        data-bs-toggle="tab"
                      >
                        On Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="feature"
                  role="tabpanel"
                >
                  <div className="grid-cls grid-cls-v1">
                    <div className="grid-item1">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-77.jpg"
                                  data-src="images/product/product-77.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-8.jpg"
                                  data-src="images/product/product-8.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Huawei Nova 8 Pro 4G – Powerful Performance,
                                    120Hz Display, 66W Fast Charging
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $36.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $45.000
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-78.jpg"
                                  data-src="images/product/product-78.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-37.jpg"
                                  data-src="images/product/product-37.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Eskuche 33iS – Retro Design, Premium Sound,
                                    Cables
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $63.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-79.jpg"
                                  data-src="images/product/product-79.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-72.jpg"
                                  data-src="images/product/product-72.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Apple Watch Series 1 Aluminum case with
                                    Sport Band
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $79.999
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $99.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-item2">
                      <div
                        className="card-product style-border style-thums-2 p-lg-30 wow fadeInUp"
                        data-wow-delay={0}
                      >
                        <div className="card-product-wrapper overflow-visible aspect-ratio-0">
                          <div className="product-thumb-slider thumbs-right">
                            <div className="swiper tf-product-view-main">
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      data-src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      data-src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      data-src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      data-src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="swiper tf-product-view-thumbs"
                              data-direction="vertical"
                            >
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-sale-wrap style-2 z-5">
                            <p className="small-text">Save</p>
                            <p className="title-sidebar-2">$26.000</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-6">
                            <div className="d-flex flex-column">
                              <h6 className="bg-white relative z-5">
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Drone with Camera 1080P HD, Toss to Launch RC
                                  Drone for Adults with Smart APP Trajectory
                                  Flight Altitude Hold One Key Take Off/Landing
                                  Headless 360°Flip Camera Drone 2 Batteries
                                </a>
                              </h6>
                            </div>
                            <div className="group-btn">
                              <p className="price-wrap fw-medium">
                                <span className="new-price h4 fw-normal text-primary mb-0">
                                  $103.999
                                </span>
                                <span className="old-price price-text text-main-2">
                                  $129.999
                                </span>
                              </p>
                              <ul className="list-product-btn flex-row">
                                <li>
                                  <a
                                    href="#shoppingCart"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-cart2" />
                                    <span className="tooltip">Add to Cart</span>
                                  </a>
                                </li>
                                <li className="wishlist">
                                  <a
                                    href="javascript:void(0);"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-heart2" />
                                    <span className="tooltip">
                                      Add to Wishlist
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#quickView"
                                    data-bs-toggle="modal"
                                    className="box-icon quickview btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-view" />
                                    <span className="tooltip">Quick View</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#compare"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-compare1" />
                                    <span className="tooltip">Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={102738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item3">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-80.jpg"
                                  data-src="images/product/product-80.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-73.jpg"
                                  data-src="images/product/product-73.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Camera &amp; Accessories
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Nikon D3500 W/ AF-P DX NIKKOR 18-55mm
                                    f/3.5-5.6G
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $42.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $59.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-75.jpg"
                                  data-src="images/product/product-75.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-20.jpg"
                                  data-src="images/product/product-20.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Audio-Technica ATH-AD700X Audiophile
                                    Open-Air
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $45.500
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/sc-1.jpg"
                                  data-src="images/product/sc-1.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-15.jpg"
                                  data-src="images/product/product-15.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    HAFURY Women Smart Watch, Smartwatch for
                                    Android/iOS
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $51.200
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $89.900
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="toprate" role="tabpanel">
                  <div className="grid-cls grid-cls-v1">
                    <div className="grid-item1">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-79.jpg"
                                  data-src="images/product/product-79.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-72.jpg"
                                  data-src="images/product/product-72.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Apple Watch Series 1 Aluminum case with
                                    Sport Band
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $79.999
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $99.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-77.jpg"
                                  data-src="images/product/product-77.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-8.jpg"
                                  data-src="images/product/product-8.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Huawei Nova 8 Pro 4G – Powerful Performance,
                                    120Hz Display, 66W Fast Charging
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $36.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $45.000
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-78.jpg"
                                  data-src="images/product/product-78.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-37.jpg"
                                  data-src="images/product/product-37.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Eskuche 33iS – Retro Design, Premium Sound,
                                    Cables
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $63.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-item2">
                      <div
                        className="card-product style-border style-thums-2 p-lg-30 wow fadeInUp"
                        data-wow-delay={0}
                      >
                        <div className="card-product-wrapper overflow-visible aspect-ratio-0">
                          <div className="product-thumb-slider thumbs-right">
                            <div className="swiper tf-product-view-main">
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      data-src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      data-src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      data-src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      data-src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="swiper tf-product-view-thumbs"
                              data-direction="vertical"
                            >
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-sale-wrap style-2 z-5">
                            <p className="small-text">Save</p>
                            <p className="title-sidebar-2">$26.000</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-6">
                            <div className="d-flex flex-column">
                              <h6 className="bg-white relative z-5">
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Drone with Camera 1080P HD, Toss to Launch RC
                                  Drone for Adults with Smart APP Trajectory
                                  Flight Altitude Hold One Key Take Off/Landing
                                  Headless 360°Flip Camera Drone 2 Batteries
                                </a>
                              </h6>
                            </div>
                            <div className="group-btn">
                              <p className="price-wrap fw-medium">
                                <span className="new-price h4 fw-normal text-primary mb-0">
                                  $103.999
                                </span>
                                <span className="old-price price-text text-main-2">
                                  $129.999
                                </span>
                              </p>
                              <ul className="list-product-btn flex-row">
                                <li>
                                  <a
                                    href="#shoppingCart"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-cart2" />
                                    <span className="tooltip">Add to Cart</span>
                                  </a>
                                </li>
                                <li className="wishlist">
                                  <a
                                    href="javascript:void(0);"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-heart2" />
                                    <span className="tooltip">
                                      Add to Wishlist
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#quickView"
                                    data-bs-toggle="modal"
                                    className="box-icon quickview btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-view" />
                                    <span className="tooltip">Quick View</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#compare"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-compare1" />
                                    <span className="tooltip">Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={102738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item3">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-75.jpg"
                                  data-src="images/product/product-75.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-20.jpg"
                                  data-src="images/product/product-20.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Audio-Technica ATH-AD700X Audiophile
                                    Open-Air
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $45.500
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/sc-1.jpg"
                                  data-src="images/product/sc-1.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-15.jpg"
                                  data-src="images/product/product-15.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    HAFURY Women Smart Watch, Smartwatch for
                                    Android/iOS
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $51.200
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $89.900
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-80.jpg"
                                  data-src="images/product/product-80.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-73.jpg"
                                  data-src="images/product/product-73.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Camera &amp; Accessories
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Nikon D3500 W/ AF-P DX NIKKOR 18-55mm
                                    f/3.5-5.6G
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $42.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $59.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="on-sale" role="tabpanel">
                  <div className="grid-cls grid-cls-v1">
                    <div className="grid-item1">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-80.jpg"
                                  data-src="images/product/product-80.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-73.jpg"
                                  data-src="images/product/product-73.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Camera &amp; Accessories
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Nikon D3500 W/ AF-P DX NIKKOR 18-55mm
                                    f/3.5-5.6G
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $42.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $59.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-75.jpg"
                                  data-src="images/product/product-75.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-20.jpg"
                                  data-src="images/product/product-20.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Audio-Technica ATH-AD700X Audiophile
                                    Open-Air
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $45.500
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/sc-1.jpg"
                                  data-src="images/product/sc-1.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-15.jpg"
                                  data-src="images/product/product-15.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    HAFURY Women Smart Watch, Smartwatch for
                                    Android/iOS
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $51.200
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $89.900
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-item2">
                      <div
                        className="card-product style-border style-thums-2 p-lg-30 wow fadeInUp"
                        data-wow-delay={0}
                      >
                        <div className="card-product-wrapper overflow-visible aspect-ratio-0">
                          <div className="product-thumb-slider thumbs-right">
                            <div className="swiper tf-product-view-main">
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      data-src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      data-src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      data-src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <a
                                    href="product-detail.html"
                                    className="d-block tf-image-view"
                                  >
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      data-src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                      className="lazyload"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="swiper tf-product-view-thumbs"
                              data-direction="vertical"
                            >
                              <div className="swiper-wrapper">
                                {/* item 1 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/product-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 2 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-17.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 3 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-18.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                {/* item 4 */}
                                <div className="swiper-slide">
                                  <div className="item">
                                    <img
                                      src="images/product/product-thumb/thumb-19.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-sale-wrap style-2 z-5">
                            <p className="small-text">Save</p>
                            <p className="title-sidebar-2">$26.000</p>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title gap-xl-6">
                            <div className="d-flex flex-column">
                              <h6 className="bg-white relative z-5">
                                <a
                                  href="product-detail.html"
                                  className="name-product fw-semibold text-secondary link"
                                >
                                  Drone with Camera 1080P HD, Toss to Launch RC
                                  Drone for Adults with Smart APP Trajectory
                                  Flight Altitude Hold One Key Take Off/Landing
                                  Headless 360°Flip Camera Drone 2 Batteries
                                </a>
                              </h6>
                            </div>
                            <div className="group-btn">
                              <p className="price-wrap fw-medium">
                                <span className="new-price h4 fw-normal text-primary mb-0">
                                  $103.999
                                </span>
                                <span className="old-price price-text text-main-2">
                                  $129.999
                                </span>
                              </p>
                              <ul className="list-product-btn flex-row">
                                <li>
                                  <a
                                    href="#shoppingCart"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-cart2" />
                                    <span className="tooltip">Add to Cart</span>
                                  </a>
                                </li>
                                <li className="wishlist">
                                  <a
                                    href="javascript:void(0);"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-heart2" />
                                    <span className="tooltip">
                                      Add to Wishlist
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#quickView"
                                    data-bs-toggle="modal"
                                    className="box-icon quickview btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-view" />
                                    <span className="tooltip">Quick View</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#compare"
                                    data-bs-toggle="offcanvas"
                                    className="box-icon btn-icon-action hover-tooltip"
                                  >
                                    <span className="icon icon-compare1" />
                                    <span className="tooltip">Compare</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-infor-detail gap-xl-20">
                            <div className="countdown-box">
                              <div
                                className="js-countdown"
                                data-timer={102738}
                                data-labels="Days,Hours,Mins,Secs"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item3">
                      <ul className="product-list-wrap">
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-77.jpg"
                                  data-src="images/product/product-77.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-8.jpg"
                                  data-src="images/product/product-8.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Huawei Nova 8 Pro 4G – Powerful Performance,
                                    120Hz Display, 66W Fast Charging
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $36.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $45.000
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-78.jpg"
                                  data-src="images/product/product-78.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-37.jpg"
                                  data-src="images/product/product-37.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Headphone
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Eskuche 33iS – Retro Design, Premium Sound,
                                    Cables
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $63.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $79.990
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay={0}>
                          <div className="card-product style-row row-small-2 ">
                            <div className="card-product-wrapper">
                              <a
                                href="product-detail.html"
                                className="product-img"
                              >
                                <img
                                  className="img-product lazyload"
                                  src="images/product/product-79.jpg"
                                  data-src="images/product/product-79.jpg"
                                  alt="image-product"
                                />
                                <img
                                  className="img-hover lazyload"
                                  src="images/product/product-72.jpg"
                                  data-src="images/product/product-72.jpg"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                            <div className="card-product-info">
                              <div className="box-title">
                                <div className="bg-white relative z-5">
                                  <p className="caption text-main-2 font-2">
                                    Smartwatch
                                  </p>
                                  <a
                                    href="product-detail.html"
                                    className="name-product body-md-2 fw-semibold text-secondary link"
                                  >
                                    Apple Watch Series 1 Aluminum case with
                                    Sport Band
                                  </a>
                                </div>
                                <div className="group-btn">
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium">
                                      $79.999
                                    </span>
                                    <span className="old-price body-md-2 text-main-2">
                                      $99.999
                                    </span>
                                  </p>
                                  <ul className="list-product-btn flex-row">
                                    <li>
                                      <a
                                        href="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-cart2" />
                                        <span className="tooltip">
                                          Add to Cart
                                        </span>
                                      </a>
                                    </li>
                                    <li className="wishlist">
                                      <a
                                        href="javascript:void(0);"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-heart2" />
                                        <span className="tooltip">
                                          Add to Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#quickView"
                                        data-bs-toggle="modal"
                                        className="box-icon quickview btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-view" />
                                        <span className="tooltip">
                                          Quick View
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#compare"
                                        data-bs-toggle="offcanvas"
                                        className="box-icon btn-icon-action hover-tooltip"
                                      >
                                        <span className="icon icon-compare1" />
                                        <span className="tooltip">Compare</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Grid Collection */}
          {/* Collection */}
          <div className="themesFlat">
            <div className="container">
              <div
                className=" swiper tf-sw-categories"
                data-preview={4}
                data-tablet={3}
                data-mobile-sm={2}
                data-mobile={1}
                data-space-lg={30}
                data-space-md={20}
                data-space={15}
                data-pagination={1}
                data-pagination-sm={2}
                data-pagination-md={3}
                data-pagination-lg={4}
              >
                <div className="swiper-wrapper">
                  {/* item 1 */}
                  <div className="swiper-slide">
                    <div
                      className="cls-category style-abs hover-img wow fadeInLeft"
                      data-wow-delay={0}
                    >
                      <a
                        href="product-detail.html"
                        className="img-box img-style d-block"
                      >
                        <img
                          src="images/collection/cls-category-1.jpg"
                          data-src="images/collection/cls-category-1.jpg"
                          alt=""
                          className="lazyload"
                        />
                      </a>
                      <div className="content">
                        <div className="box-title font-2 text-white text-uppercase">
                          <p className="product-title-2">catch big</p>
                          <p className="main-title-2 fw-bold">deals</p>
                          <p className="product-title-2">on the headphones</p>
                        </div>
                        <a
                          href="product-detail.html"
                          className="tf-btn-icon style-white"
                        >
                          <i className="icon-circle-chevron-right" />
                          <span className="font-2">Shop now</span>
                        </a>
                      </div>
                      <div className="box-sale-wrap">
                        <p className="small-text">Sale</p>
                        <p className="title-sidebar-2">20%</p>
                      </div>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div className="swiper-slide">
                    <div
                      className="cls-category style-abs hover-img wow fadeInLeft"
                      data-wow-delay="0.1s"
                    >
                      <a
                        href="product-detail.html"
                        className="img-box img-style d-block"
                      >
                        <img
                          src="images/collection/cls-category-2.jpg"
                          data-src="images/collection/cls-category-2.jpg"
                          alt=""
                          className="lazyload"
                        />
                      </a>
                      <div className="content">
                        <div className="box-title font-2 text-white text-uppercase">
                          <p className="product-title-2">catch big</p>
                          <p className="main-title-2 fw-bold">deals</p>
                          <p className="product-title-2">on the cameras</p>
                        </div>
                        <a
                          href="product-detail.html"
                          className="tf-btn-icon style-white"
                        >
                          <i className="icon-circle-chevron-right" />
                          <span className="font-2">Shop now</span>
                        </a>
                      </div>
                      <div className="box-sale-wrap">
                        <p className="small-text">Sale</p>
                        <p className="title-sidebar-2">15%</p>
                      </div>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div className="swiper-slide">
                    <div
                      className="cls-category style-abs hover-img wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <a
                        href="product-detail.html"
                        className="img-box img-style d-block"
                      >
                        <img
                          src="images/collection/cls-category-3.jpg"
                          data-src="images/collection/cls-category-3.jpg"
                          alt=""
                          className="lazyload"
                        />
                      </a>
                      <div className="content">
                        <div className="box-title font-2 text-white text-uppercase">
                          <p className="product-title-2">catch big</p>
                          <p className="main-title-2 fw-bold">deals</p>
                          <p className="product-title-2">on the phones</p>
                        </div>
                        <a
                          href="product-detail.html"
                          className="tf-btn-icon style-white"
                        >
                          <i className="icon-circle-chevron-right" />
                          <span className="font-2">Shop now</span>
                        </a>
                      </div>
                      <div className="box-sale-wrap">
                        <p className="small-text">Sale</p>
                        <p className="title-sidebar-2">28%</p>
                      </div>
                    </div>
                  </div>
                  {/* item 4 */}
                  <div className="swiper-slide">
                    <div
                      className="cls-category style-abs hover-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <a
                        href="product-detail.html"
                        className="img-box img-style d-block"
                      >
                        <img
                          src="images/collection/cls-category-4.jpg"
                          data-src="images/collection/cls-category-4.jpg"
                          alt=""
                          className="lazyload"
                        />
                      </a>
                      <div className="content">
                        <div className="box-title">
                          <p className="text-black product-title-2 text-uppercase">
                            catch big
                          </p>
                          <p className="text-black main-title-2 text-uppercase fw-bold">
                            deals
                          </p>
                          <p className="text-black product-title-2 text-uppercase">
                            on the watchs
                          </p>
                        </div>
                        <a href="product-detail.html" className="tf-btn-icon">
                          <i className="icon-circle-chevron-right" />
                          <span>Shop now</span>
                        </a>
                      </div>
                      <div className="box-sale-wrap">
                        <p className="small-text">Sale</p>
                        <p className="title-sidebar-2">22%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-dot-default sw-pagination-categories justify-content-center" />
              </div>
            </div>
          </div>
          {/* /Collection */}
          {/* Top Seller */}
          <section className="tf-sp-2">
            <div className="container">
              <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                <h5 className="fw-semibold">Best Seller</h5>
                <div className="box-btn-slide relative">
                  <div className="swiper-button-prev nav-swiper nav-prev-products">
                    <i className="icon-arrow-left-lg" />
                  </div>
                  <div className="swiper-button-next nav-swiper nav-next-products">
                    <i className="icon-arrow-right-lg" />
                  </div>
                </div>
              </div>
              <div
                className="swiper tf-sw-products"
                data-preview={5}
                data-tablet={4}
                data-mobile-sm={3}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={15}
                data-space={15}
                data-pagination={2}
                data-pagination-sm={3}
                data-pagination-md={4}
                data-pagination-lg={5}
                data-grid={2}
              >
                <div className="swiper-wrapper">
                  {/* item 1 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay={0}
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-24.jpg"
                            data-src="images/product/product-24.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-149.jpg"
                            data-src="images/product/product-149.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Laptop &amp; Computer
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              HP Pavilion 14-dv0598sa 14" Full HD Intel Core
                              i3-1115G4
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $69.999
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-25.jpg"
                            data-src="images/product/product-25.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-74.jpg"
                            data-src="images/product/product-74.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Smartphone
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              iPhone 11 Pro Max – Super Retina XDR, A13 Bionic,
                              Triple-Camera System
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $84.500
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-26.jpg"
                            data-src="images/product/product-26.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-26.jpg"
                            data-src="images/product/product-26.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Musicphone
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Sony Ericsson Unveils Seventh Walkman Phone –
                              Music &amp; Style Combined
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $95.999
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 4 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-27.jpg"
                            data-src="images/product/product-27.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-135.jpg"
                            data-src="images/product/product-135.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Accessories
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              USB-C Hub &amp; Docking Station – Multiport
                              Adapter for Laptops &amp; Devices
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $72.490
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 5 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-28.jpg"
                            data-src="images/product/product-28.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-84.jpg"
                            data-src="images/product/product-84.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Smartwatch
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              UMIDIGI Uwatch 2S – Fitness Tracker with Heart
                              Rate Monitor &amp; 1.3" Touch Screen
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $88.888
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 6 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay={0}
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-31.jpg"
                            data-src="images/product/product-31.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-31.jpg"
                            data-src="images/product/product-31.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Electronics
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              10,000mAh PD 3.0 Power Bank – 18W Fast Charging
                              USB-C Battery Pack
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $63.750
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 7 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-32.jpg"
                            data-src="images/product/product-32.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-32.jpg"
                            data-src="images/product/product-32.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Smartspeaker
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Echo Dot (3rd Gen) – Smart Speaker with Clock
                              &amp; Alexa
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $79.900
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 8 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-33.jpg"
                            data-src="images/product/product-33.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-49.jpg"
                            data-src="images/product/product-49.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Wireless Earbuds
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              TWS Y50 Wireless Earbuds – Bluetooth 5.0, HiFi
                              Sound for Xiaomi &amp; Samsung
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $54.320
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 9 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-34.jpg"
                            data-src="images/product/product-34.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-109.jpg"
                            data-src="images/product/product-109.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Smartwatch
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Amazfit GTS 2 Mini – GPS Smartwatch with Alexa,
                              14-Day Battery, 70+ Sports Modes
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $91.499
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 10 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-35.jpg"
                            data-src="images/product/product-35.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-35.jpg"
                            data-src="images/product/product-35.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Electronics
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Apple Magic Mouse (USB-C) – Multi-Touch Wireless
                              Mouse
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $47.800
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 11 */}
                  <div className="swiper-slide">
                    <div className="card-product style-img-border">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-29.jpg"
                            data-src="images/product/product-29.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-29.jpg"
                            data-src="images/product/product-29.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Electronics
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Remax RB-M23 UFO – Portable Bluetooth Speaker with
                              Deep Bass &amp; Stylish Design
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $59.600
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 12 */}
                  <div className="swiper-slide">
                    <div className="card-product style-small style-img-border">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-36.jpg"
                            data-src="images/product/product-36.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-36.jpg"
                            data-src="images/product/product-36.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Electronics
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Harman Kardon Aura Studio 3 – 130W Wireless
                              Bluetooth Speaker with Premium Sound
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $83.750
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center" />
              </div>
            </div>
          </section>
          {/* /Top Seller */}
          {/* Banner Product */}
          <section>
            <div className="container">
              <a
                href="product-detail.html"
                className="banner-image-product-2 hover-img d-block"
              >
                <div className="item-image item-1 img-style overflow-visible">
                  <img
                    src="images/item/camera-2.png"
                    data-src="images/item/camera-2.png"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div className="item-image item-2 img-style overflow-visible d-none d-lg-block">
                  <img
                    src="images/item/camera-3.png"
                    data-src="images/item/camera-3.png"
                    alt=""
                    className="lazyload"
                  />
                </div>
                <div
                  className=" item-banner has-bg-img"
                  data-bg-img="images/banner/banner-2.jpg"
                  data-bg-size="cover"
                  data-bg-repeat="no-repeat"
                >
                  <div className="inner">
                    <h3 className="fw-normal text-white lh-lg-50 font-2">
                      Shop and <span className="fw-bold">SAVE BIG</span>
                      <br />
                      on hottest camera
                    </h3>
                    <div className="box-sale-wrap type-3 relative">
                      <p className="small-text">Save</p>
                      <p className="price-text-2 ">$68.990</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>
          {/* /Banner Product */}
          {/* Top Trend */}
          <section className="tf-sp-2">
            <div className="container">
              <div className="tf-grid-product">
                <div className="tf-grid-product-item box-btn-slide-item">
                  <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <h5 className="fw-semibold">Top 20</h5>
                    <div className="box-btn-slide relative">
                      <div className="swiper-button-prev nav-swiper nav-prev-products">
                        <i className="icon-arrow-left-lg" />
                      </div>
                      <div className="swiper-button-next nav-swiper nav-next-products">
                        <i className="icon-arrow-right-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper tf-sw-products"
                    data-preview={1}
                    data-tablet={1}
                    data-mobile-sm={1}
                    data-mobile={1}
                    data-space-lg={20}
                    data-space-md={20}
                    data-space={20}
                    data-pagination={1}
                    data-pagination-sm={1}
                    data-pagination-md={1}
                    data-pagination-lg={1}
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-66.jpg"
                                    data-src="images/product/product-66.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-45.jpg"
                                    data-src="images/product/product-45.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Game Controller
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Retroflag Case for Raspberry Pi 3 B+ –
                                      Classic Design with Game Controller
                                      Compatibility
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $71.999
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $89.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-67.jpg"
                                    data-src="images/product/product-67.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-25.jpg"
                                    data-src="images/product/product-25.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      iPhone 11 (64GB) VN/A – Powerful
                                      Performance, Dual Camera, Liquid Retina
                                      Display
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $61.200
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $76.500
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-68.jpg"
                                    data-src="images/product/product-68.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-54.jpg"
                                    data-src="images/product/product-54.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Wireless Earbuds
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Apple AirPods – True Wireless Earbuds with
                                      Seamless Connectivity
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $75.990
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $94.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-69.jpg"
                                    data-src="images/product/product-69.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-69.jpg"
                                    data-src="images/product/product-69.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Camera &amp; Accessories
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Leica Summaron-M 28mm f/5.6 – Classic
                                      Prime Lens Boxed Edition
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $66.200
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $82.750
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-75.jpg"
                                    data-src="images/product/product-75.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-65.jpg"
                                    data-src="images/product/product-65.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Beats Studio3 Wireless – Noise Cancelling
                                      Headphones with Apple W1 Chip &amp; Class
                                      1 Bluetooth
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $79.900
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $99.900
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-70.jpg"
                                    data-src="images/product/product-70.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-28.jpg"
                                    data-src="images/product/product-28.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Fitbit Charge 2 – Lavender Rose Gold Smart
                                      Fitness Tracker (Size S/L)
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $38.500
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $45.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center"></div>
                  </div>
                </div>
                <div className="tf-grid-product-item box-btn-slide-item">
                  <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <h5 className="fw-semibold">Featured Products</h5>
                    <div className="box-btn-slide relative">
                      <div className="swiper-button-prev nav-swiper nav-prev-products">
                        <i className="icon-arrow-left-lg" />
                      </div>
                      <div className="swiper-button-next nav-swiper nav-next-products">
                        <i className="icon-arrow-right-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper tf-sw-products"
                    data-preview={1}
                    data-tablet={1}
                    data-mobile-sm={1}
                    data-mobile={1}
                    data-space-lg={20}
                    data-space-md={20}
                    data-space={20}
                    data-pagination={1}
                    data-pagination-sm={1}
                    data-pagination-md={1}
                    data-pagination-lg={1}
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-69.jpg"
                                    data-src="images/product/product-69.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-69.jpg"
                                    data-src="images/product/product-69.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Camera &amp; Accessories
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Leica Summaron-M 28mm f/5.6 – Classic
                                      Prime Lens Boxed Edition
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $66.200
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $82.750
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-75.jpg"
                                    data-src="images/product/product-75.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-65.jpg"
                                    data-src="images/product/product-65.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Beats Studio3 Wireless – Noise Cancelling
                                      Headphones with Apple W1 Chip &amp; Class
                                      1 Bluetooth
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $79.900
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $99.900
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-70.jpg"
                                    data-src="images/product/product-70.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-28.jpg"
                                    data-src="images/product/product-28.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Fitbit Charge 2 – Lavender Rose Gold Smart
                                      Fitness Tracker (Size S/L)
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $38.500
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $45.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/sc-1.jpg"
                                    data-src="images/product/sc-1.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-34.jpg"
                                    data-src="images/product/product-34.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Apple Watch Series 2 (38mm) – Aluminum
                                      Case, Call &amp; Message Support
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $74.250
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $92.750
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-71.jpg"
                                    data-src="images/product/product-71.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-52.jpg"
                                    data-src="images/product/product-52.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Laptop &amp; Computer
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      HP 15-fd0079TU – Intel i5-1335U, 16GB RAM,
                                      512GB SSD, 15.6" FHD Display
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $62.999
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $78.490
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-72.jpg"
                                    data-src="images/product/product-72.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-59.jpg"
                                    data-src="images/product/product-59.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Huami Amazfit GTS 2 – Smartwatch with
                                      AMOLED Display &amp; Multi-Sport Modes
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $12.499
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $15.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center"></div>
                  </div>
                </div>
                <div className="tf-grid-product-item box-btn-slide-item">
                  <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <h5 className="fw-semibold">Top Selling Product</h5>
                    <div className="box-btn-slide relative">
                      <div className="swiper-button-prev nav-swiper nav-prev-products">
                        <i className="icon-arrow-left-lg" />
                      </div>
                      <div className="swiper-button-next nav-swiper nav-next-products">
                        <i className="icon-arrow-right-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper tf-sw-products"
                    data-preview={1}
                    data-tablet={1}
                    data-mobile-sm={1}
                    data-mobile={1}
                    data-space-lg={20}
                    data-space-md={20}
                    data-space={20}
                    data-pagination={1}
                    data-pagination-sm={1}
                    data-pagination-md={1}
                    data-pagination-lg={1}
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/sc-1.jpg"
                                    data-src="images/product/sc-1.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-34.jpg"
                                    data-src="images/product/product-34.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Apple Watch Series 2 (38mm) – Aluminum
                                      Case, Call &amp; Message Support
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $74.250
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $92.750
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-71.jpg"
                                    data-src="images/product/product-71.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-52.jpg"
                                    data-src="images/product/product-52.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Laptop &amp; Computer
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      HP 15-fd0079TU – Intel i5-1335U, 16GB RAM,
                                      512GB SSD, 15.6" FHD Display
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $62.999
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $78.490
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-72.jpg"
                                    data-src="images/product/product-72.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-59.jpg"
                                    data-src="images/product/product-59.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartwatch
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Huami Amazfit GTS 2 – Smartwatch with
                                      AMOLED Display &amp; Multi-Sport Modes
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $12.499
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $15.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-73.jpg"
                                    data-src="images/product/product-73.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-47.jpg"
                                    data-src="images/product/product-47.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Camera &amp; Accessories
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Sony ZV-1 (White) – Compact Digital Camera
                                      for Vlogging &amp; Content Creation
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $47.900
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $59.800
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-76.jpg"
                                    data-src="images/product/product-76.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-57.jpg"
                                    data-src="images/product/product-57.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Game Consoles
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Sony PlayStation 5 (PS5) – Next-Gen Gaming
                                      Console with Ultra-Fast SSD &amp; 4K
                                      Graphics
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $71.500
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $89.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-74.jpg"
                                    data-src="images/product/product-74.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-25.jpg"
                                    data-src="images/product/product-25.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      iPhone 6 Plus (128GB) – Pre-Owned
                                      Smartphone with Large Display &amp; iOS
                                      Experience
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $15.499
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $19.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center"></div>
                  </div>
                </div>
                <div className="tf-grid-product-item box-btn-slide-item">
                  <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <h5 className="fw-semibold">On-sale Product</h5>
                    <div className="box-btn-slide relative">
                      <div className="swiper-button-prev nav-swiper nav-prev-products">
                        <i className="icon-arrow-left-lg" />
                      </div>
                      <div className="swiper-button-next nav-swiper nav-next-products">
                        <i className="icon-arrow-right-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper tf-sw-products"
                    data-preview={1}
                    data-tablet={1}
                    data-mobile-sm={1}
                    data-mobile={1}
                    data-space-lg={20}
                    data-space-md={20}
                    data-space={20}
                    data-pagination={1}
                    data-pagination-sm={1}
                    data-pagination-md={1}
                    data-pagination-lg={1}
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-73.jpg"
                                    data-src="images/product/product-73.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-47.jpg"
                                    data-src="images/product/product-47.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Camera &amp; Accessories
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Sony ZV-1 (White) – Compact Digital Camera
                                      for Vlogging &amp; Content Creation
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $47.900
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $59.800
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-76.jpg"
                                    data-src="images/product/product-76.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-57.jpg"
                                    data-src="images/product/product-57.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Game Consoles
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Sony PlayStation 5 (PS5) – Next-Gen Gaming
                                      Console with Ultra-Fast SSD &amp; 4K
                                      Graphics
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $71.500
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $89.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-74.jpg"
                                    data-src="images/product/product-74.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-25.jpg"
                                    data-src="images/product/product-25.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      iPhone 6 Plus (128GB) – Pre-Owned
                                      Smartphone with Large Display &amp; iOS
                                      Experience
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $15.499
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $19.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <ul className="product-list-wrap">
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-66.jpg"
                                    data-src="images/product/product-66.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-45.jpg"
                                    data-src="images/product/product-45.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Game Controller
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Retroflag Case for Raspberry Pi 3 B+ –
                                      Classic Design with Game Controller
                                      Compatibility
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $71.999
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $89.999
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-67.jpg"
                                    data-src="images/product/product-67.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-25.jpg"
                                    data-src="images/product/product-25.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Smartphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      iPhone 11 (64GB) VN/A – Powerful
                                      Performance, Dual Camera, Liquid Retina
                                      Display
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $61.200
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $76.500
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp" data-wow-delay="0s">
                            <div className="card-product style-row row-small-2 ">
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-68.jpg"
                                    data-src="images/product/product-68.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-54.jpg"
                                    data-src="images/product/product-54.jpg"
                                    alt="image-product"
                                  />
                                </a>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="bg-white relative z-5">
                                    <p className="caption text-main-2 font-2">
                                      Wireless Earbuds
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Apple AirPods – True Wireless Earbuds with
                                      Seamless Connectivity
                                    </a>
                                  </div>
                                  <div className="group-btn">
                                    <p className="price-wrap fw-medium">
                                      <span className="new-price price-text fw-medium">
                                        $75.990
                                      </span>
                                      <span className="old-price body-md-2 text-main-2">
                                        $94.990
                                      </span>
                                    </p>
                                    <ul className="list-product-btn flex-row">
                                      <li>
                                        <a
                                          href="#shoppingCart"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon add-to-cart btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-cart2" />
                                          <span className="tooltip">
                                            Add to Cart
                                          </span>
                                        </a>
                                      </li>
                                      <li className="wishlist">
                                        <a
                                          href="javascript:void(0);"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-heart2" />
                                          <span className="tooltip">
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#quickView"
                                          data-bs-toggle="modal"
                                          className="box-icon quickview btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-view" />
                                          <span className="tooltip">
                                            Quick View
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#compare"
                                          data-bs-toggle="offcanvas"
                                          className="box-icon btn-icon-action hover-tooltip"
                                        >
                                          <span className="icon icon-compare1" />
                                          <span className="tooltip">
                                            Compare
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Top Trend */}
          {/* Banner Product */}
          <section>
            <div className="container">
              <div
                className=" swiper tf-sw-categories overflow-xxl-visible"
                data-preview={2}
                data-tablet={2}
                data-mobile-sm={1}
                data-mobile={1}
                data-space-lg={30}
                data-space-md={20}
                data-space={15}
                data-pagination={1}
                data-pagination-sm={2}
                data-pagination-md={2}
                data-pagination-lg={2}
              >
                <div className="swiper-wrapper">
                  {/* item 1 */}
                  <div className="swiper-slide">
                    <a
                      href="product-detail.html"
                      className="banner-image-product-2 type-sp-2 hover-img d-block"
                    >
                      <div className="item-image img-style overflow-visible position2">
                        <img
                          src="images/item/laptop.png"
                          data-src="images/item/laptop.png"
                          alt=""
                          className="lazyload"
                        />
                      </div>
                      <div
                        className=" item-banner has-bg-img "
                        data-bg-img="images/banner/banner-3.jpg"
                        data-bg-size="cover"
                        data-bg-repeat="no-repeat"
                      >
                        <div className="inner justify-content-xl-end">
                          <div className="box-sale-wrap type-3 relative">
                            <p className="small-text">From</p>
                            <p className="main-title-2">$399</p>
                          </div>
                          <h4 className="name fw-normal text-white lh-lg-38 text-xl-end">
                            Lenovo ThinkBook
                            <br />
                            <span className="fw-bold">8GB/MX450 2GB</span>
                          </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* item 2 */}
                  <div className="swiper-slide">
                    <a
                      href="product-detail.html"
                      className="banner-image-product-2 style-2 type-sp-2 hover-img d-block"
                    >
                      <div className="item-image img-style overflow-visible position3">
                        <img
                          src="images/item/camera-1.png"
                          data-src="images/item/camera-1.png"
                          alt=""
                          className="lazyload"
                        />
                      </div>
                      <div
                        className=" item-banner has-bg-img "
                        data-bg-img="images/banner/banner-4.jpg"
                        data-bg-size="cover"
                        data-bg-repeat="no-repeat"
                      >
                        <div className="inner">
                          <div className="box-sale-wrap box-price type-3 relative">
                            <p className="small-text sub-price">From</p>
                            <p className="main-title-2 num-price">$1.399</p>
                          </div>
                          <h4 className="name fw-normal text-white lh-lg-38 text-xxl-center text-line-clamp-2">
                            ThinkPad X1 Carbon Gen 9
                            <br className="d-none d-sm-block" />
                            <span className="fw-bold">4K HDR-Core i7 32GB</span>
                          </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="sw-dot-default sw-pagination-categories justify-content-center" />
              </div>
            </div>
          </section>
          {/* /Banner Product */}
          {/* Recently */}
          <section className="tf-sp-2">
            <div className="container">
              <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                <h5 className="fw-semibold">Recently Viewed</h5>
                <div className="box-btn-slide relative">
                  <div className="swiper-button-prev nav-swiper nav-prev-products">
                    <i className="icon-arrow-left-lg" />
                  </div>
                  <div className="swiper-button-next nav-swiper nav-next-products">
                    <i className="icon-arrow-right-lg" />
                  </div>
                </div>
              </div>
              <div
                className="swiper tf-sw-products"
                data-preview={5}
                data-tablet={4}
                data-mobile-sm={3}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={20}
                data-space={15}
                data-pagination={2}
                data-pagination-sm={3}
                data-pagination-md={4}
                data-pagination-lg={5}
              >
                <div className="swiper-wrapper">
                  {/* item 1 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInLeft"
                      data-wow-delay="0s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-134.jpg"
                            data-src="images/product/product-134.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-detail-12.jpg"
                            data-src="images/product/product-detail-12.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Headphone
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Urbanears Pampas – Wireless Over-Ear Headphones
                              with Immersive Sound (Almond Beige)
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $48.990
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 2 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInLeft"
                      data-wow-delay="0.1s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-2.jpg"
                            data-src="images/product/product-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-detail-9.jpg"
                            data-src="images/product/product-detail-9.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Headphone
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Upgrader Headphones – Altec Lansing by ECCO
                              Design, Premium Sound &amp; Comfort
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $27.500
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 3 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-3.jpg"
                            data-src="images/product/product-3.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-10.jpg"
                            data-src="images/product/product-10.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Smartwatch
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Apple Watch Series 6 (GPS) – 40mm Aluminum Case
                              with Sport Band, Official Warranty
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $63.999
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 4 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-4.jpg"
                            data-src="images/product/product-4.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-19.jpg"
                            data-src="images/product/product-19.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Laptop &amp; Computer
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              Lenovo Yoga 910-13IKB – 2-in-1 Ultrabook with
                              Touchscreen &amp; 360° Hinge
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $39.990
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 5 */}
                  <div className="swiper-slide">
                    <div
                      className="card-product style-img-border wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-5.jpg"
                            data-src="images/product/product-5.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-153.jpg"
                            data-src="images/product/product-153.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Wireless Earphones
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              JBL LIVE200BT – Wireless Neckband Earphones with
                              Premium Sound &amp; Comfort
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $14.999
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 6 */}
                  <div className="swiper-slide">
                    <div className="card-product style-img-border">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-6.jpg"
                            data-src="images/product/product-6.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-43.jpg"
                            data-src="images/product/product-43.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Electronics
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              SteelSeries Aerox 9 Wireless – Ultra-Lightweight
                              Gaming Mouse with 12 Programmable Buttons
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $87.500
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item 7 */}
                  <div className="swiper-slide">
                    <div className="card-product style-img-border">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="img-product lazyload"
                            src="images/product/product-7.jpg"
                            data-src="images/product/product-7.jpg"
                            alt="image-product"
                          />
                          <img
                            className="img-hover lazyload"
                            src="images/product/product-7.jpg"
                            data-src="images/product/product-7.jpg"
                            alt="image-product"
                          />
                        </a>
                        <ul className="list-product-btn">
                          <li>
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-cart2" />
                              <span className="tooltip">Add to Cart</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <a
                              href="javascript:void(0);"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-heart2" />
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#quickView"
                              data-bs-toggle="modal"
                              className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-view" />
                              <span className="tooltip">Quick View</span>
                            </a>
                          </li>
                          <li className="d-none d-sm-block">
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon btn-icon-action hover-tooltip tooltip-left"
                            >
                              <span className="icon icon-compare1" />
                              <span className="tooltip">Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="d-flex flex-column">
                            <p className="caption text-main-2 font-2">
                              Wired Earphones
                            </p>
                            <a
                              href="product-detail.html"
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              3.5mm Stereo Earphones – HiFi Bass Headphones with
                              Microphone for Music &amp; Calls
                            </a>
                          </div>
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              $74.600
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center" />
              </div>
            </div>
          </section>
          {/* /Recently */}
          {/* Footer */}
          <footer className="tf-footer">
            <div className="ft-body-wrap">
              <div className="ft-body-inner">
                <div className="container">
                  <div className="ft-inner flex-wrap flex-xl-nowrap">
                    <div className="ft-logo">
                      <a href="index.html" className="logo-site">
                        <img src="images/logo/logo.svg" alt="Logo" />
                      </a>
                      <div className="method-payment">
                        <p>We accept:</p>
                        <ul className="method-list">
                          <li>
                            <img src="images/payment/visa.svg" alt="Payment" />
                          </li>
                          <li>
                            <img
                              src="images/payment/paypal.svg"
                              alt="Payment"
                            />
                          </li>
                          <li>
                            <img
                              src="images/payment/discover.svg"
                              alt="Payment"
                            />
                          </li>
                          <li>
                            <img
                              src="images/payment/master.svg"
                              alt="Payment"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="ft-link-wrap w-100 tf-grid-layout md-col-2 lg-col-4">
                      <li className="footer-col-block">
                        <h6 className="ft-heading footer-heading-mobile fw-semibold">
                          Get help
                        </h6>
                        <div className="tf-collapse-content">
                          <ul className="ft-menu-list">
                            <li>
                              <a href="privacy.html" className="link">
                                Delivery Information
                              </a>
                            </li>
                            <li>
                              <a href="faq.html" className="link">
                                Sale Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a href="privacy.html" className="link">
                                Returns &amp; Refunds
                              </a>
                            </li>
                            <li>
                              <a href="privacy.html" className="link">
                                Privacy Notice
                              </a>
                            </li>
                            <li>
                              <a href="faq.html" className="link">
                                Shopping FAQs
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="footer-col-block">
                        <h6 className="ft-heading footer-heading-mobile fw-semibold">
                          Popular categories
                        </h6>
                        <div className="tf-collapse-content">
                          <ul className="ft-menu-list">
                            <li>
                              <a href="shop-default.html" className="link">
                                Laptops &amp; Computers
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                Cameras &amp; Photography
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                Smart Phones &amp; Tablets
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                Video Games &amp; Consoles
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                TV &amp; Audio
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                Gadgets
                              </a>
                            </li>
                            <li>
                              <a href="shop-default.html" className="link">
                                Waterproof Headphones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="footer-col-block">
                        <h6 className="ft-heading footer-heading-mobile fw-semibold">
                          Customer Care
                        </h6>
                        <div className="tf-collapse-content">
                          <ul className="ft-menu-list">
                            <li>
                              <a href="my-account.html" className="link">
                                My Account
                              </a>
                            </li>
                            <li>
                              <a href="track-your-order.html" className="link">
                                Track your Order
                              </a>
                            </li>
                            <li>
                              <a href="contact.html" className="link">
                                Customer Service
                              </a>
                            </li>
                            <li>
                              <a href="privacy.html" className="link">
                                Returns/Exchange
                              </a>
                            </li>
                            <li>
                              <a href="faq.html" className="link">
                                FAQs
                              </a>
                            </li>
                            <li>
                              <a href="contact.html" className="link">
                                Product Support
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="footer-col-block type-sp-2">
                        <h6 className="ft-heading footer-heading-mobile fw-semibold">
                          Contact
                        </h6>
                        <div className="tf-collapse-content">
                          <ul className="ft-menu-list ft-contact-list">
                            <li>
                              <span className="icon">
                                <i className="icon-location" />
                              </span>
                              <a href="#" className="link">
                                8500 Lorem Street Chicago, IL 55030 Dolor sit
                                amet
                              </a>
                            </li>
                            <li>
                              <span className="icon">
                                <i className="icon-phone" />
                              </span>
                              <a href="#" className="product-title">
                                <span className="product-title text-primary">
                                  +8(800) 123 4567
                                </span>
                              </a>
                            </li>
                            <li>
                              <span className="icon">
                                <i className="icon-direction" />
                              </span>
                              <a href="#" className="">
                                <span className="text-primary">
                                  onsus@support.com
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ft-body-center bg-gray">
                <div className="container">
                  <div className="ft-center justify-content-xxl-between">
                    <p className="notice text-white justify-content-xxl-between">
                      <span className="main-title fw-semibold ">
                        <img src="images/mail.svg" alt="" />
                        10% Off Your First Order
                      </span>
                      <span className="body-text-3">
                        Be the first to know about offers, new products and
                        discounted products
                      </span>
                    </p>
                    <form
                      action="#"
                      className="form-newsletter"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div className="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            name="email-form"
                            className="subscribe-email type-fs-2"
                            placeholder="Enter your email address"
                            tabIndex={0}
                            aria-required="true"
                            required=""
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="subscribe-button tf-btn btn-large hover-shine"
                            type="submit"
                          >
                            <span className="body-md-2 fw-semibold text-white">
                              Subscribe
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ft-body-bottom">
                <div className="container">
                  <div className="ft-bottom">
                    <ul className="social-list">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/">
                          <i className="icon-x" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/">
                          <i className="icon-linkin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://web.whatsapp.com/">
                          <i className="icon-whatapp" />
                        </a>
                      </li>
                    </ul>
                    <ul className="ft-menu-list-2 body-text-3">
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          New arrivals
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          Best sale
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          Value of the day
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          Top 100 offers
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid.html"
                          className="title-sidebar link fw-bold"
                        >
                          <i className="icon-fire" /> 50% OFF
                        </a>
                      </li>
                    </ul>
                    <p className="nocopy caption text-center">
                      <span className="fw-medium">Onsus.</span>© 2025. All right
                      reserved - Designed by ThemesFlat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* /Footer */}
        </div>
        {/* Mobile Menu */}
        <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
          <span
            className="icon-close btn-close-mb link"
            data-bs-dismiss="offcanvas"
          />
          <div className="logo-site">
            <a href="index.html">
              <img src="images/logo/logo.svg" alt="" />
            </a>
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
                      <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                        <li className="nav-mb-item active">
                          <a
                            href="#dropdown-menu-home"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="dropdown-menu-home"
                          >
                            <span>Home</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="dropdown-menu-home" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a
                                  href="index.html"
                                  className="sub-nav-link active"
                                >
                                  Home 1
                                </a>
                              </li>
                              <li>
                                <a href="home-2.html" className="sub-nav-link">
                                  Home 2
                                </a>
                              </li>
                              <li>
                                <a href="home-3.html" className="sub-nav-link">
                                  Home 3
                                </a>
                              </li>
                              <li>
                                <a href="home-4.html" className="sub-nav-link">
                                  Home 4
                                </a>
                              </li>
                              <li>
                                <a href="home-5.html" className="sub-nav-link">
                                  Home 5
                                </a>
                              </li>
                              <li>
                                <a href="home-6.html" className="sub-nav-link">
                                  Home 6
                                </a>
                              </li>
                              <li>
                                <a href="home-7.html" className="sub-nav-link">
                                  Home 7
                                </a>
                              </li>
                              <li>
                                <a href="home-8.html" className="sub-nav-link">
                                  Home 8
                                </a>
                              </li>
                              <li>
                                <a href="home-9.html" className="sub-nav-link">
                                  Home 9
                                </a>
                              </li>
                              <li>
                                <a href="home-10.html" className="sub-nav-link">
                                  Home 10
                                </a>
                              </li>
                              <li>
                                <a href="home-11.html" className="sub-nav-link">
                                  Home 11
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-mb-item">
                          <a
                            href="#dropdown-menu-shop"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="dropdown-menu-shop"
                          >
                            <span>Shop</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="dropdown-menu-shop" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a
                                  href="#shop_layout"
                                  className="sub-nav-link collapsed"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="shop_layout"
                                >
                                  Shop Layout
                                  <span className="btn-open-sub" />
                                </a>
                                <div id="shop_layout" className="collapse">
                                  <ul className="sub-nav-menu sub-menu-level-2">
                                    <li>
                                      <a
                                        href="shop-default.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Shop Default</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-right-sidebar.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Shop Right Sidebar</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-fullwidth.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Shop Full Width</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="shop-cart.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Shop Cart</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  href="#woo_page"
                                  className="sub-nav-link collapsed"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="woo_page"
                                >
                                  Woo Page
                                  <span className="btn-open-sub" />
                                </a>
                                <div className="collapse" id="woo_page">
                                  <ul className="sub-nav-menu sub-menu-level-2">
                                    <li>
                                      <a
                                        href="compare.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Compare</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Wishlist</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="checkout.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Check Out</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="order-details.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Order Detail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="track-your-order.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Track Your Order</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="my-account.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>My Account</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-mb-item">
                          <a
                            href="#dropdown-menu-product"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="dropdown-menu-product"
                          >
                            <span>Product</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="dropdown-menu-product" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a
                                  href="#product_layout"
                                  className="sub-nav-link collapsed"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="product_layout"
                                >
                                  Product Layout
                                  <span className="btn-open-sub" />
                                </a>
                                <div className="collapse" id="product_layout">
                                  <ul className="sub-nav-menu sub-menu-level-2">
                                    <li>
                                      <a
                                        href="product-detail.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Detail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-thumbs-right.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Right Thumbnail</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-thumbs-left.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Left Thumbnail</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  href="#product_detail"
                                  className="sub-nav-link collapsed"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="product_detail"
                                >
                                  Product Detail
                                  <span className="btn-open-sub" />
                                </a>
                                <div className="collapse" id="product_detail">
                                  <ul className="sub-nav-menu sub-menu-level-2">
                                    <li>
                                      <a
                                        href="product-detail-2.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Detail Style 2</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-detail-3.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Detail Style 3</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-detail-4.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Detail Style 4</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-inner-zoom.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Inner Zoom</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="product-inner-circle-zoom.html"
                                        className="sub-nav-link body-md-2"
                                      >
                                        <span>Product Inner Circle Zoom</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-mb-item">
                          <a
                            href="#dropdown-menu-blog"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="dropdown-menu-blog"
                          >
                            <span>Blog</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="dropdown-menu-blog" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a
                                  href="blog-list.html"
                                  className="sub-nav-link"
                                >
                                  Blog List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="blog-grid.html"
                                  className="sub-nav-link"
                                >
                                  Blog Grid
                                </a>
                              </li>
                              <li>
                                <a
                                  href="blog-detail.html"
                                  className="sub-nav-link"
                                >
                                  Blog Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-mb-item">
                          <a
                            href="#dropdown-menu-page"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="dropdown-menu-page"
                          >
                            <span>Pages</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="dropdown-menu-page" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a
                                  href="contact.html"
                                  className="sub-nav-link body-md-2"
                                >
                                  <span>Contact</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="about.html"
                                  className="sub-nav-link body-md-2"
                                >
                                  <span>About</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="privacy.html"
                                  className="sub-nav-link body-md-2"
                                >
                                  <span>Privacy</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="faq.html"
                                  className="sub-nav-link body-md-2"
                                >
                                  <span>FAQs</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="404.html"
                                  className="sub-nav-link body-md-2"
                                >
                                  <span>404</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-other-content">
                      <ul className="mb-info">
                        <li>
                          <p>
                            Address:
                            <a
                              target="_blank"
                              href="https://www.google.com/maps?q=8500LoremStreetChicago,IL55030Dolorsitamet"
                            >
                              <span className="fw-medium">
                                8500 Lorem Street Chicago, IL 55030 Dolor
                              </span>
                            </a>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone:
                            <a href="tel:+88001234567">
                              <span className="fw-medium">
                                +8(800) 123 4567
                              </span>
                            </a>
                          </p>
                        </li>
                        <li>
                          <p>
                            Email:
                            <a href="mailto:onsus@support.com">
                              <span className="fw-medium">
                                onsus@support.com
                              </span>
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane" id="category" role="tabpanel">
                    <div className="mb-content-top">
                      <ul className="nav-ul-mb">
                        <li className="nav-mb-item">
                          <a
                            href="#drd-categories-appearl"
                            className="collapsed mb-menu-link"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="drd-categories-appearl"
                          >
                            <span>Apparel</span>
                            <span className="btn-open-sub" />
                          </a>
                          <div id="drd-categories-appearl" className="collapse">
                            <ul className="sub-nav-menu">
                              <li>
                                <a href="#" className="sub-nav-link">
                                  New arrival
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Steall the deals
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Best Sellers
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Men
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Woman
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Season collection
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  This Week's Highlights
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Home wear
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Underwear
                                </a>
                              </li>
                              <li>
                                <a href="#" className="sub-nav-link">
                                  Travel clothes
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Automotive Parts</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Beauty &amp; Personal Care</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Consumer Electronics</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Furniture</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Home Products</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Machinery</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Timepieces, Jewelry &amp; Eyewear</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Tool &amp; Hardware</span>
                          </a>
                        </li>
                        <li className="nav-mb-item">
                          <a href="#" className="mb-menu-link">
                            <span>Bestseller</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-bottom">
              <div className="bottom-bar-language bar-lang">
                <div className="tf-curs">
                  <select className="image-select center style-default type-cur">
                    <option selected="">USD | United States</option>
                    <option>EUR | France</option>
                    <option>EUR | Germany</option>
                    <option>VND | Vietnam</option>
                  </select>
                </div>
                <div className="tf-lans">
                  <select className="image-select center style-default type-lan">
                    <option>English</option>
                    <option>العربية</option>
                    <option>简体中文</option>
                    <option>اردو</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Mobile Menu */}
        {/* Login */}
        <div className="modal modalCentered fade modal-log" id="log">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <span
                className="icon icon-close btn-hide-popup"
                data-bs-dismiss="modal"
              />
              <div className="modal-log-wrap list-file-delete">
                <h5 className="title fw-semibold">Log In</h5>
                <form action="#" className="form-log">
                  <div className="form-content">
                    <fieldset>
                      <label className="fw-semibold body-md-2">
                        Phone number *
                      </label>
                      <input type="text" placeholder="Your email" />
                    </fieldset>
                    <fieldset>
                      <label className="fw-semibold body-md-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                      />
                    </fieldset>
                    <a href="#" className="link text-end body-text-3">
                      Forgot password ?
                    </a>
                  </div>
                  <button type="submit" className="tf-btn w-100 text-white">
                    Login
                  </button>
                  <p className="body-text-3 text-center">
                    Don't you have an account?
                    <a
                      href="#register"
                      data-bs-toggle="modal"
                      className="text-primary"
                    >
                      Register
                    </a>
                  </p>
                </form>
                <div className=" orther-log text-center">
                  <span className="br-line bg-gray-5" />
                  <p className="caption text-main-2 ">Or login with</p>
                </div>
                <ul className="list-log">
                  <li>
                    <a href="#" className="tf-btn btn-line w-100">
                      <i className="icon icon-facebook-2" />
                      <span className="body-md-2 fw-semibold">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tf-btn btn-line w-100">
                      <i className="icon icon-google" />
                      <span className="body-md-2 fw-semibold">Google</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Login */}
        {/* Register */}
        <div className="modal modalCentered fade modal-log" id="register">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <span
                className="icon icon-close btn-hide-popup"
                data-bs-dismiss="modal"
              />
              <div className="modal-log-wrap list-file-delete">
                <h5 className="title fw-semibold">Sign Up</h5>
                <form action="#" className="form-log">
                  <div className="form-content">
                    <fieldset>
                      <label className="fw-semibold body-md-2">
                        Phone number *
                      </label>
                      <input type="text" placeholder="Your email" />
                    </fieldset>
                  </div>
                  <button type="submit" className="tf-btn w-100 text-white">
                    Sign Up
                  </button>
                  <p className="body-text-3 text-center">
                    Already have an account?
                    <a
                      href="#log"
                      data-bs-toggle="modal"
                      className="text-primary"
                    >
                      Sign in
                    </a>
                  </p>
                </form>
                <div className="orther-log text-center">
                  <span className="br-line bg-gray-5" />
                  <p className="caption text-main-2 ">Or login with</p>
                </div>
                <ul className="list-log">
                  <li>
                    <a href="#" className="tf-btn btn-line w-100">
                      <i className="icon icon-facebook-2" />
                      <span className="body-md-2 fw-semibold">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tf-btn btn-line w-100">
                      <i className="icon icon-google" />
                      <span className="body-md-2 fw-semibold">Google</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Register */}
        {/* Shoping Cart */}
        <div
          className="offcanvas offcanvas-end popup-style popup-shopping-cart"
          id="shoppingCart"
        >
          <div className="popup-wrapper">
            <div className="popup-header">
              <h5 className="title fw-semibold">Shopping cart</h5>
              <span
                className="icon-close icon-close-popup link"
                data-bs-dismiss="offcanvas"
              />
            </div>
            <div className="minicart-empty text-center">
              <svg
                width={100}
                height={100}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.6344 72.6641H33.3641C32.8541 72.6646 32.3525 72.5345 31.907 72.2864C31.4615 72.0383 31.0869 71.6803 30.8188 71.2465C30.5507 70.8127 30.398 70.3176 30.3753 69.8081C30.3526 69.2987 30.4606 68.7919 30.6891 68.336L33.4656 62.7844C33.6401 62.4347 33.678 62.0325 33.5719 61.6563L22.0563 21.361C21.7786 20.4019 21.1977 19.5587 20.4005 18.9575C19.6033 18.3564 18.6328 18.0298 17.6344 18.0266H7.78282C7.36822 18.0266 6.97059 18.1913 6.67742 18.4845C6.38425 18.7777 6.21954 19.1753 6.21954 19.5899C6.21954 20.0045 6.38425 20.4021 6.67742 20.6953C6.97059 20.9885 7.36822 21.1532 7.78282 21.1532H17.6359C17.9554 21.1542 18.2658 21.2587 18.5208 21.4511C18.7758 21.6436 18.9615 21.9135 19.05 22.2204L30.3984 61.9313L27.8922 66.9391C27.4257 67.8717 27.2054 68.9081 27.2523 69.9497C27.2991 70.9914 27.6115 72.0038 28.1598 72.8908C28.7081 73.7777 29.4741 74.5098 30.3849 75.0173C31.2958 75.5249 32.3213 75.7911 33.3641 75.7907H80.6344C81.0488 75.7907 81.4462 75.6261 81.7392 75.333C82.0323 75.04 82.1969 74.6426 82.1969 74.2282C82.1969 73.8138 82.0323 73.4163 81.7392 73.1233C81.4462 72.8303 81.0488 72.6641 80.6344 72.6641Z"
                  fill="#73787D"
                />
                <path
                  d="M93.175 25.3828C92.8884 24.9852 92.5114 24.6615 92.0751 24.4382C91.6388 24.2149 91.1557 24.0984 90.6656 24.0984H27.7266C27.3122 24.0984 26.9147 24.263 26.6217 24.556C26.3287 24.8491 26.1641 25.2465 26.1641 25.6609C26.1641 26.0753 26.3287 26.4727 26.6217 26.7657C26.9147 27.0588 27.3122 27.2234 27.7266 27.2234L90.625 27.1718L85.5781 42.3125H32.9312C32.5168 42.3125 32.1194 42.4771 31.8264 42.7701C31.5334 43.0631 31.3687 43.4606 31.3687 43.875C31.3687 44.2894 31.5334 44.6868 31.8264 44.9798C32.1194 45.2728 32.5168 45.4375 32.9312 45.4375H84.5359L79.5078 60.5234H38.1375C37.7229 60.5234 37.3253 60.6881 37.0321 60.9813C36.7389 61.2744 36.5742 61.6721 36.5742 62.0867C36.5742 62.5013 36.7389 62.8989 37.0321 63.1921C37.3253 63.4852 37.7229 63.6499 38.1375 63.6499H80.6344C80.9624 63.65 81.2822 63.5468 81.5484 63.355C81.8145 63.1632 82.0135 62.8925 82.1172 62.5812L93.5875 28.1671C93.7438 27.7037 93.7879 27.2099 93.7162 26.7261C93.6445 26.2423 93.459 25.7809 93.175 25.3828ZM32.0672 78.7343C21.9781 79.0562 21.9797 93.6843 32.0672 94.0031C42.1562 93.6828 42.1531 79.0515 32.0672 78.7343ZM32.0672 90.8765C30.8716 90.8765 29.7251 90.4016 28.8797 89.5562C28.0343 88.7108 27.5594 87.5642 27.5594 86.3687C27.5594 85.1732 28.0343 84.0266 28.8797 83.1812C29.7251 82.3358 30.8716 81.8609 32.0672 81.8609C33.2627 81.8609 34.4093 82.3358 35.2547 83.1812C36.1001 84.0266 36.575 85.1732 36.575 86.3687C36.575 87.5642 36.1001 88.7108 35.2547 89.5562C34.4093 90.4016 33.2627 90.8765 32.0672 90.8765ZM74.5625 78.7343C64.4734 79.0546 64.475 93.6843 74.5625 94.0031C84.6531 93.6828 84.65 79.0531 74.5625 78.7343ZM74.5625 90.8765C73.367 90.8765 72.2204 90.4016 71.375 89.5562C70.5296 88.7108 70.0547 87.5642 70.0547 86.3687C70.0547 85.1732 70.5296 84.0266 71.375 83.1812C72.2204 82.3358 73.367 81.8609 74.5625 81.8609C75.758 81.8609 76.9046 82.3358 77.75 83.1812C78.5954 84.0266 79.0703 85.1732 79.0703 86.3687C79.0703 87.5642 78.5954 88.7108 77.75 89.5562C76.9046 90.4016 75.758 90.8765 74.5625 90.8765Z"
                  fill="#73787D"
                />
                <path
                  d="M57.8016 15.375C58.216 15.375 58.6134 15.2103 58.9064 14.9173C59.1995 14.6243 59.3641 14.2269 59.3641 13.8125V7.55933C59.3641 7.14492 59.1995 6.7475 58.9064 6.45447C58.6134 6.16145 58.216 5.99683 57.8016 5.99683C57.3872 5.99683 56.9897 6.16145 56.6967 6.45447C56.4037 6.7475 56.2391 7.14492 56.2391 7.55933V13.8125C56.2391 14.2269 56.4037 14.6243 56.6967 14.9173C56.9897 15.2103 57.3872 15.375 57.8016 15.375ZM43.4328 20.4109C43.578 20.5561 43.7503 20.6712 43.94 20.7498C44.1297 20.8284 44.333 20.8688 44.5383 20.8688C44.7436 20.8688 44.9469 20.8284 45.1366 20.7498C45.3262 20.6712 45.4986 20.5561 45.6438 20.4109C45.7889 20.2657 45.9041 20.0934 45.9827 19.9037C46.0612 19.714 46.1017 19.5107 46.1017 19.3054C46.1017 19.1001 46.0612 18.8968 45.9827 18.7071C45.9041 18.5175 45.7889 18.3451 45.6438 18.2L41.2219 13.7796C40.9287 13.4867 40.5311 13.3221 40.1166 13.3223C39.7022 13.3224 39.3047 13.4872 39.0117 13.7804C38.7188 14.0736 38.5542 14.4712 38.5544 14.8857C38.5545 15.3001 38.7193 15.6976 39.0125 15.9906L43.4328 20.4109ZM71.0656 20.8687C71.2708 20.8689 71.4741 20.8286 71.6637 20.75C71.8532 20.6714 72.0254 20.5562 72.1703 20.4109L76.5922 15.989C76.8852 15.6958 77.0497 15.2983 77.0495 14.8838C77.0494 14.4693 76.8846 14.0718 76.5914 13.7789C76.2982 13.4859 75.9007 13.3214 75.4862 13.3215C75.0717 13.3217 74.6742 13.4865 74.3813 13.7796L69.9594 18.2015C69.746 18.4221 69.6018 18.7002 69.5445 19.0017C69.4872 19.3032 69.5194 19.6148 69.6369 19.8983C69.7545 20.1817 69.9524 20.4246 70.2062 20.597C70.4601 20.7695 70.7588 20.8639 71.0656 20.8687Z"
                  fill="#73787D"
                />
              </svg>
              <h6>
                Your cart is curently empty <br />
                Let up help you find the perfect item
              </h6>
              <a href="shop-default.html" className="tf-btn btn-gray w-100">
                <span className="text-white">Show All Shop</span>
              </a>
            </div>
            <ul className="popup-body product-list-wrap">
              <li className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="img-product lazyload"
                        src="images/product/product-75.jpg"
                        data-src="images/product/product-75.jpg"
                        alt="image-product"
                      />
                      <img
                        className="img-hover lazyload"
                        src="images/product/product-65.jpg"
                        data-src="images/product/product-65.jpg"
                        alt="image-product"
                      />
                    </a>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <a
                        href="product-detail.html"
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        Beats Studio3 Wireless Noise Cancelling Over-Ear
                        Headphones
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          $80.000
                        </span>
                      </p>
                      <p className="body-md-2">X1</p>
                    </div>
                  </div>
                  <span className="icon-close remove link" />
                </div>
              </li>
              <li className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="img-product lazyload"
                        src="images/product/product-3.jpg"
                        data-src="images/product/product-3.jpg"
                        alt="image-product"
                      />
                      <img
                        className="img-hover lazyload"
                        src="images/product/product-59.jpg"
                        data-src="images/product/product-59.jpg"
                        alt="image-product"
                      />
                    </a>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <a
                        href="product-detail.html"
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        Samsung Galaxy S10+, 128GB, Ceramic Black - Unlocked
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          $45.100
                        </span>
                      </p>
                      <p className="body-md-2">X1</p>
                    </div>
                  </div>
                  <span className="icon-close remove link" />
                </div>
              </li>
              <li className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="img-product lazyload"
                        src="images/product/product-169.jpg"
                        data-src="images/product/product-169.jpg"
                        alt="image-product"
                      />
                      <img
                        className="img-hover lazyload"
                        src="images/product/product-67.jpg"
                        data-src="images/product/product-67.jpg"
                        alt="image-product"
                      />
                    </a>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <a
                        href="product-detail.html"
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        Apple iPhone 11 Pro Max, 256GB, Space Gray
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          $11.000
                        </span>
                      </p>
                      <p className="body-md-2">X1</p>
                    </div>
                  </div>
                  <span className="icon-close remove link" />
                </div>
              </li>
              <li className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="img-product lazyload"
                        src="images/product/product-92.jpg"
                        data-src="images/product/product-92.jpg"
                        alt="image-product"
                      />
                      <img
                        className="img-hover lazyload"
                        src="images/product/product-100.jpg"
                        data-src="images/product/product-100.jpg"
                        alt="image-product"
                      />
                    </a>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <a
                        href="product-detail.html"
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        MSI Katana GF66 11UC-068SG Gaming Laptop i7-11800H/...
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          $28.000
                        </span>
                      </p>
                      <p className="body-md-2">X1</p>
                    </div>
                  </div>
                  <span className="icon-close remove link" />
                </div>
              </li>
              <li className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img
                        className="img-product lazyload"
                        src="images/product/product-46.jpg"
                        data-src="images/product/product-46.jpg"
                        alt="image-product"
                      />
                      <img
                        className="img-hover lazyload"
                        src="images/product/product-45.jpg"
                        data-src="images/product/product-45.jpg"
                        alt="image-product"
                      />
                    </a>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <a
                        href="product-detail.html"
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        IINE PS5 Controller Case Cover Silicone Case Protective
                        ...
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          $74.000
                        </span>
                      </p>
                      <p className="body-md-2">X1</p>
                    </div>
                  </div>
                  <span className="icon-close remove link" />
                </div>
              </li>
            </ul>
            <div className="popup-footer">
              <p className="cart-total fw-semibold">
                <span>Subtotal:</span>
                <span className="price-amount product-title text-primary">
                  $1637
                </span>
              </p>
              <div className="box-btn">
                <a href="shop-cart.html" className="tf-btn btn-gray">
                  <span className="text-white">View Cart</span>
                </a>
                <a href="checkout.html" className="tf-btn">
                  <span className="text-white">Check Out</span>
                </a>
              </div>
              <div className="delivery-progress">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "80%" }} />
                </div>
                <p className="body-text-3">
                  <i className="icon-delivery-2 fs-24" />
                  Free shipping on all orders over{" "}
                  <span className="fw-bold">$250</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /Shoping Cart */}
        {/* modal Quick View */}
        <div
          className="modal fade modalCentered modal-def modal-quick-view"
          id="quickView"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content flex-md-row">
              <span
                className="icon-close icon-close-popup link"
                data-bs-dismiss="modal"
              />
              <div className="quickview-image">
                <div className="product-thumb-slider">
                  <div className="swiper tf-product-view-main">
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <a
                          href="product-detail.html"
                          className="d-block tf-image-view"
                        >
                          <img
                            src="images/product/product-thumb/quickview-1.jpg"
                            data-src="images/product/product-thumb/quickview-1.jpg"
                            alt=""
                            className="lazyload"
                          />
                        </a>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <a
                          href="product-detail.html"
                          className="d-block tf-image-view"
                        >
                          <img
                            src="images/product/product-thumb/quickview-2.jpg"
                            data-src="images/product/product-thumb/quickview-2.jpg"
                            alt=""
                            className="lazyload"
                          />
                        </a>
                      </div>
                      {/* item 3 */}
                      <div className="swiper-slide">
                        <a
                          href="product-detail.html"
                          className="d-block tf-image-view"
                        >
                          <img
                            src="images/product/product-thumb/quickview-3.jpg"
                            data-src="images/product/product-thumb/quickview-3.jpg"
                            alt=""
                            className="lazyload"
                          />
                        </a>
                      </div>
                      {/* item 4 */}
                      <div className="swiper-slide">
                        <a
                          href="product-detail.html"
                          className="d-block tf-image-view"
                        >
                          <img
                            src="images/product/product-thumb/quickview-4.jpg"
                            data-src="images/product/product-thumb/quickview-4.jpg"
                            alt=""
                            className="lazyload"
                          />
                        </a>
                      </div>
                      {/* item 5 */}
                      <div className="swiper-slide">
                        <a
                          href="product-detail.html"
                          className="d-block tf-image-view"
                        >
                          <img
                            src="images/product/product-thumb/quickview-5.jpg"
                            data-src="images/product/product-thumb/quickview-5.jpg"
                            alt=""
                            className="lazyload"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-button-prev nav-swiper-2 single-slide-prev" />
                    <div className="swiper-button-next nav-swiper-2 single-slide-next" />
                  </div>
                  <div
                    className="swiper tf-product-view-thumbs"
                    data-direction="horizontal"
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <div className="item">
                          <img
                            src="images/product/product-thumb/quickview-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <div className="item">
                          <img
                            src="images/product/product-thumb/quickview-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* item 3 */}
                      <div className="swiper-slide">
                        <div className="item">
                          <img
                            src="images/product/product-thumb/quickview-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* item 4 */}
                      <div className="swiper-slide">
                        <div className="item">
                          <img
                            src="images/product/product-thumb/quickview-4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* item 5 */}
                      <div className="swiper-slide">
                        <div className="item">
                          <img
                            src="images/product/product-thumb/quickview-5.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quickview-info-wrap">
                <div className="quickview-info-inner">
                  <div className="tf-product-info-content">
                    <div className="infor-heading">
                      <p className="caption">
                        Categories:
                        <a
                          href="shop-default.html"
                          className="link text-secondary"
                        >
                          Consumer Electronics
                        </a>
                      </p>
                      <h5 className="product-info-name fw-semibold">
                        <a href="product-detail.html" className="link">
                          Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle,
                          Cordless 360° Base
                        </a>
                      </h5>
                      <ul className="product-info-rate-wrap">
                        <li className="star-review">
                          <ul className="list-star">
                            <li>
                              <i className="icon-star" />
                            </li>
                            <li>
                              <i className="icon-star" />
                            </li>
                            <li>
                              <i className="icon-star" />
                            </li>
                            <li>
                              <i className="icon-star" />
                            </li>
                            <li>
                              <i className="icon-star text-main-4" />
                            </li>
                          </ul>
                          <p className="caption text-main-2">Reviews (1.738)</p>
                        </li>
                        <li>
                          <p className="caption text-main-2">Sold: 349</p>
                        </li>
                        <li className="d-flex">
                          <a
                            href="shop-default.html"
                            className="caption text-secondary link"
                          >
                            View shop
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="infor-center">
                      <div className="product-info-price">
                        <h4 className="text-primary">$18.99</h4>
                        <span className="price-text text-main-2 old-price">
                          $20.99
                        </span>
                      </div>
                      <ul className="product-fearture-list">
                        <li>
                          <p className="body-md-2 fw-semibold">Brand</p>
                          <span className="body-text-3">Elite Gourmet</span>
                        </li>
                        <li>
                          <p className="body-md-2 fw-semibold">Capacity</p>
                          <span className="body-text-3">1 Liters</span>
                        </li>
                        <li>
                          <p className="body-md-2 fw-semibold">Material</p>
                          <span className="body-text-3">Glass</span>
                        </li>
                        <li>
                          <p className="body-md-2 fw-semibold">Wattage</p>
                          <span className="body-text-3">1100 watts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="infor-bottom">
                      <h6 className="fw-semibold">About this item</h6>
                      <ul className="product-about-list">
                        <li>
                          <p className="body-text-3">
                            Here’s the quickest way to enjoy your delicious hot
                            tea every single day.
                          </p>
                        </li>
                        <li>
                          <p className="body-text-3">
                            100% BPA - Free premium design meets excellent
                          </p>
                        </li>
                        <li>
                          <p className="body-text-3">
                            So easy convenient that everyone can use it
                          </p>
                        </li>
                        <li>
                          <p className="body-text-3">
                            This powerful 900-1100-Watt kettle has convenient
                            capacity markings on the body lets you accurately
                          </p>
                        </li>
                        <li>
                          <p className="body-text-3">
                            1 year limited warranty and us-based customer
                            support team lets you buy with confidence.
                          </p>
                        </li>
                        <li>
                          <p className="body-text-3">
                            It’s very thin—7.45mm / 0.29″—and starts at just
                            465g / 1.03lbs, thanks to an aluminum chassis that’s
                            both lightweight and durable.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-quantity-wrap">
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">
                        <i className="icon-minus" />
                      </span>
                      <input
                        className="quantity-product"
                        type="text"
                        name="number"
                        defaultValue={1}
                      />
                      <span className="btn-quantity plus-btn">
                        <i className="icon-plus" />
                      </span>
                    </div>
                    <a
                      href="#shoppingCart"
                      className="tf-btn btn-gray"
                      data-bs-toggle="offcanvas"
                    >
                      <span className="text-white">Add To Cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /modal Quick View */}
        {/* Newsletter */}
        <div className="modal modalCentered fade auto-popup modal-def modal-newleter">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <span
                className="icon icon-close icon-close-popup link"
                data-bs-dismiss="modal"
              />
              <div className="heading">
                <h5 className="fw-semibold">
                  Join our newsletter for $10 offs
                </h5>
                <p className="body-md-2">
                  Register now to get latest updates on promotions &amp;
                  coupons. <br />
                  Don’t worry, we not spam!
                </p>
              </div>
              <form action="#" className="form-sub">
                <div className="form-content">
                  <fieldset>
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      placeholder="Enter Your Email Address"
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="box-btn">
                  <button type="submit" className="tf-btn w-100">
                    <span className="text-white">Subcribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Newsletter */}
        {/* Product Compare */}
        <div
          className="offcanvas offcanvas-bottom offcanvas-compare"
          id="compare"
        >
          <div className="offcanvas-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup link"
                data-bs-dismiss="offcanvas"
              />
            </div>
            <div className="wrap">
              <div className="container">
                <div className="tf-compare-list">
                  <h5 className="title fw-semibold">
                    Compare <br className="d-none d-md-block" />
                    Products
                  </h5>
                  <div className="mini-compare-empty w-100 text-center">
                    <h6>Your compare is curently empty</h6>
                  </div>
                  <div className="tf-compare-wrap">
                    <div className="tf-compare-item">
                      <span className="btns-repeat">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5628_27)">
                            <path
                              d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0 0.66626)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="icon-close remove" />
                      <a href="product-detail.html" className="image">
                        <img
                          className=" lazyload"
                          src="images/product/product-165.jpg"
                          data-src="images/product/product-165.jpg"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <a
                          className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                          href="product-detail.html"
                        >
                          Samsung Galaxy S10+, 128GB, Ceramic Black - Unlocked
                        </a>
                        <p className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium">
                            $80.000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="tf-compare-item">
                      <span className="btns-repeat">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5628_27)">
                            <path
                              d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0 0.66626)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="icon-close remove" />
                      <a href="product-detail.html" className="image">
                        <img
                          className=" lazyload"
                          src="images/product/product-43.jpg"
                          data-src="images/product/product-43.jpg"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <a
                          className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                          href="product-detail.html"
                        >
                          TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021
                          Model
                        </a>
                        <p className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium">
                            $80.000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="tf-compare-item">
                      <span className="btns-repeat">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5628_27)">
                            <path
                              d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0 0.66626)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="icon-close remove" />
                      <a href="product-detail.html" className="image">
                        <img
                          className=" lazyload"
                          src="images/product/product-137.jpg"
                          data-src="images/product/product-137.jpg"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <a
                          className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                          href="product-detail.html"
                        >
                          NEW Microsoft Surface Mobile Mouse - Ice Blue
                        </a>
                        <p className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium">
                            $80.000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="tf-compare-item">
                      <span className="btns-repeat">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5628_27)">
                            <path
                              d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0 0.66626)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="icon-close remove" />
                      <a href="product-detail.html" className="image">
                        <img
                          className=" lazyload"
                          src="images/product/product-86.jpg"
                          data-src="images/product/product-86.jpg"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <a
                          className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                          href="product-detail.html"
                        >
                          YSSOA FNGAMECHAIR01 Gaming Office High Back Computer
                        </a>
                        <p className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium">
                            $80.000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tf-compare-buttons">
                    <div className="tf-compare-btn">
                      <a
                        href="compare.html"
                        className="tf-btn btn-gray btn-large-3"
                      >
                        <span className="text-white">Compare Products</span>
                      </a>
                      <div className="tf-btn tf-compapre-button-clear-all clear-file-delete link btn-large-3">
                        <span className="text-white">Clear All Products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Product Compare */}
        {/* Toolbar */}
        <div className="tf-toolbar-bottom d-xl-none">
          <div className="toolbar-item">
            <a href="index.html">
              <span className="toolbar-icon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 1H2.5C1.5 1 1 1.5 1 2.5V6.5C1 7.5 1.5 8 2.5 8H6.5C7.5 8 8 7.5 8 6.5V2.5C8 1.5 7.5 1 6.5 1ZM7 6.5C7 6.75 6.75 7 6.5 7H2.5C2.25 7 2 6.75 2 6.5V2.5C2 2.25 2.25 2 2.5 2H6.5C6.75 2 7 2.25 7 2.5V6.5Z"
                    fill="black"
                  />
                  <path
                    d="M17.5 1H13.5C12.5 1 12 1.5 12 2.5V6.5C12 7.5 12.5 8 13.5 8H17.5C18.5 8 19 7.5 19 6.5V2.5C19 1.5 18.5 1 17.5 1ZM18 6.5C18 6.75 17.75 7 17.5 7H13.5C13.25 7 13 6.75 13 6.5V2.5C13 2.25 13.25 2 13.5 2H17.5C17.75 2 18 2.25 18 2.5V6.5Z"
                    fill="black"
                  />
                  <path
                    d="M6.5 12H2.5C1.5 12 1 12.5 1 13.5V17.5C1 18.5 1.5 19 2.5 19H6.5C7.5 19 8 18.5 8 17.5V13.5C8 12.5 7.5 12 6.5 12ZM7 17.5C7 17.75 6.75 18 6.5 18H2.5C2.25 18 2 17.75 2 17.5V13.5C2 13.25 2.25 13 2.5 13H6.5C6.75 13 7 13.25 7 13.5V17.5Z"
                    fill="black"
                  />
                  <path
                    d="M17.5 12H13.5C12.5 12 12 12.5 12 13.5V17.5C12 18.5 12.5 19 13.5 19H17.5C18.5 19 19 18.5 19 17.5V13.5C19 12.5 18.5 12 17.5 12ZM18 17.5C18 17.75 17.75 18 17.5 18H13.5C13.25 18 13 17.75 13 17.5V13.5C13 13.25 13.25 13 13.5 13H17.5C17.75 13 18 13.25 18 13.5V17.5Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="toolbar-label">Home</span>
            </a>
          </div>
          <div className="toolbar-item">
            <a href="#log" data-bs-toggle="modal">
              <span className="toolbar-icon">
                <svg
                  width={20}
                  height={20}
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
              <span className="toolbar-label">Account</span>
            </a>
          </div>
          <div className="toolbar-item">
            <a href="#search" data-bs-toggle="offcanvas">
              <span className="toolbar-icon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.795 17.8101L13.5309 13.5225C14.9671 12.072 15.7894 10.1219 15.8267 8.07859C15.864 6.03526 15.1132 4.05635 13.7309 2.55423C12.3486 1.05211 10.4414 0.142631 8.40671 0.0154012C6.37204 -0.111829 4.36687 0.552966 2.80908 1.87124C1.25129 3.18952 0.261042 5.05958 0.0447082 7.09172C-0.171625 9.12385 0.402641 11.1613 1.64783 12.7795C2.89302 14.3976 4.71308 15.4716 6.72871 15.7777C8.74435 16.0838 10.8001 15.5983 12.4674 14.4225L16.8162 18.7977C16.8809 18.8622 16.9576 18.9132 17.042 18.9479C17.1264 18.9826 17.2167 19.0003 17.3079 19C17.3991 18.9997 17.4893 18.9814 17.5735 18.9461C17.6576 18.9109 17.734 18.8593 17.7982 18.7945C17.8625 18.7296 17.9134 18.6527 17.948 18.5682C17.9826 18.4836 18.0003 18.393 18 18.3016C17.9997 18.2102 17.9814 18.1197 17.9463 18.0354C17.9111 17.951 17.8597 17.8745 17.795 17.8101ZM1.49742 7.97499C1.50151 6.69476 1.88395 5.44444 2.59643 4.38196C3.30892 3.31948 4.31949 2.49252 5.50052 2.00544C6.68156 1.51836 7.98009 1.39299 9.23213 1.64527C10.4842 1.89754 11.6336 2.51614 12.5351 3.42285C13.4367 4.32957 14.0501 5.48378 14.2977 6.73971C14.5454 7.99565 14.4162 9.29694 13.9265 10.4793C13.4369 11.6617 12.6087 12.6722 11.5466 13.383C10.4844 14.0939 9.23598 14.4733 7.95891 14.4733C7.10897 14.4721 6.26759 14.303 5.48285 13.9757C4.6981 13.6485 3.98535 13.1694 3.38531 12.566C2.78528 11.9625 2.30971 11.2465 1.98578 10.4588C1.66185 9.67104 1.49591 8.82703 1.49742 7.97499Z"
                    fill="#333E48"
                  />
                </svg>
              </span>
              <span className="toolbar-label">Search</span>
            </a>
          </div>
          <div className="toolbar-item">
            <a href="wishlist.html">
              <span className="toolbar-icon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 26"
                  strokeWidth="0.3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1949 2.23732C15.1929 2.22573 13.2896 3.17827 12 4.83729C10.7184 3.16693 8.80988 2.21168 6.80503 2.23732C3.0467 2.23732 0 5.53791 0 9.60943C0 16.5867 11.2405 23.3993 11.6962 23.6626C11.8801 23.7957 12.1199 23.7957 12.3038 23.6626C12.7595 23.3993 24 16.6854 24 9.60943C24 5.53791 20.9532 2.23732 17.1949 2.23732ZM12 22.3461C10.238 21.2272 1.21519 15.2702 1.21519 9.60943C1.21519 6.26499 3.71785 3.55371 6.80508 3.55371C8.69561 3.52682 10.4648 4.55986 11.4836 6.28534C11.6904 6.59433 12.0893 6.66318 12.3746 6.43905C12.4291 6.39621 12.477 6.34437 12.5164 6.28534C14.206 3.48618 17.6702 2.70077 20.2541 4.53107C21.8358 5.65155 22.7879 7.56199 22.7848 9.60937C22.7848 15.336 13.762 21.2601 12 22.3461Z"
                    fill="#333E48"
                  />
                </svg>
                <span className="toolbar-count">04</span>
              </span>
              <span className="toolbar-label">Wishlist</span>
            </a>
          </div>
          <div className="toolbar-item">
            <a href="#shoppingCart" data-bs-toggle="offcanvas">
              <span className="toolbar-icon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 26 26"
                  strokeWidth="0.3"
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
                    d="M20.512 19.1096C18.8017 19.1096 17.4153 20.496 17.4153 22.2064C17.4153 23.9165 18.8017 25.3029 20.512 25.3029C22.2221 25.3029 23.6085 23.9165 23.6085 22.2064C23.6068 20.4969 22.2215 19.1114 20.512 19.1096ZM20.512 24.1644C19.4305 24.1644 18.5537 23.2877 18.5537 22.2064C18.5537 21.1248 19.4305 20.2481 20.512 20.2481C21.5933 20.2481 22.4701 21.1248 22.4701 22.2064C22.4701 23.2877 21.5933 24.1644 20.512 24.1644Z"
                    fill="#333E48"
                  />
                </svg>
                <span className="toolbar-count">10</span>
              </span>
              <span className="toolbar-label">Cart</span>
            </a>
          </div>
        </div>
        {/* /Toolbar */}
        {/* Search */}
        <div className="offcanvas offcanvas-top offcanvas-search" id="search">
          <div className="offcanvas-content">
            <div className="popup-header">
              <button
                className="icon-close icon-close-popup link"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
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
                <div className="col-lg-10">
                  <div className="popup-feature">
                    <h5 className="fw-semibold mb-30">Featured Product</h5>
                    <div className="box-btn-slide-2 sw-nav-effect">
                      <div
                        className="swiper tf-sw-products"
                        data-preview={4}
                        data-tablet={4}
                        data-mobile-sm={3}
                        data-mobile={2}
                        data-space-lg={30}
                        data-space-md={20}
                        data-space={15}
                        data-pagination={2}
                        data-pagination-sm={3}
                        data-pagination-md={4}
                        data-pagination-lg={4}
                      >
                        <div className="swiper-wrapper">
                          {/* item 1 */}
                          <div className="swiper-slide">
                            <div
                              className="card-product style-img-border wow fadeInLeft"
                              data-wow-delay="0s"
                            >
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-81.jpg"
                                    data-src="images/product/product-81.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-21.jpg"
                                    data-src="images/product/product-21.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="box-sale-wrap pst-default z-5">
                                  <p className="small-text">Sale</p>
                                  <p className="title-sidebar-2">10%</p>
                                </div>
                                <ul className="list-product-btn">
                                  <li>
                                    <a
                                      href="#shoppingCart"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-cart2" />
                                      <span className="tooltip">
                                        Add to Cart
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block wishlist">
                                    <a
                                      href="javascript:void(0);"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-heart2" />
                                      <span className="tooltip">
                                        Add to Wishlist
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-view" />
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block">
                                    <a
                                      href="#compare"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-compare1" />
                                      <span className="tooltip">Compare</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="d-flex flex-column">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Lammcou Headphone Holder for PS5 Mini
                                      Hanger...
                                    </a>
                                  </div>
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium text-primary mb-0">
                                      $61.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2 fw-normal">
                                      $92.899
                                    </span>
                                  </p>
                                </div>
                                <div className="box-infor-detail">
                                  <div className="product-progress-sale">
                                    <div
                                      className="progress-sold progress"
                                      role="progressbar"
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "43%" }}
                                      ></div>
                                    </div>
                                    <div className="box-quantity d-flex justify-content-between">
                                      <p className="text-avaiable caption">
                                        Sold:
                                        <span className="fw-bold">43</span>
                                      </p>
                                      <p className="text-avaiable caption">
                                        Available:
                                        <span className="fw-bold">99</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="swiper-slide">
                            <div
                              className="card-product style-img-border wow fadeInLeft"
                              data-wow-delay="0.1s"
                            >
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-detail-14.jpg"
                                    data-src="images/product/product-detail-14.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-detail-16.jpg"
                                    data-src="images/product/product-detail-16.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="box-sale-wrap pst-default z-5">
                                  <p className="small-text">Sale</p>
                                  <p className="title-sidebar-2">25%</p>
                                </div>
                                <ul className="list-product-btn">
                                  <li>
                                    <a
                                      href="#shoppingCart"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-cart2" />
                                      <span className="tooltip">
                                        Add to Cart
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block wishlist">
                                    <a
                                      href="javascript:void(0);"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-heart2" />
                                      <span className="tooltip">
                                        Add to Wishlist
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-view" />
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block">
                                    <a
                                      href="#compare"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-compare1" />
                                      <span className="tooltip">Compare</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="d-flex flex-column">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      TCL 32-inch 3-Series 720p Roku Smart TV -
                                      32S335, 2021 Model
                                    </a>
                                  </div>
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium text-primary mb-0">
                                      $56.500
                                    </span>
                                    <span className="old-price body-md-2 text-main-2 fw-normal">
                                      $87.000
                                    </span>
                                  </p>
                                </div>
                                <div className="box-infor-detail">
                                  <div className="product-progress-sale">
                                    <div
                                      className="progress-sold progress"
                                      role="progressbar"
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "50%" }}
                                      ></div>
                                    </div>
                                    <div className="box-quantity d-flex justify-content-between">
                                      <p className="text-avaiable caption">
                                        Sold:
                                        <span className="fw-bold">56</span>
                                      </p>
                                      <p className="text-avaiable caption">
                                        Available:
                                        <span className="fw-bold">198</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* item 3 */}
                          <div className="swiper-slide">
                            <div
                              className="card-product style-img-border wow fadeInLeft"
                              data-wow-delay="0.2s"
                            >
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-81.jpg"
                                    data-src="images/product/product-38.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-11.jpg"
                                    data-src="images/product/product-11.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="box-sale-wrap pst-default z-5">
                                  <p className="small-text">Sale</p>
                                  <p className="title-sidebar-2">18%</p>
                                </div>
                                <ul className="list-product-btn">
                                  <li>
                                    <a
                                      href="#shoppingCart"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-cart2" />
                                      <span className="tooltip">
                                        Add to Cart
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block wishlist">
                                    <a
                                      href="javascript:void(0);"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-heart2" />
                                      <span className="tooltip">
                                        Add to Wishlist
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-view" />
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block">
                                    <a
                                      href="#compare"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-compare1" />
                                      <span className="tooltip">Compare</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="d-flex flex-column">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      Logitech M510 Wireless Computer Mouse for
                                      PC with USB Unifying...
                                    </a>
                                  </div>
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium text-primary mb-0">
                                      $28.000
                                    </span>
                                    <span className="old-price body-md-2 text-main-2 fw-normal">
                                      $50.000
                                    </span>
                                  </p>
                                </div>
                                <div className="box-infor-detail">
                                  <div className="product-progress-sale">
                                    <div
                                      className="progress-sold progress"
                                      role="progressbar"
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "80%" }}
                                      ></div>
                                    </div>
                                    <div className="box-quantity d-flex justify-content-between">
                                      <p className="text-avaiable caption">
                                        Sold:
                                        <span className="fw-bold">11</span>
                                      </p>
                                      <p className="text-avaiable caption">
                                        Available:
                                        <span className="fw-bold">58</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* item 4 */}
                          <div className="swiper-slide">
                            <div
                              className="card-product style-img-border wow fadeInLeft"
                              data-wow-delay="0.3s"
                            >
                              <div className="card-product-wrapper">
                                <a
                                  href="product-detail.html"
                                  className="product-img"
                                >
                                  <img
                                    className="img-product lazyload"
                                    src="images/product/product-39.jpg"
                                    data-src="images/product/product-39.jpg"
                                    alt="image-product"
                                  />
                                  <img
                                    className="img-hover lazyload"
                                    src="images/product/product-56.jpg"
                                    data-src="images/product/product-56.jpg"
                                    alt="image-product"
                                  />
                                </a>
                                <div className="box-sale-wrap pst-default z-5">
                                  <p className="small-text">Sale</p>
                                  <p className="title-sidebar-2">5%</p>
                                </div>
                                <ul className="list-product-btn">
                                  <li>
                                    <a
                                      href="#shoppingCart"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon add-to-cart btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-cart2" />
                                      <span className="tooltip">
                                        Add to Cart
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block wishlist">
                                    <a
                                      href="javascript:void(0);"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-heart2" />
                                      <span className="tooltip">
                                        Add to Wishlist
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#quickView"
                                      data-bs-toggle="modal"
                                      className="box-icon quickview btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-view" />
                                      <span className="tooltip">
                                        Quick View
                                      </span>
                                    </a>
                                  </li>
                                  <li className="d-none d-sm-block">
                                    <a
                                      href="#compare"
                                      data-bs-toggle="offcanvas"
                                      className="box-icon btn-icon-action hover-tooltip tooltip-left"
                                    >
                                      <span className="icon icon-compare1" />
                                      <span className="tooltip">Compare</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-product-info">
                                <div className="box-title">
                                  <div className="d-flex flex-column">
                                    <p className="caption text-main-2 font-2">
                                      Headphone
                                    </p>
                                    <a
                                      href="product-detail.html"
                                      className="name-product body-md-2 fw-semibold text-secondary link"
                                    >
                                      SAMSUNG Galaxy Z Flip Factory Unlocked
                                      Cell Phone
                                    </a>
                                  </div>
                                  <p className="price-wrap fw-medium">
                                    <span className="new-price price-text fw-medium text-primary mb-0">
                                      $34.200
                                    </span>
                                    <span className="old-price body-md-2 text-main-2 fw-normal">
                                      $45.990
                                    </span>
                                  </p>
                                </div>
                                <div className="box-infor-detail">
                                  <div className="product-progress-sale">
                                    <div
                                      className="progress-sold progress"
                                      role="progressbar"
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "43%" }}
                                      ></div>
                                    </div>
                                    <div className="box-quantity d-flex justify-content-between">
                                      <p className="text-avaiable caption">
                                        Sold:
                                        <span className="fw-bold">92</span>
                                      </p>
                                      <p className="text-avaiable caption">
                                        Available:
                                        <span className="fw-bold">188</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sw-dot-default sw-pagination-products justify-content-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
