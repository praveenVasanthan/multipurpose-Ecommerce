import React, { useState } from "react";
import APP_CONSTANTS from "../../config/AppConstants";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    logo: {
      image: APP_CONSTANTS.App_Logo || "/images/logo.svg",
      url: "index.html",
    },
    paymentMethods: [
      "/images/payment/visa.svg",
      "/images/payment/paypal.svg",
      "/images/payment/discover.svg",
      "/images/payment/master.svg",
    ],
    sections: [
      {
        title: "Get help",
        links: [
          { label: "Terms & Conditions", href: "privacy.html" },
          { label: "Privacy Policy", href: "faq.html" },
          { label: "Cookie Settings", href: "privacy.html" },
          // { label: "Privacy Notice", href: "privacy.html" },
          // { label: "Shopping FAQs", href: "faq.html" },
        ],
      },
      {
        title: "Popular categories",
        links: [
          { label: "Laptops & Computers", href: "shop-default.html" },
          { label: "Cameras & Photography", href: "shop-default.html" },
          { label: "Smart Phones & Tablets", href: "shop-default.html" },
          // { label: "Video Games & Consoles", href: "shop-default.html" },
          // { label: "TV & Audio", href: "shop-default.html" },
          // { label: "Gadgets", href: "shop-default.html" },
          // { label: "Waterproof Headphones", href: "shop-default.html" },
        ],
      },
      {
        title: "Customer Care",
        links: [
          { label: "My Account", href: "my-account.html" },
          { label: "Track your Order", href: "track-your-order.html" },
          { label: "Customer Service", href: "contact.html" },
          // { label: "Returns/Exchange", href: "privacy.html" },
          // { label: "FAQs", href: "faq.html" },
          // { label: "Product Support", href: "contact.html" },
        ],
      },
      {
        title: "Contact",
        contacts: [
          {
            icon: "icon-location",
            text: "8500 Lorem Street Chicago, IL 55030 Dolor sit amet",
            href: "https://www.google.com/maps?q=Onsus+Store,+123+Main+St,+Chicago,+IL",
          },
          {
            icon: "icon-phone",
            text: "+91 9876598765",
            href: "tel:+91 9876598765",
          },
          {
            icon: "icon-direction",
            text: "onsus@support.com",
            href: "mailto:onsus@support.com",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "icon-facebook", url: "https://www.facebook.com/" },
      { icon: "icon-x", url: "https://x.com/" },
      { icon: "icon-instagram", url: "https://www.instagram.com/" },
      { icon: "icon-linkin", url: "https://www.linkedin.com/" },
      { icon: "icon-whatapp", url: "https://web.whatsapp.com/" },
    ],
    bottomLinks: ["New arrivals", "Best sale", "Value of the day"],
  });

  return (
    <footer className="tf-footer">
      <div className="ft-body-wrap">
        <div className="ft-body-inner">
          <div className="container">
            <div className="ft-inner flex-wrap flex-xl-nowrap">
              <div className="ft-logo">
                <a href={footerData.logo.url} className="logo-site">
                  <img src={footerData.logo.image} alt="Logo" />
                </a>
                <div className="method-payment">
                  <p>We accept:</p>
                  <ul className="method-list">
                    {footerData.paymentMethods.map((img, idx) => (
                      <li key={idx}>
                        <img src={img} alt="Payment" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="ft-link-wrap w-100 tf-grid-layout md-col-2 lg-col-4">
                {footerData.sections.map((section, idx) => (
                  <li className="footer-col-block" key={idx}>
                    <h6 className="ft-heading footer-heading-mobile fw-semibold">
                      {section.title}
                    </h6>
                    <div className="tf-collapse-content">
                      <ul
                        className={`ft-menu-list ${
                          section.contacts ? "ft-contact-list" : ""
                        }`}
                      >
                        {(section.links || section.contacts).map((item, i) => (
                          <li key={i}>
                            {item.icon ? (
                              <>
                                <span className="icon">
                                  <i className={item.icon} />
                                </span>
                                <a
                                  href={item.href}
                                  className="link"
                                  target="_blank"
                                >
                                  {item.text}
                                </a>
                              </>
                            ) : (
                              <a href={item.href} className="link">
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ft-body-center bg-gray">
          <div className="container">
            <div className="ft-center justify-content-xxl-between">
              <p className="notice text-white">
                <span className="main-title fw-semibold">
                  <img src="/images/mail.svg" alt="" /> 10% Off Your First Order
                </span>
                <span className="body-text-3">
                  Be the first to know about offers, new products and discounted
                  products
                </span>
              </p>
              <form className="form-newsletter" method="post">
                <div className="subscribe-content">
                  <fieldset className="email">
                    <input
                      type="email"
                      name="email-form"
                      className="subscribe-email type-fs-2"
                      placeholder="Enter your email address"
                      required
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
                {footerData.socialLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.url}>
                      <i className={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="ft-menu-list-2 body-text-3">
                {footerData.bottomLinks.map((text, i) => (
                  <li key={i}>
                    <a
                      href="blog-grid.html"
                      className="title-sidebar link fw-bold"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="nocopy caption text-center">
                <span className="fw-medium"></span> © 2025. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
