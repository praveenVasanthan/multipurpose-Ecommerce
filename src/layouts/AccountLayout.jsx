import React from "react";
import Sidebar from "@pages/Profile/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
            <Sidebar />
        </div>
        <div className="col-lg-9">
            <Outlet />
        </div>
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
