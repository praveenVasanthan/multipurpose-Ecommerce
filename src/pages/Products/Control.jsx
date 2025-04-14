import React from "react";

const Control = () => {
  return (
    <div className="tf-shop-control flex-wrap gap-10">
      <div className="d-flex align-items-center gap-10">
        <button id="filterShop" className="tf-btn-filter d-flex d-xl-none">
          <span className="icon icon-filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="#121212"
              viewBox="0 0 256 256"
            >
              <path d="M176,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H184A8,8,0,0,1,176,80ZM40,88H144v16a8,8,0,0,0,16,0V56a8,8,0,0,0-16,0V72H40a8,8,0,0,0,0,16Zm176,80H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16ZM88,144a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H80v16a8,8,0,0,0,16,0V152A8,8,0,0,0,88,144Z"></path>
            </svg>
          </span>
          <span className="body-md-2 fw-medium">Filter</span>
        </button>
        <p className="body-text-3 d-none d-lg-block">
          1-16 of 66 results for "
          <span className="title-sidebar fw-bold">macbook m1</span>"
        </p>
      </div>
      <div className="tf-control-view flat-title-tab-product flex-wrap">
        <div
          className="tf-my-dropdown tf-control-show nice-select"
          tabIndex={0}
        >
          <div className="btn-select">
            <i className="icon-menu-dots" />
            <p className="body-text-3 w-100 current">Show: 50</p>
            <i className="icon-arrow-down fs-10" />
          </div>
          <ul className="list">
            <li className="option select-item" data-sort-value="0-5">
              <span className="text-value-item">Show: 5</span>
            </li>
            <li className="option select-item" data-sort-value="0-10">
              <span className="text-value-item">Show: 10</span>
            </li>
            <li className="option select-item" data-sort-value="0-15">
              <span className="text-value-item">Show: 15</span>
            </li>
            <li className="option select-item" data-sort-value="0-20">
              <span className="text-value-item">Show: 20</span>
            </li>
            <li className="option select-item selected" data-sort-value="0-50">
              <span className="text-value-item">Show: 50</span>
            </li>
          </ul>
        </div>
        <div
          className="tf-dropdown-sort tf-sort type-sort-by"
          data-bs-toggle="dropdown"
        >
          <div className="btn-select w-100">
            <i className="icon-sort" />
            <p className="body-text-3 w-100">
              Sort by: <span className="text-sort-value">Recent</span>
            </p>
            <i className="icon-arrow-down fs-10" />
          </div>
          <div className="dropdown-menu">
            <div className="select-item" data-sort-value="recent">
              <span className="text-value-item">Recent</span>
            </div>
            <div className="select-item" data-sort-value="a-z">
              <span className="text-value-item">Alphabetically, A-Z</span>
            </div>
            <div className="select-item" data-sort-value="z-a">
              <span className="text-value-item">Alphabetically, Z-A</span>
            </div>
            <div className="select-item" data-sort-value="price-low-high">
              <span className="text-value-item">Price, low to high</span>
            </div>
            <div className="select-item" data-sort-value="price-high-low">
              <span className="text-value-item">Price, high to low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
