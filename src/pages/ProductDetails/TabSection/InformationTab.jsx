import React from "react";

const InformationTab = () => {
  return (
    <div className="tab-pane" id="prd-infor" role="tabpanel">
      <div className="tab-main tab-info">
        <ul className="list-feature">
          <li>
            <p className="name-feature">Package Dimensions</p>
            <p className="property">8 x 8 x 6.7 inches</p>
          </li>
          <li>
            <p className="name-feature">Item Weight</p>
            <p className="property">2.2 pounds</p>
          </li>
          <li>
            <p className="name-feature">Manufacturer</p>
            <p className="property">Elite Gourmet</p>
          </li>
          <li>
            <p className="name-feature">ASIN</p>
            <p className="property">B09H3LWKYQ</p>
          </li>
          <li>
            <p className="name-feature">Country of Origin</p>
            <p className="property">China</p>
          </li>
          <li>
            <p className="name-feature">Item model number</p>
            <p className="property">EKT1001B</p>
          </li>
          <li>
            <p className="name-feature">Customer Reviews</p>
            <div className="w-100 star-review flex-wrap">
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
            </div>
          </li>
          <li>
            <p className="name-feature">Date First Available</p>
            <p className="property"> September 24, 2021</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InformationTab;
