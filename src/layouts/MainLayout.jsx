import { Outlet } from "react-router-dom";
import { TopBar } from "../components";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
