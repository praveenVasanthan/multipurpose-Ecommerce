import PriceDetails from "./PriceDetails";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";

const index = () => {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="tf-checkout-wrap flex-lg-nowrap">
          <div className="page-checkout">
            <ProductDetails />
          </div>
          <div className="flat-sidebar-checkout" style={{ paddingTop: "0px" }}>
            <ShippingDetails />
            <PriceDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
