import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <div className="layout-page">
          <div className="content-wrapper">
            <Outlet />
            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle" />
      <div className="drag-target" />
    </div>
  );
};

export default MainLayout;
