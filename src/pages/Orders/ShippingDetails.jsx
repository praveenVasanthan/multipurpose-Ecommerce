const ShippingDetails = () => {
  return (
    <>
      <div className="flat-title-tab-product-des">
        <div className="flat-title-tab">
          <ul className="menu-tab-line">
            <li className="nav-tab-item">
              <p className=" product-title fw-semibold">Shipping details</p>
            </li>
          </ul>
        </div>
        <div className="tab-main tab-info">
          <div className="box-infor">
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              User name
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              123a,
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              Main street,
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              Main village,
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              Main District,
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              Main State - 654321,
            </p>
            <p className="title-sidebar" style={{ lineHeight: "25px" }}>
              +91 9876543210
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
