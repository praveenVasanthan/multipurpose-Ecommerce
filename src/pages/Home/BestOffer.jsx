import React from "react";

const BestOffer = ({ bannerData }) => {
  if (!bannerData) return null;
  return (
    <section className="pb-5">
      <div className="container">
        <a
          href={bannerData.link}
          className="banner-image-product-2 hover-img d-block"
        >
          <div className="item-image item-1 img-style overflow-visible">
            <img src={bannerData.img1} alt="Product" className="lazyload" />
          </div>

          <div className="item-image item-2 img-style overflow-visible d-none d-lg-block">
            <img src={bannerData.img2} alt="Product Alt" className="lazyload" />
          </div>

          <div
            className="item-banner has-bg-img"
            style={{
              backgroundImage: `url(${bannerData.bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="inner">
              {bannerData.title?.includes("<span") ? (
                <h3
                  className="fw-normal text-white lh-lg-50 font-2"
                  dangerouslySetInnerHTML={{ __html: bannerData.title }}
                />
              ) : (
                <h3 className="fw-normal text-white lh-lg-50 font-2">
                  {bannerData.title}
                  <br />
                  {bannerData.subtitle}
                </h3>
              )}
              <div className="box-sale-wrap type-3 relative">
                <p className="small-text">{bannerData.saleLabel}</p>
                <p className="price-text-2">{bannerData.salePrice}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BestOffer;
