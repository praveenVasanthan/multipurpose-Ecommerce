import React, { useContext } from "react";
import { MyContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Filter = () => {
  const filters = [
    {
      id: 1,
      name: "brand",
      title: "Brand",
      type: "checkbox",
      values: ["Razer", "Corsair", "SteelSeries", "HyperX", "JBL", "Logitech"],
    },
    {
      id: 2,
      name: "condition",
      title: "Condition",
      type: "radio",
      values: ["New", "Used"],
    },
    {
      id: 3,
      name: "price",
      title: "Price",
    },
    {
      id: 4,
      name: "starRate",
      title: "Customer Review",
      type: "radio",
    },
  ];

  const { categories } = useContext(MyContext);

  return (
    <div className="canvas-filter-product sidebar-filter handle-canvas left">
      <div className="canvas-wrapper">
        <div className="canvas-header d-flex d-xl-none">
          <h5 className="title">Filter</h5>
          <span
            className="icon-close link icon-close-popup close-filter"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="canvas-body">
          <div className="facet-categories">
            <h6 className="title fw-medium">Show all categories</h6>
            <ul>
              {/* Categories */}
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/products/${category.value}`}>
                    {category.title} <i className="icon-arrow-right" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {filters.map((item) => {
            if (item.name == "price") {
              return (
                <div className="widget-facet facet-price" key={item.id}>
                  <p className="facet-title title-sidebar fw-semibold">
                    {item.title}
                  </p>
                  <div className="box-price-product">
                    <form action="#" className="w-100 form-filter-price">
                      <div className="cols w-100">
                        <fieldset className="box-price-item">
                          <input
                            type="number"
                            className="min-price price-input"
                            name={item.name}
                            placeholder="$ Min"
                          />
                        </fieldset>
                        <span className="br-line" />
                        <fieldset className="box-price-item">
                          <input
                            type="number"
                            className="max-price price-input"
                            name={item.name}
                            placeholder="$ Max"
                          />
                        </fieldset>
                      </div>
                      <div className="btn-filter-price cs-pointer link">
                        <span className="title-sidebar fw-bold">Go</span>
                      </div>
                    </form>
                  </div>
                </div>
              );
            }

            if (item.name == "starRate") {
              return (
                <div className="widget-facet facet-vote" key={item.id}>
                  <p className="facet-title title-sidebar fw-semibold">
                    {item.title}
                  </p>
                  <div className="box-fieldset-item">
                    {[...Array(5)].map((_, i) => {
                      const rating = 5 - i;
                      return (
                        <fieldset className="fieldset-item" key={rating}>
                          <input
                            type={item.type}
                            name="starRate"
                            className="tf-check"
                            id={`${rating}Star`}
                          />
                          <label htmlFor={`${rating}Star`}>
                            <span className="list-star">
                              {[...Array(5)].map((_, j) => (
                                <i
                                  key={j}
                                  className={`icon-star ${
                                    j >= rating ? "text-main-4" : ""
                                  }`}
                                />
                              ))}
                            </span>
                            {rating < 5 && (
                              <span className="body-text-3">&amp; Up</span>
                            )}
                          </label>
                        </fieldset>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <div
                className="widget-facet facet-fieldset has-loadmore"
                key={item.id}
              >
                <p className="facet-title title-sidebar fw-semibold">
                  {item.title}
                </p>
                <div className="box-fieldset-item">
                  {item.values.map((itemValue, index) => {
                    return (
                      <fieldset className="fieldset-item" key={index}>
                        <input
                          type={item.type}
                          name={item.name}
                          className="tf-check"
                          id={itemValue}
                        />
                        <label htmlFor={itemValue}>{itemValue}</label>
                      </fieldset>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="canvas-bottom d-flex d-xl-none">
          <button id="reset-filter" className="tf-btn btn-reset w-100">
            <span className="caption text-white">Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
