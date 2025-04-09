import { Outlet } from "react-router-dom";
import { Topbar, Sidebar, Footer } from "@components";

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
