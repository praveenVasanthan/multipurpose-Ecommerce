import { Outlet } from "react-router-dom";
import { Topbar, Sidebar, Footer } from "@components";
import { Login } from "@pages";
import ForgotPassword from "@pages/Login/ForgotPassword";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <button id="goTop" className="">
        <span
          className="border-progress"
          style={{ "--progress-angle": "0deg" }}
        />
        <span className="icon icon-arrow-right" />
      </button>

      <div id="wrapper">
        <Topbar />
        <div className="tf-sp-1">
          <div className="container">
            <ul className="breakcrumbs">
              <li>
                <a href="index.html" className="body-small link">
                  Home
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="icon icon-arrow-right" />
              </li>
              <li>
                <span className="body-small">Product Grid</span>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
      <Sidebar />
      <Login />
      <ForgotPassword />
    </>
  );
};

export default MainLayout;
