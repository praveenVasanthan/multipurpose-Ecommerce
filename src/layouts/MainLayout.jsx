import { Outlet } from "react-router-dom";
import { Topbar, Sidebar, Footer } from "@components";
import { Login } from "@pages";
import ForgotPassword from "@pages/Login/ForgotPassword";
import { ScrollRestoration } from "react-router-dom";
import { BreadCrumb } from "../components";

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

        <BreadCrumb />
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
